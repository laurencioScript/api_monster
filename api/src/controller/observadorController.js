const Monster = require('./../models/monster');
const express = require('express');   
const router = express.Router();

router.get('/getAllTipo/', async (req, res) => {
    try {

        const monstro_input = await Monster.find(null,{tipo:1}).populate(['Monster']);
        let original = [];
        let ocorrencias = [];
        let saida = [];

        for(let cont=0;cont<monstro_input.length;cont++){
            if(original.indexOf(monstro_input[cont]['tipo'])==-1){
                original.push(monstro_input[cont]['tipo']);
                ocorrencias.push(1);
            }
            else{
                ocorrencias[original.indexOf(monstro_input[cont]['tipo'])] +=1;
            }
            
        }

        for(let cont=0;cont<original.length;cont++){
            saida.push({"Tipo":original[cont],"Quantidade":ocorrencias[cont]});
        }

        return res.send({ "Count":saida.length,"Tipos":saida });
        

    } catch (err) {
        return res.status(400).send({ error: 'Error loading getTipo '+err });
    }
});

router.get('/getAllSentidos/', async (req, res) => {
    try {

        const monstros = await Monster.find(null,{tipo:1}).populate(['Monster','sentidos']);
        let original = []; let ocorrencias = []; let saida = [];

        for(let cont=0;cont<monstros.length;cont++){
            if(monstros[cont]['sentidos']!=undefined){
                for(let index=0;index<monstros[cont]['sentidos'].length;index++){
                    if(original.indexOf(monstros[cont]['sentidos'][index]['tipo'])==-1){
                        original.push(monstros[cont]['sentidos'][index]['tipo']);
                        ocorrencias.push(1);
                    }
                    else{
                        ocorrencias[original.indexOf(monstros[cont]['sentidos'][index]['tipo'])] +=1;
                    }
                }
            }        
        }
        
        for(let cont=0;cont<original.length;cont++){
            saida.push({"Sentido":original[cont],"Quantidade":ocorrencias[cont]});
        }

        return res.send({ "Count":saida.length,"Sentidos":saida });
        

    } catch (err) {
        return res.status(400).send({ error: 'Error loading getSentidos '+err });
    }
});

router.get('/getAllPericias/', async (req, res) => {
    try {

        const monstros = await Monster.find(null,{tipo:1}).populate(['Monster','pericia']);
        let original = []; let ocorrencias = []; let saida = [];

        for(let cont=0;cont<monstros.length;cont++){
            if(monstros[cont]['pericia']!=undefined){
                for(let index=0;index<monstros[cont]['pericia'].length;index++){
                    if(original.indexOf(monstros[cont]['pericia'][index]['tipo'])==-1){
                        original.push(monstros[cont]['pericia'][index]['tipo']);
                        ocorrencias.push(1);
                    }
                    else{
                        ocorrencias[original.indexOf(monstros[cont]['pericia'][index]['tipo'])] +=1;
                    }
                }
            }        
        }
        
        for(let cont=0;cont<original.length;cont++){
            saida.push({"Pericia":original[cont],"Quantidade":ocorrencias[cont]});
        }

        return res.send({ "Count":saida.length,"Pericias":saida });
        

    } catch (err) {
        return res.status(400).send({ error: 'Error loading getPericia '+err });
    }
});

router.get('/getAllImunidades/', async (req, res) => {
    try {

        const monstros = await Monster.find(null,{tipo:1}).populate(['Monster','imunidades']);
        let original = []; let ocorrencias = []; let saida = [];

        for(let cont=0;cont<monstros.length;cont++){
            if(monstros[cont]['imunidades']!=undefined){
                for(let index=0;index<monstros[cont]['imunidades'].length;index++){
                    if(original.indexOf(monstros[cont]['imunidades'][index]['imunidade'])==-1){
                        original.push(monstros[cont]['imunidades'][index]['imunidade']);
                        ocorrencias.push(1);
                    }
                    else{
                        ocorrencias[original.indexOf(monstros[cont]['imunidades'][index]['imunidade'])] +=1;
                    }
                }
            }        
        }
        
        for(let cont=0;cont<original.length;cont++){
            saida.push({"Imunidade":original[cont],"Quantidade":ocorrencias[cont]});
        }

        return res.send({ "Count":saida.length,"Imunidades":saida });
        

    } catch (err) {
        return res.status(400).send({ error: 'Error loading getAllImunidade '+err });
    }
});

router.get('/getAllVulnerabilidades/', async (req, res) => {
    try {

        const monstros = await Monster.find(null,{tipo:1}).populate(['Monster','vulnerabilidade']);
        let original = []; let ocorrencias = []; let saida = [];

        for(let cont=0;cont<monstros.length;cont++){
            if(monstros[cont]['vulnerabilidade']!=undefined){
                for(let index=0;index<monstros[cont]['vulnerabilidade'].length;index++){
                    if(original.indexOf(monstros[cont]['vulnerabilidade'][index]['vulnerabilidade'])==-1){
                        original.push(monstros[cont]['vulnerabilidade'][index]['vulnerabilidade']);
                        ocorrencias.push(1);
                    }
                    else{
                        ocorrencias[original.indexOf(monstros[cont]['vulnerabilidade'][index]['vulnerabilidade'])] +=1;
                    }
                }
            }        
        }
        
        for(let cont=0;cont<original.length;cont++){
            saida.push({"Vulnerabilidade":original[cont],"Quantidade":ocorrencias[cont]});
        }

        return res.send({ "Count":saida.length,"Vulnerabilidades":saida });
        

    } catch (err) {
        return res.status(400).send({ error: 'Error loading getAllVulnerabilidades'+err });
    }
});

