# 📅 Sistema de Agendamentos - Projeto Integrador

Este é o Projeto Integrador desenvolvido por nossa equipe como parte do curso técnico em **Desenvolvimento de Sistemas** na **ETE Cícero Dias**. O objetivo é criar um sistema completo com **front-end**, **back-end** e **banco de dados**, aplicando os conhecimentos adquiridos durante o curso.

---

## 📌 Descrição do Projeto

Um sistema simples de agendamentos onde é possível:

- Criar um agendamento
- Listar todos os agendamentos
- Editar agendamentos
- Cancelar agendamentos

Tudo integrado entre o front-end e o back-end.

---

## 🚀 Tecnologias Utilizadas

### 🖥️ Front-end
- HTML5
- CSS3
- JavaScript

### 🔙 Back-end
- PHP (versão do WampServer64)
- MySQL
- phpMyAdmin
- Postman (para testes de API)

---

## 📂 Estrutura do Projeto

/sistema_agendamento │ ├── front-end/ │ ├── index.html │ ├── style.css │ └── script.js │ ├── api/ │ ├── criar.php │ ├── listar.php │ ├── editar.php │ └── cancelar.php │ ├── config/ │ └── database.php │ └── README.md

---

## 🛠️ Como Rodar o Projeto Localmente

### 1. Clonar o repositório
```bash
git clone https://github.com/seu-usuario/seu-repositorio.git

2. Abrir com o WampServer64
Coloque a pasta sistema_agendamento em:
C:\wamp64\www\
Inicie o WampServer

3. Configurar o Banco de Dados
Acesse o phpMyAdmin: http://localhost/phpmyadmin

Crie um banco de dados chamado sistema_agendamento

Execute o SQL abaixo:
CREATE TABLE agendamentos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    data DATETIME NOT NULL
);

4. Acessar no Navegador
Abra:
http://localhost/sistema_agendamento/front-end/index.html

🧪 Testes de API (com Postman)
Criar Agendamento
POST http://localhost/sistema_agendamento/api/criar.php

Body (JSON):


{
  "nome": "João Silva",
  "data": "2025-04-05 14:00:00"
}
Listar Agendamentos
GET http://localhost/sistema_agendamento/api/listar.php

Editar Agendamento
POST http://localhost/sistema_agendamento/api/editar.php

Body (JSON):

{
  "id": 1,
  "nome": "João Atualizado",
  "data": "2025-04-05 15:00:00"
}
Cancelar Agendamento
POST http://localhost/sistema_agendamento/api/cancelar.php

Body (JSON):

{
  "id": 1
}
📌 Próximos Passos
✅ Publicar no GitHub Pages (front-end)

⏳ Criar uma versão com Java + Spring Boot

⏳ Adicionar autenticação (login)

🤝 Contribuição
Faça um fork do repositório

Crie sua branch: git checkout -b minha-feature

Commit: git commit -m 'Adiciona minha feature'

Push: git push origin minha-feature

Abra um Pull Request

📝 Licença
Este projeto está sob a licença MIT. Sinta-se livre para usar, estudar e melhorar!
Email: etecicerodiasds@gmail.com
