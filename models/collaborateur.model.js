const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CollaborateurSchema = new Schema({
    nom:{
        type: String,
        require: [true, 'Entrez votre nom']
    },
    prenom:{
        type: String,
        require:[true, 'Entrez votre prénom']
    },
    dateNaissance:{
        type: Date
    },
    sexe:{
        type: String,
        enum:['Féminin', 'Masculin']
    },
    specialite:{
        type: String,
        enum: ['Pédiatre','Aide-soignant','Accueil','Facturation']
    },
    site:[],
    pays: {
        
    },
    ville:{
        type: String,
        required:[true, 'Entrez la ville']
    },
    adresse:{
        type: String,
        required: [true, "Entrez l'adresse"]
    },
    password:{
        type: String,
        require:[true, 'Entrez votre mot de passe']
    },
    confirmation:{
        type: String,
        require: [true, "Confirmez votre mot de passe"]
    },
    image:{type: String}



});

CollaborateurSchema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });
module.exports = mongoose.model('collaborateur', CollaborateurSchema);