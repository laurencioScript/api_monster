const mongoose = require('./../database');


const VulnerabilidadeSchema = new mongoose.Schema({
  vulnerabilidade: {
    type:String,
    require: true,
  },
  monster: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Monster',
    require: true,
  }
});

const Vulnerabilidade = mongoose.model('Vulnerabilidade', VulnerabilidadeSchema);

module.exports = Vulnerabilidade;
