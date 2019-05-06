const mongoose = require('./../database');

const TracoSchema = new mongoose.Schema({
  tipo: {
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

const Traco = mongoose.model('Traco', TracoSchema);

module.exports = Traco;
