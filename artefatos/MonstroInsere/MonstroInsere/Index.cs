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
    public partial class Index : Form
    {
        List<Monstro> monstros;
        public Index()
        {
            InitializeComponent();
            monstros = new List<Monstro>();

            if (File.Exists(@"C:\Users\Public\script.json"))
            {
                monstros = Manipulador.readJson();
            }

            label2.Text = monstros.Count + " - Monstros";

            foreach(var elemento in monstros)
            {
                cb.Items.Add(elemento.nome);
            }

            
            
        }

        private void Index_Load(object sender, EventArgs e)
        {

        }

        private void label2_Click(object sender, EventArgs e)
        {

        }

        private void btn_novo_Click(object sender, EventArgs e)
        {
            this.Hide();
            Form f = new Form1();
            f.Closed += (s, args) => this.Close();
            f.Show();
        }

        private void btn_editar_Click(object sender, EventArgs e)
        {
            
            if (cb.SelectedItem != null)
            {
                Form f = new Editar(cb.SelectedItem.ToString());
                f.Closed += (s, args) => this.Close();
                f.Show();
                this.Hide();
            }
           
            
            
        }
    }
}
