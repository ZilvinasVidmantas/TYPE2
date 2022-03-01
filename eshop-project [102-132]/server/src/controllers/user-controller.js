const ImageModel = require('../models/image-model');
const UserModel = require('../models/user-model');
const ServiceModel = require('../models/service-model');
const UserViewModel = require('../view-models/user-view-model');
const { fileExists, deleteFile } = require('../helpers/file-helpers');
const { sendEmail } = require('../helpers/email-helpers');
const { has }

const getUsers = async (req, res) => {
  const userDocs = await UserModel.find({
    role: 'USER'
  });
  const users = userDocs.map(userDoc => new UserViewModel(userDoc));
  res.status(200).json(users);
};

const resetPassword = async (req, res) => {
  const { userId } = req.params;
  const userDoc = await UserModel.findById(userId);

  await sendEmail({
    to: userDoc.email,
    subject: 'Password reset',
    text: `http://localhost:3000/change-password?authUrl=${}`
  })

  res.status(200).send();
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

    res.status(200).send(new UserViewModel(userDoc));
  } catch ({ message }) {
    res.status(404).send({
      message,
    });
  }
}

const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const { IMG_FOLDER_NAME, PUBLIC_PATH } = process.env;

    // 1. Surandamas vartotojas
    const userDoc = await UserModel.findById(id);
    // 2. Surandami nuotraukų dokumentai, susijusiję su vartotoju
    const imageDocs = await ImageModel.find({ user: id });
    // 3. Patikrinama ar egzistuoja visi nuotraukų failai
    const imageFilePaths = imageDocs.map(x => `${PUBLIC_PATH}/${IMG_FOLDER_NAME}/${x.src}`);
    const allImageFilesFound = imageFilePaths.map(fileExists).every(x => x);
    if (!allImageFilesFound) throw new Error('Nerasti nuotraukų failai');
    // 4. Surandami visi paslaugų dokumentai, susiję su trinamu vartotoju
    const serviceDocs = await ServiceModel.find({ creator: id });
    // 5. Patikrinama ar egzistuoja visi paslaugų failai
    const serviceFilePaths = serviceDocs
      .reduce((allPaths, service) => [
        ...allPaths,
        ...service.images.map(x => x.src)
      ], [])
      .map(x => `${PUBLIC_PATH}/${IMG_FOLDER_NAME}/${x}`);
    const allServiceFilesFound = serviceFilePaths.map(fileExists).every(x => x);
    if (!allServiceFilesFound) throw new Error('Nerasti paslaugų failai');
    // 7. Atliekami visi trynimai
    imageFilePaths.forEach(deleteFile);
    serviceFilePaths.forEach(deleteFile);
    await ImageModel.deleteMany({ user: id });
    await ServiceModel.deleteMany({ creator: id });
    await UserModel.findByIdAndDelete(id);

    res.status(200).json(new UserViewModel(userDoc));
  } catch (error) {
    res.status(404).json({ message: 'Nepavyko ištrinti varototjo' })
  }
}

module.exports = {
  getUsers,
  updateUser,
  updateUserMainImage,
  deleteUser,
  resetPassword,
};
