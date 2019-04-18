using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Script.Serialization;
using System.IO;
using Newtonsoft.Json;

namespace MonstroAnalise
{
    class Observador
    {
        private List<Monstro> monstro;
        public string[] desafio;
        public string[] xp;
        public string[] nome;
        public string[] tipo;
        public string[] tamanho;
        public string[] tendencia;
        public string[] pontosDeVida;
        public string[] classeArmadura;
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

        public Observador(int valor)
        {
            Console.Clear();
            this.monstro = Observador.readJson();



            Clear();

            Destruir();
            if (valor == 1)
                analiseCaracteristicas();
            else if (valor == 2)
                analiseAtributos();
            else if (valor == 3)
                analiseDeslocamento();
            else if (valor == 4)
                analiseTraco();
            else if (valor == 5)
                analisePericia();
            else if (valor == 6)
                analiseTR();
            else if (valor == 7)
                analiseSentindos();
            else if (valor == 8)
                analiseAcao();
            else if (valor == 9)
                analiseReacao();
            else if (valor == 10)
                analiseAcaoLendaria();
            else if (valor == 11)
                analiseEquipamentos();
            else if (valor == 12)
                analiseIdiomas();
            else if (valor == 13)
                analiseRD();
            else if (valor == 14)
                analiseVulnerabilidade();
            else if (valor == 15)
                analiseImunidades();
            else if(valor == 16)
                Contador();
            else if(valor == 666)
            {
                Insert();
            }
            



        }

        // MANIPULAÇÃO JSON
        public static List<Monstro> readJson()
        {

            var javaScriptSerializer = new JavaScriptSerializer();

            var arquivoExterno = File.ReadAllText(@"C:\Users\Public\script.json");

            var json = javaScriptSerializer.Deserialize<List<Monstro>>(arquivoExterno);

            return json;

        }

        public static void writeJson(List<Monstro> monstros)
        {
            var javaScriptSerializer = new JavaScriptSerializer();

            var jsonSerializado = JsonConvert.SerializeObject(monstros, Formatting.Indented);

            File.WriteAllText(@"C:\Users\Public\script.json", jsonSerializado);
        }

