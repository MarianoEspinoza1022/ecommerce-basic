async function cargarProductos() {
    try {
        const response = await fetch('php/get-products.php');
        const productos = await response.json();
        const contenedor = document.getElementById('productos');
        productos.forEach(producto => {
            const div = document.createElement('div');
            div.classList.add('producto');
            div.innerHTML = `
                <img src="img/${producto.imagen}" alt="${producto.nombre}" class="producto-imagen">
                <h2>${producto.nombre}</h2>
                <p>$${producto.precio}</p>
                <button onclick="agregarAlCarrito(${producto.id})">Agregar al carrito</button>
            `;
            contenedor.appendChild(div);
        });
    } catch (error) {
        console.error('Error al cargar productos:', error);
    }
}

function agregarAlCarrito(id) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito.push(id);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    alert('Producto agregado al carrito');
}

cargarProductos();
