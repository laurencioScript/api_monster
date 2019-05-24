// Funções que possuem a estrutura usada para percorrer os dados

function structColecao(monstros,indice){
    let original = [];
    let ocorrencias = [];

    for(let cont=0;cont<monstros.length;cont++){
        for(let index=0;index<monstros[cont][indice].length;index++){
            
            if(original.indexOf(monstros[cont][indice][index])==-1){
                original.push(monstros[cont][indice][index]);
                ocorrencias.push(1);
            }
            else{
                ocorrencias[original.indexOf(monstros[cont][indice][index])] +=1;
            }
        }
        
    }

    for(let cont=0;cont<original.length;cont++){
        console.log(original[cont],ocorrencias[cont]);
    }
}

function structTipo(monstros,indice){
    let original = [];
    let ocorrencias = [];

    for(let cont=0;cont<monstros.length;cont++){
        for(let index=0;index<monstros[cont][indice].length;index++){
            if(original.indexOf(monstros[cont][indice][index]['tipo'])==-1){
                original.push(monstros[cont][indice][index]['tipo']);
                ocorrencias.push(1);
            }
            else{
                ocorrencias[original.indexOf(monstros[cont][indice][index]['tipo'])] +=1;
            }
        }
        
    }

    for(let cont=0;cont<original.length;cont++){
        console.log(original[cont],ocorrencias[cont]);
    }
}

function structBase(monstros,indice){
let original = [];
    let ocorrencias = [];

    for(let cont=0;cont<monstros.length;cont++){
        if(original.indexOf(monstros[cont][indice])==-1){
            original.push(monstros[cont][indice]);
            ocorrencias.push(1);
        }
        else{
            ocorrencias[original.indexOf(monstros[cont][indice])] +=1;
        }
    }

    for(let cont=0;cont<original.length;cont++){
        console.log(original[cont],ocorrencias[cont]);
    }
}

// funções que usam repetidas vezes a mesma estruturas

function showMonster(monstros){
    
    for(let cont=0;cont<monstros.length;cont++){
        console.log('(Desafio:'+monstros[cont]['desafio']+')  (XP:'+monstros[cont]['xp']+')  (PV:'+monstros[cont]['pontosDeVida']+')  (CA:'+monstros[cont]['classeArmadura']+')');
    }
}

function showMonsterTipo(monstros){
    structBase(monstros,'tipo')
}

function showMonsterTamanho(monstros){
    structBase(monstros,'tamanho');
}

function showMonsterTendencia(monstros){
    structBase(monstros,'tendencia');
}

function showAtrib(monstros){
    
    for(let cont=0;cont<monstros.length;cont++){
        console.log(monstros[cont]['nome'],'(força:',monstros[cont]['atributo']['forca']
                    ,')(destreza:',monstros[cont]['atributo']['destreza'],
                     ')(constituição:',monstros[cont]['atributo']['constituicao'],
                     ')(inteligencia:',monstros[cont]['atributo']['inteligencia'],
                     ')(sabedoria:',monstros[cont]['atributo']['sabedoria'],
                     ')(carisma',monstros[cont]['atributo']['carisma']+')'   );
    }
}

function showDesloc(monstros){

    for(let cont=0;cont<monstros.length;cont++){
        console.log(monstros[cont]['nome'],'= escalada:',monstros[cont]['deslocamento']['escalada']
                    ,'-|- voo:',monstros[cont]['deslocamento']['voo'],
                     '-|- escavacao:',monstros[cont]['deslocamento']['escavacao'],
                     '-|- deslocamento:',monstros[cont]['deslocamento']['deslocamento'],
                     '-|- natacao:',monstros[cont]['deslocamento']['natacao']+'\n'  );
    }
}

function showIdiomas(monstros){
    structColecao(monstros,'idiomas');
}

function showRD(monstros){
    structColecao(monstros,'resistencia_dano')
}

function showTR(monstros){
    structTipo(monstros,'teste_resistencia')
}

function showPericia(monstros){
    structTipo(monstros,'pericia')
}

function showImuni(monstros){
    //structColecao(monstros,'imunidades')

    let original = [];
    let ocorrencias = [];

    for(let cont=0;cont<monstros.length;cont++){
        if(monstros[cont]['imunidades']!= undefined)
        for(let index=0;index<monstros[cont]['imunidades'].length;index++){
            
            if(original.indexOf(monstros[cont]['imunidades'][index])==-1){
                original.push(monstros[cont]['imunidades'][index]);
                ocorrencias.push(1);
            }
            else{
                ocorrencias[original.indexOf(monstros[cont]['imunidades'][index])] +=1;
            }
        }
        
    }

    for(let cont=0;cont<original.length;cont++){
        console.log(original[cont],ocorrencias[cont]);
    }
}

function showVulni(monstros){
    structColecao(monstros,'vulnerabilidades')
}


function showEquips(monstros){
    structColecao(monstros,'equipamentos');
}

function showSentidos(monstros){
    structTipo(monstros,'sentidos')
}
//
function showTracos(monstros){
    structTipo(monstros,'tracos')
}

function showAcaoLendaria(monstros){
    structTipo(monstros,'acaoLendarias')
}

function showAcao(monstros){
    structTipo(monstros,'acao')
}

function showReacoes(monstros){
    structColecao(monstros,'reacoes')
}


module.exports = {showAcao,showAcaoLendaria,showAtrib,showDesloc,showEquips,showIdiomas,showImuni
,showMonster,showMonsterTamanho,showMonsterTendencia,showMonsterTipo,showPericia,showRD,showReacoes
,showSentidos,showTR,showTracos,showVulni}