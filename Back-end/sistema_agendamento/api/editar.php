<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

require_once "../config/database.php";

$data = json_decode(file_get_contents("php://input"), true);

if (isset($data["id"], $data["nome"], $data["data"])) {
    $stmt = $pdo->prepare("UPDATE agendamentos SET nome = :nome, data = :data WHERE id = :id");
    $stmt->bindParam(":id", $data["id"]);
    $stmt->bindParam(":nome", $data["nome"]);
    $stmt->bindParam(":data", $data["data"]);

    if ($stmt->execute()) {
        echo json_encode(["message" => "Agendamento atualizado com sucesso!"]);
    } else {
        echo json_encode(["error" => "Erro ao atualizar agendamento."]);
    }
} else {
    echo json_encode(["error" => "Dados incompletos."]);
}
?>

