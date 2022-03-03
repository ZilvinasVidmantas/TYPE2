const UserModel = require('../models/user-model');
const UserViewModel = require('../view-models/user-view-model');
const { hashPasswordAsync, comparePasswordsAsync } = require('../helpers/hash');
const { decryptToken, generateToken } = require('../helpers/token-helpers');
const { sendEmail } = require('../helpers/email-helpers');

const register = async (req, res) => {
  const { email, password, repeatPassword, name, surname } = req.body;
  try {
    if (password !== repeatPassword) throw new Error('Passwords do not match');
    const userDoc = await UserModel.create({
      email,
      password,
      name,
      surname,
    });

    const user = new UserViewModel(userDoc);
    res.status(201).json({
      user,
      token: generateToken({ email, role: userDoc.role })
    });

    const hashedPassword = await hashPasswordAsync(password);
    await UserModel.findByIdAndUpdate(userDoc.id, {
      password: hashedPassword,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: error.message
    });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const userDoc = await UserModel.findOne({ email })
      .populate('mainImg');
    const passwordsAreEqual = await comparePasswordsAsync(password, userDoc.password);
    if (passwordsAreEqual) {
      const user = new UserViewModel(userDoc);
      res.status(200).json({
        user,
        token: generateToken({ email, role: userDoc.role }),
      });
    }
    else {
      res.status(401).json({ message: 'Incorrect password' });
    }

  } catch (error) {
    console.log(error);
    res.status(404).json({ message: 'Email is not found' });
  }
};

const auth = async (req, res) => {
  const { token } = req.body;
  try {
    const { email } = decryptToken(token);
    const userDoc = await UserModel.findOne({ email })
      .populate('mainImg');;
    const user = new UserViewModel(userDoc);
    res.status(200).json({
      user,
      token
    });
  } catch (error) {
    res.status(403).json({ message: 'Token not valid' });
  }
}

const checkEmail = async (req, res) => {
  const { email } = req.query;
  if (!email) {
    res.status(400).json({
      message: 'No email provided',
    });
    return;
  }
  const userDoc = await UserModel.findOne({ email });
  res.status(200).json({ available: !userDoc });
}

const resetPassword = async (req, res) => {
  const { userId } = req.params;
  const userDoc = await UserModel.findById(userId);

  const resetToken = await generateToken({
    email: userDoc.email,
    role: userDoc.role
  })

  await sendEmail({
    to: userDoc.email,
    subject: 'Password reset',
    text: `http://localhost:3000/change-password?resetToken=${resetToken}`
  })

  res.status(200).send();
};

const changePassword = async (req, res) => {
  const { resetToken, password, passwordConfirmation } = req.body;

  if (password !== passwordConfirmation) {
    res.status(400).json({ message: 'Passwords do not match' });
  }

  if (!resetToken) {
    res.status(400).json({ message: 'Reset token expected' });
  }

  const { email } = decryptToken(resetToken);
  if (!email) {
    res.status(400).json({ message: 'Bad token data' });
  }

  try {
    const hashedPassword = await hashPasswordAsync(password);
    const userDoc = await UserModel.findOneAndUpdate(
      { email },
      { password: hashedPassword }
    );

    res.status(200).json({
      user: new UserViewModel(userDoc),
      token: generateToken({ email, role: userDoc.role })
    });

  } catch (error) {
    res.status(400).json({ message: 'Unsuccessfull password change' });
  }


  res.status(200).send();
};

module.exports = {
  register,
  login,
  auth,
  checkEmail,
  resetPassword,
  changePassword,
};
