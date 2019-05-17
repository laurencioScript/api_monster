'use strict';


/**
 * 
 * Busca todos os monstros de acordo com o parametros passados, não deixe espaço vazio substitua por null.
 *
 * forca Integer valor de força do monstro
 * destreza Integer valor de destreza do monstro
 * constituicao Integer valor de constituição do monstro
 * inteligencia Integer valor de inteligencia do monstro
 * sabedoria Integer valor de sabedoria do monstro
 * carisma Integer valor de carisma do monstro
 * returns inline_response_200_1
 **/
exports.getAtrib = function(forca,destreza,constituicao,inteligencia,sabedoria,carisma) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Monstros" : [ {
    "Constituição" : 5,
    "Destreza" : 1,
    "Inteligencia" : 5,
    "nome" : "nome",
    "id" : "id",
    "Força" : 6,
    "Sabedoria" : 2,
    "Carisma" : 7
  }, {
    "Constituição" : 5,
    "Destreza" : 1,
    "Inteligencia" : 5,
    "nome" : "nome",
    "id" : "id",
    "Força" : 6,
    "Sabedoria" : 2,
    "Carisma" : 7
  } ],
  "count" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * 
 * Busca todos os monstros de acordo com o parametros passados, não deixe espaço vazio substitua por null.
 *
 * escalada BigDecimal valor de escalada do monstro
 * voo BigDecimal valor de voo do monstro
 * escavacao BigDecimal valor de escavação do monstro
 * natacao BigDecimal valor de natação do monstro
 * deslocamento BigDecimal valor de deslocamento do monstro
 * returns inline_response_200_2
 **/
exports.getDesloc = function(escalada,voo,escavacao,natacao,deslocamento) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Monstros" : [ {
    "Deslocamento" : 2.3021358869347654518833223846741020679473876953125,
    "Voo" : 1.46581298050294517310021547018550336360931396484375,
    "Escalada" : 6.02745618307040320615897144307382404804229736328125,
    "nome" : "nome",
    "Escavação" : 5.962133916683182377482808078639209270477294921875,
    "id" : "id",
    "Natação" : 5.63737665663332876420099637471139430999755859375
  }, {
    "Deslocamento" : 2.3021358869347654518833223846741020679473876953125,
    "Voo" : 1.46581298050294517310021547018550336360931396484375,
    "Escalada" : 6.02745618307040320615897144307382404804229736328125,
    "nome" : "nome",
    "Escavação" : 5.962133916683182377482808078639209270477294921875,
    "id" : "id",
    "Natação" : 5.63737665663332876420099637471139430999755859375
  } ],
  "count" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * 
 * Busca todos os monstros de acordo com o parametros passados, não deixe espaço vazio substitua por null.
 *
 * parm1 String equipamento do monstro
 * parm2 String equipamento do monstro
 * parm3 String equipamento do monstro
 * returns inline_response_200_10
 **/
exports.getEquipamentos = function(parm1,parm2,parm3) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Monstros" : [ {
    "equipamento" : [ "equipamento", "equipamento" ],
    "nome" : "nome",
    "id" : "id"
  }, {
    "equipamento" : [ "equipamento", "equipamento" ],
    "nome" : "nome",
    "id" : "id"
  } ],
  "count" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * 
 * Busca todos os monstros de acordo com o parametros passados, não deixe espaço vazio substitua por null.
 *
 * parm1 String idioma do monstro
 * parm2 String idioma do monstro
 * parm3 String idioma do monstro
 * returns inline_response_200_4
 **/
exports.getIdioma = function(parm1,parm2,parm3) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Monstros" : [ {
    "nome" : "nome",
    "idioma" : [ "idioma", "idioma" ],
    "id" : "id"
  }, {
    "nome" : "nome",
    "idioma" : [ "idioma", "idioma" ],
    "id" : "id"
  } ],
  "count" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * 
 * Busca todos os monstros de acordo com o parametros passados, não deixe espaço vazio substitua por null.
 *
 * parm1 String imunidade do monstro
 * parm2 String imunidade do monstro
 * parm3 String imunidade do monstro
 * returns inline_response_200_9
 **/
exports.getImunidade = function(parm1,parm2,parm3) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Monstros" : [ {
    "nome" : "nome",
    "id" : "id",
    "imunidade" : [ "imunidade", "imunidade" ]
  }, {
    "nome" : "nome",
    "id" : "id",
    "imunidade" : [ "imunidade", "imunidade" ]
  } ],
  "count" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * 
 * Busca todos os monstros de acordo com o parametros passados, não deixe espaço vazio substitua por null
 *
 * tipo String tipo do monstro
 * tamanho String tamanho do monstro
 * desafio String desafio do monstro
 * tendencia String tendencia do monstro(sigla em maiusculo)
 * ca Integer classe de armadura do monstro
 * pv String pontos de vida do monstro
 * returns inline_response_200
 **/