        //CARACTERISTICAS BASICAS
        public void analiseCaracteristicas()
        {

            int maiorNome = maiorNome = this.nomeMaster();
            string nome; string output = "";
            List<string>[] matriz = new List<string>[3] {new List<string>(), new List<string>(), new List<string>() };
            List<int>[] qtde = new List<int>[3] { new List<int>(), new List<int>() , new List<int>() };

            int MAXnome = 0;
            int MAXdesafio = 0;
            int MAXxp = 0;
            int MAXpv = 0;
            int MAXca = 0;
            int MAXtd = 0;
            int MAXtam = 0;
            int MAXtipo = 0;

            foreach(var elemento in this.monstro)
            {
                if(MAXnome < elemento.nome.Length)
                {
                    MAXnome = elemento.nome.Length;
                }
                if(MAXdesafio < elemento.desafio.Length) 
                {
                    MAXdesafio = elemento.desafio.Length;
                }
                if(MAXxp < elemento.xp.ToString().Length)
                {
                    MAXxp = elemento.xp.ToString().Length;
                }
                if (MAXpv < elemento.pontosDeVida.Length)
                {
                    MAXpv = elemento.pontosDeVida.Length;
                }
                if (MAXca < elemento.classeArmadura.ToString().Length) 
                {
                    MAXca = elemento.classeArmadura.ToString().Length;
                }
                if (MAXtd < elemento.tendencia.ToString().Length)
                {
                    MAXtd = elemento.tendencia.ToString().Length;
                }
                if (MAXtam < elemento.tamanho.Length)
                {
                    MAXtam = elemento.tamanho.Length;
                }
                if (MAXtipo < elemento.tipo.Length) 
                {
                    MAXtipo = elemento.tipo.Length;
                }

                if (matriz[0].IndexOf(elemento.tipo) > -1)
                {
                    qtde[0][matriz[0].IndexOf(elemento.tipo)] += 1;
                }
                else
                {
                    matriz[0].Add(elemento.tipo);
                    qtde[0].Add(1);
                }

                if (matriz[1].IndexOf(elemento.tendencia) > -1)
                {
                    qtde[1][matriz[1].IndexOf(elemento.tendencia)] += 1;
                }
                else
                {
                    matriz[1].Add(elemento.tendencia);
                    qtde[1].Add(1);
                }

                if (matriz[2].IndexOf(elemento.tamanho) > -1)
                {
                    qtde[2][matriz[2].IndexOf(elemento.tamanho)] += 1;
                }
                else
                {
                    matriz[2].Add(elemento.tamanho);
                    qtde[2].Add(1);
                }


            }
            Console.WriteLine("\n     Todos os Tipos \n");
            for (int cont = 0; cont < matriz[0].Count; cont++)
            {
                if (matriz[0][cont] != "")
                    Console.WriteLine("     {0} Nº {1}", matriz[0][cont], qtde[0][cont]);
            }
            Console.WriteLine("\n     Todos as Tendencias \n");
            for (int cont = 0; cont < matriz[1].Count; cont++)
            {
                if (matriz[1][cont] != "")
                    Console.WriteLine("     {0} Nº {1}", matriz[1][cont], qtde[1][cont]);
            }
            Console.WriteLine("\n     Todos os Tamanhos \n");
            for (int cont = 0; cont < matriz[2].Count; cont++)
            {
                if (matriz[2][cont] != "")
                    Console.WriteLine("     {0} Nº {1}", matriz[2][cont], qtde[2][cont]);
            }


            Console.WriteLine("\n     Monstros e suas caracteristicas");
            Console.WriteLine("\n");
            foreach (var elemento in this.monstro)
            {
                
                string desafio = "";
                string xp = "";
                string pv = "";
                string ca = "";
                string td = "";
                string tam = "";
                string tipo = "";
                nome = elemento.nome;

                for (int x = 1; x <= 100; x++)
                {
                    if ((MAXnome - elemento.nome.Length) >= x)
                    {
                        nome += " ";
                        
                    }
                    if ((MAXdesafio - elemento.desafio.Length) >= x) 
                    {
                        desafio += " "; 
                    }
                    if ((MAXxp - elemento.xp.ToString().Length) >= x)
                    {
                        xp += " ";
                    }
                    if ((MAXpv - elemento.pontosDeVida.Length) >= x)
                    {
                        pv += " ";
                    }
                    if ((MAXca - elemento.classeArmadura.ToString().Length) >= x) 
                    {
                        ca += " ";
                    }
                    if ((MAXtd - elemento.tendencia.Length) >= x)
                    {
                       td += " ";
                    }
                    if ((MAXtam - elemento.tamanho.Length) >= x)
                    {
                        tam += " ";
                    }
                    if ((MAXtipo - elemento.tipo.Length) >= x) 
                    {
                        tipo += " ";
                    }
                }
              
                Console.WriteLine("\n        {0} | NV {1} | XP {2} | PV {3} | CA {4} | TD {5} | Tam {6} | Tipo {7}",
                   nome, 
                   desafio+elemento.desafio,
                   xp+elemento.xp,
                   pv+elemento.pontosDeVida,
                   ca+elemento.classeArmadura,
                   td+elemento.tendencia,
                   tam+elemento.tamanho,
                   tipo+elemento.tipo);

               
            }
        }

        public void analiseAtributos()
        {
            int maiorNome = this.nomeMaster();
            string nome = "";

            foreach (var elemento in this.monstro)
            {
                

                nome = elemento.nome;

                for (int x =0;x < (maiorNome - elemento.nome.Length); x++)
                {
                    nome += " ";
                }

                Console.WriteLine("");
                Console.WriteLine("     {0} | FOR {1}  DES {2}  CON {3}  INT {4}  SAB {5}  CAR {6}",
                   nome,zerofill(elemento.atributo.forca),zerofill(elemento.atributo.destreza), zerofill(elemento.atributo.constituicao), 
                    zerofill(elemento.atributo.inteligencia), zerofill(elemento.atributo.sabedoria), zerofill(elemento.atributo.carisma));
            }
        }

        public void analiseDeslocamento()
        {
            int maiorNome = this.nomeMaster();
            string nome = "";
           
            Console.WriteLine("");
            
            foreach (var elemento in this.monstro)
            {
                

                nome = elemento.nome;

                for (int x = 0; x < (maiorNome - elemento.nome.Length); x++)
                {
                    nome += " ";
                }
                
                Console.WriteLine("     {0} | DESLOCAMENTO {1}  NATAÇÃO {2}  ESCALADA {3}  ESCAVAÇÃO {4}  VOO {5} ",
                   nome, zerofill(elemento.deslocamento.deslocamento), zerofill(elemento.deslocamento.natacao), zerofill(elemento.deslocamento.escalada),
                    zerofill(elemento.deslocamento.escavacao), zerofill(elemento.deslocamento.voo));
                Console.WriteLine("");
                
            }
        }

