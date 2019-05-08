const mongoose = require('mongoose');



if(false){
    var db = mongoose.connection;
    db.on('error', console.error);
    db.once('open', function () {
        db.dropCollection("acaolendarias");
        db.dropCollection("monsters");
        db.dropCollection("acaos");
        db.dropCollection("atributos");
        db.dropCollection("equipamentos");
        db.dropCollection("idiomas");
        db.dropCollection("imunidades");
        db.dropCollection("pericias");
        db.dropCollection("rt_danos");
        db.dropCollection("sentidos");
        db.dropCollection("teste_rts");
        db.dropCollection("tracos");
        db.dropCollection("vulnerabilidades");
        db.dropCollection("deslocamentos");
    
    
    });
}


mongoose.connect('mongodb://root:root@0.0.0.0:27017/admin',{ useNewUrlParser: true },function(error){
    if(!error){
        console.log('Conectado ao banco de dados')}
    else{
        console.log('Erro no banco de dados',error)
    }
});

              
mongoose.Promise = global.Promise;


module.exports = mongoose;