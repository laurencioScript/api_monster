const Postgres = require('./db/Postgres')
const Sequelize = require('sequelize')


async function main(){
    const manipulador = new Postgres()
 
    
    manipulador.selectEspecific('Abolete')
    //manipulador.listar('','','grande')

}



main()
