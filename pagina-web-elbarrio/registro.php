<?php
// $conexion = new mysqli("localhost", "root", "", "empresa_chatbot");

// $nombre = $_POST['nombre'];
//$email = $_POST['email'];
//$contraseña = password_hash($_POST['contraseña'], PASSWORD_DEFAULT);

//$sql = "INSERT INTO usuarios (nombre, email, contraseña) VALUES ('$nombre', '$email', '$contraseña')";

if ($conexion->query($sql)) {
    echo "Usuario registrado con éxito.";
} else {
    echo "Error: " . $conexion->error;
}
?> 