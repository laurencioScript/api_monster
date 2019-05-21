    const allParms = ['Monster', 'tracos','idiomas','sentidos','resistencia_dano','pericia' ,'acao','teste_resistencia','acao_lendaria','reacao','equipamentos', 'vulnerabilidades','imunidades','atributo','deslocamento'];
    const factory = require('./../models/Factory');
    const Monster = require('./class/Monster');
    const express = require('express');   
    const router = express.Router();
    const manipulador = require('./utility');
    
    /** FACTORY POSSUI TODAS AS MODELS  **/

    // Serve para inserir os monstros que vem do Json no Banco de Dados
    router.post('/register', async (req,res)=>{
        try {  
                        
            
            const monstros = req.body;
            
            for(var x =0;x<monstros.length;x++){

                const { nome,tipo,desafio,xp,tamanho,tendencia,ca,pv, atributo,
                        deslocamento,tracos,idiomas,sentidos,resistencia_dano,
                        teste_resistencia,pericia,vulnerabilidades,imunidades,acao,acaoLendarias,
                        reacao,equipamentos } = monstros[x];
                console.log(nome);
                const monster = await factory.Monster.create({ nome,desafio,pv,ca,tipo,xp,tamanho,tendencia});
                    
                const monsterAtributos = new factory.Atributo({ ...atributo , monster: monster._id });
                await monsterAtributos.save();
                monster.atributo = monsterAtributos;
                
                const monsterDeslocamento = new factory.Deslocamento({ ...deslocamento , monster: monster._id });
                await monsterDeslocamento.save();               
                monster.deslocamento = monsterDeslocamento;
            
                if(tracos != undefined && tracos )
                    await Promise.all(tracos.map(async tracos => {
                        if(tracos['tipo'] != ""){
                            const monsterTracos = new factory.Traco({ "tipo":tracos['tipo'],"descricao":tracos['descricao'], monster: monster._id });
                
                            await monsterTracos.save();
                    
                            monster.tracos.push(monsterTracos);
                        }
                        
                    }));
        
                if(pericia != undefined)    
                    await Promise.all(pericia.map(async pericia => {
                        if(pericia['tipo'] != ""){
                            const monsterPericia = new factory.Pericia({ "tipo":pericia['tipo'],"valor":pericia['valor'], monster: monster._id });
                
                            await monsterPericia.save();
                    
                            monster.pericia.push(monsterPericia);
                        }
                        
                    }));
        
                if(idiomas != undefined)    
                    await Promise.all(idiomas.map(async idiomas => {
                        
                        if(idiomas != ""){
                            const monsterIdioma = new factory.Idioma({ "idioma":idiomas, monster: monster._id });
                
                            await monsterIdioma.save();
                    
                            monster.idioma.push(monsterIdioma);
                        }

                        
                    }));
        
                if(sentidos != undefined)
                    await Promise.all(sentidos.map(async sentidos => {
                        
                        if(sentidos['tipo'] != ""){
                            const monsterSentido = new factory.Sentido({ "tipo":sentidos['tipo'],"valor":sentidos['valor'], monster: monster._id });
                
                            await monsterSentido.save();
                    
                            monster.sentido.push(monsterSentido);
                        }
                        
                    }));
        
                if(resistencia_dano != undefined)
                    await Promise.all(resistencia_dano.map(async resistencia_dano => {
                        if(resistencia_dano != ""){
                            const monsterResistenciaDano = new factory.RT_Dano({ "resistencia_dano":resistencia_dano, monster: monster._id });
                
                            await monsterResistenciaDano.save();
                    
                            monster.resistencia_dano.push(monsterResistenciaDano);
                        }
                        
                    }));
        
                if(teste_resistencia != undefined)
                    await Promise.all(teste_resistencia.map(async teste_resistencia => {
                        if(teste_resistencia['tipo'] != ""){
                            const monsterTeste = new factory.Teste_RT({ "tipo":teste_resistencia['tipo'],"valor":teste_resistencia['valor'], monster: monster._id });
                
                            await monsterTeste.save();
                    
                            monster.teste_resistencia.push(monsterTeste);
                        }
                        
                    }));
        
                if(vulnerabilidades != undefined)
                    await Promise.all(vulnerabilidades.map(async vulnerabilidades => {
                        if(vulnerabilidades != ""){
                            const monsterVulnerabilidades = new factory.Vulnerabilidade({ "vulnerabilidade":vulnerabilidades, monster: monster._id });
                
                            await monsterVulnerabilidades.save();
                    
                            monster.vulnerabilidade.push(monsterVulnerabilidades);
                        }
                        
                    }));
        
                if(imunidades != undefined)
                    await Promise.all(imunidades.map(async imunidades => {
                        if(imunidades != ""){
                            const monsterImunidade = new factory.Imunidade({ "imunidade":imunidades, monster: monster._id });
                
                            await monsterImunidade.save();
                    
                            monster.imunidade.push(monsterImunidade);
                        }
                        
                    }));
        
                if(acao != undefined)
                    await Promise.all(acao.map(async acao => {
                        if(acao['tipo'] != ""){
                            const monsterAcao = new factory.Acao({ "tipo":acao['tipo'],"descricao":acao['descricao'], monster: monster._id });
                
                            await monsterAcao.save();
                    
                            monster.acao.push(monsterAcao);
                        }
                        
                    }));
        
                if(acaoLendarias != undefined)
                    await Promise.all(acaoLendarias.map(async acaoLendarias => {
                        if(acaoLendarias['tipo'] != ""){
                            const monsterLendaria = new factory.AcaoLendaria({ "tipo":acaoLendarias['tipo'],"descricao":acaoLendarias['descricao'], monster: monster._id });
                            await monsterLendaria.save();
                            monster.acao_lendaria.push(monsterLendaria);
                        }
                        
                    }));
        
                if(reacao != undefined)
                    await Promise.all(reacao.map(async reacao => {
                        if(reacao['tipo'] != ""){
                            const monsterReacao = new factory.Reacao({"tipo":reacao['tipo'],"descricao":reacao['descricao'], monster: monster._id });
                
                            await monsterReacao.save();
                    
                            monster.reacao.push(monsterReacao);
                        }
                        
                    }));
        
                if(equipamentos != undefined)
                    await Promise.all(equipamentos.map(async equipamentos => {
                        if(equipamentos != ""){
                            const monsterEquipamento = new factory.Equipamento({"equipamento":equipamentos, monster: monster._id });
                           
                            await monsterEquipamento.save();
                    
                            monster.equipamento.push(monsterEquipamento);
                        }
                        
                    }));
        
                await monster.save();
                res.statusMessage = "esta sendo processado";
            }
            
            return  res.send({"status":200});
                
        } catch (err) {
            return res.status(400).send({ error: err+'' });
        }
    });

    router.get('/getMonstroId', async (req, res) => {
        try 
        {
            let monstro = await factory.Monster.findById(req.query.id).populate(allParms);
            
            monstro =  new Monster(monstro) ;

            return res.send({"monstro":monstro });

        } catch (err) {
            manipulador.getError(res,err);       
        }
    });

    router.get('/getMonstroName', async (req, res) => {
        try {

            const monstros = await factory.Monster.find({"nome":{$regex: '.*' + req.query.name + '.*'}}).populate(allParms);
            let saida = []; 

            monstros.map(async monstro =>{
                saida.push(new Monster(monstro));
            })
            
            return res.send({ "count":saida.length,"Monstros":saida });

        } catch (err) {
            manipulador.getError(res,err);
        }
    });

    router.get('/getMonstro', async (req, res) => {
        try {
            const obj = manipulador.getObjParams(req.query);

            const monstro = await factory.Monster.find(obj,{nome:1,desafio:1,pv:1,ca:1,tipo:1,tamanho:1,}).sort({nome:1})
        
            return res.send({ "Count":monstro.length,"Monstros":monstro });

        } catch (err) {
            manipulador.getError(res,err);
        }
    });

    router.get('/getAtrib', async (req, res) => {
        try {
            const obj = manipulador.getObjParams(req.query);  let monsters = [];
            
            const atribs = await factory.Atributo.find(obj);
    
            for(let cont = 0; cont < atribs.length; cont++){
                                
                const monstro = await factory.Monster.findById(atribs[cont]['monster']);
                
                monsters.push({
                    "id":monstro['_id'],"nome":monstro['nome'],
                    "Força":atribs[cont]['forca'],"Destreza":atribs[cont]['destreza'],"Constituição":atribs[cont]['constituicao'],
                    "Inteligencia":atribs[cont]['inteligencia'],"Sabedoria":atribs[cont]['sabedoria'],"Carisma":atribs[cont]['carisma']
                })
            }

            return res.send({ "Count":monsters.length,"Monstros":monsters });
  
        } catch (err) {
            manipulador.getError(res,err);
        }
    });
    
    router.get('/getDesloc', async (req, res) => {
        try {
            const obj = manipulador.getObjParams(req.query);  let monsters = [];
            
            const desloc = await factory.Deslocamento.find(obj);
    
            for(let cont=0;cont<desloc.length;cont++){
                                
                const monstro = await factory.Monster.findById(desloc[cont]['monster']);
                
                monsters.push({
                    "id":monstro['_id'],"nome":monstro['nome'],
                    "Escalada":desloc[cont]['escalada'],"Voo":desloc[cont]['voo'],"Escavacão":desloc[cont]['escavacao'],
                    "Natação":desloc[cont]['natacao'],"Deslocamento":desloc[cont]['deslocamento']
                })
            }

            return res.send({ "Count":monsters.length,"Monstros":monsters });
  
        } catch (err) {
            manipulador.getError(res,err);
        }
    });

    router.get('/getPericia', async (req, res) => {
        try {

            const obj = manipulador.getArrayParams(req.query);     
            //pega todos os monstros
            const monstros = await factory.Monster.find().populate(['Monster','pericia']);
            
            let output = Monster.listeMonstros(monstros,'pericia',obj); 

            return res.send({ "Count":output.length,"Monstros":output });
            
        } catch (err) {
            manipulador.getError(res,err);
        }
    });

    router.get('/getIdioma', async (req, res) => {
        try {

            const obj = manipulador.getArrayParams(req.query); 
            
            const monstro_input = await factory.Monster.find().populate(['Monster','idioma']);
            
            const monstro_output = Monster.listeMonstros(monstro_input,'idioma',obj);
            
            return res.send({ "Count":monstro_output.length,"Monstros":monstro_output });
  
        } catch (err) {
            manipulador.getError(res,err);
        }
    });

    router.get('/getSentido', async (req, res) => {
        try {

            const obj = manipulador.getArrayParams(req.query); 
                 
            const monstro_input = await factory.Monster.find().populate(['Monster','sentido']);
            
            const monstro_output = Monster.listeMonstros(monstro_input,'sentido',obj);
            
            return res.send({ "Count":monstro_output.length,"Monstros":monstro_output });
  
        } catch (err) {
            manipulador.getError(res,err);
        }
    });

    router.get('/getResistenciaDano', async (req, res) => {
        try {

            const obj = manipulador.getArrayParams(req.query); 
            
            const monstro_input = await factory.Monster.find(null,{nome:1,_id:1}).populate(['Monster','resistencia_dano']);
         
            const monstro_output = Monster.listeMonstros(monstro_input,'resistencia_dano',obj);

            return res.send({ "Count":monstro_output.length,"Monstros":monstro_output });
  
        } catch (err) {
            manipulador.getError(res,err);
        }
    });

    router.get('/getTesteResistencia', async (req, res) => {
        try {

            const obj = manipulador.getArrayParams(req.query); 

            const monstro_input = await factory.Monster.find().populate(['Monster','teste_resistencia']);
            
            const monstro_output = Monster.listeMonstros(monstro_input,'teste_resistencia',obj);

            return res.send({ "Count":monstro_output.length,"Monstros":monstro_output });
  
        } catch (err) {
            manipulador.getError(res,err);
        }
    });

    router.get('/getVulnerabilidade', async (req, res) => {
        try {

            const obj = manipulador.getArrayParams(req.query); 

            const monstro_input = await factory.Monster.find().populate(['Monster','vulnerabilidade']);
            
            const monstro_output = Monster.listeMonstros(monstro_input,'vulnerabilidade',obj);

            return res.send({ "Count":monstro_output.length,"Monstros":monstro_output });
  
        } catch (err) {
            manipulador.getError(res,err);
        }
    });

    router.get('/getImunidade', async (req, res) => {
        try {

            const obj = manipulador.getArrayParams(req.query); 
        
            const monstro_input = await factory.Monster.find().populate(['Monster','imunidade']);
            
            const monstro_output = Monster.listeMonstros(monstro_input,'imunidade',obj);

            return res.send({ "Count":monstro_output.length,"Monstros":monstro_output });
  
        } catch (err) {
            manipulador.getError(res,err);
        }
    });

    router.get('/getEquipamento', async (req, res) => {
        try {

            const obj = manipulador.getArrayParams(req.query);
            
            const monstro_input = await factory.Monster.find().populate(['Monster','equipamento']);
            
            const monstro_output = Monster.listeMonstros(monstro_input,'equipamento',obj);

            return res.send({ "Count":monstro_output.length,"Monstros":monstro_output });
  
        } catch (err) {
            manipulador.getError(res,err);
        }
    });

   
    module.exports = app => app.use('/monster',router);