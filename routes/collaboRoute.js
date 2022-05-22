const express = require('express');
const router = express.Router();

const collaboController = require('../controllers/collaboController');


router.get('/', collaboController.getAllCollaborateur);
router.post('/', collaboController.create,collaboController.uploadImage);
router.patch('/:id', collaboController.update,collaboController.uploadImage);
router.get('/:id',collaboController.show);
router.delete('/:id', collaboController.delete);

module.exports = router;
