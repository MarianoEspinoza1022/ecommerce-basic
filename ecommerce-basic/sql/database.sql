CREATE DATABASE IF NOT EXISTS ecommerce;
USE ecommerce;

CREATE TABLE productos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    precio DECIMAL(10,2) NOT NULL
);

INSERT INTO productos (nombre, precio) VALUES
('Camiseta', 200.00),
('Pantalón', 400.00),
('Zapatos', 600.00),
('Gorra', 100.00);
