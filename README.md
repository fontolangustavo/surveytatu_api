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
