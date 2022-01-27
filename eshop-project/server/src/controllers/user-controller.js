const UserModel = require('../models/user-model');
const ImageModel = require('../models/image-model');
const UserViewModel = require('../view-models/user-view-model');

const getUsers = async (req, res) => {
  const userDocs = await UserModel.find();
  const users = userDocs.map(userDoc => new UserViewModel(userDoc));
  res.status(200).json({ users });
};

const updateUser = async (req, res) => {
  const { email } = req.user;
  const { images } = req.body;

  res.status(200).json(user);
}

module.exports = {
  getUsers,
  updateUser,
};
