using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using System.Web.Script.Serialization;
using System.IO;

namespace MonstroInsere
{
    public partial class Form1 : Form
    {
        List<Monstro> monstros;
        public Form1()
        {
            InitializeComponent();

            monstros = new List<Monstro>();

            if (File.Exists(@"C:\Users\Public\script.json"))
            {
                monstros = Manipulador.readJson();
            }
            tb_escalada.Text = "0";
            tb_escavacao.Text = "0";
            natacao.Text = "0";
            tb_voo.Text = "0";
            tb_deslocamento.Text = "0";
            /*
            tb_acao.Text = @"Ataques Múltiplos. O planetário realiza dois ataques corpo-acorpo.
                                Espada Grande. Ataque Corpo-a-Corpo com Arma: +12 para
                                atingir, alcance 1,5 m, um alvo. Acerto: 21 (4d6 + 7) de dano
                                cortante mais 22 (5d8) de dano radiante.
                                Toque Curativo (4/Dia). O planetário toca outra criatura. O alvo
                                recupera magicamente 30 (6d8 + 3) pontos de vida e é libertado
                                de qualquer maldição, doença, veneno, cegueira ou surdez.";
            tb_pericia.Text = "Percepção:11";
            tb_acaolendaria.Text = "";
            tb_ca.Text = "19";
            tb_carisma.Text = "25";
            tb_constituicao.Text = "24";
            tb_desafio.Text = "16";
            tb_destreza.Text = "20";
            tb_equipamentos.Text = "";
            
            tb_forca.Text = "24";
            tb_idioma.Text = "todos@telepatia";
            tb_imunidade.Text = "enfeitiçado@exausto@amedrontado";
            tb_inteligencia.Text = "19";
            
            tb_nome.Text = "Planetario";
            tb_pv.Text = "16D10+112";
            tb_rd.Text = "radiante@concussão, perfurante e cortante de ataques não-mágicos";
            tb_reacao.Text = "";
            tb_sabedoria.Text = "22";
            tb_sentindos.Text = "visão verdadeira:36@percepção passiva:21";
            tb_tamanho.Text = "Grande";
            tb_tipo.Text = "Celestial";
            tb_tr.Text = "Constituição:12@Sabedoria:11@Carisma:12";
            tb_tracos.Text = @"Conjuração Inata. A habilidade de conjuração de um planetário
                            é Carisma (CD de resistência de magia 20). O planetário pode
                            conjurar, inatamente, as seguintes magias, sem necessidade de
                            componentes materiais:
                            À vontade: detectar bem e mal, invisibilidade (pessoal apenas)
                            3/dia cada: barreira de lâminas, coluna de chamas, dissipar o
                            bem e mal, reviver os mortos
                            1/dia cada: comunhão, controlar o clima, praga de insetos
                            Resistência à Magia. O planetário possui vantagem nos testes
                            de resistência contra magias e outros efeitos mágicos
                            Conjuração Inata. A habilidade de conjuração de um planetário
                            é Carisma(CD de resistência de magia 20). O planetário pode
                            conjurar, inatamente, as seguintes magias, sem necessidade de
                            componentes materiais:
                                        À vontade: detectar bem e mal, invisibilidade (pessoal apenas)
                            3 / dia cada: barreira de lâminas, coluna de chamas, dissipar o
                            bem e mal, reviver os mortos
                            1 / dia cada: comunhão, controlar o clima, praga de insetos
                              Resistência à Magia. O planetário possui vantagem nos testes
                            de resistência contra magias e outros efeitos mágicos";
            
            tb_vulnerabilidade.Text = "";
            tb_xp.Text = "15000";
            tendencia.Text = "LB";

    */

        }

        private void Form1_Load(object sender, EventArgs e)
        {

        }

        private void label30_Click(object sender, EventArgs e)
        {

        }

        private void label11_Click(object sender, EventArgs e)
        {

        }

