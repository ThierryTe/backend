const factory = require('./generalController');
const Pays = require('../models/pays.model');

// Focntion lister tous les pays
exports.getAllPays= async (req, res, next)=>{
    try {
        const pays = await Pays.find()
        res.send(pays)
    } catch (error) {
        next(error);
    }
} 

// Appel de la fonction general
exports.create = factory.createOne(Pays);
exports.update = factory.updateOne(Pays);
exports.show = factory.getOne(Pays);
exports.delete = factory.deleteOne(Pays);