# Flying Dutchman's Dock

## Introdução

A Flying Dutchman's Dock é um trabalho da disciplina de Banco de Dados I. Ela representa um sistema fictício no qual permite controlar o fluxo de entrada e saída de navios em um porto.

## Instalação

#### Requisitos:

- Ter NodeJS instalado (https://nodejs.org/en/download/)

#### Backend

Aponte para a pasta do backend para executar:

```bash
npm i
```

após isso, você terá todas as dependências do backend instaladas, agora você deve criar um arquivo .env dentro da pasta do backend.

.env.example
```bash
API_URL=https://localhost:3333
DB_USER=root
DB_PASSWORD=
DB_PORT=3306
DB_HOST=localhost
DB_NAME=fdd
```

Agora execute:

```bash
npm run dev
```

#### Frontend

Apontando para a pasta do backend, execute:

```bash
npm i
```

depois de ter as dependências instaladas, basta executar:


```bash
npm run start
```
