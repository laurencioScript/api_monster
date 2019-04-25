const mongoose = require('./../database');


const ImunidadeSchema = new mongoose.Schema({
  imunidade: {
    type:String,
    require: true,
  },
  monster: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Monster',
    require: true,
  }
});

const Imunidade = mongoose.model('Imunidade', ImunidadeSchema);

module.exports = Imunidade;
