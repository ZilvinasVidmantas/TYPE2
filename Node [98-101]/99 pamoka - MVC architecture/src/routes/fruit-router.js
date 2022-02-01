const express = require('express');
const {
    getFruits,
    createFruit,
    getFruit,
    deleteFruit,
    updateFruit,
    replaceFruit,
} = require('../controllers/fruit-controller');

const router = express.Router();

// GET '/api/fruits'     -> visus vaisius
router.get('/', getFruits);

// POST '/api/fruits/'    -> sukurti vieną vaisių
router.post('/', createFruit);

// GET '/api/fruits/:id' -> gauti vieną vaisių
router.get('/:id', getFruit);

// DELETE '/api/fruits/:id' -> ištrinti vieną vaisių
router.delete('/:id', deleteFruit);

// PATCH '/api/fruits/:id' -> ATNAUJINTI vieną vaisių
router.patch('/:id', updateFruit);

// PUT '/api/fruits/:id' -> Perrašo vieną vaisių
router.put('/:id', replaceFruit);

module.exports = router;
