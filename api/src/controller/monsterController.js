const express = require('express');

const Monster = require('./../models/Monster');

const Atributo = require('./../models/Atributo');
const Deslocamento = require('./../models/Deslocamento');

const Traco = require('./../models/Tracos');
const Idioma = require('./../models/Idioma');
const Pericia = require('./../models/Pericia');
const Sentido = require('./../models/Sentido');
const RT_Dano = require('./../models/resistencia_dano');
const Teste_RT = require('./../models/teste_resistencia');
const Vulnerabilidade = require('./../models/Vulnerabilidade');
const Imunidade = require('./../models/Imunidade');
const Acao = require('./../models/Acao');
const AcaoLendaria = require('./../models/acao_lendaria');
const Reacao = require('./../models/Reacao');
const Equipamento = require('./../models/Equipamento');

const router = express.Router();

router.post('/register', async (req,res)=>{
    try {

        const resultado = [];

        const monstros = req.body;

        for(var x =0;x<monstros.length;x++){

            const { nome,tipo,desafio,xp,tamanho,tendencia,ca,pv, atributo,
                deslocamento,tracos,idiomas,sentidos,resistencia_dano,
                teste_resistencia,pericia,vulnerabilidades,imunidades,acao,acao_lendaria,
                reacao,equipamentos } = monstros[x];
            
            resultado.push({"monster":nome});

            const monster = await Monster.create({ nome,tipo,desafio,xp,tamanho,tendencia,ca,pv });

            const monsterAtributos = new Atributo({ ...atributo, monster: monster._id });
    
            await monsterAtributos.save();
    
            const monsterDeslocamento = new Deslocamento({ ...deslocamento, monster: monster._id });
        
            await monsterDeslocamento.save();    
    
            if(tracos != undefined && tracos )
                await Promise.all(tracos.map(async tracos => {
                    if(tracos['tracos'] != ""){
                        const monsterTracos = new Traco({ ...tracos, monster: monster._id });
            
                        await monsterTracos.save();
                
                        monster.tracos.push(monsterTracos);
                    }
                    
                }));
    
            if(pericia != undefined)    
                await Promise.all(pericia.map(async pericia => {
                    if(pericia['tipo'] != ""){
                        const monsterPericia = new Pericia({ ...pericia, monster: monster._id });
            
                        await monsterPericia.save();
                
                        monster.pericia.push(monsterPericia);
                    }
                    
                }));
    
            if(idiomas != undefined)    
                await Promise.all(idiomas.map(async idiomas => {
                    
                    if(idiomas['idiomas'] != ""){
                        const monsterIdioma = new Idioma({ ...idiomas, monster: monster._id });
            
                        await monsterIdioma.save();
                
                        monster.idiomas.push(monsterIdioma);
                    }

                    
                }));
    
            if(sentidos != undefined)
                await Promise.all(sentidos.map(async sentidos => {
                    
                    if(sentidos['tipo'] != ""){
                        const monsterSentido = new Sentido({ ...sentidos, monster: monster._id });
            
                        await monsterSentido.save();
                
                        monster.sentidos.push(monsterSentido);
                    }
                    
                }));
    
            if(resistencia_dano != undefined)
                await Promise.all(resistencia_dano.map(async resistencia_dano => {
                    if(resistencia_dano['resistencia_dano'] != ""){
                        const monsterResistenciaDano = new RT_Dano({ ...resistencia_dano, monster: monster._id });
            
                        await monsterResistenciaDano.save();
                
                        monster.resistencia_dano.push(monsterResistenciaDano);
                    }
                    
                }));
    
            if(teste_resistencia != undefined)
                await Promise.all(teste_resistencia.map(async teste_resistencia => {
                    if(teste_resistencia['teste_resistencia'] != ""){
                        const monsterTeste = new Teste_RT({ ...teste_resistencia, monster: monster._id });
            
                        await monsterTeste.save();
                
                        monster.teste_resistencia.push(monsterTeste);
                    }
                    
                }));
    
            if(vulnerabilidades != undefined)
                await Promise.all(vulnerabilidades.map(async vulnerabilidades => {
                    if(vulnerabilidades['vulnerabilidade'] != ""){
                        const monsterVulnerabilidades = new Vulnerabilidade({ ...vulnerabilidades, monster: monster._id });
            
                        await monsterVulnerabilidades.save();
                
                        monster.vulnerabilidades.push(monsterVulnerabilidades);
                    }
                    
                }));
    
            if(imunidades != undefined)
                await Promise.all(imunidades.map(async imunidades => {
                    if(imunidades['imunidade'] != ""){
                        const monsterImunidade = new Imunidade({ ...imunidades, monster: monster._id });
            
                        await monsterImunidade.save();
                
                        monster.imunidades.push(monsterImunidade);
                    }
                    
                }));
    
            if(acao != undefined)
                await Promise.all(acao.map(async acao => {
                    if(acao['acao'] != ""){
                        const monsterAcao = new Acao({ ...acao, monster: monster._id });
            
                        await monsterAcao.save();
                
                        monster.acao.push(monsterAcao);
                    }
                    
                }));
    
            if(acao_lendaria != undefined)
                await Promise.all(acao_lendaria.map(async acao_lendaria => {
                    if(acao_lendaria['acao_lendaria'] != ""){
                        const monsterLendaria = new AcaoLendaria({ ...acao_lendaria, monster: monster._id });
            
                        await monsterLendaria.save();
                
                        monster.acao_lendaria.push(monsterLendaria);
                    }
                    
                }));
    
            if(reacao != undefined)
                await Promise.all(reacao.map(async reacao => {
                    if(reacao['reacao'] != ""){
                        const monsterReacao = new Reacao({ ...reacao, monster: monster._id });
            
                        await monsterReacao.save();
                
                        monster.reacao.push(monsterReacao);
                    }
                    
                }));
    
            if(equipamentos != undefined)
                await Promise.all(equipamentos.map(async equipamentos => {
                    if(equipamentos['equipamento'] != ""){
                        const monsterEquipamento = new Equipamento({ ...equipamentos, monster: monster._id });
            
                        await monsterEquipamento.save();
                
                        monster.equipamentos.push(monsterEquipamento);
                    }
                    
                }));
      
            await monster.save();
            
        }
        
        return  res.send({resultado});
            
      } catch (err) {

        return res.status(400).send({ error: err+'' });
      }


});

router.get('/:projectId', async (req, res) => {
    try {

        /*
            nome,tipo,desafio,xp,tamanho,tendencia,ca,pv, atributo,
                deslocamento,tracos,idiomas,sentidos,resistencia_dano,
                teste_resistencia,pericia,vulnerabilidades,imunidades,acao,acao_lendaria,
                reacao,equipamentos
        
        */


      const project = await Monster.findById(req.params.projectId).populate(
          ['Monster', 'tracos','idiomas','sentidos','resistencia_dano','pericia'
            ,'acao','teste_resistencia','acao_lendaria','reacao','equipamentos',
        'vulnerabilidades','imunidades']);
  
      return res.send({ project });

    } catch (err) {
      return res.status(400).send({ error: 'Error loading project' });
    }
  });

module.exports = app => app.use('/monster',router);

