using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MonstroAnalise
{
    class MonstroMaster
    {
        public string desafio;
        public int xp;
        public string nome;
        public string tipo;
        public string tamanho;
        public string tendencia;
        public string pv;
        public int ca;
        public Atributos atributo;
        public Deslocamento deslocamento;
        public List<Idioma> idiomas;
        public List<Resistencia_dano> resistencia_dano;
        public List<TesteResistencia> teste_resistencia;
        public List<Pericia> pericia;
        public List<Imunidades> imunidades;
        public List<Tracos> tracos;
        public List<Acao> acao;
        public List<Vulnerabilidades> vulnerabilidades;
        public List<Sentidos> sentidos;
        public List<Reacao> reacoes;
        public List<Equipamento> equipamentos;
        public List<Acao_lendaria> acaoLendarias;


        public MonstroMaster(string desafio, int xp, string nome, string tipo, string tamanho, string tendencia, string pontosDeVida, int classeArmadura)
        {
            this.desafio = desafio;
            this.xp = xp;
            this.nome = nome;
            this.tipo = tipo;
            this.tamanho = tamanho;
            this.tendencia = tendencia;
            this.pv = pontosDeVida;
            this.ca = classeArmadura;

            this.atributo = new Atributos();
            this.deslocamento = new Deslocamento();
            this.idiomas = new List<Idioma>();
            this.resistencia_dano = new List<Resistencia_dano>();  
            this.teste_resistencia = new List<TesteResistencia>();
            this.pericia = new List<Pericia>();
            this.imunidades = new List<Imunidades>();  
            this.tracos = new List<Tracos>();  
            this.acao = new List<Acao>(); 
            this.vulnerabilidades = new List<Vulnerabilidades>(); 
            this.sentidos = new List<Sentidos>();
            this.reacoes = new List<Reacao>();
            this.equipamentos = new List<Equipamento>();
            this.acaoLendarias = new List<Acao_lendaria>();

        }

        public MonstroMaster()
        {

        }

        public MonstroMaster(Monstro monstro)
        {

        }

    }

    class Idioma
    {
        public string idioma; 

        public Idioma(string value)
        {
            this.idioma = value;
        }
    }

    class Resistencia_dano
    {
        public string resistencia_dano;

        public Resistencia_dano(string value)
        {
            this.resistencia_dano = value;
        }
    }

    class Imunidades
    {
        public string imunidade;

        public Imunidades(string value)
        {
            this.imunidade = value;
        }
    }

    class Tracos
    {
        public string traco;

        public Tracos(string value)
        {
            this.traco = value;
        }
    }

    class Acao
    {
        public string acao;

        public Acao(string value)
        {
            this.acao = value;
        }
    }

    class Vulnerabilidades
    {
        public string vulnerabilidade;

        public Vulnerabilidades(string value)
        {
            this.vulnerabilidade = value;
        }
    }

    class Reacao
    {
        public string reacao;

        public Reacao(string value)
        {
            this.reacao = value;
        }
    }

    class Acao_lendaria
    {
        public string acao_lendaria;

        public Acao_lendaria(string value)
        {
            this.acao_lendaria = value;
        }
    }

    class Equipamento
    {
        public string equipamento;

        public Equipamento(string value)
        {
            this.equipamento = value;
        }
    }

    
}
