const express = require('express');
const router = express.Router();
const siteController = require('../controllers/siteController');


router.get('/', siteController.getAllSite);
router.post('/', siteController.create);
router.patch('/:id', siteController.update);
router.get('/:id',siteController.show);
router.delete('/:id', siteController.delete);

module.exports = router;