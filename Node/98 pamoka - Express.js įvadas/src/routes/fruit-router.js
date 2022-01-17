const express = require('express');
const { v4: generateId } = require('uuid');

const router = express.Router();

const fruits = [
  { id: '1', name: 'Apple', price: 20.89 },
  { id: '2', name: 'Pear', price: 28.19 },
  { id: '3', name: 'Banana', price: 12.99 },
];

// REST API standard

// GET    '/fruits'     -> visus vaisius
router.get('/', (req, res) => {
  res.status(200).json({ fruits })
});

// POST   '/fruits/'    -> sukurti vieną vaisių
router.post('/', (req, res) => {
  const { name, price } = req.body;
  fruits.push({
    id: generateId(),
    name,
    price
  })
  res.send('Vaisius sėkmingas įdėtas į prekybą');
});

// GET    '/fruits/:id' -> gauti vieną vaisių
router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.status(200).json(fruits.find(x => x.id === id));
});

// DELETE '/fruits/:id' -> ištrinti vieną vaisių
// PATCH  '/fruits/:id' -> ATNAUJINTI vieną vaisių
// PUT    '/fruits/:id' -> Perrašo vieną vaisių

module.exports = router;
