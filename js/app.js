/*
    Variables
*/
const resultado = document.querySelector("#resultado");
const anio = document.querySelector("#year");
const max = new Date().getFullYear();
const min = max - 10;

/*
    Eventos
*/
document.addEventListener("DOMContentLoaded", () => {
  mostrarAutos();
  llenarAnios();
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

function llenarAnios() {
  for (let i = max; i > min; i--) {
    const opcion = document.createElement("option");
    opcion.value = i;
    opcion.textContent = i;
    year.appendChild(opcion);
  }
}
