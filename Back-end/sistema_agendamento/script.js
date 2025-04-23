// ✅ LISTAR AGENDAMENTOS
async function listarAgendamentos() {
    try {
      const response = await fetch("http://localhost/sistema_agendamento/api/listar.php");
      const agendamentos = await response.json();
  
      const tabela = document.getElementById("lista-agendamentos");
      tabela.innerHTML = "";
  
      agendamentos.forEach(agendamento => {
        const linha = document.createElement("tr");
  
        linha.innerHTML = `
          <td data-label="ID">${agendamento.id}</td>
          <td data-label="Nome">${agendamento.nome}</td>
          <td data-label="Data">${agendamento.data}</td>
          <td data-label="Ações">
            <button onclick="editarAgendamento(${agendamento.id}, '${agendamento.nome}', '${agendamento.data}')">Editar</button>
            <button onclick="cancelarAgendamento(${agendamento.id})">Cancelar</button>
          </td>
        `;
  
        tabela.appendChild(linha);
      });
    } catch (error) {
      console.error("Erro ao buscar agendamentos:", error);
    }
  }
  
  // ✅ CADASTRAR AGENDAMENTO (com validação de data passada)
  document.getElementById("form-agendamento").addEventListener("submit", async function(event) {
    event.preventDefault();
  
    const nome = document.getElementById("nome").value;
    const dataSelecionada = document.getElementById("data").value;
    const agora = new Date();
    const dataSelecionadaObj = new Date(dataSelecionada);
  
    if (dataSelecionadaObj < agora) {
      alert("Você não pode agendar uma data que já passou!");
      return;
    }
  
    try {
      const response = await fetch("http://localhost/sistema_agendamento/api/criar.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome, data: dataSelecionada })
      });
  
      const result = await response.json();
      alert(result.message || result.error);
      listarAgendamentos();
    } catch (error) {
      console.error("Erro ao cadastrar:", error);
    }
  });
  
  // ✅ EDITAR AGENDAMENTO (com validação de data passada)
  async function editarAgendamento(id, nome, data) {
    const novoNome = prompt("Editar nome:", nome);
    const novaData = prompt("Editar data e hora (YYYY-MM-DD HH:MM):", data);
  
    if (!novoNome || !novaData) {
      alert("Nome e data são obrigatórios.");
      return;
    }
  
    const agora = new Date();
    const novaDataObj = new Date(novaData);
  
    if (novaDataObj < agora) {
      alert("Você não pode agendar para uma data que já passou!");
      return;
    }
  
    try {
      const response = await fetch("http://localhost/sistema_agendamento/api/editar.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, nome: novoNome, data: novaData })
      });
  
      const result = await response.json();
      alert(result.message || result.error);
      listarAgendamentos();
    } catch (error) {
      console.error("Erro ao editar:", error);
    }
  }
  
  // ✅ CANCELAR AGENDAMENTO
  async function cancelarAgendamento(id) {
    if (!confirm("Tem certeza que deseja cancelar este agendamento?")) return;
  
    try {
      const response = await fetch("http://localhost/sistema_agendamento/api/cancelar.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id })
      });
  
      const result = await response.json();
      alert(result.message || result.error);
      listarAgendamentos();
    } catch (error) {
      console.error("Erro ao cancelar:", error);
    }
  }
  
  // ✅ ALTERNAR MODO CLARO/ESCURO
  function alternarModo() {
    const body = document.body;
    const botao = document.querySelector(".toggle-theme");
  
    body.classList.toggle("dark-mode");
  
    botao.textContent = body.classList.contains("dark-mode")
      ? "☀️ Modo Claro"
      : "🌙 Modo Escuro";
  }
  
  // ✅ INICIAR AO CARREGAR
  document.addEventListener("DOMContentLoaded", listarAgendamentos);
  
  function filtrarAgendamentos() {
    const termoBusca = document.getElementById("busca").value.toLowerCase();
    const linhas = document.querySelectorAll("#lista-agendamentos tr");
  
    linhas.forEach((linha) => {
      const nome = linha.children[1].textContent.toLowerCase();
      const data = linha.children[2].textContent.toLowerCase();
      const corresponde = nome.includes(termoBusca) || data.includes(termoBusca);
      linha.style.display = corresponde ? "" : "none";
    });
  }
  
  function limparBusca() {
    document.getElementById("busca").value = "";
    filtrarAgendamentos();
  }
  