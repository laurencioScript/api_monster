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
    
    const express = require('express');   
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

   
                const monster = await Monster.create({ nome,desafio,pv,ca,tipo,xp,tamanho,tendencia});
            
                const monsterAtributos = new Atributo({ ...atributo , monster: monster._id });
    
                const monsterDeslocamento = new Deslocamento({ ...deslocamento , monster: monster._id });
            
                await monsterAtributos.save();
                
                await monsterDeslocamento.save();               
          
                if(tracos != undefined && tracos )
                    await Promise.all(tracos.map(async tracos => {
                        if(tracos['tipo'] != ""){
                            const monsterTracos = new Traco({ "tipo":tracos['tipo'],"descricao":tracos['descricao'], monster: monster._id });
                
                            await monsterTracos.save();
                    
                            monster.tracos.push(monsterTracos);
                        }
                        
                    }));
        
                if(pericia != undefined)    
                    await Promise.all(pericia.map(async pericia => {
                        if(pericia['tipo'] != ""){
                            const monsterPericia = new Pericia({ "tipo":pericia['tipo'],"valor":pericia['valor'], monster: monster._id });
                
                            await monsterPericia.save();
                    
                            monster.pericia.push(monsterPericia);
                        }
                        
                    }));
        
                if(idiomas != undefined)    
                    await Promise.all(idiomas.map(async idiomas => {
                        
                        if(idiomas != ""){
                            const monsterIdioma = new Idioma({ "idioma":idiomas, monster: monster._id });
                
                            await monsterIdioma.save();
                    
                            monster.idiomas.push(monsterIdioma);
                        }

                        
                    }));
        
                if(sentidos != undefined)
                    await Promise.all(sentidos.map(async sentidos => {
                        
                        if(sentidos['tipo'] != ""){
                            const monsterSentido = new Sentido({ "tipo":sentidos['tipo'],"valor":sentidos['valor'], monster: monster._id });
                
                            await monsterSentido.save();
                    
                            monster.sentidos.push(monsterSentido);
                        }
                        
                    }));
        
                if(resistencia_dano != undefined)
                    await Promise.all(resistencia_dano.map(async resistencia_dano => {
                        if(resistencia_dano != ""){
                            const monsterResistenciaDano = new RT_Dano({ "resistencia_dano":resistencia_dano, monster: monster._id });
                
                            await monsterResistenciaDano.save();
                    
                            monster.resistencia_dano.push(monsterResistenciaDano);
                        }
                        
                    }));
        
                if(teste_resistencia != undefined)
                    await Promise.all(teste_resistencia.map(async teste_resistencia => {
                        if(teste_resistencia['tipo'] != ""){
                            const monsterTeste = new Teste_RT({ "tipo":teste_resistencia['tipo'],"valor":teste_resistencia['valor'], monster: monster._id });
                
                            await monsterTeste.save();
                    
                            monster.teste_resistencia.push(monsterTeste);
                        }
                        
                    }));
        
                if(vulnerabilidades != undefined)
                    await Promise.all(vulnerabilidades.map(async vulnerabilidades => {
                        if(vulnerabilidades != ""){
                            const monsterVulnerabilidades = new Vulnerabilidade({ "vulnerabilidade":vulnerabilidades, monster: monster._id });
                
                            await monsterVulnerabilidades.save();
                    
                            monster.vulnerabilidades.push(monsterVulnerabilidades);
                        }
                        
                    }));
        
                if(imunidades != undefined)
                    await Promise.all(imunidades.map(async imunidades => {
                        if(imunidades != ""){
                            const monsterImunidade = new Imunidade({ "imunidade":imunidades, monster: monster._id });
                
                            await monsterImunidade.save();
                    
                            monster.imunidades.push(monsterImunidade);
                        }
                        
                    }));
        
                if(acao != undefined)
                    await Promise.all(acao.map(async acao => {
                        if(acao['tipo'] != ""){
                            const monsterAcao = new Acao({ "tipo":acao['tipo'],"descricao":acao['descricao'], monster: monster._id });
                
                            await monsterAcao.save();
                    
                            monster.acao.push(monsterAcao);
                        }
                        
                    }));
        
                if(acao_lendaria != undefined)
                    await Promise.all(acao_lendaria.map(async acao_lendaria => {
                        if(acao_lendaria['tipo'] != ""){
                            const monsterLendaria = new AcaoLendaria({ "tipo":acaoLendaria['tipo'],"descricao":acaoLendaria['descricao'], monster: monster._id });
                
                            await monsterLendaria.save();
                    
                            monster.acao_lendaria.push(monsterLendaria);
                        }
                        
                    }));
        
                if(reacao != undefined)
                    await Promise.all(reacao.map(async reacao => {
                        if(reacao['tipo'] != ""){
                            const monsterReacao = new Reacao({"tipo":reacao['tipo'],"descricao":reacao['descricao'], monster: monster._id });
                
                            await monsterReacao.save();
                    
                            monster.reacao.push(monsterReacao);
                        }
                        
                    }));
        
                if(equipamentos != undefined)
                    await Promise.all(equipamentos.map(async equipamentos => {
                        if(equipamentos != ""){
                            const monsterEquipamento = new Equipamento({"equipamento":equipamentos, monster: monster._id });
                           
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

    router.get('/getMonsterId=:monstroId', async (req, res) => {
        try {

        const monstro = await Monster.findById(req.params.monstroId).populate(
            ['Monster', 'tracos','idiomas','sentidos','resistencia_dano','pericia'
                ,'acao','teste_resistencia','acao_lendaria','reacao','equipamentos',
            'vulnerabilidades','imunidades']);
            
        return res.send({ monstro });

        } catch (err) {
        
            return res.status(400).send({ error: 'Error loading monstro'+err });
        
        }
    });

    router.get('/getMonsterName=:monstroName', async (req, res) => {
        try {

            const monstro = await Monster.find({"nome":req.params.monstroName}).populate(
                ['Monster', 'tracos','idiomas','sentidos','resistencia_dano','pericia'
                    ,'acao','teste_resistencia','acao_lendaria','reacao','equipamentos',
                'vulnerabilidades','imunidades']);
        
            return res.send({ monstro });

        } catch (err) {
        return res.status(400).send({ error: 'Error loading monstro, a' });
        }
    });

    router.get('/getMonster=:tipo,:tamanho,:desafio,:tendencia,:ca,:pv', async (req, res) => {
        try {
            let obj = {};
            
            if(req.params.tipo != "" && req.params.tipo != "null"){
                obj['tipo'] = req.params.tipo;
            }
            if(req.params.tamanho != "" && req.params.tamanho != "null"){
                obj['tamanho'] = req.params.tamanho;
            }
            if(req.params.desafio != undefined && req.params.desafio != "null"){
                obj['desafio'] = req.params.desafio;
            }
            if(req.params.tendencia != undefined && req.params.tendencia != "null"){
                obj['tendencia'] = req.params.tendencia;
            }
            if(req.params.ca != undefined && req.params.ca != "null"){
                obj['ca'] = req.params.ca;
            }
            if(req.params.pv != undefined && req.params.pv != "null"){
                obj['pv'] = req.params.pv;
            }

            const monstro = await Monster.find(obj,{nome:1,desafio:1,pv:1,ca:1,tipo:1,tamanho:1,}).sort({nome:1})
        
            return res.send({ "Count":monstro.length,"Monstros":monstro });

        } catch (err) {
        return res.status(400).send({ error: 'Error loading monstro '+err });
        }
    });

    router.get('/getAtrib=:forca,:destreza,:constituicao,:inteligencia,:sabedoria,:carisma', async (req, res) => {
        try {
            let obj = {};

            if(req.params.forca != "" && req.params.forca != "null"){
                obj['forca'] = parseInt(req.params.forca) ;
            }
            if(req.params.destreza != "" && req.params.destreza != "null"){
                obj['destreza'] = req.params.destreza;
            }
            if(req.params.constituicao != undefined && req.params.constituicao != "null"){
                obj['constituicao'] = req.params.constituicao;
            }
            if(req.params.inteligencia != undefined && req.params.inteligencia != "null"){
                obj['inteligencia'] = req.params.inteligencia;
            }
            if(req.params.sabedoria != undefined && req.params.sabedoria != "null"){
                obj['sabedoria'] = parseInt(req.params.sabedoria);
            }
            if(req.params.carisma != undefined && req.params.carisma != "null"){
                obj['carisma'] = req.params.carisma;
            }
            
            let monsters = [];
            
            const atribs = await Atributo.find(obj);
    
            for(let cont=0;cont<atribs.length;cont++){
                                
                const monstro = await Monster.findById(atribs[cont]['monster']);
                
                monsters.push({
                    "id":monstro['_id'],"nome":monstro['nome'],
                    "Força":atribs[cont]['forca'],"Destreza":atribs[cont]['destreza'],"Escavacão":atribs[cont]['escavacao'],
                    "Inteligencia":atribs[cont]['inteligencia'],"Sabedoria":atribs[cont]['sabedoria'],"Carisma":atribs[cont]['carisma']
                })
            }

            return res.send({ "Count":monsters.length,"Monstros":monsters });
  
        } catch (err) {
            return res.status(400).send({ error: 'Error loading monstro '+err });
        }
    });
    
    router.get('/getDesloc=:escalada,:voo,:escavacao,:natacao,:deslocamento', async (req, res) => {
        try {
            let obj = {};

            if(req.params.escalada != "" && req.params.escalada != "null"){
                obj['escalada'] = parseInt(req.params.escalada) ;
            }
            if(req.params.voo != "" && req.params.voo != "null"){
                obj['voo'] = req.params.voo;
            }
            if(req.params.escavacao != undefined && req.params.escavacao != "null"){
                obj['escavacao'] = req.params.escavacao;
            }
            if(req.params.natacao != undefined && req.params.natacao != "null"){
                obj['natacao'] = req.params.natacao;
            }
            if(req.params.deslocamento != undefined && req.params.deslocamento != "null"){
                obj['deslocamento'] = parseInt(req.params.deslocamento);
            }
            
            let monsters = [];
            
            const desloc = await Deslocamento.find(obj);
    
            for(let cont=0;cont<desloc.length;cont++){
                                
                const monstro = await Monster.findById(desloc[cont]['monster']);
                
                monsters.push({
                    "id":monstro['_id'],"nome":monstro['nome'],
                    "Escalada":desloc[cont]['escalada'],"Voo":desloc[cont]['voo'],"Escavacão":desloc[cont]['escavacao'],
                    "Natação":desloc[cont]['natacao'],"Deslocamento":desloc[cont]['deslocamento']
                })
            }

            return res.send({ "Count":monsters.length,"Monstros":monsters });
  
        } catch (err) {
            return res.status(400).send({ error: 'Error loading getDesloc '+err });
        }
    });

    router.get('/getPericia=:parms1,:parms2,:parms3', async (req, res) => {
        try {

            let obj = {};   let i = 0;  let j = 0;  let monstro_output = []; let tempo =[];
                   
            if(req.params.parms1 != "" && req.params.parms1 != "null"){
                i++;
                obj['parms'+i] = req.params.parms1 ;                
            }
            if(req.params.parms2 != "" && req.params.parms2 != "null"){
                i++;
                obj['parms'+i] = req.params.parms2 ;
            }
            if(req.params.parms3 != "" && req.params.parms3 != "null"){
                i++;
                obj['parms'+i] = req.params.parms3 ;
            }

            
            const monstro_input = await Monster.find().populate(['Monster','pericia']);

            for(let cont=0;cont<monstro_input.length;cont++){
                                
                for(let x=0;x<monstro_input[cont]['pericia'].length;x++){
                    
                    j = i;
                    tempo.push({"tipo":monstro_input[cont]['pericia'][x]['tipo'],"bonus":monstro_input[cont]['pericia'][x]['valor']});
                    if(obj['parms1'] != undefined && monstro_input[cont]['pericia'][x]['tipo'] == obj['parms1'] )
                        j--;
                    
                    else if(obj['parms2'] != undefined && monstro_input[cont]['pericia'][x]['tipo'] == obj['parms2'])
                        j--;
                    
                    else if(obj['parms3'] != undefined && monstro_input[cont]['pericia'][x]['tipo'] == obj['parms3'])
                        j--;
                    
                    if(j === 0)
                        monstro_output.push({"id":monstro_input[cont]['_id'],"nome":monstro_input[cont]['nome'],"pericias":tempo});
                    
                }
                    
            };

            return res.send({ "Count":monstro_output.length,"Monstros":monstro_output });
  
        } catch (err) {
            return res.status(400).send({ error: 'Error loading getPericia '+err });
        }
    });

    router.get('/getIdioma=:parms1,:parms2,:parms3', async (req, res) => {
        try {

            let obj = {};   let i = 0;  let j = 0;  let monstro_output = []; let tempo =[];
                   
            if(req.params.parms1 != "" && req.params.parms1 != "null"){
                i++;
                obj['parms'+i] = req.params.parms1 ;                
            }
            if(req.params.parms2 != "" && req.params.parms2 != "null"){
                i++;
                obj['parms'+i] = req.params.parms2 ;
            }
            if(req.params.parms3 != "" && req.params.parms3 != "null"){
                i++;
                obj['parms'+i] = req.params.parms3 ;
            }
        
            
            const monstro_input = await Monster.find().populate(['Monster','idiomas']);
            
            for(let cont=0;cont < monstro_input.length;cont++){
                
                tempo = []         
                
                for(let x=0;x<monstro_input[cont]['idiomas'].length;x++){
                    j = i;
                   
                    tempo.push({"idioma":monstro_input[cont]['idiomas'][x]['idioma']});
                    
                    if(obj['parms1'] != undefined && monstro_input[cont]['idiomas'][x]['idioma'] == obj['parms1'] )
                    {
                        
                        j--;
                    }
                    if(obj['parms2'] != undefined && monstro_input[cont]['idiomas'][x]['idioma'] == obj['parms2'])
                    {
                        j--;
                    }
                    if(obj['parms3'] != undefined && monstro_input[cont]['idiomas'][x]['idioma'] == obj['parms3'])
                    {
                        j--;
                    }
                    if(j === 0)
                    {
                        
                        monstro_output.push({"id":monstro_input[cont]['_id'],"nome":monstro_input[cont]['nome'],"idiomas":tempo});
                    }
                    
                        
                }
                    
            };

            return res.send({ "Count":monstro_output.length,"Monstros":monstro_output });
  
        } catch (err) {
            return res.status(400).send({ error: 'Error loading getPericia '+err });
        }
    });

    router.get('/getSentido=:parms1,:parms2,:parms3', async (req, res) => {
        try {

            let obj = {};   let i = 0;  let j = 0;  let monstro_output = []; let tempo =[];
                   
            if(req.params.parms1 != "" && req.params.parms1 != "null"){
                i++;
                obj['parms'+i] = req.params.parms1 ;                
            }
            if(req.params.parms2 != "" && req.params.parms2 != "null"){
                i++;
                obj['parms'+i] = req.params.parms2 ;
            }
            if(req.params.parms3 != "" && req.params.parms3 != "null"){
                i++;
                obj['parms'+i] = req.params.parms3 ;
            }
                 
            const monstro_input = await Monster.find().populate(['Monster','sentidos']);
            
            for(let cont=0;cont < monstro_input.length;cont++){
                
                tempo = []         
                
                for(let x=0;x<monstro_input[cont]['sentidos'].length;x++){
                    j = i;
                   
                    tempo.push({"tipo":monstro_input[cont]['sentidos'][x]['tipo'],"alcance":monstro_input[cont]['sentidos'][x]['valor']});
                    
                    if(obj['parms1'] != undefined && monstro_input[cont]['sentidos'][x]['tipo'] == obj['parms1'] )
                    {
                        
                        j--;
                    }
                    if(obj['parms2'] != undefined && monstro_input[cont]['sentidos'][x]['tipo'] == obj['parms2'])
                    {
                        j--;
                    }
                    if(obj['parms3'] != undefined && monstro_input[cont]['sentidos'][x]['tipo'] == obj['parms3'])
                    {
                        j--;
                    }
                    if(j === 0)
                    {
                        
                        monstro_output.push({"id":monstro_input[cont]['_id'],"nome":monstro_input[cont]['nome'],"sentidos":tempo});
                    }
                    
                        
                }
                    
            };

            return res.send({ "Count":monstro_output.length,"Monstros":monstro_output });
  
        } catch (err) {
            return res.status(400).send({ error: 'Error loading getPericia '+err });
        }
    });

    router.get('/getResistenciaDano=:parms1,:parms2,:parms3', async (req, res) => {
        try {

            let obj = {};   let i = 0;  let j = 0;  let monstro_output = []; let tempo =[];
                   
            if(req.params.parms1 != "" && req.params.parms1 != "null"){
                i++;
                obj['parms'+i] = req.params.parms1 ;                
            }
            if(req.params.parms2 != "" && req.params.parms2 != "null"){
                i++;
                obj['parms'+i] = req.params.parms2 ;
            }
            if(req.params.parms3 != "" && req.params.parms3 != "null"){
                i++;
                obj['parms'+i] = req.params.parms3 ;
            }
        
            
            const monstro_input = await Monster.find(null,{nome:1,_id:1}).populate(['Monster','resistencia_dano']);
         
            for(let cont=0;cont < monstro_input.length;cont++){
                
                tempo = []         
                
                for(let x=0;x<monstro_input[cont]['resistencia_dano'].length;x++){
                    j = i;
                    
                    
                    tempo.push(monstro_input[cont]['resistencia_dano'][x]['resistencia_dano']);
                    
                    if(obj['parms1'] != undefined && monstro_input[cont]['resistencia_dano'][x]['resistencia_dano'] == obj['parms1'] )
                    {
                        
                        j--;
                    }
                    if(obj['parms2'] != undefined && monstro_input[cont]['resistencia_dano'][x]['resistencia_dano'] == obj['parms2'])
                    {
                        j--;
                    }
                    if(obj['parms3'] != undefined && monstro_input[cont]['resistencia_dano'][x]['resistencia_dano'] == obj['parms3'])
                    {
                        j--;
                    }
                    if(j === 0)
                    {
                        
                        monstro_output.push({"id":monstro_input[cont]['_id'],"nome":monstro_input[cont]['nome'],"resistencia_dano":tempo});
                    }
                    
                        
                }
                    
            };

            return res.send({ "Count":monstro_output.length,"Monstros":monstro_output });
  
        } catch (err) {
            return res.status(400).send({ error: 'Error loading getPericia '+err });
        }
    });

    router.get('/getTesteResistencia=:parms1,:parms2,:parms3', async (req, res) => {
        try {

            let obj = {};   let i = 0;  let j = 0;  let monstro_output = []; let tempo =[];
                   
            if(req.params.parms1 != "" && req.params.parms1 != "null"){
                i++;
                obj['parms'+i] = req.params.parms1 ;                
            }
            if(req.params.parms2 != "" && req.params.parms2 != "null"){
                i++;
                obj['parms'+i] = req.params.parms2 ;
            }
            if(req.params.parms3 != "" && req.params.parms3 != "null"){
                i++;
                obj['parms'+i] = req.params.parms3 ;
            }
        
            
            const monstro_input = await Monster.find().populate(['Monster','teste_resistencia']);
            
            for(let cont=0;cont < monstro_input.length;cont++){
                
                tempo = []         
                
                for(let x=0;x<monstro_input[cont]['teste_resistencia'].length;x++){
                    j = i;
                   
                    tempo.push({"resistencia":monstro_input[cont]['teste_resistencia'][x]['tipo'],"bonus":monstro_input[cont]['teste_resistencia'][x]['valor']});
                    
                    if(obj['parms1'] != undefined && monstro_input[cont]['teste_resistencia'][x]['tipo'] == obj['parms1'] )
                    {
                        
                        j--;
                    }
                    if(obj['parms2'] != undefined && monstro_input[cont]['teste_resistencia'][x]['tipo'] == obj['parms2'])
                    {
                        j--;
                    }
                    if(obj['parms3'] != undefined && monstro_input[cont]['teste_resistencia'][x]['tipo'] == obj['parms3'])
                    {
                        j--;
                    }
                    if(j === 0)
                    {
                        
                        monstro_output.push({"id":monstro_input[cont]['_id'],"nome":monstro_input[cont]['nome'],"teste_resistencia":tempo});
                    }
                    
                        
                }
                    
            };

            return res.send({ "Count":monstro_output.length,"Monstros":monstro_output });
  
        } catch (err) {
            return res.status(400).send({ error: 'Error loading getPericia '+err });
        }
    });

    router.get('/getImunidade=:parms1,:parms2,:parms3', async (req, res) => {
        try {

            let obj = {};   let i = 0;  let j = 0;  let monstro_output = []; let tempo =[];
                   
            if(req.params.parms1 != "" && req.params.parms1 != "null"){
                i++;
                obj['parms'+i] = req.params.parms1 ;                
            }
            if(req.params.parms2 != "" && req.params.parms2 != "null"){
                i++;
                obj['parms'+i] = req.params.parms2 ;
            }
            if(req.params.parms3 != "" && req.params.parms3 != "null"){
                i++;
                obj['parms'+i] = req.params.parms3 ;
            }
        
            
            const monstro_input = await Monster.find().populate(['Monster','imunidades']);
            
            for(let cont=0;cont < monstro_input.length;cont++){
                
                tempo = []         
                
                for(let x=0;x<monstro_input[cont]['imunidades'].length;x++){
                    j = i;
                   
                    tempo.push(monstro_input[cont]['imunidades'][x]['imunidade']);
                    
                    if(obj['parms1'] != undefined && monstro_input[cont]['imunidades'][x]['imunidade'] == obj['parms1'] )
                    {
                        
                        j--;
                    }
                    if(obj['parms2'] != undefined && monstro_input[cont]['imunidades'][x]['imunidade'] == obj['parms2'])
                    {
                        j--;
                    }
                    if(obj['parms3'] != undefined && monstro_input[cont]['imunidades'][x]['imunidade'] == obj['parms3'])
                    {
                        j--;
                    }
                    if(j === 0)
                    {
                        
                        monstro_output.push({"id":monstro_input[cont]['_id'],"nome":monstro_input[cont]['nome'],"imunidades":tempo});
                    }
                    
                        
                }
                    
            };

            return res.send({ "Count":monstro_output.length,"Monstros":monstro_output });
  
        } catch (err) {
            return res.status(400).send({ error: 'Error loading getPericia '+err });
        }
    });

    router.get('/getEquipamento=:parms1,:parms2,:parms3', async (req, res) => {
        try {

            let obj = {};   let i = 0;  let j = 0;  let monstro_output = []; let tempo =[];
                   
            if(req.params.parms1 != "" && req.params.parms1 != "null"){
                i++;
                obj['parms'+i] = req.params.parms1 ;                
            }
            if(req.params.parms2 != "" && req.params.parms2 != "null"){
                i++;
                obj['parms'+i] = req.params.parms2 ;
            }
            if(req.params.parms3 != "" && req.params.parms3 != "null"){
                i++;
                obj['parms'+i] = req.params.parms3 ;
            }
        
            
            const monstro_input = await Monster.find().populate(['Monster','equipamentos']);
            
            for(let cont=0;cont < monstro_input.length;cont++){
                
                tempo = []         
                
                for(let x=0;x<monstro_input[cont]['equipamentos'].length;x++){
                    j = i;
                   
                    tempo.push(monstro_input[cont]['equipamentos'][x]['equipamento']);
                    
                    if(obj['parms1'] != undefined && monstro_input[cont]['equipamentos'][x]['equipamento'] == obj['parms1'] )
                    {
                        
                        j--;
                    }
                    if(obj['parms2'] != undefined && monstro_input[cont]['equipamentos'][x]['equipamento'] == obj['parms2'])
                    {
                        j--;
                    }
                    if(obj['parms3'] != undefined && monstro_input[cont]['equipamentos'][x]['equipamento'] == obj['parms3'])
                    {
                        j--;
                    }
                    if(j === 0)
                    {
                        
                        monstro_output.push({"id":monstro_input[cont]['_id'],"nome":monstro_input[cont]['nome'],"equipamentos":tempo});
                    }
                    
                        
                }
                    
            };

            return res.send({ "Count":monstro_output.length,"Monstros":monstro_output });
  
        } catch (err) {
            return res.status(400).send({ error: 'Error loading getPericia '+err });
        }
    });

     /*
        getAllTipo()
        getAllSentidos()
        getAllPericias()
        getAllImunidades()
        getAllAçõesLendarias()
        getAllVulnerabilidades()
        getAllIdiomas()
        getALlReacoes()
        getAllEquipamentos()
        getAllResistenciaDano() 
    
    */


    
    module.exports = app => app.use('/monster',router);
