const UserModel = require('../models/user-model');
const UserViewModel = require('../view-models/user-view-model');
const { hashPasswordAsync, comparePasswordsAsync } = require('../helpers/hash');
const generateToken = require('../helpers/generate-token');
const jwt = require('jsonwebtoken');

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
    const { email } = jwt.verify(token, process.env.TOKEN_SECRET);
    const userDoc = await UserModel.findOne({ email })
      .populate('mainImg');;
    const user = new UserViewModel(userDoc);
    res.status(200).json(user);
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

module.exports = {
  register,
  login,
  auth,
  checkEmail,
};
