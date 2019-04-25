const Joi = require('joi')

class monstroRoutes{

    constructor(db){
        this.db = db
    }

    selectAll(){
       return {
            path:'/selectAll',
            method:'GET',
            
            config:{
                validate:{
                    failAction:(request,headers,erro)=>{
                        throw erro;
                    },
                    query:{
                        tipo:Joi.string(),
                        desafio:Joi.number().integer(),
                        tamanho:Joi.string()
                    }
                }
                
            },
            handler:(request,headers)=>{           
                const {tipo,tamanho,desafio} = request.query
                
                return this.db.selectAll(tipo,desafio.toString(),tamanho)
            }
        }       
    }
 
     selectEspecific(){
        return {
            path:'/selectEspecific',
            method:'GET',
            config:{
                validate:{
                    failAction:(request,headers,erro)=>{
                        throw erro;
                    },
                    query:{
                        name:Joi.string().required(),
                    }
                }
                
            },
            handler:(request,headers)=>{
                const {name} = request.query
                return this.db.selectEspecific(name)
            }
        }  
    }

    create(){
        return {
            path:'/create',
            method:'POST',
            config:{
                validate:{
                    failAction:(request,headers,erro)=>{
                        throw erro;
                    },
                    payload:{
                        nome:Joi.string().required().max(40),
                        tipo:Joi.string().required(),
                        desafio:Joi.number().integer().required(),
                        xp:Joi.string().required(),
                        tamanho:Joi.string().required(),
                        tendencia:Joi.string().required().max(2),
                        classe_armadura:Joi.number().integer().required(),
                        pontos_de_vida:Joi.string().required()
                        
                    }
                }
                
            },
            handler:async (request)=>{
                try{
                    const {nome,tipo,desafio,xp,tamanho,tendencia,classe_armadura,pontos_de_vida} = request.payload
                    
                    const result = await this.db.create({
                        nome:nome,
                        tipo:tipo,
                        desafio:desafio.toString(),
                        xp:xp,
                        tamanho:tamanho,
                        tendencia:tendencia,
                        classe_armadura:classe_armadura.toString(),
                        pontos_de_vida:pontos_de_vida
                    })
                }
                catch(error){
                    console.log('Deu ruim',error)
                    return "internal error!!!"
                }
                
            }
        }
    }




}



module.exports = monstroRoutes