const { v4: generateId } = require('uuid');

const fruits = [
  { id: '1', name: 'Apple', price: 20.89 },
  { id: '2', name: 'Pear', price: 28.19 },
  { id: '3', name: 'Banana', price: 12.99 },
];

const getFruits = (req, res) => {
  res.status(200).json({ fruits })
};

const createFruit = (req, res) => {
  const { name, price } = req.body;
  fruits.push({
    id: generateId(),
    name,
    price
  })
  res.send('Vaisius sėkmingas įdėtas į prekybą');
};

const getFruit = (req, res) => {
  const { id } = req.params;
  res.status(200).json(fruits.find(x => x.id === id));
};

const deleteFruit = (req, res) => {
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

const updateFruit = (req, res) => {
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

const replaceFruit = (req, res) => {
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
