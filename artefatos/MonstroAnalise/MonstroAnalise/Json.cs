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
    class Json
    {
        public static List<Monstro> readJson()
        {

            var javaScriptSerializer = new JavaScriptSerializer();

            var arquivoExterno = File.ReadAllText(@"C:\Users\Public\script.json");

            var json = javaScriptSerializer.Deserialize<List<Monstro>>(arquivoExterno);

            return json;

        }

        public static List<MonstroMaster> readJson(string arquivo)
        {

            var javaScriptSerializer = new JavaScriptSerializer();

            var arquivoExterno = File.ReadAllText(@"C:\Users\Public\"+arquivo+".json");

            var json = javaScriptSerializer.Deserialize<List<MonstroMaster>>(arquivoExterno);

            return json;

        }

        public static void writeJson(List<Monstro> monstros)
        {
            var javaScriptSerializer = new JavaScriptSerializer();

            var jsonSerializado = JsonConvert.SerializeObject(monstros, Formatting.Indented);

            File.WriteAllText(@"C:\Users\Public\script.json", jsonSerializado);
        }

        public static void writeJson(List<MonstroMaster> monstros,string arquivo)
        {
            var javaScriptSerializer = new JavaScriptSerializer();

            var jsonSerializado = JsonConvert.SerializeObject(monstros, Formatting.Indented);

            File.WriteAllText(@"C:\Users\Public\" + arquivo + ".json", jsonSerializado);
        }

        

    }
}