exports.getMonster = function(tipo,tamanho,desafio,tendencia,ca,pv) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Monstros" : [ {
    "tipo" : "tipo",
    "tamanho" : "tamanho",
    "pv" : "pv",
    "desafio" : "desafio",
    "nome" : "nome",
    "_id" : "_id",
    "ca" : 6
  }, {
    "tipo" : "tipo",
    "tamanho" : "tamanho",
    "pv" : "pv",
    "desafio" : "desafio",
    "nome" : "nome",
    "_id" : "_id",
    "ca" : 6
  } ],
  "count" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * 
 * Retorna todos os dados de um monstro especifico.
 *
 * id String Identificação do monstro
 * returns Monstro
 **/
exports.getMonsterId = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "count" : 0,
  "monstros" : [ {
    "tipo" : "tipo",
    "tracos" : [ {
      "tipo" : "tipo",
      "descricao" : 6
    }, {
      "tipo" : "tipo",
      "descricao" : 6
    } ],
    "teste_resistencia" : [ {
      "tipo" : "tipo",
      "bonus" : 1
    }, {
      "tipo" : "tipo",
      "bonus" : 1
    } ],
    "pericia" : [ {
      "tipo" : "tipo",
      "bonus" : 1
    }, {
      "tipo" : "tipo",
      "bonus" : 1
    } ],
    "tendencia" : "tendencia",
    "deloscamento" : {
      "escalada" : 3.61607674925191080461672754609026014804840087890625,
      "deslocamento" : 7.3862819483858839220147274318151175975799560546875,
      "natacao" : 1.231513536777255612975068288506008684635162353515625,
      "voo" : 2.027123023002321833274663731572218239307403564453125,
      "escavacao" : 4.1456080298839363962315474054776132106781005859375
    },
    "vulnerabilidade" : [ "vulnerabilidade", "vulnerabilidade" ],
    "nome" : "nome",
    "idioma" : [ "idioma", "idioma" ],
    "tamanho" : "tamanho",
    "acao_lendaria" : [ {
      "tipo" : "tipo",
      "descricao" : "descricao"
    }, {
      "tipo" : "tipo",
      "descricao" : "descricao"
    } ],
    "resistencia_dano" : [ "resistencia_dano", "resistencia_dano" ],
    "sentido" : [ {
      "tipo" : "tipo",
      "alcance" : 1
    }, {
      "tipo" : "tipo",
      "alcance" : 1
    } ],
    "desafio" : "desafio",
    "equipamento" : [ "equipamento", "equipamento" ],
    "xp" : 6,
    "id" : "id",
    "atributo" : {
      "carisma" : 9,
      "inteligencia" : 2,
      "forca" : 1,
      "destreza" : 5,
      "constituicao" : 5,
      "sabedoria" : 7
    },
    "imunidade" : [ "imunidade", "imunidade" ],
    "acao" : [ {
      "tipo" : "tipo",
      "descricao" : "descricao"
    }, {
      "tipo" : "tipo",
      "descricao" : "descricao"
    } ]
  }, {
    "tipo" : "tipo",
    "tracos" : [ {
      "tipo" : "tipo",
      "descricao" : 6
    }, {
      "tipo" : "tipo",
      "descricao" : 6
    } ],
    "teste_resistencia" : [ {
      "tipo" : "tipo",
      "bonus" : 1
    }, {
      "tipo" : "tipo",
      "bonus" : 1
    } ],
    "pericia" : [ {
      "tipo" : "tipo",
      "bonus" : 1
    }, {
      "tipo" : "tipo",
      "bonus" : 1
    } ],
    "tendencia" : "tendencia",
    "deloscamento" : {
      "escalada" : 3.61607674925191080461672754609026014804840087890625,
      "deslocamento" : 7.3862819483858839220147274318151175975799560546875,
      "natacao" : 1.231513536777255612975068288506008684635162353515625,
      "voo" : 2.027123023002321833274663731572218239307403564453125,
      "escavacao" : 4.1456080298839363962315474054776132106781005859375
    },
    "vulnerabilidade" : [ "vulnerabilidade", "vulnerabilidade" ],
    "nome" : "nome",
    "idioma" : [ "idioma", "idioma" ],
    "tamanho" : "tamanho",
    "acao_lendaria" : [ {
      "tipo" : "tipo",
      "descricao" : "descricao"
    }, {
      "tipo" : "tipo",
      "descricao" : "descricao"
    } ],
    "resistencia_dano" : [ "resistencia_dano", "resistencia_dano" ],
    "sentido" : [ {
      "tipo" : "tipo",
      "alcance" : 1
    }, {
      "tipo" : "tipo",
      "alcance" : 1
    } ],
    "desafio" : "desafio",
    "equipamento" : [ "equipamento", "equipamento" ],
    "xp" : 6,
    "id" : "id",
    "atributo" : {
      "carisma" : 9,
      "inteligencia" : 2,
      "forca" : 1,
      "destreza" : 5,
      "constituicao" : 5,
      "sabedoria" : 7
    },
    "imunidade" : [ "imunidade", "imunidade" ],
    "acao" : [ {
      "tipo" : "tipo",
      "descricao" : "descricao"
    }, {
      "tipo" : "tipo",
      "descricao" : "descricao"
    } ]
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * 
 * Retorna todos os dados de um monstro especifico.
 *
 * nome String nome do monstro
 * returns Monstro
 **/
exports.getMonsterName = function(nome) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "count" : 0,
  "monstros" : [ {
    "tipo" : "tipo",
    "tracos" : [ {
      "tipo" : "tipo",
      "descricao" : 6
    }, {
      "tipo" : "tipo",
      "descricao" : 6
    } ],
    "teste_resistencia" : [ {
      "tipo" : "tipo",
      "bonus" : 1
    }, {
      "tipo" : "tipo",
      "bonus" : 1
    } ],
    "pericia" : [ {
      "tipo" : "tipo",
      "bonus" : 1
    }, {
      "tipo" : "tipo",
      "bonus" : 1
    } ],
    "tendencia" : "tendencia",
    "deloscamento" : {
      "escalada" : 3.61607674925191080461672754609026014804840087890625,
      "deslocamento" : 7.3862819483858839220147274318151175975799560546875,
      "natacao" : 1.231513536777255612975068288506008684635162353515625,
      "voo" : 2.027123023002321833274663731572218239307403564453125,
      "escavacao" : 4.1456080298839363962315474054776132106781005859375
    },
    "vulnerabilidade" : [ "vulnerabilidade", "vulnerabilidade" ],
    "nome" : "nome",
    "idioma" : [ "idioma", "idioma" ],
    "tamanho" : "tamanho",
    "acao_lendaria" : [ {
      "tipo" : "tipo",
      "descricao" : "descricao"
    }, {
      "tipo" : "tipo",
      "descricao" : "descricao"
    } ],
    "resistencia_dano" : [ "resistencia_dano", "resistencia_dano" ],
    "sentido" : [ {
      "tipo" : "tipo",
      "alcance" : 1
    }, {
      "tipo" : "tipo",
      "alcance" : 1
    } ],
    "desafio" : "desafio",
    "equipamento" : [ "equipamento", "equipamento" ],
    "xp" : 6,
    "id" : "id",
    "atributo" : {
      "carisma" : 9,
      "inteligencia" : 2,
      "forca" : 1,
      "destreza" : 5,
      "constituicao" : 5,
      "sabedoria" : 7
    },
    "imunidade" : [ "imunidade", "imunidade" ],
    "acao" : [ {
      "tipo" : "tipo",
      "descricao" : "descricao"
    }, {
      "tipo" : "tipo",
      "descricao" : "descricao"
    } ]
  }, {
    "tipo" : "tipo",
    "tracos" : [ {
      "tipo" : "tipo",
      "descricao" : 6
    }, {
      "tipo" : "tipo",
      "descricao" : 6
    } ],
    "teste_resistencia" : [ {
      "tipo" : "tipo",
      "bonus" : 1
    }, {
      "tipo" : "tipo",
      "bonus" : 1
    } ],
    "pericia" : [ {
      "tipo" : "tipo",
      "bonus" : 1
    }, {
      "tipo" : "tipo",
      "bonus" : 1
    } ],
    "tendencia" : "tendencia",
    "deloscamento" : {
      "escalada" : 3.61607674925191080461672754609026014804840087890625,
      "deslocamento" : 7.3862819483858839220147274318151175975799560546875,
      "natacao" : 1.231513536777255612975068288506008684635162353515625,
      "voo" : 2.027123023002321833274663731572218239307403564453125,
      "escavacao" : 4.1456080298839363962315474054776132106781005859375
    },
    "vulnerabilidade" : [ "vulnerabilidade", "vulnerabilidade" ],
    "nome" : "nome",
    "idioma" : [ "idioma", "idioma" ],
    "tamanho" : "tamanho",
    "acao_lendaria" : [ {
      "tipo" : "tipo",
      "descricao" : "descricao"
    }, {
      "tipo" : "tipo",
      "descricao" : "descricao"
    } ],
    "resistencia_dano" : [ "resistencia_dano", "resistencia_dano" ],
    "sentido" : [ {
      "tipo" : "tipo",
      "alcance" : 1
    }, {
      "tipo" : "tipo",
      "alcance" : 1
    } ],
    "desafio" : "desafio",
    "equipamento" : [ "equipamento", "equipamento" ],
    "xp" : 6,
    "id" : "id",
    "atributo" : {
      "carisma" : 9,
      "inteligencia" : 2,
      "forca" : 1,
      "destreza" : 5,
      "constituicao" : 5,
      "sabedoria" : 7
    },
    "imunidade" : [ "imunidade", "imunidade" ],
    "acao" : [ {
      "tipo" : "tipo",
      "descricao" : "descricao"
    }, {
      "tipo" : "tipo",
      "descricao" : "descricao"
    } ]
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * 
 * Busca todos os monstros de acordo com o parametros passados, não deixe espaço vazio substitua por null.
 *
 * parm1 String pericia do monstro
 * parm2 String pericia do monstro
 * parm3 String pericia do monstro
 * returns inline_response_200_3
 **/
exports.getPericia = function(parm1,parm2,parm3) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Monstros" : [ {
    "pericia" : [ {
      "tipo" : "tipo",
      "bonus" : 1
    }, {
      "tipo" : "tipo",
      "bonus" : 1
    } ],
    "nome" : "nome",
    "id" : "id"
  }, {
    "pericia" : [ {
      "tipo" : "tipo",
      "bonus" : 1
    }, {
      "tipo" : "tipo",
      "bonus" : 1
    } ],
    "nome" : "nome",
    "id" : "id"
  } ],
  "count" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * 
 * Busca todos os monstros de acordo com o parametros passados, não deixe espaço vazio substitua por null.
 *
 * parm1 String resistencia dano do monstro
 * parm2 String resistencia dano do monstro
 * parm3 String resistencia dano do monstro
 * returns inline_response_200_6
 **/
exports.getResistenciaDano = function(parm1,parm2,parm3) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Monstros" : [ {
    "resistencia_dano" : [ "resistencia_dano", "resistencia_dano" ],
    "nome" : "nome",
    "id" : "id"
  }, {
    "resistencia_dano" : [ "resistencia_dano", "resistencia_dano" ],
    "nome" : "nome",
    "id" : "id"
  } ],
  "count" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * 
 * Busca todos os monstros de acordo com o parametros passados, não deixe espaço vazio substitua por null.
 *
 * parm1 String sentido do monstro
 * parm2 String sentido do monstro
 * parm3 String sentido do monstro
 * returns inline_response_200_5
 **/
