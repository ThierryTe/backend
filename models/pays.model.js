const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const PaysSchema = new Schema({
    code:{
        type: String
    },
    libelle:{
        type: String
    }
});
PaysSchema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

module.exports = mongoose.model('pays', PaysSchema);