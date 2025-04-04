<?php
require_once "../config/database.php";

// Definir o tipo de resposta como JSON e configurar a codificação
header("Content-Type: application/json; charset=UTF-8");

$stmt = $pdo->query("SELECT * FROM agendamentos ORDER BY data DESC");

// Converter o resultado para JSON sem codificação de caracteres especiais
echo json_encode($stmt->fetchAll(PDO::FETCH_ASSOC), JSON_UNESCAPED_UNICODE);
?>
