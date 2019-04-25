const mongoose = require('mongoose');


mongoose.connect('mongodb://root:root@192.168.99.100:27017/admin',{ useNewUrlParser: true },function(error){
    if(!error){
        console.log('Conectado')}
    else{
        console.log('error',error)
    }
});

/*
mongoose.connect('mongodb://root:root@192.168.99.100:27017/monster', { useNewUrlParser: true } )
                .then( () => {console.log('Database is connected') }, 
                        err => { console.log('Can not connect to the database'+ err)} 
                )
  */              
mongoose.Promise = global.Promise;


module.exports = mongoose;