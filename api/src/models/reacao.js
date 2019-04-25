const mongoose = require('./../database');


const ReacaoSchema = new mongoose.Schema({
  reacao: {
    type:String,
    require: true,
  },
  monster: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Monster',
    require: true,
  }
});

const Reacao = mongoose.model('Reacao', ReacaoSchema);

module.exports = Reacao;
