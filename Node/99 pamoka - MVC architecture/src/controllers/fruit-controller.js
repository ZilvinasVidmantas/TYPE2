const { v4: generateId } = require('uuid');
const FruitModel = require('../models/fruit-model');
const FruitViewModel = require('../view-models/fruit-view-model');

const fruits = [
  { id: '1', name: 'Apple', price: 20.89 },
  { id: '2', name: 'Pear', price: 28.19 },
  { id: '3', name: 'Banana', price: 12.99 },
];

const getFruits = async (req, res) => {
  const fruitDocs = await FruitModel.find();
  const fruits = fruitDocs.map(fruit => new FruitViewModel(fruit));
  res.status(200).json({ fruits });
};

const createFruit = async (req, res) => {
  const { name, price } = req.body;
  const fruitDoc = await FruitModel({
    name,
    price
  });

  try {
    await fruitDoc.save();
    const fruit = new FruitViewModel(fruitDoc);
    res.status(200).json(fruit);
  } catch (error) {
    res.status(400).json({
      message: `Klaida: jau yra vaisus su tokiu pavadinimu: '${name}'`,
    });
  }
};

const getFruit = async (req, res) => {
  const { id } = req.params;
  try {
    const fruitDoc = await FruitModel.findById(id);
    const fruit = new FruitViewModel(fruitDoc);
    res.status(200).json(fruit);
  } catch (error) {
    res.status(404).json({
      message: `Elementas nerastas su id: '${id}'`,
    });
  }

};

const deleteFruit = async (req, res) => {
  const { id } = req.params;
  const ii = fruits.findIndex(x => x.id === id);
  if (ii >= 0) {
    const [deletedFruit] = fruits.splice(ii, 1);
    res.status(200).json(deletedFruit);
  } else {
    res.status(404).json({
      message: 'Vaisus nerastas'
    })
  }
};

const updateFruit = async (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;
  const fruit = fruits.find(x => x.id === id);
  if (fruit) {
    if (name) fruit.name = name;
    if (price) fruit.price = price;
    res.status(200).json(fruit);
  }
  else {
    res.status(404).json({ message: 'Vaisus nerastas' });
  }
};

const replaceFruit = async (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;
  const fruit = fruits.find(x => x.id === id);
  if (fruit) {
    if (name && price) {
      fruit.name = name;
      fruit.price = price;
      res.status(200).json(fruit);
    } else {
      res.status(400).json({ message: 'Nepakanka duomenų' });
    }
  }
  else {
    res.status(404).json({ message: 'Vaisus nerastas' });
  }
};

module.exports = {
  getFruits,
  createFruit,
  getFruit,
  deleteFruit,
  updateFruit,
  replaceFruit,
};