exports.getSentido = function(parm1,parm2,parm3) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Monstros" : [ {
    "sentido" : [ {
      "tipo" : "tipo",
      "alcance" : 1
    }, {
      "tipo" : "tipo",
      "alcance" : 1
    } ],
    "nome" : "nome",
    "id" : "id"
  }, {
    "sentido" : [ {
      "tipo" : "tipo",
      "alcance" : 1
    }, {
      "tipo" : "tipo",
      "alcance" : 1
    } ],
    "nome" : "nome",
    "id" : "id"
  } ],
  "count" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * 
 * Busca todos os monstros de acordo com o parametros passados, não deixe espaço vazio substitua por null.
 *
 * parm1 String teste de resistencia do monstro
 * parm2 String teste de resistencia do monstro
 * parm3 String teste de resistencia do monstro
 * returns inline_response_200_8
 **/
exports.getTesteResitencia = function(parm1,parm2,parm3) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Monstros" : [ {
    "teste_resistencia" : [ {
      "tipo" : "tipo",
      "bonus" : 1
    }, {
      "tipo" : "tipo",
      "bonus" : 1
    } ],
    "nome" : "nome",
    "id" : "id"
  }, {
    "teste_resistencia" : [ {
      "tipo" : "tipo",
      "bonus" : 1
    }, {
      "tipo" : "tipo",
      "bonus" : 1
    } ],
    "nome" : "nome",
    "id" : "id"
  } ],
  "count" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * 
 * Busca todos os monstros de acordo com o parametros passados, não deixe espaço vazio substitua por null.
 *
 * parm1 String vulnerabilidade do monstro
 * parm2 String vulnerabilidade do monstro
 * parm3 String vulnerabilidade do monstro
 * returns inline_response_200_7
 **/
exports.getVulnerabilidade = function(parm1,parm2,parm3) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Monstros" : [ {
    "vulnerabilidade" : [ "vulnerabilidade", "vulnerabilidade" ],
    "nome" : "nome",
    "id" : "id"
  }, {
    "vulnerabilidade" : [ "vulnerabilidade", "vulnerabilidade" ],
    "nome" : "nome",
    "id" : "id"
  } ],
  "count" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * 
 * 
 *
 * body Register Cadastra os monstros no banco de dados.
 * no response value expected for this operation
 **/
exports.placeOrder = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

