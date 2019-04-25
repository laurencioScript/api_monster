using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Script.Serialization;
using System.IO;
using Newtonsoft.Json;

namespace MonstroInsere
{
    class Manipulador
    {
       

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

        public static List<string> geraLista(string list)
        {
            var listaDePalavras = list.Split('@');
            

            for (int cont = 0; cont<listaDePalavras.Length;cont++)
            {
                listaDePalavras[cont] = listaDePalavras[cont].Replace("@", "");
            }


            List<string> palavras = new List<string>(listaDePalavras);

            return palavras;

        }

        public static string geraLista(List<string> list)
        {
            string texto = "";

            if (list.Count<1)
            {
                return "";
            }

            foreach (var elemento in list)
            {
                texto += elemento + "@";
            }
            
            texto = texto.Substring(0, (texto.Length-1));
            return texto;

        }

        public static List<TesteResistencia> getTR(string list)
        {

            if(list == "")
            {
                return new List<TesteResistencia>();
            }
            var listaDePalavras = list.Split('@');
            List<TesteResistencia> teste_resistencia = new List<TesteResistencia>();
            
            for (int cont = 0; cont < listaDePalavras.Length; cont++)
            {

                listaDePalavras[cont] = listaDePalavras[cont].Replace("@", "");
                var res = listaDePalavras[cont].Split(':');
                res[0] = res[0].Replace(":", "");
                res[1] = res[1].Replace(":", "");
                teste_resistencia.Add(new TesteResistencia(res[0], int.Parse(res[1])));

            }




            return teste_resistencia;

        }

        public static string getTR(List<TesteResistencia> lista)
        {
            string texto = "";

            if (lista.Count < 1)
            {
                return texto;
            }

            foreach(var elemento in lista)
            {
                texto += elemento.tipo + ":" + elemento.valor + "@";
            }

            texto = texto.Substring(0, texto.Length - 1);


            return texto;

        }


        public static List<Pericia> getPericia(string list)
        {

            if (list == "")
            {
                return new List<Pericia>();
            }
            var listaDePalavras = list.Split('@');
            List<Pericia> teste_resistencia = new List<Pericia>();

            for (int cont = 0; cont < listaDePalavras.Length; cont++)
            {

                listaDePalavras[cont] = listaDePalavras[cont].Replace("@", "");
                var res = listaDePalavras[cont].Split(':');
                res[0] = res[0].Replace(":", "");
                res[1] = res[1].Replace(":", "");
                teste_resistencia.Add(new Pericia(res[0], int.Parse(res[1])));

            }




            return teste_resistencia;

        }

        public static string getPericia(List<Pericia> lista)
        {
            string texto = "";

            if (lista.Count < 1)
            {
                return texto;
            }

            foreach (var elemento in lista)
            {
                texto += elemento.tipo + ":" + elemento.valor + "@";
            }

            texto = texto.Substring(0, texto.Length - 1);


            return texto;

        }

        public static List<Sentidos> getSentido(string list)
        {

            if (list == "")
            {
                return new List<Sentidos>();
            }
            var listaDePalavras = list.Split('@');
            List<Sentidos> teste_resistencia = new List<Sentidos>();

            for (int cont = 0; cont < listaDePalavras.Length; cont++)
            {

                listaDePalavras[cont] = listaDePalavras[cont].Replace("@", "");
                var res = listaDePalavras[cont].Split(':');
                res[0] = res[0].Replace(":", "");
                res[1] = res[1].Replace(":", "");
                teste_resistencia.Add(new Sentidos(res[0], double.Parse(res[1])));

            }

            return teste_resistencia;

        }

        public static string getSentido(List<Sentidos> lista)
        {
            string texto = "";

            if (lista.Count < 1)
            {
                return texto;
            }

            foreach (var elemento in lista)
            {
                texto += elemento.tipo + ":" + elemento.valor + "@";
            }

            texto = texto.Substring(0, texto.Length - 1);


            return texto;

        }


    }
}
