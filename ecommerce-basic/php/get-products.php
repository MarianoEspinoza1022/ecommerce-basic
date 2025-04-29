<?php
include 'db.php';

$stmt = $pdo->query('SELECT * FROM productos');
$productos = $stmt->fetchAll();

foreach ($productos as &$producto) {
    $producto['imagen'] = strtolower($producto['nombre']) . '.jpg';
}

echo json_encode($productos);
?>
