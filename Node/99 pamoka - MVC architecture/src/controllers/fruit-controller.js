const FruitModel = require('../models/fruit-model');
const FruitViewModel = require('../view-models/fruit-view-model');

/*
  1. Pagal savo vakarykštę pasirinktą struktūrą sukurkite modelį
  2. Sukurkite savo struktūrai view-model'į
  3. pagal pavyzdį sukurkite metodus:
    * get<struktūra-daugiskaita>
    * create<struktūra-vienaskaita>
    * get<struktūra-vienaskaita>
  4. Savarankiškai kurkite sekančius metodus
*/

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
    res.status(201).json(fruit);
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
  try {
    const fruitDoc = await FruitModel.findByIdAndDelete(id);
    const fruit = new FruitViewModel(fruitDoc);
    res.status(200).json(fruit);
  }
  catch (error) {
    console.log(error.message)
    res.status(404).json({
      message: 'Vaisus nerastas'
    });
  }
};

const updateFruit = async (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;
  try {
    await FruitModel.findById(id);

    try {
      const fruitDoc = await FruitModel.findByIdAndUpdate(
        id,
        { name, price },
        { new: true }
      );
      const fruit = new FruitViewModel(fruitDoc);
      res.status(200).json(fruit);
    } catch (error) {
      res.status(400).json({ message: 'Blogi parametrai' });
    }

  } catch (error) {
    res.status(404).json({ message: 'Vaisius nerastas' });
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
