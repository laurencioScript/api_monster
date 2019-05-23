const mongoose = require('mongoose');
const connectionString = "mongodb+srv://master:federal123@monster-vwlv1.mongodb.net/monsters?retryWrites=true";

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
        db.dropCollection("reacaos");
    
    
    });
}

mongoose.connect(connectionString,{ useNewUrlParser: true });
          
mongoose.Promise = global.Promise;

module.exports = mongoose;