        // PRIMEIRA LINHA
        public void analiseTraco()
        {
            int maiorNome = maiorNome = this.nomeMaster();
            string nome;

            foreach (var elemento in this.monstro)
            {

                nome = elemento.nome;

                for (int x = 0; x < (maiorNome - elemento.nome.Length); x++)
                {
                    nome += " ";
                }

                Console.WriteLine("");
                string output = "     " + nome + "\n\n     ";

                foreach (var traco in elemento.tracos_especiais)
                {
                    output += "** "+ formataTexto(limpaTexto(traco)) + "\n\n     ";
                }

                Console.WriteLine(output+"\n");
                Console.WriteLine("     ______________________________________________________________________________________");
            }
        }

        public void analisePericia()
        {
            int maiorNome = maiorNome = this.nomeMaster();
            string nome; string output = "";
            List<string> matriz = new List<string>();
            List<int> qtde = new List<int>();

            foreach (var elemento in this.monstro)
            {
                for (int x = 0; x < elemento.pericia.Count; x++)
                {
                    if (matriz.IndexOf(elemento.pericia[x].tipo) > -1)
                    {
                        qtde[matriz.IndexOf(elemento.pericia[x].tipo)] += 1;
                    }
                    else
                    {
                        matriz.Add(elemento.pericia[x].tipo);
                        qtde.Add(1);

                    }
                }

                nome = elemento.nome;

                for (int x = 0; x < (maiorNome - elemento.nome.Length); x++)
                {
                    nome += " ";
                }

                output += "\n     " + nome + " | ";

                foreach (var pericia in elemento.pericia)
                {
                    output += pericia.tipo + " " + zerofill(pericia.valor) + " ";
                }
                

            }
            Console.WriteLine("\n     Todos as Pericias \n");
            for (int cont = 0; cont < matriz.Count; cont++)
            {
                if (matriz[cont] != "")
                    Console.WriteLine("     {0} Nº {1}", matriz[cont], qtde[cont]);
            }
            Console.WriteLine("\n     Monstros e suas Pericias");
            Console.WriteLine(output);
        }

        public void analiseTR()
        {
            int maiorNome = maiorNome = this.nomeMaster();
            string nome; string output = "";
            List<string> matriz = new List<string>();
            List<int> qtde = new List<int>();

            foreach (var elemento in this.monstro)
            {
                for (int x = 0; x < elemento.teste_resistencia.Count; x++)
                {
                    if (matriz.IndexOf(elemento.teste_resistencia[x].tipo) > -1)
                    {
                        qtde[matriz.IndexOf(elemento.teste_resistencia[x].tipo)] += 1;
                    }
                    else
                    {
                        matriz.Add(elemento.teste_resistencia[x].tipo);
                        qtde.Add(1);

                    }
                }

                nome = elemento.nome;

                for (int x = 0; x < (maiorNome - elemento.nome.Length); x++)
                {
                    nome += " ";
                }

                output += "\n     " + nome + " | ";

                foreach (var tr in elemento.teste_resistencia)
                {
                    output += tr.tipo + "+" + tr.valor + " ";
                }

            }
            Console.WriteLine("\n     Todos os Testes de Resistencias \n");
            for (int cont = 0; cont < matriz.Count; cont++)
            {
                if (matriz[cont] != "")
                    Console.WriteLine("     {0} Nº {1}", matriz[cont], qtde[cont]);
            }
            Console.WriteLine("\n     Monstros e seus Testes de Resistencia");
            Console.WriteLine(output);
        }

        public void analiseSentindos()
        {
            int maiorNome = maiorNome = this.nomeMaster();
            string nome; string output = "";
            List<string> matriz = new List<string>();
            List<int> qtde = new List<int>();

            foreach (var elemento in this.monstro)
            {
                for (int x = 0; x < elemento.sentidos.Count; x++)
                {
                    if (matriz.IndexOf(elemento.sentidos[x].tipo) > -1)
                    {
                        qtde[matriz.IndexOf(elemento.sentidos[x].tipo)] += 1;
                    }
                    else
                    {
                        matriz.Add(elemento.sentidos[x].tipo);
                        qtde.Add(1);

                    }
                }

                nome = elemento.nome;

                for (int x = 0; x < (maiorNome - elemento.nome.Length); x++)
                {
                    nome += " ";
                }

                output += "\n     " + nome + " | ";

                foreach (var sentindo in elemento.sentidos)
                {
                    output += sentindo.tipo + " " + sentindo.valor + "m  ";
                }                

            }

            Console.WriteLine("\n     Todos os Sentidos\n");
            for (int cont = 0; cont < matriz.Count; cont++)
            {
                if (matriz[cont] != "")
                    Console.WriteLine("     {0} Nº {1}", matriz[cont], qtde[cont]);
            }
            Console.WriteLine("\n     Monstros e seus Sentidos");
            Console.WriteLine(output);
        }

