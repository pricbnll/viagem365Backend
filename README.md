# Não faça sua viagem sem antes utilizar a plataforma Viagem365


  O Viagem365 é uma plataforma que visa promover viagens sustentáveis e experiências positivas para os usuários, fornecendo acesso a informações sobre destinos turísticos, praias, atrações naturais e atividades recreativas. Os usuários podem explorar e descobrir novos destinos, encontrar dicas de viagem sustentável e compartilhar suas experiências. As funcionalidades incluem o cadastro de novos usuários, listagem, edição e seleção de destinos, visualização de informações dos destinos, entre outras. 
  
  
## 🏦 Módulo 1 - Projeto Avaliativo

**Objetivo: Montagem e execução de uma aplicação Back-End, que deverá ser uma API Rest, codificada com uso do Node, Express e PostgreSQL - Software MVP**

A Viagem365, deseja automatizar algumas ações de atendimento, criando um sistema para armazenamento de informações referente aos locais, usuários do aplicativo e comentários.

  *Bora usar as boas praticas de desenvolvimento de software!*


Seguindo um roteiro e aplicando as regras de negócio e rotas que devem ser criadas na aplicação com todas as regras de entrega do projeto avaliativo.


## 🤖 Como rodar o repositório:

Clone o repositório em sua máquina em uma pasta local 

`Git clone https://github.com/pricbnll/viagem365.git`

### ≈Na primeira vez é necessário instalar as dependências:

1. `npm install`
2. Se for em ambiente local: `npm install --dev`
3. `cp .env_example .env`

## Instale as bibliotecas utilizadas:

### instalar o sequelize

`npm install sequelize`

### instalar o driver do PostgreSQL

`npm install pg`

### instalar o CLI do sequelize nas devDependencies

`npm install sequelize-cli --save-dev`

### instalar o dotenv

`npm install dotenv`

### instalar o JsonWebToken ( JWT )

`npm install jsonwebtoken`

### instalar o Nodemon nas devDependencies

`npm install nodemon --save-dev`

### instalar o Swagger UI

`npm install swagger-ui-express`

### instalar o Swagger AutoGen para gerar o documento Swagger de forma automática.

`npm install swagger-autogen`




## 🤖 Como rodar o Swagger:

Pelo terminal passa o comando: `node ./swagger.js` 

Obs. No arquivo package.json já tem um exemplo para cada rota

Pelo browser:
[link] (http://localhost:3365/docs)


## PARA ACESSAR A DOCUMETAÇAO  ACESSE O LINK:
[SEQUELIZE](https://sequelize.org/docs/v6/core-concepts/model-basics/)
[SWAGGER Autogen](https://swagger-autogen.github.io/docs/endpoints/endpoint-as-deprecated/)

### Preencher o .env com seus dados
```
DIALECT=postgres 
HOST=localhost
USERNAMEDB=postgres #Qual o username da sua DataBase? Exemplo
PASSWORDDB=postgres 'Qual a senha do seu DataBase? Exemplo
DATABASE=viagem365 #Qual o nome da DataBase? Exemplo
PORT=5432
PORT_API=3365 #Qual a porta do seu servidor escolhido? Exemplo
SECRET_JWT=viagem365 #Qual a senha secreta para gerar o JWT? Exemplo
```

### Sempre que precisas rodar o repositório em ambiente local

1. `npm run start:dev`

----------------------
Você deverá criar a documentação no formato README , explicando a estrutura do
projeto, como executá-lo localmente, e outras informações relevantes.
Informar como rodar o sistema - como uma pessoa que nunca rodou um node.
como executar - baixa .env, npm intstall…..
resumo que esta o projeto - separou uma pasta para controllers, explicar como foi separado os plano de negocio,
consumir api externa - mapa do google - ferramenta gratuita + logica programação - openStreetMap
Colocar sobre a production e develop
Instalação do Node.js e configuração do ambiente de desenvolvimento.
Configuração do banco de dados relacional com o Sequelize - Documentar o modelo de banco de dados e as migrações utilizadas.
-----------------------

## 🛠️ Construído com

- Trello - aprendendo a criar e mover cards.
- VsCode - aprendendo a usar a ferramenta e suas extensões.
- GitHub - aprendendo a utilizar sempre enviando ou trazendo para meu local o repositório, fazendo alterações, GitFlow
- Node.js - Instalação
- Express - CRUD
- Sequelize - aprendendo a usar migration, models, routes...
- Postgres
- Postman
- JWT
- Swagger
- Seeds 
  

## 🧑🏻‍🏫 Professores par auxilio

* **Rawan.H** - [GitHub](https://github.com/Hawangledt)
* **Douglas Cavalcante** - [GitHub](https://github.com/douglas-cavalcante)


## Melhorias



## 🎁 Expressões de gratidão

* O Floripa Mais Tec é uma iniciativa da Prefeitura de Florianópolis, em parceria com SENAI/SC, SEBRAE e ACATE, que visa democratizar o acesso ao ensino tecnológico para todos, oferecendo cursos de Tecnologia gratuitos!  📢;
* Lab365 e todos os monitores;
* Qualquer dúvida ou sugestão de melhorar o código eu aceito - algumas escrevi acima;
* Grata a todos os alunos da TRIP - voces são uns queriduxxxx 🫂;


## Video de apresentação do MiniProjeto 1

[Video] - ()