const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({
    products: [
      { id: '1', name: 'Apple', price: 20.89 },
      { id: '2', name: 'Pear', price: 28.19 },
      { id: '3', name: 'Banana', price: 12.99 },
    ]
  })
});

router.post('/', (req, res) => {
  // Šioje vietoje įdėsime vaisių į duomenų bazę.
  console.log(req.body);
  res.send('Vaisius sėkmingas įdėtas į prekybą');
});

module.exports = router;
