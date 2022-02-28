const CityModel = require('../models/city-model');
const CityViewModel = require('../view-models/city-view-model');

const getCities = async (req, res) => {
  const cityDocs = await CityModel.find();

  res.status(200).json(cityDocs.map(x => new CityViewModel(x)));
};

const createCity = async (req, res) => {
  const { title } = req.body;
  const cityDoc = await CityModel.create({ title });

  res.status(200).json(new CityViewModel(cityDoc));
};

const updateCity = async (req, res) => {
  res.status(200);
};

const deleteCity = async (req, res) => {
  res.status(200);
};

module.exports = {
  getCities,
  createCity,
  updateCity,
  deleteCity,
};