router.get('/getAllIdiomas/', async (req, res) => {
    try {

        const monstros = await Monster.find(null,{tipo:1}).populate(['Monster','idioma']);
        let original = []; let ocorrencias = []; let saida = [];

        for(let cont=0;cont<monstros.length;cont++){
            if(monstros[cont]['idioma']!=undefined){
                for(let index=0;index<monstros[cont]['idioma'].length;index++){
                    if(original.indexOf(monstros[cont]['idioma'][index]['idioma'])==-1){
                        original.push(monstros[cont]['idioma'][index]['idioma']);
                        ocorrencias.push(1);
                    }
                    else{
                        ocorrencias[original.indexOf(monstros[cont]['idioma'][index]['idioma'])] +=1;
                    }
                }
            }        
        }
        
        for(let cont=0;cont<original.length;cont++){
            saida.push({"Idioma":original[cont],"Quantidade":ocorrencias[cont]});
        }

        return res.send({ "Count":saida.length,"Idiomas":saida });
        

    } catch (err) {
        return res.status(400).send({ error: 'Error loading getAllIdiomas '+err });
    }
});

router.get('/getAllReacoes/', async (req, res) => {
    try {

        const monstros = await Monster.find(null,{tipo:1}).populate(['Monster','reacao']);
        let original = []; let ocorrencias = []; let saida = [];
        
        for(let cont=0;cont<monstros.length;cont++){
            if(monstros[cont]['reacao']!=undefined){
                for(let index=0;index<monstros[cont]['reacao'].length;index++){
                    if(original.indexOf(monstros[cont]['reacao'][index]['tipo'])==-1){
                        original.push(monstros[cont]['reacao'][index]['tipo']);
                        ocorrencias.push(1);
                    }
                    else{
                        ocorrencias[original.indexOf(monstros[cont]['reacao'][index]['tipo'])] +=1;
                    }
                }
            }        
        }
        
        for(let cont=0;cont<original.length;cont++){
            saida.push({"reação":original[cont],"Quantidade":ocorrencias[cont]});
        }

        return res.send({ "Count":saida.length,"Reações":saida });
        

    } catch (err) {
        return res.status(400).send({ error: 'Error loading getAllReacoes '+err });
    }
});

router.get('/getAllEquipamentos/', async (req, res) => {
    try {

        const monstros = await Monster.find(null,{tipo:1}).populate(['Monster','equipamento']);
        let original = []; let ocorrencias = []; let saida = [];

        for(let cont=0;cont<monstros.length;cont++){
            if(monstros[cont]['equipamento']!=undefined){
                for(let index=0;index<monstros[cont]['equipamento'].length;index++){
                    if(original.indexOf(monstros[cont]['equipamento'][index]['equipamento'])==-1){
                        original.push(monstros[cont]['equipamento'][index]['equipamento']);
                        ocorrencias.push(1);
                    }
                    else{
                        ocorrencias[original.indexOf(monstros[cont]['equipamento'][index]['equipamento'])] +=1;
                    }
                }
            }        
        }
        
        for(let cont=0;cont<original.length;cont++){
            saida.push({"Equipamento":original[cont],"Quantidade":ocorrencias[cont]});
        }

        return res.send({ "Count":saida.length,"Equipamentos":saida });
        

    } catch (err) {
        return res.status(400).send({ error: 'Error loading getAllEquipamento '+err });
    }
});

router.get('/getAllResistenciaDano/', async (req, res) => {
    try {

        const monstros = await Monster.find(null,{tipo:1}).populate(['Monster','resistencia_dano']);
        let original = []; let ocorrencias = []; let saida = [];

        for(let cont=0;cont<monstros.length;cont++){
            if(monstros[cont]['resistencia_dano']!=undefined){
                for(let index=0;index<monstros[cont]['resistencia_dano'].length;index++){
                    if(original.indexOf(monstros[cont]['resistencia_dano'][index]['resistencia_dano'])==-1){
                        original.push(monstros[cont]['resistencia_dano'][index]['resistencia_dano']);
                        ocorrencias.push(1);
                    }
                    else{
                        ocorrencias[original.indexOf(monstros[cont]['resistencia_dano'][index]['resistencia_dano'])] +=1;
                    }
                }
            }        
        }
        
        for(let cont=0;cont<original.length;cont++){
            saida.push({"ResistenciaDano":original[cont],"Quantidade":ocorrencias[cont]});
        }

        return res.send({ "Count":saida.length,"Resistencias de Dano":saida });
        

    } catch (err) {
        return res.status(400).send({ error: 'Error loading getAllResistenciaDano '+err });
    }
});

module.exports = app => app.use('/analise',router);

