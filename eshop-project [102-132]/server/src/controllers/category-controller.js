const Mongoose = require('mongoose');
const CategoryModel = require('../models/category-model');
const CategoryViewModel = require('../view-models/category-view-model');

const getCategories = async (req, res) => {
  const categoryDocs = await CategoryModel.find();

  res.status(200).json(categoryDocs.map(x => new CategoryViewModel(x)));
};

const createCategory = async (req, res) => {
  const { title } = req.body;
  try {
    const categoryDoc = await CategoryModel.create({ title });
    res.status(200).json(new CategoryViewModel(categoryDoc));
  } catch (error) {
    res.status(400).json({ message: `Category with title '${title}' already exists` });
  }
};

const updateCategory = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  try {
    const categoryDoc = await CategoryModel.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true,
    });

    res.status(200).json(new CategoryViewModel(categoryDoc));
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: error instanceof Mongoose.Error.ValidationError
        ? `Category with title '${data.title}' already exists`
        : error.message
    })
  }
};

const deleteCategory = async (req, res) => {
  const { id } = req.params;
  const categoryDoc = await CategoryModel.findByIdAndDelete(id);

  res.status(200).json(new CategoryViewModel(categoryDoc));
};

module.exports = {
  getCategories,
  createCategory,
  updateCategory,
  deleteCategory,
};