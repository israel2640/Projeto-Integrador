<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "sistema_agendamento";

// Criar conexão
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexão
if ($conn->connect_error) {
    die("Falha na conexão: " . $conn->connect_error);
}

// Roteamento básico
$action = $_GET['action'] ?? '';

switch ($action) {
    case 'create':
        $cliente = $_POST['cliente'] ?? '';
        $horario = $_POST['horario'] ?? '';
        $sql = "INSERT INTO agendamentos (cliente, horario) VALUES ('$cliente', '$horario')";
        echo $conn->query($sql) ? "Agendamento criado com sucesso" : "Erro: " . $conn->error;
        break;
    
    case 'read':
        $result = $conn->query("SELECT * FROM agendamentos");
        $agendamentos = $result->fetch_all(MYSQLI_ASSOC);
        echo json_encode($agendamentos);
        break;
    
    case 'update':
        $id = $_POST['id'] ?? '';
        $horario = $_POST['horario'] ?? '';
        $sql = "UPDATE agendamentos SET horario='$horario' WHERE id=$id";
        echo $conn->query($sql) ? "Agendamento atualizado" : "Erro: " . $conn->error;
        break;
    
    case 'delete':
        $id = $_POST['id'] ?? '';
        $sql = "DELETE FROM agendamentos WHERE id=$id";
        echo $conn->query($sql) ? "Agendamento removido" : "Erro: " . $conn->error;
        break;
    
    default:
        echo "Bem-vindo ao sistema de agendamento.";
}

$conn->close();
?>
