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
    public partial class Editar : Form
    {
        private string nome;
        List<Monstro> monstros;
        public Editar()
        {
            InitializeComponent();
            monstros = Manipulador.readJson();
        }

        public Editar(string nome)
        {
            this.nome = nome;
            InitializeComponent();
            monstros = Manipulador.readJson();
            foreach (var elemento in monstros)
            {
                if(elemento.nome == nome)
                {
                    tb_desafio.Text = elemento.desafio.ToString();
                    tb_xp.Text = elemento.xp.ToString();
                    tb_nome.Text = elemento.nome;
                    tb_tipo.Text = elemento.tipo;
                    tb_tamanho.Text = elemento.tamanho;
                    tendencia.Text = elemento.tendencia;
                    tb_pv.Text = elemento.pontosDeVida.ToString();
                    tb_ca.Text = elemento.classeArmadura.ToString();

                    tb_forca.Text = elemento.atributo.forca.ToString();
                    tb_destreza.Text = elemento.atributo.destreza.ToString();
                    tb_constituicao.Text = elemento.atributo.constituicao.ToString();
                    tb_inteligencia.Text = elemento.atributo.inteligencia.ToString();
                    tb_sabedoria.Text = elemento.atributo.sabedoria.ToString();
                    tb_carisma.Text = elemento.atributo.carisma.ToString();

                    tb_escalada.Text = elemento.deslocamento.escalada.ToString();
                    natacao.Text = elemento.deslocamento.natacao.ToString();
                    tb_voo.Text = elemento.deslocamento.voo.ToString();
                    tb_deslocamento.Text = elemento.deslocamento.deslocamento.ToString();
                    tb_escavacao.Text = elemento.deslocamento.escavacao.ToString();

                    tb_tracos.Text = Manipulador.geraLista(elemento.tracos_especiais);
                    tb_pericia.Text = Manipulador.getPericia(elemento.pericia);
                    tb_tr.Text = Manipulador.getTR(elemento.teste_resistencia);
                    tb_sentindos.Text = Manipulador.getSentido(elemento.sentidos);

                    tb_acao.Text = Manipulador.geraLista(elemento.acao);
                    tb_reacao.Text = Manipulador.geraLista(elemento.reacoes);
                    tb_acaolendaria.Text = Manipulador.geraLista(elemento.acaoLendarias);
                    tb_equipamentos.Text = Manipulador.geraLista(elemento.equipamentos);

                    tb_idioma.Text = Manipulador.geraLista(elemento.idiomas);
                    tb_imunidade.Text = Manipulador.geraLista(elemento.imunidades);
                    tb_rd.Text = Manipulador.geraLista(elemento.resistencia_dano);
                    tb_vulnerabilidade.Text = Manipulador.geraLista(elemento.vulnerabilidades);


                }
            }
        }

        private void btn_voltar_Click(object sender, EventArgs e)
        {
            this.Hide();
            Form f = new Index();
            f.Closed += (s, args) => this.Close();
            f.Show();
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
                for (int x = 0;x<monstros.Count;x++)
                {
                    if(monstros[x].nome == nome)
                    {
                        monstros[x] = monstro;
                    }
                }
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

        private void Editar_Load(object sender, EventArgs e)
        {

        }
    }
}
