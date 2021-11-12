# 🧟‍♂️ Survivors
- Interface React/NextJS rodando em SSR
- API GraphQL e MongoDB
- Banco de dados hospedado em https://cloud.mongodb.com/


Faça o clone deste repositório e também do servidor

Repositório do servidor: https://github.com/gatoledo1/graphql

-----------

## 🚀 Acessar e testar de forma rápida

https://survivors-blue.vercel.app/


-----------

### ✅ Rodar o código fonte em ambiente local

Clone este repositório e também o repositório do servidor, eles não precisam ficar na mesma pasta, o servidor só precisa ser startado 


#### Para rodar o projeto, as versões do NodeJS esperadas são:
- ^12.22.0
- ^14.16.0
-  16.0.0

<a href="https://nodejs.org/en/download/" target="_blank">Link para download </a>

Caso já possua outra versão do NodeJS instalada em sua maquina, use o comando a seguir para trocar de versão
```javascript
node -v //14.17.5

nvm use 14.17.5 
``` 
-------------

Abra duas janelas do terminal, uma com este repositório e a outra no diretório do servidor GraphQL

- Instale os pacotes necessários em ambos os projetos com o comando:
```javascript
yarn

//ou

npm install
```

- Execute ambos os projetos 
```javascript
//Servidor GraphQL
yarn start

//Frontend Survivors
yarn dev
//ou 
yarn build && yarn start
```

#### ⚠️ Orientações

Não funcionou criar variaveis de ambiente para subir na Vercel, a plataforma pegava o link correto, mas inseria /graphql no final da url, então optei por setar manualmente.
Sendo assim, ao executar o front, o aquivo 'survivors/apollo/client.tsx' irá requisitar o servidor hospedado no Heroku, mude para o ambiente local da seguinte forma:
```javascript
///apollo/client.tsx -- Arquivo atual

let apolloClient: any

const httpLink = new HttpLink({ 
  uri: "https://graphql-api-survivors.herokuapp.com",
});

function createApolloClient() {
```

Para essa configuração 

```javascript
///apollo/client.tsx -- Modificação para ambiente local

let apolloClient: any

const httpLink = new HttpLink({ 
  uri: "http://localhost:4000",
});

function createApolloClient() {
```
Após trocar o link, restart os projetos