        // SEGUNDA LINHA
        public void analiseAcao()
        {
            int maiorNome = maiorNome = this.nomeMaster();
            string nome;

            foreach (var elemento in this.monstro)
            {

                nome = elemento.nome;

                for (int x = 0; x < (maiorNome - elemento.nome.Length); x++)
                {
                    nome += " ";
                }

                Console.WriteLine("");
                string output = "     " + nome + "\n\n     ";

                foreach (var acao in elemento.acao)
                {
                    output += "** " + formataTexto(limpaTexto(acao)) + "\n\n     ";
                }

                Console.WriteLine(output + "\n");
                Console.WriteLine("     ______________________________________________________________________________________");
            }
        }

        public void analiseReacao()
        {
            int maiorNome = maiorNome = this.nomeMaster();
            string nome;

            foreach (var elemento in this.monstro)
            {

                nome = elemento.nome;

                for (int x = 0; x < (maiorNome - elemento.nome.Length); x++)
                {
                    nome += " ";
                }

                Console.WriteLine("");
                string output = "     " + nome + "\n\n     ";

                foreach (var reacoes in elemento.reacoes)
                {
                    output += "** " + formataTexto(limpaTexto(reacoes)) + "\n\n     ";
                }

                Console.WriteLine(output + "\n");
                Console.WriteLine("     ______________________________________________________________________________________");
            }
        }

        public void analiseAcaoLendaria()
        {
            int maiorNome = maiorNome = this.nomeMaster();
            string nome;

            foreach (var elemento in this.monstro)
            {

                nome = elemento.nome;

                for (int x = 0; x < (maiorNome - elemento.nome.Length); x++)
                {
                    nome += " ";
                }

                Console.WriteLine("");
                string output = "     " + nome + "\n\n     ";

                foreach (var acaoL in elemento.acaoLendarias)
                {
                    output += "** " + formataTexto(limpaTexto(acaoL)) + "\n\n     ";
                }

                Console.WriteLine(output + "\n");
                Console.WriteLine("     ______________________________________________________________________________________");
            }
        }

        public void analiseEquipamentos()
        {
            int maiorNome = maiorNome = this.nomeMaster();
            string nome; string output = "";
            List<string> matriz = new List<string>();
            List<int> qtde = new List<int>();

            foreach (var elemento in this.monstro)
            {
                for (int x = 0; x < elemento.equipamentos.Count; x++)
                {
                    if (matriz.IndexOf(elemento.equipamentos[x]) > -1)
                    {
                        qtde[matriz.IndexOf(elemento.equipamentos[x])] += 1;
                    }
                    else
                    {
                        matriz.Add(elemento.equipamentos[x]);
                        qtde.Add(1);

                    }
                }

                nome = elemento.nome;

                for (int x = 0; x < (maiorNome - elemento.nome.Length); x++)
                {
                    nome += " ";
                }

                output += "\n     " + nome + " | ";

                foreach (var equip in elemento.equipamentos)
                {
                    if(equip != "")
                    {
                        output += equip + " ";
                    }
                    
                }
            }

            Console.WriteLine("\n     Todos os Equipamentos\n");
            for (int cont = 0; cont < matriz.Count; cont++)
            {
                if (matriz[cont] != "")
                    Console.WriteLine("     {0} Nº {1}", matriz[cont], qtde[cont]);
            }
            Console.WriteLine("\n     Monstros e seus equipamentos");
            Console.WriteLine(output);
        }

        // TERCEIRA LINHA
        public void analiseIdiomas()
        {
            int maiorNome = maiorNome = this.nomeMaster();
            string nome; string output = "";
            List<string> matriz = new List<string>();
            List<int> qtde = new List<int>();

            foreach (var elemento in this.monstro)
            {

                for (int x = 0; x < elemento.idiomas.Count; x++)
                {
                    if (matriz.IndexOf(elemento.idiomas[x]) > -1)
                    {
                        qtde[matriz.IndexOf(elemento.idiomas[x])] += 1;
                    }
                    else
                    {
                        matriz.Add(elemento.idiomas[x]);
                        qtde.Add(1);

                    }
                }

                nome = elemento.nome;

                for (int x = 0; x < (maiorNome - elemento.nome.Length); x++)
                {
                    nome += " ";
                }

                output += "\n     " + nome + " | ";

                foreach (var item in elemento.idiomas)
                {
                    if (item != "")
                        output += item + " ";
                }
   
            }

            Console.WriteLine("\n     Todos os Idiomas\n");
            for (int cont = 0; cont < matriz.Count; cont++)
            {
                if (matriz[cont] != "")
                    Console.WriteLine("     {0} Nº {1}", matriz[cont], qtde[cont]);
            }
            Console.WriteLine("\n     Monstros e suas respectivos idiomas");
            Console.WriteLine(output);

        }

