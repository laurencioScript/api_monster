'use strict';

var utils = require('../utils/writer.js');
var Monstro = require('../service/MonstroService');

module.exports.getAtrib = function getAtrib (req, res, next) {
  var forca = req.swagger.params['forca'].value;
  var destreza = req.swagger.params['destreza'].value;
  var constituicao = req.swagger.params['constituicao'].value;
  var inteligencia = req.swagger.params['inteligencia'].value;
  var sabedoria = req.swagger.params['sabedoria'].value;
  var carisma = req.swagger.params['carisma'].value;
  Monstro.getAtrib(forca,destreza,constituicao,inteligencia,sabedoria,carisma)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getDesloc = function getDesloc (req, res, next) {
  var escalada = req.swagger.params['escalada'].value;
  var voo = req.swagger.params['voo'].value;
  var escavacao = req.swagger.params['escavacao'].value;
  var natacao = req.swagger.params['natacao'].value;
  var deslocamento = req.swagger.params['deslocamento'].value;
  Monstro.getDesloc(escalada,voo,escavacao,natacao,deslocamento)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getEquipamentos = function getEquipamentos (req, res, next) {
  var parm1 = req.swagger.params['parm1'].value;
  var parm2 = req.swagger.params['parm2'].value;
  var parm3 = req.swagger.params['parm3'].value;
  Monstro.getEquipamentos(parm1,parm2,parm3)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getIdioma = function getIdioma (req, res, next) {
  var parm1 = req.swagger.params['parm1'].value;
  var parm2 = req.swagger.params['parm2'].value;
  var parm3 = req.swagger.params['parm3'].value;
  Monstro.getIdioma(parm1,parm2,parm3)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getImunidade = function getImunidade (req, res, next) {
  var parm1 = req.swagger.params['parm1'].value;
  var parm2 = req.swagger.params['parm2'].value;
  var parm3 = req.swagger.params['parm3'].value;
  Monstro.getImunidade(parm1,parm2,parm3)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getMonster = function getMonster (req, res, next) {
  var tipo = req.swagger.params['tipo'].value;
  var tamanho = req.swagger.params['tamanho'].value;
  var desafio = req.swagger.params['desafio'].value;
  var tendencia = req.swagger.params['tendencia'].value;
  var ca = req.swagger.params['ca'].value;
  var pv = req.swagger.params['pv'].value;
  Monstro.getMonster(tipo,tamanho,desafio,tendencia,ca,pv)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getMonsterId = function getMonsterId (req, res, next) {
  var id = req.swagger.params['id'].value;
  Monstro.getMonsterId(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getMonsterName = function getMonsterName (req, res, next) {
  var nome = req.swagger.params['nome'].value;
  Monstro.getMonsterName(nome)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getPericia = function getPericia (req, res, next) {
  var parm1 = req.swagger.params['parm1'].value;
  var parm2 = req.swagger.params['parm2'].value;
  var parm3 = req.swagger.params['parm3'].value;
  Monstro.getPericia(parm1,parm2,parm3)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getResistenciaDano = function getResistenciaDano (req, res, next) {
  var parm1 = req.swagger.params['parm1'].value;
  var parm2 = req.swagger.params['parm2'].value;
  var parm3 = req.swagger.params['parm3'].value;
  Monstro.getResistenciaDano(parm1,parm2,parm3)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getSentido = function getSentido (req, res, next) {
  var parm1 = req.swagger.params['parm1'].value;
  var parm2 = req.swagger.params['parm2'].value;
  var parm3 = req.swagger.params['parm3'].value;
  Monstro.getSentido(parm1,parm2,parm3)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getTesteResitencia = function getTesteResitencia (req, res, next) {
  var parm1 = req.swagger.params['parm1'].value;
  var parm2 = req.swagger.params['parm2'].value;
  var parm3 = req.swagger.params['parm3'].value;
  Monstro.getTesteResitencia(parm1,parm2,parm3)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getVulnerabilidade = function getVulnerabilidade (req, res, next) {
  var parm1 = req.swagger.params['parm1'].value;
  var parm2 = req.swagger.params['parm2'].value;
  var parm3 = req.swagger.params['parm3'].value;
  Monstro.getVulnerabilidade(parm1,parm2,parm3)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.placeOrder = function placeOrder (req, res, next) {
  var body = req.swagger.params['body'].value;
  Monstro.placeOrder(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
