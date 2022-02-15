const UserModel = require('../models/user-model');
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

const updateUserMainImage = async (req, res) => {
  const { mainImg } = req.params;
  const { email } = req.user;
  try {
    const userDoc = await UserModel.findOneAndUpdate(
      { email }, // Pagal ką surasti
      { mainImg }, // Ką atnaujinti
      { // Nustatymai;
        new: true, // sulaukti keičiamo dokumento
        runValidators: true,
      },
    ).populate('mainImg');

    res.status(200).send({
      message: 'Foto Successfully deleted',
      user: new UserViewModel(userDoc),
    });
  } catch ({ message }) {
    res.status(404).send({
      message,
    });
  }
}

module.exports = {
  getUsers,
  updateUser,
  updateUserMainImage,
};