        public void analiseRD()
        {
            int maiorNome = maiorNome = this.nomeMaster();
            string nome; string output ="";

            List<string> matriz = new List<string>();
            List<int> qtde = new List<int>();


            foreach (var elemento in this.monstro)
            {
                for (int x = 0; x < elemento.resistencia_dano.Count; x++)
                {
                    if (matriz.IndexOf(elemento.resistencia_dano[x]) > -1)
                    {
                        qtde[matriz.IndexOf(elemento.resistencia_dano[x])] += 1;
                    }
                    else
                    {
                        matriz.Add(elemento.resistencia_dano[x]);
                        qtde.Add(1);

                    }
                }

                nome = elemento.nome;

                for (int x = 0; x < (maiorNome - elemento.nome.Length); x++)
                    nome += " ";
                
                output += "\n     " + nome + " | ";

                foreach (var item in elemento.resistencia_dano)
                {
                    if (item != "")
                    {
                        output += limpaTexto(item) + " ";
                    }

                }

                
            }

            Console.WriteLine("\n     Todas as Resistencias de Danos\n");
            for (int cont = 0; cont < matriz.Count; cont++)
            {
                if(matriz[cont] != "")
                Console.WriteLine("     {0} Nº {1}", matriz[cont], qtde[cont]);
            }
            Console.WriteLine("\n     Monstros e suas respectivas Resistencias de Danos");

            Console.WriteLine(output);

        }

        public void analiseVulnerabilidade()
        {
            int maiorNome = maiorNome = this.nomeMaster();
            string nome; string output = "";

            List<string> matriz = new List<string>();
            List<int> qtde = new List<int>();

            foreach (var elemento in this.monstro)
            {
                for (int x = 0; x < elemento.vulnerabilidades.Count; x++)
                {
                    if (matriz.IndexOf(elemento.vulnerabilidades[x]) > -1)
                    {
                        qtde[matriz.IndexOf(elemento.vulnerabilidades[x])] += 1;
                    }
                    else
                    {
                        matriz.Add(elemento.vulnerabilidades[x]);
                        qtde.Add(1);

                    }
                }

                nome = elemento.nome;

                for (int x = 0; x < (maiorNome - elemento.nome.Length); x++)
                {
                    nome += " ";
                }

                output += "\n     " + nome + " | ";

                foreach (var item in elemento.vulnerabilidades)
                {
                    if (item != "")
                    {
                        output += item + " ";
                    }

                }
            }

            Console.WriteLine("\n     Todas as Vulnerabilidades\n");
            for (int cont = 0; cont < matriz.Count; cont++)
            {
                if (matriz[cont] != "")
                    Console.WriteLine("     {0} Nº {1}", matriz[cont], qtde[cont]);
            }
            Console.WriteLine("\n     Monstros e suas respectivas Vulnerabilidades");

            Console.WriteLine(output);
        }

        public void analiseImunidades()
        {
            int maiorNome = maiorNome = this.nomeMaster();
            string nome; string output = "";
            List<string> matriz = new List<string>();
            List<int> qtde = new List<int>();

            foreach (var elemento in this.monstro)
            {
                for (int x = 0; x < elemento.imunidades.Count; x++)
                {
                    if (matriz.IndexOf(elemento.imunidades[x]) > -1)
                    {
                        qtde[matriz.IndexOf(elemento.imunidades[x])] += 1;
                    }
                    else
                    {
                        matriz.Add(elemento.imunidades[x]);
                        qtde.Add(1);
                    }
                }

                nome = elemento.nome;

                for (int x = 0; x < (maiorNome - elemento.nome.Length); x++)
                {
                    nome += " ";
                }

                output += "\n     " + limpaTexto(nome) + " | ";

                foreach (var item in elemento.imunidades)
                {
                    if (item != "")
                    {
                        output += item + " ";
                    }

                }
            }
            Console.WriteLine("\n     Todas as Imunidades\n");
            for (int cont = 0; cont < matriz.Count; cont++)
            {
                if (matriz[cont] != "")
                    Console.WriteLine("     {0} Nº {1}", matriz[cont], qtde[cont]);
            }
            Console.WriteLine("\n     Monstros e suas respectivas Imunidades");
            Console.WriteLine(output);
        }


        // METODO UTILITARIOS
        private string zerofill(double num)
        {
            return (num < 10 ) ? " " + num : "" + num;
        }

