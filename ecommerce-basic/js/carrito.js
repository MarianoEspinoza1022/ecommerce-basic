async function cargarCarrito() {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    if (carrito.length === 0) {
        document.getElementById('carrito-container').innerHTML = '<p>Tu carrito está vacío.</p>';
        document.getElementById('total').textContent = 'Total: $0.00';
        return;
    }

    try {
        const response = await fetch('php/get-products.php');
        const productos = await response.json();
        const carritoProductos = productos.filter(p => carrito.includes(p.id));
        const carritoContainer = document.getElementById('carrito-container');
        carritoContainer.innerHTML = '';
        let total = 0;
        carritoProductos.forEach(producto => {
            const div = document.createElement('div');
            div.classList.add('producto');
            div.innerHTML = `
                <img src="img/${producto.imagen}" alt="${producto.nombre}" class="producto-imagen">
                <h2>${producto.nombre}</h2>
                <p>$${producto.precio}</p>
            `;
            carritoContainer.appendChild(div);
            total += parseFloat(producto.precio);
        });
        document.getElementById('total').textContent = `Total: $${total.toFixed(2)}`;
    } catch (error) {
        console.error('Error al cargar carrito:', error);
    }
}

cargarCarrito();
