const mongoose = require('mongoose');


mongoose.connect('mongodb://root:root@0.0.0.0:27017/admin',{ useNewUrlParser: true },function(error){
    if(!error){
        console.log('Conectado ao banco de dados')}
    else{
        console.log('Erro no banco de dados',error)
    }
});

              
mongoose.Promise = global.Promise;


module.exports = mongoose;