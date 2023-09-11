# API_MONSTER D&D

Projeto desenvolvido durante o 4º semestre da faculdade.

**Status do Projeto:** Online

## Escopo

A API Monster D&D é um projeto sem fins lucrativos, criado por mim e meus colegas do IFSP - Campus Cubatão. Nosso objetivo é contribuir com a comunidade de RPG de mesa, facilitando a busca por monstros do [Livro de Monstros do D&D 5e](https://drive.google.com/open?id=15OF2ErP_6eLK5rrA-qKuHJCaIlWgzRDW).

**Integrantes do Projeto:**
- Gabriel Laurencio Barbosa
- Danilo Affonso
- Lucas Marques
- Matheus Samuel

*"Tudo o que temos de decidir é o que fazer com o tempo que nos é dado." - Gandalf*

### Etapas do Projeto

1. Compreensão dos dados a serem armazenados, com a criação de um modelo conceitual usando o BrModelo.
2. Criação de uma aplicação com interface para armazenar os dados do livro em um arquivo JSON, posteriormente transferindo-os para o banco de dados MongoDB. Essa etapa permitiu que cada membro do grupo coletasse dados em seu próprio computador.
3. Criação de um segundo software para padronização de dados, facilitando a visualização e realizando correções em possíveis erros.
4. Utilização do Docker para criar contêineres separados: um para o banco de dados e outro para o painel de acesso ao banco de dados. Posteriormente, os dados foram inseridos no MongoDB.
5. Criação do back-end da API para acessar o MongoDB.
6. Migração do banco de dados do Docker para o Atlas.
7. Utilização da ferramenta Swagger para criar um front-end para nossa API.
8. Migração da API da hospedagem local para a web, hospedando-a no Heroku.
