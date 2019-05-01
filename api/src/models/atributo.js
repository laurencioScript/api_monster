const mongoose = require('./../database');


const AtributoSchema = new mongoose.Schema({
  forca: {
    type: Number,
    require: true,
  },
  destreza: {
    type: Number,
    require: true,
  },
  constituicao: {
    type: Number,
    require: true,
  },
  inteligencia: {
    type: Number,
    require: true,
  },
  sabedoria: {
    type: Number,
    require: true,
  },
  carisma: {
    type: Number,
    require: true,
  },
  monster: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Monster',
    require: true,
  }
 
});

const Atributo = mongoose.model('Atributo', AtributoSchema);

module.exports = Atributo;
