const mongoose = require('./../database');

const DeslocamentoSchema = new mongoose.Schema({
  deslocamento: {
    type:Number,
    require: true,
  },
  escalada: {
    type:Number,
    require: true,
  },
  escavacao: {
    type:Number,
    require: true,
  },
  natacao: {
    type:Number,
    require: true,
  },
  voo: {
    type:Number,
    require: true,
  },
  monster: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Monster',
    require: true,
  }
});

const Deslocamento = mongoose.model('Deslocamento', DeslocamentoSchema);

module.exports = Deslocamento;
