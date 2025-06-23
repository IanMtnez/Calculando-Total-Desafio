let precio = 400000;
let cantidad = 0;

// Selección de elementos
const precioSpan = document.querySelector(".precio-inicial");
const cantidadSpan = document.querySelector(".cantidad");
const totalSpan = document.querySelector(".valor-total");

// Mostrar precio base al cargar
precioSpan.innerHTML = precio;

// Nuevos selectores para los botones con clase específica
const botonMas = document.querySelector(".boton-mas");
const botonMenos = document.querySelector(".boton-menos");

// Función para actualizar el DOM
function actualizarTotal() {
    totalSpan.innerHTML = precio * cantidad;
    cantidadSpan.innerHTML = cantidad;
}

// Eventos
botonMas.onclick = () => {
    cantidad++;
    actualizarTotal();
};

botonMenos.onclick = () => {
    if (cantidad > 0) {
        cantidad--;
        actualizarTotal();
    }
};