        private int nomeMaster()
        {
            int maiorNome=0;
            foreach (var elemento in this.monstro)
            {
                if (maiorNome < elemento.nome.Length)
                {
                    maiorNome = elemento.nome.Length;
                }
            }
            return maiorNome;
        }

        private void Destruir()
        {
            this.desafio = new string[monstro.Count];
            this.xp = new string[monstro.Count];
            this.pontosDeVida = new string[monstro.Count];
            this.classeArmadura = new string[monstro.Count];
            this.tendencia = new string[monstro.Count];
            this.tamanho = new string[monstro.Count];
            this.tipo = new string[monstro.Count];
            this.nome = new string[monstro.Count];

            for (int x =0;x<monstro.Count;x++)
            {
                this.desafio[x] = monstro[x].desafio;
                this.xp[x] = monstro[x].xp.ToString();
                this.pontosDeVida[x] = monstro[x].pontosDeVida;
                this.classeArmadura[x] = monstro[x].classeArmadura.ToString();
                this.tendencia[x] = monstro[x].tendencia;
                this.tamanho[x] = monstro[x].tamanho;
                this.tipo[x] = monstro[x].tipo;
                this.nome[x] = monstro[x].nome;
            }
        }

        private string limpaTexto(string texto)
        {
            string res = texto.Replace("\n", "");
            res = res.Replace("\r", "");
            return res;
        }

        private string formataTexto(string Texto)
        {
            string[] res = Texto.Split(' ');
            string textoFinal = "";
            int cont = 0;
            for(int x = 0; x < res.Length; x++)
            {
                cont++;
                textoFinal += res[x]+" ";
                if (cont == 10)
                {
                    textoFinal+="\n     ";
                    cont = 0;
                }
                

            }




            return textoFinal;
        }

        private void Clear()
        {

            for(int x = 0; x < this.monstro.Count; x++)
            {
                this.monstro[x].tipo = this.monstro[x].tipo.ToLower();
                this.monstro[x].tamanho = this.monstro[x].tamanho.ToLower();
                this.monstro[x].tamanho = this.monstro[x].tamanho.Trim();

                for (int i = 0; i < this.monstro[x].tracos_especiais.Count; i++)
                {
                    this.monstro[x].tracos_especiais[i] = this.monstro[x].tracos_especiais[i].ToLower();
                    this.monstro[x].tracos_especiais[i] = this.monstro[x].tracos_especiais[i].Trim();
                    this.monstro[x].tracos_especiais[i] = limpaTexto(this.monstro[x].tracos_especiais[i]);
                }

                for (int i = 0; i < this.monstro[x].acao.Count; i++)
                {
                    this.monstro[x].acao[i] = this.monstro[x].acao[i].ToLower();
                    this.monstro[x].acao[i] = this.monstro[x].acao[i].Trim();
                    this.monstro[x].acao[i] = limpaTexto(this.monstro[x].acao[i]);
                }

                for (int i = 0; i < this.monstro[x].idiomas.Count; i++){
                    this.monstro[x].idiomas[i] = this.monstro[x].idiomas[i].ToLower();
                    this.monstro[x].idiomas[i] = this.monstro[x].idiomas[i].Trim();
                }
                for (int i = 0; i < this.monstro[x].resistencia_dano.Count; i++)
                {
                    this.monstro[x].resistencia_dano[i] = this.monstro[x].resistencia_dano[i].ToLower();
                    this.monstro[x].resistencia_dano[i] = this.monstro[x].resistencia_dano[i].Trim();
                    this.monstro[x].resistencia_dano[i] = limpaTexto(this.monstro[x].resistencia_dano[i]);
                    
                }
                for (int i = 0; i < this.monstro[x].imunidades.Count; i++)
                {
                    this.monstro[x].imunidades[i] = this.monstro[x].imunidades[i].ToLower();
                    this.monstro[x].imunidades[i] = this.monstro[x].imunidades[i].Trim();
                }
                for (int i = 0; i < this.monstro[x].vulnerabilidades.Count; i++)
                {
                    this.monstro[x].vulnerabilidades[i] = this.monstro[x].vulnerabilidades[i].ToLower();
                    this.monstro[x].vulnerabilidades[i] = this.monstro[x].vulnerabilidades[i].Trim();
                }
                for (int i = 0; i < this.monstro[x].sentidos.Count; i++)
                {
                    this.monstro[x].sentidos[i].tipo = this.monstro[x].sentidos[i].tipo.ToLower();
                    this.monstro[x].sentidos[i].tipo = this.monstro[x].sentidos[i].tipo.Trim();
                }
                for (int i = 0; i < this.monstro[x].equipamentos.Count; i++)
                {
                    this.monstro[x].equipamentos[i] = this.monstro[x].equipamentos[i].ToLower();
                    this.monstro[x].equipamentos[i] = this.monstro[x].equipamentos[i].Trim();
                }
                for (int i = 0; i < this.monstro[x].teste_resistencia.Count; i++)
                {
                    this.monstro[x].teste_resistencia[i].tipo = this.monstro[x].teste_resistencia[i].tipo.ToLower();
                    this.monstro[x].teste_resistencia[i].tipo = this.monstro[x].teste_resistencia[i].tipo.Trim();
                    
                    if (this.monstro[x].teste_resistencia[i].tipo=="des")
                    {
                        this.monstro[x].teste_resistencia[i].tipo = "destreza";
                    }
                    if (this.monstro[x].teste_resistencia[i].tipo == "con")
                    {
                        this.monstro[x].teste_resistencia[i].tipo = "constituição";
                    }
                    if (this.monstro[x].teste_resistencia[i].tipo == "sab")
                    {
                        this.monstro[x].teste_resistencia[i].tipo = "sabedoria";
                    }
                    if (this.monstro[x].teste_resistencia[i].tipo == "car")
                    {
                        this.monstro[x].teste_resistencia[i].tipo = "carisma";
                    }
                    if (this.monstro[x].teste_resistencia[i].tipo == "int")
                    {
                        this.monstro[x].teste_resistencia[i].tipo = "inteligencia";
                    }
                    if (this.monstro[x].teste_resistencia[i].tipo == "for")
                    {
                        this.monstro[x].teste_resistencia[i].tipo = "força";
                    }
                    
                    
                }
                for (int i = 0; i < this.monstro[x].pericia.Count; i++)
                {
                    this.monstro[x].pericia[i].tipo = this.monstro[x].pericia[i].tipo.ToLower();
                    this.monstro[x].pericia[i].tipo = this.monstro[x].pericia[i].tipo.Trim();
                }

                writeJson(this.monstro);
                this.monstro = readJson();
            }

            
        }


