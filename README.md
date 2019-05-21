# API_MONSTER D&D

Estou no 4º semestre da faculdade
<br><br>
<b>  Status do projeto:</b>  Online
<br><br>
Escopo:<br><br>
API Monster D&D é um projeto criado por mim e meus colegas do IFSP - Campus Cubatão sem fins lucrativos e destinado a colaborar com a comunidade de RPG de mesa, a função é facilitar a busca de monstros do <a href='https://drive.google.com/open?id=15OF2ErP_6eLK5rrA-qKuHJCaIlWgzRDW'>livro de Monstros do D&D 5e</a>.
<br>

<ul>
  <li>  Gabriel Laurencio Barbosa        </li>
  <li>  Danilo Affonso        </li>
  <li>  Lucas Marques        </li>
  <li>  Matheus Samuel        </li>
</ul>

<br>
<em>“Tudo o que temos de decidir é o que fazer com o tempo que nos é dado.” - Gandalf</em>
<ol>
 <li> Etapa foi compreender quais dados seriam armazenados, foi feito um modelo conceitual utlizando o BrModelo </li>
  <li>  Etapa foi a criação de uma aplicação com interface, para facilitar o armazenamento dos dados do livro, armazenando em um arquivo json, e depois transferindo do json para o BD (mongoDB), essa ferramenta é importante porque permiti cada integrante do grupo fazer a coleta dos dados em seu proprio pc</li>
  <li>
    Etapa a criação de um 2º software para a padronização de dados, com ele fica mais facil a visualização além de que, ele ja faz algumas correções em possiveis erros.
  </li>
  <li>
   Etapa utilizando docker, criamos um container aonde instalamos o banco de dados e em outro container o painel de acesso ao db, e por ultimo inserimos os dados no mongoDB.
  </li>
  <li>
   Etapa criamos o back-end  da API que faz acesso ao MongoDB.
  </li>
  <li>
    Etapa migramos nosso banco de dados do docker para o Atlas.
  </li>
  <li>Etapa usamos a ferramenta Swagger para criar um front-end para nossa API.</li>
  <li>Etapa migramos a API de local para web, hospedando no Heroku</li>
  <li></li>
</ol>

