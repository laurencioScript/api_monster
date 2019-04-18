namespace MonstroInsere
{
    partial class Index
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.btn_novo = new System.Windows.Forms.Button();
            this.btn_editar = new System.Windows.Forms.Button();
            this.label1 = new System.Windows.Forms.Label();
            this.label2 = new System.Windows.Forms.Label();
            this.cb = new System.Windows.Forms.ComboBox();
            this.msg = new System.Windows.Forms.Label();
            this.label3 = new System.Windows.Forms.Label();
            this.SuspendLayout();
            // 
            // btn_novo
            // 
            this.btn_novo.FlatStyle = System.Windows.Forms.FlatStyle.System;
            this.btn_novo.Location = new System.Drawing.Point(221, 135);
            this.btn_novo.Name = "btn_novo";
            this.btn_novo.Size = new System.Drawing.Size(71, 24);
            this.btn_novo.TabIndex = 0;
            this.btn_novo.Text = "novo";
            this.btn_novo.UseVisualStyleBackColor = true;
            this.btn_novo.Click += new System.EventHandler(this.btn_novo_Click);
            // 
            // btn_editar
            // 
            this.btn_editar.AutoSizeMode = System.Windows.Forms.AutoSizeMode.GrowAndShrink;
            this.btn_editar.FlatStyle = System.Windows.Forms.FlatStyle.System;
            this.btn_editar.Location = new System.Drawing.Point(285, 197);
            this.btn_editar.Name = "btn_editar";
            this.btn_editar.Size = new System.Drawing.Size(62, 24);
            this.btn_editar.TabIndex = 1;
            this.btn_editar.Text = "editar";
            this.btn_editar.UseVisualStyleBackColor = true;
            this.btn_editar.Click += new System.EventHandler(this.btn_editar_Click);
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.ForeColor = System.Drawing.SystemColors.ActiveBorder;
            this.label1.Location = new System.Drawing.Point(435, 310);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(81, 17);
            this.label1.TabIndex = 2;
            this.label1.Text = "olá escravo";
            // 
            // label2
            // 
            this.label2.AutoSize = true;
            this.label2.Font = new System.Drawing.Font("Microsoft Sans Serif", 30F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label2.Location = new System.Drawing.Point(111, 42);
            this.label2.Name = "label2";
            this.label2.Size = new System.Drawing.Size(303, 58);
            this.label2.TabIndex = 3;
            this.label2.Text = "0 - Monstros";
            this.label2.Click += new System.EventHandler(this.label2_Click);
            // 
            // cb
            // 
            this.cb.DropDownStyle = System.Windows.Forms.ComboBoxStyle.DropDownList;
            this.cb.FlatStyle = System.Windows.Forms.FlatStyle.System;
            this.cb.FormattingEnabled = true;
            this.cb.Location = new System.Drawing.Point(84, 197);
            this.cb.Name = "cb";
            this.cb.Size = new System.Drawing.Size(195, 24);
            this.cb.TabIndex = 4;
            // 
            // msg
            // 
            this.msg.AutoSize = true;
            this.msg.Location = new System.Drawing.Point(241, 272);
            this.msg.Name = "msg";
            this.msg.Size = new System.Drawing.Size(0, 17);
            this.msg.TabIndex = 5;
            // 
            // label3
            // 
            this.label3.AutoSize = true;
            this.label3.Location = new System.Drawing.Point(12, 9);
            this.label3.Name = "label3";
            this.label3.Size = new System.Drawing.Size(104, 17);
            this.label3.TabIndex = 6;
            this.label3.Text = "C:\\Users\\Public";
            // 
            // Index
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(8F, 16F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(521, 336);
            this.Controls.Add(this.label3);
            this.Controls.Add(this.msg);
            this.Controls.Add(this.cb);
            this.Controls.Add(this.label2);
            this.Controls.Add(this.label1);
            this.Controls.Add(this.btn_editar);
            this.Controls.Add(this.btn_novo);
            this.MaximizeBox = false;
            this.MinimizeBox = false;
            this.Name = "Index";
            this.Text = "InsereMonstro";
            this.Load += new System.EventHandler(this.Index_Load);
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Button btn_novo;
        private System.Windows.Forms.Button btn_editar;
        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.Label label2;
        private System.Windows.Forms.ComboBox cb;
        private System.Windows.Forms.Label msg;
        private System.Windows.Forms.Label label3;
    }
}