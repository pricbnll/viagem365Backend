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
consumir api externa - mapa do google - ferramenta gratuita + logica programação
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





ERRO
/Users/pricbnll/Documents/frontEnd/floripaMaisTech/futuroDevTrip/projeto modulo 1/viagem365/node_modules/express/lib/application.js:217
    throw new TypeError('app.use() requires a middleware function')
    ^

TypeError: app.use() requires a middleware function
    at Function.use (/Users/pricbnll/Documents/frontEnd/floripaMaisTech/futuroDevTrip/projeto modulo 1/viagem365/node_modules/express/lib/application.js:217:11)
    at new Server (/Users/pricbnll/Documents/frontEnd/floripaMaisTech/futuroDevTrip/projeto modulo 1/viagem365/src/server.js:13:12)
    at Object.<anonymous> (/Users/pricbnll/Documents/frontEnd/floripaMaisTech/futuroDevTrip/projeto modulo 1/viagem365/src/index.js:3:16)
    at Module._compile (node:internal/modules/cjs/loader:1241:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1295:10)
    at Module.load (node:internal/modules/cjs/loader:1091:32)
    at Module._load (node:internal/modules/cjs/loader:938:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:83:12)
    at node:internal/main/run_main_module:23:47

Node.js v20.9.0
[nodemon] app crashed - waiting for file changes before starting...
^C
 ~/Documents/frontEnd/floripaMaisTech/futuroDevTrip/projeto modulo 1/viagem365/ [feature_migrations] npm run start:dev

> start:dev
> nodemon src/index.js

[nodemon] 3.1.0
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,cjs,json
[nodemon] starting `node src/index.js`
Servidor executando na porta 3365
Executing (default): SELECT 1+1 AS result
Conexão bem sucedida!
[nodemon] restarting due to changes...
[nodemon] starting `node src/index.js`
node:events:492
      throw er; // Unhandled 'error' event
      ^

Error: listen EADDRINUSE: address already in use :::3365
    at Server.setupListenHandle [as _listen2] (node:net:1872:16)
    at listenInCluster (node:net:1920:12)
    at Server.listen (node:net:2008:7)
    at Function.listen (/Users/pricbnll/Documents/frontEnd/floripaMaisTech/futuroDevTrip/projeto modulo 1/viagem365/node_modules/express/lib/application.js:635:24)
    at Server.initializeServer (/Users/pricbnll/Documents/frontEnd/floripaMaisTech/futuroDevTrip/projeto modulo 1/viagem365/src/server.js:35:9)
    at new Server (/Users/pricbnll/Documents/frontEnd/floripaMaisTech/futuroDevTrip/projeto modulo 1/viagem365/src/server.js:14:10)
    at Object.<anonymous> (/Users/pricbnll/Documents/frontEnd/floripaMaisTech/futuroDevTrip/projeto modulo 1/viagem365/src/index.js:3:16)
    at Module._compile (node:internal/modules/cjs/loader:1241:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1295:10)
    at Module.load (node:internal/modules/cjs/loader:1091:32)
Emitted 'error' event on Server instance at:
    at emitErrorNT (node:net:1899:8)
    at process.processTicksAndRejections (node:internal/process/task_queues:82:21) {
  code: 'EADDRINUSE',
  errno: -48,
  syscall: 'listen',
  address: '::',
  port: 3365
}

Node.js v20.9.0
[nodemon] app crashed - waiting for file changes before starting...