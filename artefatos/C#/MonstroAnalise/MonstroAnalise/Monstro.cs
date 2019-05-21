using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MonstroAnalise
{
    class Monstro
    {
        public string desafio;
        public int xp;
        public string nome;
        public string tipo;
        public string tamanho;
        public string tendencia;
        public string pontosDeVida;
        public int classeArmadura;
        public Atributos atributo;
        public Deslocamento deslocamento;
        public List<string> idiomas;
        public List<string> resistencia_dano;
        public List<TesteResistencia> teste_resistencia;
        public List<Pericia> pericia;
        public List<string> imunidades;
        public List<string> tracos_especiais;
        public List<string> acao;
        public List<string> vulnerabilidades;
        public List<Sentidos> sentidos;
        public List<string> reacoes;
        public List<string> equipamentos;
        public List<string> acaoLendarias;


        public Monstro(string desafio, int xp, string nome, string tipo, string tamanho, string tendencia, string pontosDeVida, int classeArmadura)
        {
            this.desafio = desafio;
            this.xp = xp;
            this.nome = nome;
            this.tipo = tipo;
            this.tamanho = tamanho;
            this.tendencia = tendencia;
            this.pontosDeVida = pontosDeVida;
            this.classeArmadura = classeArmadura;
            this.atributo = new Atributos();
            this.deslocamento = new Deslocamento();
            this.idiomas = new List<string>();
            this.resistencia_dano = new List<string>();
            this.teste_resistencia = new List<TesteResistencia>();
            this.pericia = new List<Pericia>();
            this.imunidades = new List<string>();
            this.tracos_especiais = new List<string>();
            this.acao = new List<string>();
            this.vulnerabilidades = new List<string>();
            this.sentidos = new List<Sentidos>();
            this.reacoes = new List<string>();
            this.equipamentos = new List<string>();
            this.acaoLendarias = new List<string>();

        }

        public Monstro()
        {

        }



    }

    class Atributos
    {
        public double forca;
        public double destreza;
        public double constituicao;
        public double inteligencia;
        public double sabedoria;
        public double carisma;


        public Atributos()
        {
            this.forca = 0;
            this.destreza = 0;
            this.constituicao = 0;
            this.inteligencia = 0;
            this.sabedoria = 0;
            this.carisma = 0;
        }

        public Atributos(int forca, int destreza, int constituicao, int inteligencia, int sabedoria, int carisma)
        {
            this.forca = forca;
            this.destreza = destreza;
            this.constituicao = constituicao;
            this.inteligencia = inteligencia;
            this.sabedoria = sabedoria;
            this.carisma = carisma;
        }
    }

    class Deslocamento
    {
        public double escalada;
        public double voo;
        public double escavacao;
        public double deslocamento;
        public double natacao;

        public Deslocamento()
        {
            this.escalada = 0;
            this.voo = 0;
            this.escavacao = 0;
            this.deslocamento = 0;
            this.natacao = 0;
        }

        public Deslocamento(double escalada, double voo, double escavacao, double deslocamento, double natacao)
        {
            this.escalada = escalada;
            this.voo = voo;
            this.escavacao = escavacao;
            this.deslocamento = deslocamento;
            this.natacao = natacao;
        }
    }

    class TesteResistencia
    {
        public string tipo;
        public int valor;


        public TesteResistencia()
        {

        }

        public TesteResistencia(string tipo, int valor)
        {
            this.tipo = tipo;
            this.valor = valor;
        }
    }

    class Pericia
    {
        public string tipo;
        public int valor;


        public Pericia()
        {

        }

        public Pericia(string tipo, int valor)
        {
            this.tipo = tipo;
            this.valor = valor;
        }
    }

    class Sentidos
    {
        public string tipo;
        public double valor;


        public Sentidos()
        {

        }

        public Sentidos(string tipo, double valor)
        {
            this.tipo = tipo;
            this.valor = valor;
        }
    }
}
