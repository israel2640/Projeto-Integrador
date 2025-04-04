<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// Conectar ao banco de dados
require_once "../config/database.php";

// Capturar dados enviados pelo front-end
$data = json_decode(file_get_contents("php://input"), true);

if (isset($data["nome"]) && isset($data["data"])) {
    $stmt = $pdo->prepare("INSERT INTO agendamentos (nome, data) VALUES (:nome, :data)");
    $stmt->bindParam(":nome", $data["nome"]);
    $stmt->bindParam(":data", $data["data"]);

    if ($stmt->execute()) {
        echo json_encode(["message" => "Agendamento criado com sucesso!"]);
    } else {
        echo json_encode(["error" => "Erro ao criar agendamento."]);
    }
} else {
    echo json_encode(["error" => "Dados incompletos."]);
}
?>
