# Tienda Online Básica

Este es un proyecto de una plataforma de comercio electrónico básica creada con HTML, CSS, JavaScript, PHP y MySQL.

## Características

- Listado de productos dinámico cargado desde base de datos.
- Carrito de compras simple usando LocalStorage.
- Conexión backend sencilla usando PHP.
- Base de datos MySQL para almacenar productos.

## Estructura del Proyecto

ecommerce-basic/
├── css/
│   └── style.css
├── js/
│   └── script.js
├── php/
│   ├── db.php
│   └── get-products.php
├── sql/
│   └── database.sql
├── img/
│   ├── camiseta.jpg
│   ├── pantalon.jpg
│   ├── zapatos.jpg
│   └── gorra.jpg
├── index.html
├── carrito.html


## Requisitos

- Servidor local (XAMPP, WAMP o similar)
- PHP 7.0+
- MySQL

## Instalación

1. Cloné el repositorio.
2. Copié el proyecto a la carpeta `htdocs` (en XAMPP).
3. Creé la base de datos ejecutando el archivo `sql/database.sql` en phpMyAdmin.
4. Configuré la conexión en `php/db.php` (usuario/contraseña).
5. Abrí `http://localhost/ecommerce-basic/index.html` en el navegador.

## Uso

- Explora productos.
- Agrega productos al carrito.
- Visualiza el carrito de compras.

## Tecnologías usadas

- HTML5
- CSS3
- JavaScript (ES6)
- PHP
- MySQL

## Autor

- Mariano Espinoza Sánchez - Proyecto para portafolio personal.
