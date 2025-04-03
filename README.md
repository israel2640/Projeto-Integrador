# PROJETO-INTEGRADOR

Este é um projeto integrador desenvolvido por nossa equipe como parte do curso técnico em Desenvolvimento de Sistemas na ETE. O objetivo é criar um sistema completo, com front-end, back-end e banco de dados, aplicando os conceitos aprendidos durante o curso.

## 📌 Sistema de Agendamentos

Este é um sistema simples de agendamentos desenvolvido com **PHP** no back-end e **MySQL** como banco de dados. O objetivo é criar um sistema funcional que permita o cadastro de usuários e o agendamento de compromissos.

## 🚀 Tecnologias Utilizadas

- **PHP 8**
- **MySQL**
- **Apache ou Nginx**
- **Postman (para testes de API)**

## 📂 Estrutura do Projeto

```
/seu-projeto
│-- frontend/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│
│-- backend/
│   ├── config/
│   │   ├── database.php
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── index.php
│
│-- database/
│   ├── script.sql
│
│-- README.md
```

## 🛠️ Como Rodar o Projeto

1️⃣ **Clone o repositório:**
```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
```

2️⃣ **Entre no diretório do projeto:**
```bash
cd seu-repositorio
```

3️⃣ **Configure o banco de dados MySQL:**
- Crie um banco de dados chamado `sistema_agendamento`
- Execute o script SQL localizado na pasta `database/`

4️⃣ **Configure o servidor PHP:**
- Se estiver usando XAMPP, coloque os arquivos do `backend/` dentro da pasta `htdocs/`
- Se estiver usando outro servidor, configure o Virtual Host corretamente

5️⃣ **Acesse o sistema pelo navegador:**
```bash
http://localhost/seu-projeto/frontend/
```

## 📌 Endpoints da API

### Usuários
- **POST /usuarios** → Cadastra um usuário
- **GET /usuarios** → Lista todos os usuários
- **PUT /usuarios/{id}** → Atualiza um usuário
- **DELETE /usuarios/{id}** → Remove um usuário

### Agendamentos
- **POST /agendamentos** → Cadastra um agendamento
- **GET /agendamentos** → Lista todos os agendamentos
- **PUT /agendamentos/{id}** → Atualiza um agendamento
- **DELETE /agendamentos/{id}** → Remove um agendamento

## 📌 Contribuição

1️⃣ **Fork este repositório**
2️⃣ **Crie uma branch para sua feature:**
```bash
git checkout -b minha-feature
```
3️⃣ **Faça commit das mudanças:**
```bash
git commit -m 'Adiciona minha feature'
```
4️⃣ **Envie para o GitHub:**
```bash
git push origin minha-feature
```
5️⃣ **Abra um Pull Request**

## 📝 Licença

Este projeto está sob a licença MIT. Sinta-se livre para usá-lo e modificá-lo!

## 💡 Dúvidas? Entre em contato!
📧 **Email:** etecicerodiasds@gmail.com
