const mongoose = require('./../database');


const SentidoSchema = new mongoose.Schema({
  tipo: {
    type:String,
    require: true,
  },
  valor: {
    type:Number,
    require: true,
  },
  monster: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Monster',
    require: true,
  }
});

const Sentido = mongoose.model('Sentido', SentidoSchema);

module.exports = Sentido;