        private void Contador()
        {
            List<string> matriz = new List<string>();
            List<int> qtde = new List<int>() ;

            foreach(var elemento in monstro)
            {
                for (int x = 0; x < elemento.resistencia_dano.Count; x++)
                {
                    if (matriz.IndexOf(elemento.resistencia_dano[x])>-1)
                    {
                        qtde[matriz.IndexOf(elemento.resistencia_dano[x])] += 1;
                    }
                    else
                    {
                        matriz.Add(elemento.resistencia_dano[x]);
                        qtde.Add(1);

                    }
                }

            }

            

            for(int cont = 0; cont < matriz.Count; cont++)
            {
                Console.WriteLine("{0} Nº {1}", matriz[cont], qtde[cont]);
            }

        }




        public void Insert()
        {
            for(int x = 0; x <= 10; x++)
            {
                Console.WriteLine("insert into monstro (nome,tipo,desafio,xp,tamanho,tendencia,classe_armadura,pontos_de_vida) values ('{0}','{1}','{2}',{3},'{4}','{5}',{6},'{7}');",
                    monstro[x].nome, 
                    monstro[x].tipo, 
                    monstro[x].desafio, 
                    monstro[x].xp, 
                    monstro[x].tamanho, 
                    monstro[x].tendencia, 
                    monstro[x].classeArmadura,
                    monstro[x].pontosDeVida);

                Console.WriteLine("insert into atributos (forca,destreza,constituicao,inteligencia,sabedoria,carisma,monstroid) values ({0},{1},{2},{3},{4},{5},(SELECT COUNT(*) FROM Monstro));",
                    monstro[x].atributo.forca,
                    monstro[x].atributo.destreza,
                    monstro[x].atributo.constituicao,
                    monstro[x].atributo.inteligencia,
                    monstro[x].atributo.sabedoria,
                    monstro[x].atributo.carisma);

                Console.WriteLine("insert into deslocamento (escalada,voo,escavacao,deslocamento,natacao,monstroid) values ({0},{1},{2},{3},{4},(SELECT COUNT(*) FROM Monstro));",
                    monstro[x].deslocamento.escalada,
                    monstro[x].deslocamento.voo,
                    monstro[x].deslocamento.escavacao,
                    monstro[x].deslocamento.deslocamento,
                    monstro[x].deslocamento.natacao);

                for(int contA = 0; contA < monstro[x].tracos_especiais.Count; contA++)
                {
                    if (monstro[x].tracos_especiais[contA] != "")
                    {
                        Console.WriteLine("insert into tracos (traco,monstroid) values ('{0}',(SELECT COUNT(*) FROM Monstro));", monstro[x].tracos_especiais[contA]);
                    }
                   
                }

                for(int contX = 0; contX < monstro[x].pericia.Count; contX++)
                {
                    if (monstro[x].pericia[contX].tipo != "")
                    {
                        Console.WriteLine("insert into pericia (tipo,valor,monstroid) values ('{0}',{1},(SELECT COUNT(*) FROM Monstro));",
                    monstro[x].pericia[contX].tipo, monstro[x].pericia[contX].valor);

                    }
                }

                for (int contX = 0; contX < monstro[x].teste_resistencia.Count; contX++)
                {
                    if (monstro[x].teste_resistencia[contX].tipo != "")
                    {
                        Console.WriteLine("insert into teste_resistencia (tipo,valor,monstroid) values ('{0}',{1},(SELECT COUNT(*) FROM Monstro));",
                       monstro[x].teste_resistencia[contX].tipo, monstro[x].teste_resistencia[contX].valor);
                    }
                   
                }

                for (int contC = 0; contC < monstro[x].sentidos.Count; contC++)
                {
                    if (monstro[x].sentidos[contC].tipo != "")
                    {
                        Console.WriteLine("insert into sentidos (sentindo,alcance,monstroid) values ('{0}',{1},(SELECT COUNT(*) FROM Monstro));",
                                                monstro[x].sentidos[contC].tipo, monstro[x].sentidos[contC].valor);
                    }
                    
                }

                // @@

                for (int contG = 0; contG < monstro[x].acao.Count; contG++)
                {
                    if (monstro[x].acao[contG] != "")
                    {
                        Console.WriteLine("insert into acao (acao,monstroid) values ('{0}',(SELECT COUNT(*) FROM Monstro));",
                        monstro[x].acao[contG]);
                    }
                    
                }

                for (int contH = 0; contH < monstro[x].reacoes.Count; contH++)
                {
                    if (monstro[x].reacoes[contH] != "")
                    {
                        Console.WriteLine("insert into reacao (reacao,monstroid) values ('{0}',(SELECT COUNT(*) FROM Monstro));",
                        monstro[x].reacoes[contH]);
                    }
                    
                }

                for (int contI = 0; contI < monstro[x].acaoLendarias.Count; contI++)
                {
                    if (monstro[x].acaoLendarias[contI] != "")
                    {
                        Console.WriteLine("insert into acao_Lendaria (acao_lendaria,monstroid) values ('{0}',(SELECT COUNT(*) FROM Monstro));",
                        monstro[x].acaoLendarias[contI]);
                    }
                    
                }

                for (int contJ = 0; contJ < monstro[x].equipamentos.Count; contJ++)
                {
                    if (monstro[x].equipamentos[contJ] != "")
                    {
                        Console.WriteLine("insert into equipamento (equipamento,monstroid) values ('{0}',(SELECT COUNT(*) FROM Monstro));",
                        monstro[x].equipamentos[contJ]);
                    }
                    
                }

                //@@

                for (int contB =0; contB < monstro[x].idiomas.Count; contB++)
                {
                    if (monstro[x].idiomas[contB] != "")
                    {
                        Console.WriteLine("insert into idioma (idioma,monstroid) values ('{0}',(SELECT COUNT(*) FROM Monstro));", monstro[x].idiomas[contB]);
                    }
                    
                }

                for(int contD = 0; contD < monstro[x].resistencia_dano.Count; contD++)
                {
                    if (monstro[x].resistencia_dano[contD] != "")
                    {
                        Console.WriteLine("insert into resistencia_Dano (resistencia,monstroid) values ('{0}',(SELECT COUNT(*) FROM Monstro));",
                        monstro[x].resistencia_dano[contD]);
                    }
                    
                }

                for(int contE =0; contE < monstro[x].vulnerabilidades.Count; contE++)
                {
                    if (monstro[x].vulnerabilidades[contE]!="")
                    {
                        Console.WriteLine("insert into vulnerabilidade (vulnerabilidade,monstroid) values ('{0}',(SELECT COUNT(*) FROM Monstro));",
                        monstro[x].vulnerabilidades[contE]);
                    }
                    
                }

                for (int contF = 0; contF < monstro[x].imunidades.Count;contF++)
                {
                    if (monstro[x].imunidades[contF] != "")
                    {
                        Console.WriteLine("insert into imunidade (imunidade,monstroid) values ('{0}',(SELECT COUNT(*) FROM Monstro));",
                        monstro[x].imunidades[contF]);
                    }
                    
                }

                
                
                
                
                
                
                


            }
        }
    }
}
