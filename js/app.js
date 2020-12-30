/*
    Variables
*/
const resultado = document.querySelector("#resultado");

/*
    Eventos
*/
document.addEventListener("DOMContentLoaded", () => {
  mostrarAutos();
});

/*
    Funciones
*/
function mostrarAutos() {
  autos.forEach((auto) => {
    const autoHTML = document.createElement("p");
    autoHTML.innerHTML = `
            <p>${auto.marca} ${auto.modelo} - ${auto.year} - ${auto.puertas} Puertas - Transmisión: ${auto.transmision} - Precio: ${auto.precio} - Color: ${auto.color}</p>
        `;

    // Se adiciona al HTML
    resultado.appendChild(autoHTML);
  });
}
