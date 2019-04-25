const mongoose = require('./../database');


const Teste_RTSchema = new mongoose.Schema({
  teste_resistencia: {
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

const Teste_RT = mongoose.model('Teste_RT', Teste_RTSchema);

module.exports = Teste_RT;
