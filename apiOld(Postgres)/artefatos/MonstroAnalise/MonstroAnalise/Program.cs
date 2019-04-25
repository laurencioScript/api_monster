using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MonstroAnalise
{
    class Program
    {

        private static int menu()
        {
            Console.WriteLine("\n");

            Console.WriteLine("       Caracteristicas Basicas - 01");
            Console.WriteLine("       Atributos               - 02");
            Console.WriteLine("       Deslocamento            - 03");
            Console.WriteLine("       Traços                  - 04");
            Console.WriteLine("       Pericias                - 05");
            Console.WriteLine("       Teste de Resistencia    - 06");
            Console.WriteLine("       Sentindos               - 07");
            Console.WriteLine("       Ação                    - 08");
            Console.WriteLine("       Reação                  - 09");
            Console.WriteLine("       Ação Lendaria           - 10");
            Console.WriteLine("       Equipamentos            - 11");
            Console.WriteLine("       Idiomas                 - 12");
            Console.WriteLine("       Resistencia a Dano      - 13");
            Console.WriteLine("       Vulnerabilidades        - 14");
            Console.WriteLine("       Imunidades              - 15");
            Console.WriteLine("       Secret              - ???");
            Console.Write("\n       Qual opção deseja? (não precisa do zero) ");
            return int.Parse(Console.ReadLine());
        }

        static void Main(string[] args)
        {
            bool key = true;

            do
            {

                try
                {
                    Observador observador = new Observador(menu());
                }
                catch (Exception error)
                {
                    Console.Clear();
                    Console.WriteLine("Digitou errado burro, "+error);
                }

                Console.ReadLine();
                Console.Clear();

            } while (key);

        }
    }
}
