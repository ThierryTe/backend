const Site = require('../models/site.model');
const factory = require('./generalController');

// Focntion lister tous les sites
 exports.getAllSite= async (req, res, next)=>{
    try {
        const sites = await Site.find()
        res.send(sites)
    } catch (error) {
        next(error);
    }
} 

// Appel de la fonction general
exports.create = factory.createOne(Site);
exports.update = factory.updateOne(Site);
exports.show = factory.getOne(Site);
exports.delete = factory.deleteOne(Site);