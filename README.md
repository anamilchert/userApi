# 🔐 API de Usuários - Segurança da Informação

Projeto desenvolvido para a disciplina de Segurança da Informação, contendo duas versões da API:

- **v1.0:** CRUD básico de usuários (sem autenticação)
- **v2.0:** CRUD com autenticação via JWT e práticas de segurança implementadas

---

## 📁 Tecnologias Utilizadas

- Node.js
- Express
- MongoDB + Mongoose
- bcrypt
- JSON Web Token (JWT)
- dotenv

---

## Crie um arquivo .env com:

MONGO_URI=mongodb://localhost:27017/nome-do-banco

JWT_SECRET=sua_chave_secreta

---

## 📦 Instalação e Execução

```
cd userApi
npm install express mongoose dotenv bcrypt jsonwebtoken
```

## para rodar:
- v1.0: node app.js
- v2.0: node server.js

Testes
Utilize a extensão REST Client no VS Code e o arquivo testes.http incluído no projeto para testar as rotas de registro, login, CRUD e simulações de ataques (v1.0).

