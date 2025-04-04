<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

require_once "../config/database.php";

$data = json_decode(file_get_contents("php://input"), true);

if (isset($data["id"])) {
    $stmt = $pdo->prepare("DELETE FROM agendamentos WHERE id = :id");
    $stmt->bindParam(":id", $data["id"]);

    if ($stmt->execute()) {
        echo json_encode(["message" => "Agendamento cancelado com sucesso!"]);
    } else {
        echo json_encode(["error" => "Erro ao cancelar agendamento."]);
    }
} else {
    echo json_encode(["error" => "ID não enviado."]);
}
?>

