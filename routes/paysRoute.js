const express = require('express');
const router = express.Router();
const PaysController = require('../controllers/paysController');

router.get('/', PaysController.getAllPays);
router.post('/', PaysController.create);
router.patch('/:id', PaysController.update);
router.get('/:id',PaysController.show);
router.delete('/:id', PaysController.delete);

module.exports = router;