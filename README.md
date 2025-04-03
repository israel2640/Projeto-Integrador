# PROJETO-INTEGRADOR
 Este é um projeto integrador desenvolvido por nossa equipe como parte do curso técnico em Desenvolvimento de Sistemas na ETE. O objetivo é criar um sistema completo, com front-end, back-end e banco de dados, aplicando os conceitos aprendidos durante o curso.

 📌 Sistema de Agendamentos

Este é um sistema simples de agendamentos desenvolvido com Java (Spring Boot) no back-end e MySQL como banco de dados. O objetivo é criar um sistema funcional que permita o cadastro de usuários e o agendamento de compromissos.

🚀 Tecnologias Utilizadas

Java 17

Spring Boot

Spring Data JPA

MySQL

Postman (para testes de API)

📂 Estrutura do Projeto

/seu-projeto
│-- src/
│   ├── main/
│   │   ├── java/com/seuapp/
│   │   │   ├── controllers/
│   │   │   ├── models/
│   │   │   ├── repositories/
│   │   │   ├── services/
│   ├── resources/
│   │   ├── application.properties
│-- pom.xml (dependências do Maven)
│-- README.md

🛠️ Como Rodar o Projeto

Clone o repositório:

git clone https://github.com/seu-usuario/seu-repositorio.git

Entre no diretório do projeto:

cd seu-repositorio

Configure o banco de dados MySQL:

Crie um banco de dados chamado seu_banco

Configure application.properties com as credenciais do banco

Execute o projeto:

mvn spring-boot:run

Teste os endpoints no Postman ou navegador:

GET http://localhost:8080/usuarios

POST http://localhost:8080/agendamentos

📌 Endpoints da API

Usuários

POST /usuarios → Cadastra um usuário

GET /usuarios → Lista todos os usuários

PUT /usuarios/{id} → Atualiza um usuário

DELETE /usuarios/{id} → Remove um usuário

Agendamentos

POST /agendamentos → Cadastra um agendamento

GET /agendamentos → Lista todos os agendamentos

PUT /agendamentos/{id} → Atualiza um agendamento

DELETE /agendamentos/{id} → Remove um agendamento

📌 Contribuição

Fork este repositório

Crie uma branch para sua feature: git checkout -b minha-feature

Faça commit das mudanças: git commit -m 'Adiciona minha feature'

Envie para o GitHub: git push origin minha-feature

Abra um Pull Request

📝 Licença

Este projeto está sob a licença MIT. Sinta-se livre para usá-lo e modificá-lo!

💡 Dúvidas? Entre em contato!

📧 Email: etecicerodiasds@gmail.com
