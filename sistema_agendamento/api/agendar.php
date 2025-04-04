<?php
require_once "../config/database.php";

$data = json_decode(file_get_contents("php://input"), true);

if (isset($data["nome"]) && isset($data["data"])) {
    $stmt = $pdo->prepare("INSERT INTO agendamentos (nome, data) VALUES (:nome, :data)");
    $stmt->bindParam(":nome", $data["nome"]);
    $stmt->bindParam(":data", $data["data"]);
    
    if ($stmt->execute()) {
        echo json_encode(["message" => "Agendamento criado com sucesso!"]);
    } else {
        echo json_encode(["error" => "Erro ao agendar."]);
    }
} else {
    echo json_encode(["error" => "Dados incompletos."]);
}
?>
