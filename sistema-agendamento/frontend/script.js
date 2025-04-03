const agendamentos = [];

// Função para atualizar a lista de agendamentos
function atualizarLista() {
    const tableBody = document.querySelector("#agendamentosList tbody");
    tableBody.innerHTML = ''; // Limpar lista

    agendamentos.forEach(agendamento => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${agendamento.nome}</td>
            <td>${agendamento.dataHora}</td>
            <td>${agendamento.status}</td>
        `;
        tableBody.appendChild(tr);
    });
}

// Função para tratar o envio do formulário de agendamento
document.getElementById("agendamentoForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value;
    const dataHora = document.getElementById("dataHora").value;

    if (!nome || !dataHora) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // Criar um novo agendamento
    const novoAgendamento = {
        nome,
        dataHora,
        status: "Pendente"
    };

    // Adicionar ao array e atualizar a lista
    agendamentos.push(novoAgendamento);
    atualizarLista();

    // Limpar o formulário
    document.getElementById("agendamentoForm").reset();
});
