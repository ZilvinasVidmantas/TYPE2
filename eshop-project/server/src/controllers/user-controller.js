const UserModel = require('../models/user-model');
const ImageModel = require('../models/image-model');
const UserViewModel = require('../view-models/user-view-model');

const getUsers = async (req, res) => {
  const userDocs = await UserModel.find();
  const users = userDocs.map(userDoc => new UserViewModel(userDoc));
  res.status(200).json({ users });
};

const updateUser = async (req, res) => {
  const { email, name, surname } = req.body;

  const expectedProps = { email, name, surname };
  const props = Object.entries(expectedProps)
    .reduce((result, [name, value]) => {
      if (value !== undefined) {
        result[name] = value;
      }
      return result;
    }, {});

  const userDoc = await UserModel.findOneAndUpdate(
    { email: req.user.email },
    props,
    { new: false },
  ).populate('mainImg');

  res.status(200).json({
    message: 'Vartotojas atnaujintas',
    user: new UserViewModel(userDoc)
  })
}

module.exports = {
  getUsers,
  updateUser,
};
