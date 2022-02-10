const ImageModel = require('../models/image-model');
const UserModel = require('../models/user-model');
const ImageViewModel = require('../view-models/image-view-model');

const getImages = async (req, res) => {
  const userDoc = await UserModel.findOne({ email: req.user.email });
  const imageDocs = await ImageModel.find({ user: userDoc._id });

  const images = imageDocs.map(x => new ImageViewModel(x));

  res.status(200).json({
    message: 'All user images fetched',
    images
  });
};

const uploadImages = async (req, res) => {
  const userDoc = await UserModel.findOne({ email: req.user.email });
  const imgData = req.files.map(({ filename }) => ({
    src: filename,
    user: userDoc.id,
  }));

  const imgDocs = await ImageModel.insertMany(imgData);
  const images = imgDocs.map(x => new ImageViewModel(x));

  res.status(200).send({
    images,
  });
}

module.exports = {
  getImages,
  uploadImages,
};
