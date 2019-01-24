# Survey Tatu API application

API para fornecer informacoes no funcionament do aplicativo.

## Setup

Instale as depencencias inicialmente.

```bash
npm install
```

## .env - Variaveis de ambiente

Configurações

```js
HOST=127.0.0.1
PORT=3333
NODE_ENV=development

APP_NAME=AdonisJs
APP_URL=http://${HOST}:${PORT}

CACHE_VIEWS=false

APP_KEY=

DB_CONNECTION=sqlite
DB_HOST=127.0.0.1
DB_PORT=3306
DB_USER=root
DB_PASSWORD=
DB_DATABASE=adonis

HASH_DRIVER=bcrypt
```

## Migrations

Execute as migrations para a criação das tabelas no banco.

```js
adonis migration:run
```

## Servidor

Para iniciar o servidor em modo de desenvolvimento

```js
adonis serve --dev
```

### End-Points

#### Realizar o login
```bash
URL: /login
Method: POST
Params: email
Response: { token, type, refreshToken}
```

#### Retornar questões do usuario logado
```bash
URL: /questions
Method: GET
Params: 
Response: [ { id, value, question_id, user_id, created_at, updated_at,title } ]
```

#### Atualizar as questões do usuario logado
```bash
URL: /questions
Method: POST
Params: data
Response: [ { id, value, question_id, user_id, created_at, updated_at,title } ]
```

#### Criar novas questões
```bash
URL: /questions/create
Method: POST
Params: data
Response: { id, title, created_at, updated_at }
```