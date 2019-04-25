const mongoose = require('./../database');


const RT_DanoSchema = new mongoose.Schema({
  resistencia_dano: {
    type:String,
    require: true,
  },
  monster: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Monster',
    require: true,
  }
});

const RT_Dano = mongoose.model('RT_Dano', RT_DanoSchema);

module.exports = RT_Dano;
