const Monster = require('./../models/monster');
const Atributo = require('./../models/atributo');
const Deslocamento = require('./../models/deslocamento');
const Traco = require('./../models/tracos');
const Pericia = require('./../models/pericia');
const Idioma = require('./../models/idioma');
const Sentido = require('./../models/sentido');
const RT_Dano = require('./../models/resistencia_dano');
const Teste_RT = require('./../models/teste_resistencia');
const Vulnerabilidade = require('./../models/vulnerabilidade');
const Imunidade = require('./../models/imunidade');
const AcaoLendaria = require('./../models/acao_lendaria');
const Acao = require('./../models/acao');
const Reacao = require('./../models/reacao');
const Equipamento = require('./../models/equipamento');

class Factory {
    constructor(monster,atributo,deslocamento,traco,pericia,idioma,sentido,rt_dano,teste_rt,vulnerabilidade,imunidade,acaolendaria,acao,reacao,equipamento) {
      this.Monster = monster;
      this.Atributo = atributo;
      this.Deslocamento = deslocamento;
      this.Traco = traco;
      this.Pericia = pericia;
      this.Idioma = idioma;
      this.Sentido = sentido;
      this.RT_Dano = rt_dano;
      this.Teste_RT = teste_rt;
      this.Vulnerabilidade = vulnerabilidade;
      this.Imunidade = imunidade;
      this.AcaoLendaria = acaolendaria;
      this.Acao = acao;
      this.Reacao = reacao;
      this.Equipamento = equipamento;
    }
  }

  const factory = new Factory(Monster,Atributo,Deslocamento,Traco,Pericia,Idioma,Sentido,RT_Dano,Teste_RT,Vulnerabilidade,Imunidade,AcaoLendaria,Acao,Reacao,Equipamento);

  module.exports = factory;