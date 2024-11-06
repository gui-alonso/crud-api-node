# CRUD API Node

Esse é um projeto simples criado com node + testes unitários para ensinar/mostrar aos alunos do 3° ano do curso técnico em Desenvolvimento de Sistemas, a importância de fazer testes em seus projetos.


## Instalar as dependências

`
npm install express
` <br>
`npm install --save-dev jest supertest
`

## Rodar o servidor
arquivo package.json<br>
`"scripts": {
  "start": "node src/app.js",
  "test": "jest"
}
`

**Atenção**: nesse exemplo o projeto principal está na pasta src/app.js. Dependendo de como está seu projeto, você altera essa parte.

## Executar o Servidor e Testes

Inicie o servidor com o comando:
`npm start`

Execute os testes com o comando:
`npm test`

## Para testar no Postman

**GET /users:** Lista todos os usuários.
**GET /users/{id}:** Busca um usuário pelo ID.
**POST /users:** Cria um novo usuário. 

No corpo, envie um 
```json 
{
"name": "Tom Hanks", "email": "tom@example.com"
}
```

**PUT /users/{id}:** Atualiza um usuário. No corpo, envie o JSON com os dados atualizados.
**DELETE /users/{id}:** Deleta um usuário.