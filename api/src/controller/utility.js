function getArrayParams(params){
    let obj = []; let indice = Object.keys(params);

    for(let cont = 0; cont < indice.length; cont++){
        if(params[indice[cont]] != "null"){
            obj.push(params[indice[cont]]);
        }
    }

    return obj;
}

function getObjParams(params){
    let obj = {}, indice = Object.keys(params);

    for(let cont = 0; cont < indice.length; cont++){
        if(params[indice[cont]] != "null"){
            obj[indice[cont]] = params[indice[cont]];
        }
    }

    return obj;
}

function getError(res,err){
    console.log('error',err);
    res.status(400).send({ error: err });
}



module.exports = {getArrayParams,getObjParams,getError};