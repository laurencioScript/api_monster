function separador(texto){
    let localPonto = 0;
    let localParentese = 0;
    let obj = [];
    //Gabriel 0123456

    localPonto = texto.indexOf(".");
    localParentese = texto.indexOf("(");
    
    // parentese existir e for antes do ponto final
    if (localParentese < localPonto && localParentese > 0)
    {
        obj[0] = texto.substring(0,localParentese);
        
        obj[1] = texto.substring(localParentese );

    }// parentese não existe e existe ponto
    else if(localParentese == -1 && localPonto > -1)
    {
        obj[0] = texto.substring(0, localPonto);
        obj[1] = texto.substring(localPonto ).replace(". ","");
    }
    else if (localParentese > 0 && localPonto > 0)
    {
        obj[0] = texto.substring(0, localPonto);
        obj[1] = texto.substring(localPonto).replace(". ", "");
    }
    else
    {
        obj[0] = "Traço Unico";
        obj[1] = texto;
    }

    return obj;
}

function limpaTexto(texto)
{
    let res = texto.replace("\n", "");
    res = res.replace(/(\r\n|\n|\r)/gm,"");
 
    return res;
}

function clear(monstros)
{
    for (let x = 0; x < monstros.length; x++)
    {
        monstros[x]['nome'] = monstros[x]['nome'].toLowerCase();
        monstros[x]['tendencia'] = monstros[x]['tendencia'].toUpperCase();
        monstros[x]['tipo'] = monstros[x]['tipo'].toLowerCase();
        monstros[x]['tamanho'] = monstros[x]['tamanho'].toLowerCase();
        monstros[x]['tamanho'] = monstros[x]['tamanho'].trim();
        
        if(monstros[x]['tracos']!=undefined)
        for (let i = 0; i < monstros[x]['tracos'].length; i++)
        {
            monstros[x]['tracos'][i]['tipo'] = monstros[x]['tracos'][i]['tipo'].toLowerCase();
            monstros[x]['tracos'][i]['tipo'] = monstros[x]['tracos'][i]['tipo'].trim();
            monstros[x]['tracos'][i]['tipo'] = limpaTexto(monstros[x]['tracos'][i]['tipo']);

            monstros[x]['tracos'][i]['descricao'] = monstros[x]['tracos'][i]['descricao'].toLowerCase();
            monstros[x]['tracos'][i]['descricao'] = monstros[x]['tracos'][i]['descricao'].trim();
            monstros[x]['tracos'][i]['descricao'] = limpaTexto(monstros[x]['tracos'][i]['descricao']);
        }

        if(monstros[x]['acao']!=undefined)
        for (let i = 0; i < monstros[x]['acao'].length; i++)
        {
            monstros[x]['acao'][i]['tipo'] = monstros[x]['acao'][i]['tipo'].toLowerCase();
            monstros[x]['acao'][i]['tipo'] = monstros[x]['acao'][i]['tipo'].trim();
            monstros[x]['acao'][i]['tipo'] = limpaTexto(monstros[x]['acao'][i]['tipo']);

            monstros[x]['acao'][i]['descricao'] = monstros[x]['acao'][i]['descricao'].toLowerCase();
            monstros[x]['acao'][i]['descricao'] = monstros[x]['acao'][i]['descricao'].trim();
            monstros[x]['acao'][i]['descricao'] = limpaTexto(monstros[x]['acao'][i]['descricao']);
        }

        if(monstros[x]['idiomas']!=undefined)
        for (let i = 0; i < monstros[x]['idiomas'].length; i++)
        {
            monstros[x]['idiomas'][i] = limpaTexto(monstros[x]['idiomas'][i]);
            monstros[x]['idiomas'][i] = monstros[x]['idiomas'][i].toLowerCase();
            monstros[x]['idiomas'][i] = monstros[x]['idiomas'][i].trim();
        }

        if(monstros[x]['resistencia_dano']!=undefined)
        for (let i = 0; i < monstros[x]['resistencia_dano'].length; i++)
        {
            monstros[x]['resistencia_dano'][i] = monstros[x]['resistencia_dano'][i].toLowerCase();
            monstros[x]['resistencia_dano'][i] = monstros[x]['resistencia_dano'][i].trim();
            monstros[x]['resistencia_dano'][i] = limpaTexto(monstros[x]['resistencia_dano'][i]);

        }

        if(monstros[x]['imunidades']!=undefined)
        for (let i = 0; i < monstros[x]['imunidades'].length; i++)
        {
            monstros[x]['imunidades'][i] = limpaTexto(monstros[x]['imunidades'][i]);
            monstros[x]['imunidades'][i] = monstros[x]['imunidades'][i].toLowerCase();
            monstros[x]['imunidades'][i] = monstros[x]['imunidades'][i].trim();
        }

        if(monstros[x]['vulnerabilidades']!=undefined)
        for (let i = 0; i < monstros[x]['vulnerabilidades'].length; i++)
        {
            monstros[x]['vulnerabilidades'][i] = limpaTexto(monstros[x]['vulnerabilidades'][i]);
            monstros[x]['vulnerabilidades'][i] = monstros[x]['vulnerabilidades'][i].toLowerCase();
            monstros[x]['vulnerabilidades'][i] = monstros[x]['vulnerabilidades'][i].trim();
        }

        if(monstros[x]['sentidos']!=undefined)
        for (let i = 0; i < monstros[x]['sentidos'].length; i++)
        {
            monstros[x]['sentidos'][i]['tipo'] = monstros[x]['sentidos'][i]['tipo'].toLowerCase();
            monstros[x]['sentidos'][i]['tipo'] = monstros[x]['sentidos'][i]['tipo'].trim();
            monstros[x]['sentidos'][i]['tipo'] = limpaTexto(monstros[x]['sentidos'][i]['tipo']);
        }

        if(monstros[x]['equipamentos']!=undefined)
        for (let i = 0; i < monstros[x]['equipamentos'].length; i++)
        {
            monstros[x]['equipamentos'][i] = limpaTexto(monstros[x]['equipamentos'][i]);
            monstros[x]['equipamentos'][i] = monstros[x]['equipamentos'][i].toLowerCase();
            monstros[x]['equipamentos'][i] = monstros[x]['equipamentos'][i].trim();
        }

        if(monstros[x]['teste_resistencia']!=undefined)
        for (let i = 0; i < monstros[x]['teste_resistencia'].length; i++)
        {
            monstros[x]['teste_resistencia'][i]['tipo'] = monstros[x]['teste_resistencia'][i]['tipo'].toLowerCase();
            monstros[x]['teste_resistencia'][i]['tipo'] = monstros[x]['teste_resistencia'][i]['tipo'].trim();

            if (monstros[x].teste_resistencia[i]['tipo'] == "des")
            {
                monstros[x].teste_resistencia[i]['tipo'] = "destreza";
            }
            if (monstros[x].teste_resistencia[i]['tipo'] == "con")
            {
                monstros[x].teste_resistencia[i]['tipo'] = "constituição";
            }
            if (monstros[x].teste_resistencia[i]['tipo'] == "sab")
            {
                monstros[x].teste_resistencia[i]['tipo'] = "sabedoria";
            }
            if (monstros[x].teste_resistencia[i]['tipo'] == "car")
            {
                monstros[x].teste_resistencia[i]['tipo'] = "carisma";
            }
            if (monstros[x].teste_resistencia[i]['tipo'] == "int")
            {
                monstros[x].teste_resistencia[i]['tipo'] = "inteligencia";
            }
            if (monstros[x].teste_resistencia[i]['tipo'] == "for")
            {
                monstros[x].teste_resistencia[i]['tipo'] = "força";
            }


        }

        if(monstros[x]['pericia']!=undefined)
        for (let i = 0; i < monstros[x]['pericia'].length; i++)
        {
            monstros[x]['pericia'][i]['tipo'] = monstros[x]['pericia'][i]['tipo'].toLowerCase();
            monstros[x]['pericia'][i]['tipo'] = monstros[x]['pericia'][i]['tipo'].trim();
        }

        if(monstros[x]['acaoLendarias']!=undefined)
        for (let i = 0; i < monstros[x]['acaoLendarias'].length; i++)
        {
            monstros[x]['acaoLendarias'][i]['tipo'] = limpaTexto(monstros[x]['acaoLendarias'][i]['tipo']);
            monstros[x]['acaoLendarias'][i]['tipo'] = monstros[x]['acaoLendarias'][i]['tipo'].toLowerCase();
            monstros[x]['acaoLendarias'][i]['tipo'] = monstros[x]['acaoLendarias'][i]['tipo'].trim();

            monstros[x]['acaoLendarias'][i]['descricao'] = limpaTexto(monstros[x]['acaoLendarias'][i]['descricao']);
            monstros[x]['acaoLendarias'][i]['descricao'] = monstros[x]['acaoLendarias'][i]['descricao'].toLowerCase();
            monstros[x]['acaoLendarias'][i]['descricao'] = monstros[x]['acaoLendarias'][i]['descricao'].trim();
        }
        
        if(monstros[x]['reacoes']!=undefined){
            for (let i = 0; i < monstros[x]['reacoes'].length; i++)
            {
                monstros[x]['reacoes'][i]['tipo'] = limpaTexto(monstros[x]['reacoes'][i]['tipo']);
                monstros[x]['reacoes'][i]['tipo'] = monstros[x]['reacoes'][i]['tipo'].toLowerCase();
                monstros[x]['reacoes'][i]['tipo'] = monstros[x]['reacoes'][i]['tipo'].trim();
                
                monstros[x]['reacoes'][i]['descricao'] = limpaTexto(monstros[x]['reacoes'][i]['descricao']);
                monstros[x]['reacoes'][i]['descricao'] = monstros[x]['reacoes'][i]['descricao'].toLowerCase();
                monstros[x]['reacoes'][i]['descricao'] = monstros[x]['reacoes'][i]['descricao'].trim();
            }
        }

        
    }

    return monstros;
}

