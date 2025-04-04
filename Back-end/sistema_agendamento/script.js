// ✅ 1. FUNÇÃO PARA LISTAR AGENDAMENTOS
async function listarAgendamentos() {
    try {
        const response = await fetch("http://localhost/sistema_agendamento/api/listar.php");
        const agendamentos = await response.json();

        const tabela = document.getElementById("lista-agendamentos");
        tabela.innerHTML = ""; // Limpa a tabela antes de adicionar os novos dados

        agendamentos.forEach(agendamento => {
            const linha = document.createElement("tr");
            linha.innerHTML = `
                <td>${agendamento.id}</td>
                <td>${agendamento.nome}</td>
                <td>${agendamento.data}</td>
                <td>
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

// ✅ 2. FUNÇÃO PARA CADASTRAR AGENDAMENTO
document.getElementById("form-agendamento").addEventListener("submit", async function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const data = document.getElementById("data").value;

    try {
        const response = await fetch("http://localhost/sistema_agendamento/api/criar.php", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ nome, data })
        });

        const result = await response.json();
        alert(result.message || result.error);
        listarAgendamentos();

    } catch (error) {
        console.error("Erro ao cadastrar:", error);
    }
});

// ✅ 3. FUNÇÃO PARA EDITAR AGENDAMENTO
async function editarAgendamento(id, nome, data) {
    const novoNome = prompt("Editar nome:", nome);
    const novaData = prompt("Editar data e hora (YYYY-MM-DD HH:MM):", data);

    if (!novoNome || !novaData) {
        alert("Nome e data são obrigatórios.");
        return;
    }

    try {
        const response = await fetch("http://localhost/sistema_agendamento/api/editar.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id: id,
                nome: novoNome,
                data: novaData
            })
        });

        const data = await response.json();
        alert(data.message || data.error);
        listarAgendamentos(); // Atualiza a lista

    } catch (error) {
        console.error("Erro ao editar:", error);
    }
}


// ✅ 4. FUNÇÃO PARA CANCELAR AGENDAMENTO
async function cancelarAgendamento(id) {
    if (!confirm("Tem certeza que deseja cancelar este agendamento?")) {
        return;
    }

    try {
        const response = await fetch("http://localhost/sistema_agendamento/api/cancelar.php", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id: id })
        });

        const data = await response.json();
        alert(data.message || data.error);
        listarAgendamentos(); // Atualiza a lista após a exclusão

    } catch (error) {
        console.error("Erro ao cancelar:", error);
    }
}


// ✅ 5. INICIAR A LISTAGEM AO CARREGAR A PÁGINA
document.addEventListener("DOMContentLoaded", listarAgendamentos);
