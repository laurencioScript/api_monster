const clean = require('./clean');
const show = require('./show');

const path = ['gabriel','danilo','lucas'];

function readJson(path){
    const fs = require("fs");
    var jsonData = fs.readFileSync("./../livro/"+path+".json", "utf8");
    return JSON.parse(jsonData); 
}

function load(){
    let monstros = [];
     
    for(let cont=0;cont < path.length;cont++){
        const arquivo = readJson(path[cont]);
        for(let index=0;index<arquivo.length;index++){
            monstros.push(arquivo[index]);
        }
    }
    return monstros;
}

function writeJson(monstros){
    const fs = require('fs');
    obj = JSON.stringify(monstros,null, '\t');
    fs.writeFile("./../livro/g2.json",obj, function(err) {
        if(err) {
            console.log(err);
        } else {
            console.log("The file was saved!");
        }
    }); 
}

async function main(){
    
    let monstros = load();
    monstros = clean.convert(monstros);
    monstros = clean.clear(monstros);
    show.showImuni(monstros);
    writeJson(monstros);
    console.log(monstros.length+' monstros cadastrados');
    
}

main();