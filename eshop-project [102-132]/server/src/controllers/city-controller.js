const CityModel = require('../models/city-model');
const CityViewModel = require('../view-models/city-view-model');

const getCities = async (req, res) => {
  const cityDocs = await CityModel.find();

  res.status(200).json(cityDocs.map(x => new CityViewModel(x)));
};

const createCity = async (req, res) => {
  const { title } = req.body;
  try {
    const cityDoc = await CityModel.create({ title });
    res.status(200).json(new CityViewModel(cityDoc));
  } catch (error) {
    res.status(400).json({ message: `City with title ${title} already exists` });
  }
};

const updateCity = async (req, res) => {
  res.status(200);
};

const deleteCity = async (req, res) => {
  const { id } = req.params;
  const cityDoc = await CityModel.findByIdAndDelete(id);

  res.status(200).json(new CityViewModel(cityDoc));
};

module.exports = {
  getCities,
  createCity,
  updateCity,
  deleteCity,
};