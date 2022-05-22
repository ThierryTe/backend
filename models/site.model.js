const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SiteSchema = new Schema({
    nom:{
        type: String
    },
    adresse:{
        type:String,
        require:[true, "L'adresse est obligatoire"]
    },
    email:{
        type: String,
        require:[true, "Entrez une adresse mail"]
    },
    telephone:{
        type: String,
        require:[true, 'Entrez votre numéro de téléphone']
    },
    fax:{
        type: String
    },
    accessibilite:{
        type: String,
        emun:['Ascenseur', 'Accès handicapé']
    },
    etage:{
        type: Number
    }

});
SiteSchema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });
module.exports = mongoose.model('site', SiteSchema);