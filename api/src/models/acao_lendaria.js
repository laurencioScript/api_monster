const mongoose = require('./../database');


const AcaoLendariaSchema = new mongoose.Schema({
  acao_lendaria: {
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

const AcaoLendaria = mongoose.model('AcaoLendaria', AcaoLendariaSchema);

module.exports = AcaoLendaria;
