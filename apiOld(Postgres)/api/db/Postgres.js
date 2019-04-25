const Sequelize = require('sequelize')

const monstroSchema = {
    name:'monstro',
    schema:{
        idmonstro:{
            type:Sequelize.INTEGER,
            require:true,
            primaryKey:true,
            autoIncrement:true,
            
        },
        nome:{
            type:Sequelize.TEXT,
            require:true
        },
        tipo:{
            type:Sequelize.TEXT,
            require:true
        },
        desafio:{
            type:Sequelize.TEXT,
            require:true
        },
        xp:{
            type:Sequelize.INTEGER,
            require:true
        },
        tamanho:{
            type:Sequelize.TEXT,
            require:true
        },
        tendencia:{
            type:Sequelize.TEXT,
            require:true
        },
        classe_armadura:{
            type:Sequelize.INTEGER,
            require:true
        },
        pontos_de_vida:{
            type:Sequelize.TEXT,
            require:true
        }
    
    },
    options:{
        tableName:'monstro',
        freezeTableName:false,
        timestamps:false
    }
}

const atributoSchema = {
    name:'atributos',
    schema:{
        idatributos:{
            type:Sequelize.INTEGER,
            require:true,
            primaryKey:true,
            autoIncrement:true
        },

        forca:{
            type:Sequelize.INTEGER,
            require:true
        },
        destreza:{
            type:Sequelize.INTEGER,
            require:true
        },
        constituicao:{
            type:Sequelize.INTEGER,
            require:true
        },
        inteligencia:{
            type:Sequelize.INTEGER,
            require:true
        },
        sabedoria:{
            type:Sequelize.INTEGER,
            require:true
        },
        Carisma:{
            type:Sequelize.INTEGER,
            require:true
        },

        monstroid:{

            type:Sequelize.INTEGER,
            references: {
                model: this.Monstro,
                key: 'idmonstro',
                deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
              }
        }
    },
    options:{
        tableName:'atributos',
        freezeTableName:false,
        timestamps:false
    }
}


class Postgres{
    
    constructor(){
        this.driver = null
        this.Monstro = null
        this.Atributo = null

        this._connect()

        console.log('db up')
    }

    async _defineModel(){
        this.Monstro = this.driver.define(monstroSchema['name'],monstroSchema['schema'],monstroSchema['options'])
    
        this.Atributos = this.driver.define(atributoSchema['name'],atributoSchema['schema'],atributoSchema['options'])

        await this.Monstro.sync();
        
        this.Monstro.hasMany(this.Atributos, { foreignKey: 'monstroid' })
    
    }

    _connect(){

        this.driver = new Sequelize(
            'monstros',
            'root',
            'root',
            {
                host:'192.168.99.100',
                dialect:'postgres',
                quoteIdentifiers:false,
                logging: false
                
            }
        )

        this._defineModel()
    }

    async selectAll(_tipo = '',_desafio = '',_tamanho=''){
       
       await this.Monstro.sync(); 
  
        let x = {}
        
        if(_tipo != '' && _tipo != null){
            x.tipo = _tipo
        }
        if(_desafio != '' && _desafio != null){
            x.desafio = _desafio
        }
        if(_tamanho != '' && _tamanho != null){
            x.tamanho = _tamanho
        }

        const result = await this.Monstro.findAll({
            where:x,
            raw:true
        
           
        })
          
        return result
    }

    async selectEspecific(_nome){
       
        const Op = Sequelize.Op
        await this.Monstro.sync(); 
        this.Monstro.hasMany(this.Atributos, { foreignKey: 'monstroid' })

        

        const result = await this.Monstro.findAll({
            where:{nome:_nome},
            raw:true,
            include: [{
            model: this.Atributos,
            where: Sequelize.where(
                Sequelize.col('monstro.idmonstro'),
                Sequelize.col('atributos.monstroid')
            ),
            
           
        }]
           
        })
          
        return result
    }

    async create(monstro){
        await this.Monstro.sync(); 

        return  await this.Monstro.create(monstro, {
            raw: true
          })

    }

    update(id, item, upsert = false) {
        const fn = upsert ? 'upsert' : 'update'
        return this._db[fn](item, {
          where: {
            id
          }
        });
    }
    
    delete(id) {
        const query = id ? {
            id
        } : {};
        return this.Monstro.destroy({
            where: query
        });
    }

}

module.exports = Postgres