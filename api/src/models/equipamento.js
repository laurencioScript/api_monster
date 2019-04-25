const mongoose = require('./../database');


const EquipamentosSchema = new mongoose.Schema({
  equipamento: {
    type:String,
    require: true,
  },
  monster: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Monster',
    require: true,
  }
});

const Equipamento = mongoose.model('Equipamento', EquipamentosSchema);

module.exports = Equipamento;
