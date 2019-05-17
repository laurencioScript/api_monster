const mongoose = require('../database');

const MonsterSchema = new mongoose.Schema({
    
    nome:{
        type:String,
        required:true
    },
    tipo:{
        type:String,
        required:true
    },
    desafio:{
        type:String,
        required:true
    },
    xp:{
        type:Number,
        required:true
    },
    tamanho:{
        type:String,
        required:true
    },
    tendencia:{
        type:String,
        required:true
    },
    ca:{
        type:Number,
        required:true
    },
    pv:{
        type:String,
        required:true
    },
    atributo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Atributo',
    },
    deslocamento: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Deslocamento'
    },
    tracos: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Traco'
    }],
    idioma: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Idioma',
    }],
    sentido: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Sentido',
    }],
    resistencia_dano: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'RT_Dano',
    }],
    teste_resistencia: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Teste_RT',
    }],
    pericia: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Pericia',
    }],
    vulnerabilidade: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Vulnerabilidade',
    }],
    imunidade: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Imunidade',
    }],
    acao: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Acao',
    }],
    acao_lendaria: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'AcaoLendaria',
    }],
    reacao: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Reacao',
    }],
    equipamento: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Equipamento',
    }]

});

const Monster = mongoose.model('Monster',MonsterSchema);

module.exports = Monster;

