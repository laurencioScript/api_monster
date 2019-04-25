const mongoose = require('./../database');


const PericiaSchema = new mongoose.Schema({
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

const Pericia = mongoose.model('Pericia', PericiaSchema);

module.exports = Pericia;