function convert(monstros)
{
    let newMonster = [];
    let monstro = {};

    for(let cont=0;cont<monstros.length;cont++)
    {
        monstro = {};  
        monstro.desafio = monstros[cont]['desafio'];
        monstro.xp = monstros[cont]['xp'];
        monstro.nome = monstros[cont]['nome'];
        monstro.tipo = monstros[cont]['tipo'];
        monstro.tamanho = monstros[cont]['tamanho'];
        monstro.tendencia = monstros[cont]['tendencia'];
        monstro.pontosDeVida = monstros[cont]['pontosDeVida'];
        monstro.classeArmadura = monstros[cont]['classeArmadura'];

        monstro.atributo =  monstros[cont]['atributo'];
        monstro.deslocamento = monstros[cont]['deslocamento'];
        
        if(monstros[cont]['equipamentos'][0]!="")
            monstro.equipamentos = monstros[cont]['equipamentos'];
        
        if(monstros[cont]['idiomas'][0] != "")
            monstro.idiomas = monstros[cont]['idiomas'];
        
        if(monstros[cont]['imunidades'][0] != "")
            monstro.imunidades = monstros[cont]['imunidades'];
        
        if(monstros[cont]['pericia']!= "" )
            monstro.pericia = monstros[cont]['pericia'];
        
        if(monstros[cont]['resistencia_dano'][0]!="")
            monstro.resistencia_dano = monstros[cont]['resistencia_dano'];
        
        if(monstros[cont]['sentidos'][0]!="")
            
            monstro.sentidos = monstros[cont]['sentidos'];
        
        if(monstros[cont]['teste_resistencia'][0]!==[] )
            monstro.teste_resistencia = monstros[cont]['teste_resistencia'];
        
        if(monstros[cont]['vulnerabilidades'][0]!="")
            monstro.vulnerabilidades = monstros[cont]['vulnerabilidades'];
        

        if(monstros[cont]['tracos_especiais'][0]!="")
        {
            monstro.tracos = [];
            for(let indice=0;indice<monstros[cont]['tracos_especiais'].length;indice++){
                if(monstros[cont]['tracos_especiais'][indice]!=""){
                    let obj = separador(monstros[cont]['tracos_especiais'][indice]);
                    monstro['tracos'].push({"tipo":obj[0],"descricao":obj[1]});
                }
                
            }
        }
        if(monstros[cont]['acao'][0]!="")
        {
            monstro.acao = [];
            for(let indice=0;indice<monstros[cont]['acao'].length;indice++){
                if(monstros[cont]['acao'][indice]!=""){
                    let obj = separador(monstros[cont]['acao'][indice]);
                    monstro.acao.push({"tipo":obj[0],"descricao":obj[1]});
                }
            }
        }
        if(monstros[cont]['acaoLendarias'][0]!="")
        {    
            monstro.acaoLendarias = [];
            for(let indice=0;indice<monstros[cont]['acaoLendarias'].length;indice++){
                if(monstros[cont]['acaoLendarias'][indice]!=""){
                    let obj = separador(monstros[cont]['acaoLendarias'][indice]);
                    monstro.acaoLendarias.push({"tipo":obj[0],"descricao":obj[1]});
                }
                
            }
        }
        if(monstros[cont]['reacoes'][0]!="")
        {    
            monstro.reacoes = [];
            for(let indice=0;indice<monstros[cont]['reacoes'].length;indice++){
                if(monstros[cont]['reacoes'][indice]!=""){
                    let obj = separador(monstros[cont]['reacoes'][indice]);
                    monstro.reacoes.push({"tipo":obj[0],"descricao":obj[1]});
                }
                
            }
        }    
        
        newMonster.push(monstro);
        
    }

    return newMonster;
}

module.exports = {convert,separador,clear};