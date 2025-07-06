<?php
// guardar_feedback.php — Recibe los datos del formulario y los guarda en la BD

// Cargar la configuración de conexión
require_once 'config.php';

// Crear conexión a MySQL
$conn = new mysqli($host, $user, $pass, $dbname);

// Verificar conexión
if ($conn->connect_error) {
  http_response_code(500);
  echo "❌ Error de conexión a la base de datos.";
  exit;
}

// Obtener y validar los datos del POST
$satisfaction = isset($_POST['satisfaction']) ? intval($_POST['satisfaction']) : null;
$comentario = isset($_POST['comentarios']) ? $conn->real_escape_string(trim($_POST['comentarios'])) : '';

if ($satisfaction === null) {
  http_response_code(400);
  echo "⚠️ Falta seleccionar una opción de satisfacción.";
  exit;
}

// Insertar en la base de datos
$sql = "INSERT INTO feedback (satisfaction, comentario) VALUES (?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("is", $satisfaction, $comentario);

if ($stmt->execute()) {
  echo "✅ ¡Gracias por tu feedback!.";
  window.open('index.html', '_blank');

} else {
  http_response_code(500);
  echo "❌ Error al guardar el feedback.";
}

$stmt->close();
$conn->close();
?>
