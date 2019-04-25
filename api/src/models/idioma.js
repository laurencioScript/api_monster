const mongoose = require('./../database');

const IdiomaSchema = new mongoose.Schema({
  idioma: {
    type:String,
    require: true,
  },
  monster: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Monster',
    require: true,
  }
});

const Idioma = mongoose.model('Idioma', IdiomaSchema);

module.exports = Idioma;