        private void btn_salvar_Click(object sender, EventArgs e)
        {

            bool existe_erro = false;
            Monstro monstro = new Monstro();

            try
            {
                monstro = new Monstro(tb_desafio.Text, int.Parse(tb_xp.Text), tb_nome.Text, tb_tipo.Text, tb_tamanho.Text, tendencia.Text, tb_pv.Text, int.Parse(tb_ca.Text));

            }
            catch (Exception erro)
            {
                MessageBox.Show("Erro em Monstro: ");
                MessageBox.Show("Seu burro");
                existe_erro = true;
            }

            try
            {
                monstro.atributo = new Atributos(Convert.ToInt32(tb_forca.Text), Convert.ToInt32(tb_destreza.Text), Convert.ToInt32(tb_constituicao.Text), Convert.ToInt32(tb_inteligencia.Text), Convert.ToInt32(tb_sabedoria.Text), Convert.ToInt32(tb_carisma.Text));
            }
            catch (Exception erro)
            {
                MessageBox.Show("Erro em Atributos: ");
                MessageBox.Show("seu burro");
                existe_erro = true;

            }

            try
            {
                monstro.deslocamento.deslocamento = Convert.ToDouble(tb_deslocamento.Text);
                monstro.deslocamento.voo = Convert.ToDouble(tb_voo.Text);
                monstro.deslocamento.escalada = Convert.ToDouble(tb_escalada.Text);
                monstro.deslocamento.natacao = Convert.ToDouble(natacao.Text);
                monstro.deslocamento.escavacao = Convert.ToDouble(tb_escavacao.Text);

            }
            catch (Exception erro)
            {
                MessageBox.Show("Erro em Deslocamento");
                MessageBox.Show("seu burro");
                existe_erro = true;

            }

            try
            {
                monstro.tracos_especiais = Manipulador.geraLista(tb_tracos.Text);
                monstro.pericia = Manipulador.getPericia(tb_pericia.Text);
                monstro.teste_resistencia = Manipulador.getTR(tb_tr.Text);
                monstro.sentidos = Manipulador.getSentido(tb_sentindos.Text);

            }
            catch (Exception erro)
            {
                MessageBox.Show("Erro pode estar em Traços, Pericia, Teste de Resistencia e Sentindos");
                MessageBox.Show("seu burro");
                existe_erro = true;

            }

            try
            {
                monstro.acao = Manipulador.geraLista(tb_acao.Text);
                monstro.reacoes = Manipulador.geraLista(tb_reacao.Text);
                monstro.acaoLendarias = Manipulador.geraLista(tb_acaolendaria.Text);
                monstro.equipamentos = Manipulador.geraLista(tb_equipamentos.Text);

            }
            catch (Exception erro)
            {
                MessageBox.Show("Erro pode estar em Ação, Reações, Ações Lendarias e Equipamentos");
                MessageBox.Show("seu burro");
                existe_erro = true;

            }

            try
            {
                monstro.idiomas = Manipulador.geraLista(tb_idioma.Text);
                monstro.imunidades = Manipulador.geraLista(tb_imunidade.Text);
                monstro.resistencia_dano = Manipulador.geraLista(tb_rd.Text);
                monstro.vulnerabilidades = Manipulador.geraLista(tb_vulnerabilidade.Text);

            }
            catch (Exception erro)
            {
                MessageBox.Show("Erro pode estar em Idiomas, Resistencia a Dano, Vulnerabilidades e Imunidades");
                MessageBox.Show("seu burro");
                existe_erro = true;

            }

         
            if (!existe_erro)
            {
                monstros.Add(monstro);
                Manipulador.writeJson(monstros);
                tb_acao.Text = "";
                tb_pericia.Text = "";
                tb_acaolendaria.Text = "";
                tb_ca.Text = "";
                tb_carisma.Text = "";
                tb_constituicao.Text = "";
                tb_desafio.Text = "";
                tb_deslocamento.Text = "0";
                tb_destreza.Text = "";
                tb_equipamentos.Text = "";
                tb_escalada.Text = "0";
                tb_escavacao.Text = "0";
                tb_forca.Text = "";
                tb_idioma.Text = "";
                tb_imunidade.Text = "";
                tb_inteligencia.Text = "";
                natacao.Text = "0";
                tb_nome.Text = "";
                tb_pv.Text = "";
                tb_rd.Text = "";
                tb_reacao.Text = "";
                tb_sabedoria.Text = "";
                tb_sentindos.Text = "";
                tb_tamanho.Text = "";
                tb_tipo.Text = "";
                tb_tr.Text = "";
                tb_tracos.Text = "";
                tb_voo.Text = "0";
                tb_vulnerabilidade.Text = "";
                tb_xp.Text = "";
                tendencia.Text = "";

            }





        }

        private void btn_voltar_Click(object sender, EventArgs e)
        {
            this.Hide();
            Form f = new Index();
            f.Closed += (s, args) => this.Close();
            f.Show();
        }

        private void tb_pericia_TextChanged(object sender, EventArgs e)
        {
            string input = tb_pericia.Text;
            input = input.Replace(" +", ":");
            if(input.IndexOf(", ") > -1)
                input = input.Replace(", ", "@");
            tb_pericia.Text = input;

        }

        private void tb_tr_TextChanged(object sender, EventArgs e)
        {
            string input = tb_tr.Text;

            input = input.Replace(" +", ":");

            if (input.IndexOf(", ") >-1)
                input = input.Replace(", ", "@");

            tb_tr.Text = input;

            
            
        }

        private void tb_sentindos_TextChanged(object sender, EventArgs e)
        {
            string input = tb_sentindos.Text;
            

            if (input.IndexOf(" m,") > -1)
                input = input.Replace(" m,", "@");

            for(int x = 1; x <=9; x++)
            {
                if (input.IndexOf(" "+x) > -1)
                    input = input.Replace(" " + x, ":" + x);
            }

            tb_sentindos.Text = input;

        }

        private void tb_idioma_TextChanged(object sender, EventArgs e)
        {
            string input = tb_idioma.Text;


            if (input.IndexOf(", ") > -1)
                input = input.Replace(", ", "@");

            tb_idioma.Text = input;
        }
    }
}
