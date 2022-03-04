const UserModel = require('../models/user-model');
const ServiceModel = require('../models/service-model');
const ServiceViewModel = require('../view-models/service-view-model');

const createUserService = async (req, res) => {
  try {
    const { title, category, price, cities, description } = req.body;
    const userDoc = await UserModel.findOne({ email: req.user.email });
    const images = req.files.map(({ filename }) => ({
      src: filename
    }));

    const serviceDoc = await ServiceModel.create({
      title,
      category,
      price,
      cities,
      description,
      creator: userDoc.id,
      images,
    });

    const service = await new ServiceViewModel(serviceDoc).populate();

    res.status(200).json(service);
  } catch ({ message }) {
    console.log(message)
    res.status(400).json({ message });
  }
};

const getUserServices = async (req, res) => {
  try {
    const userDoc = await UserModel.findOne({ email: req.user.email });
    const serviceDocs = await ServiceModel.find({ creator: userDoc.id });

    const services = await Promise.all(
      serviceDocs.map(x => new ServiceViewModel(x).populate())
    );

    res.status(200).json(services);
  } catch ({ message }) {
    console.log(message)
    res.status(400).json({ message });
  }
}

module.exports = {
  createUserService,
  getUserServices,
};