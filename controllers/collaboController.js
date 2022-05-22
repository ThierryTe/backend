const Collaborateur = require('../models/collaborateur.model');
const factory = require('./generalController');
const multer = require('multer');


//Stockage des images
const storage = multer.diskStorage({
    destination: function(req, file, callback) {
      callback(null, './uploads');
    },
    filename: function (req, file, callback) {
      callback(null, file.fieldname);
    }
  });
  const upload = multer({storage: storage});
  
// Fonction chargement d'image
  exports.uploadImage = upload.single('image')
  
  
// Focntion lister tous les collaborateurs
exports.getAllCollaborateur= async (req, res, next)=>{
    try {
        const collabos = await Collaborateur.find()
        res.send(collabos)
    } catch (error) {
        next(error);
    }
} 

// Appel de la fonction general
exports.create = factory.createOne(Collaborateur);
exports.update = factory.updateOne(Collaborateur);
exports.show = factory.getOne(Collaborateur);
exports.delete = factory.deleteOne(Collaborateur);