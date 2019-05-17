class Monster{
    constructor(monstro){
        
        this.id = monstro['_id'];
        this.desafio = monstro['desafio'];
        this.xp = monstro['xp'];
        this.nome = monstro['nome'];
        this.tipo = monstro['tipo'];
        this.tamanho = monstro['tamanho'];
        this.tendencia = monstro['tendencia'];
        this.pv = monstro['pontosDeVida'];
        this.ca= monstro['classeArmadura'];
    
        const {forca,destreza,constituicao,inteligencia,sabedoria,carisma} = monstro['atributo'];
        this.atributo =  {forca,destreza,constituicao,inteligencia,sabedoria,carisma};
        
        const {voo,deslocamento,escalada,natacao,escavacao} = monstro['deslocamento']; 
        this.deslocamento = {voo,deslocamento,escalada,natacao,escavacao} ;
        
        if(monstro['equipamentos'] != undefined){
            this.equipamentos = [];
            monstro['equipamentos'].map(async elemento => {
                this.equipamentos.push(elemento.equipamento);
            })
        }
    
        if(monstro['idiomas'] != undefined){
            this.idiomas = [];
            monstro['idiomas'].map(async elemento => {
                this.idiomas.push(elemento.idioma);
            })
        }
        
        if(monstro['imunidades'] != undefined){
            this.imunidades = [];
            monstro['imunidades'].map(async elemento => {
                this.imunidades.push(elemento.imunidade);
            })
        }
    
        if(monstro['pericia'] != undefined){
            this.pericia = [];
            monstro['pericia'].map(async elemento => {
                this.pericia.push({"pericia":elemento.tipo,"bonus":elemento.valor});
            })
        }
    
        if(monstro['resistencia_dano'] != undefined){
            this.resistencia_dano = [];
            monstro['resistencia_dano'].map(async elemento => {
                this.resistencia_dano.push(elemento.resistencia_dano);
            })
        }
       
        if(monstro['sentidos'] != undefined){
            this.sentidos = [];
            monstro['sentidos'].map(async elemento => {
                this.sentidos.push({"sentido":elemento.tipo,"alcance":elemento.valor});
            })
        }
        
        if(monstro['teste_resistencia'] != undefined){
            this.teste_resistencia = [];
            monstro['teste_resistencia'].map(async elemento => {
                this.teste_resistencia.push({"teste_de_resistencia":elemento.tipo,"bonus":elemento.valor});
            })
        }
        
        if(monstro['vulnerabilidades'] != undefined){
            this.vulnerabilidades = [];
            monstro['vulnerabilidades'].map(async elemento => {
                this.vulnerabilidades.push(elemento.vulnerabilidade);
            })
        }
        
        if(monstro['tracos'] != undefined){
            this.tracos = [];
            monstro['tracos'].map(async elemento => {
                this.tracos.push({"traço":elemento.tipo,"descricão":elemento.descricao});
            })
        }
    
        if(monstro['acao'] != undefined){
            this.acao = [];
            monstro['acao'].map(async elemento => {
                this.acao.push({"ação":elemento.tipo,"descricão":elemento.descricao});
            })
        }
        if(monstro['acao_lendaria'] != undefined){
            this.acao_lendaria = [];
            monstro['acao_lendaria'].map(async elemento => {
                this.acao_lendaria.push({"ação lendaria":elemento.tipo,"descricão":elemento.descricao});
            })
        }
    
        if(monstro['reacoes'] != undefined){
            this.reacoes = [];
            monstro['reacoes'].map(async elemento => {
                this.reacoes.push({"reação":elemento.tipo,"descricão":elemento.descricao});
            })
        }
    }

    static listeMonstros(monstros,oque,obj){

        let i = 0;  let output = []; let dados =[];
        //console.log(monstros,oque,obj)
        for(let cont = 0; cont < monstros.length; cont++){
            dados = []; 
            // vai analisar se ele tem pericia                
            if(monstros[cont][oque][0] != undefined)
            {   //vai percorrer as pericias de cada monstros 
                i = 0;
                for(let indice = 0; indice < monstros[cont][oque].length; indice++){ 
                     
                    for(let p = 0; p < obj.length; p++){
                        //compara 1 pericia com 1 parametro    
                        if(monstros[cont][oque][indice]['tipo'] == obj[p]){
                            i++; 
                        }
                        else if(monstros[cont][oque][indice][oque] == obj[p]){
                            i++;
                        }        
                    } 
                    if(monstros[cont][oque][indice]['tipo'] != undefined ){
                        dados.push({"tipo":monstros[cont][oque][indice]['tipo'],
                        "bonus":monstros[cont][oque][indice]['valor']});
                        
                    }
                    else{
                        dados.push(monstros[cont][oque][indice][oque]);
                    }
                    
                    
                }//fim das pericias
    
               
                if(i == Object.keys(obj).length){
                    let saida = {};
                    saida['id'] = monstros[cont]['_id'];
                    saida['nome'] = monstros[cont]['nome'];
                    saida[oque] = dados;
                    output.push(saida);
                }
            
            }
            
        };
    
        return output;
    }
}

module.exports = Monster;