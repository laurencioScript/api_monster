const Postgres = require('./db/Postgres')
const Sequelize = require('sequelize')
const Hapi = require('hapi')
const monstroRoutes = require('./routes/monstroRoutes')
const app = new Hapi.Server({
    port:5000
})



async function main(){
    
    const manipulador = new Postgres()
    const control = new monstroRoutes(manipulador)
    
    app.route([
        control.selectAll(),
        control.selectEspecific(),
        control.create()
 
    ])
 
    await app.start()

    console.log('Server Up ',app.info.port)
    
    return app
}

module.exports = main()