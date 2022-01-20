const UserModel = require('../models/user-model');
const UserViewModel = require('../view-models/user-view-model');
const { hashPasswordAsync, comparePasswordsAsync } = require('../helpers/hash');

const createFakeToken = ({ email, role }) => 'k.sdafgishopisrtgohgjnsrtgjhbo';

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
      token: createFakeToken({ email, role: userDoc.role })
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
    const userDoc = await UserModel.findOne({ email });
    const passwordsAreEqual = await comparePasswordsAsync(password, userDoc.password);
    if (passwordsAreEqual) {
      const user = new UserViewModel(userDoc);
      res.status(200).json({
        user,
        token: createFakeToken({ email, role: userDoc.role }),
      });
    }
    else {
      res.status(401).json({ message: 'Incorrect password' });
    }

  } catch (error) {
    res.status(404).json({ message: 'Email is not found' });
  }
};

module.exports = {
  register,
  login,
};
