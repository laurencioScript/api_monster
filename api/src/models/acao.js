const mongoose = require('./../database');

const AcaoSchema = new mongoose.Schema({
  acao: {
    type:String,
    require: true,
  },
  descricao: {
    type:String,
    require: true,
  },
  monster: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Monster',
    require: true,
  }
});

const Acao = mongoose.model('Acao', AcaoSchema);

module.exports = Acao;
