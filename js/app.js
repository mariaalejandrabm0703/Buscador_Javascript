/*
    Variables
*/
const marca = document.querySelector("#marca");
const minimo = document.querySelector("#minimo");
const maximo = document.querySelector("#maximo");
const puertas = document.querySelector("#puertas");
const transmision = document.querySelector("#transmision");
const color = document.querySelector("#color");
const year = document.querySelector("#year");

const max = new Date().getFullYear();
const min = max - 10;

const resultado = document.querySelector("#resultado");

const datosBusqueda = {
  marca: "",
  year: "",
  minimo: "",
  maximo: "",
  puertas: "",
  transmision: "",
  color: "",
};

/*
    Eventos
*/
document.addEventListener("DOMContentLoaded", () => {
  mostrarAutos(autos);
  llenarAnios();
});

marca.addEventListener("change", (e) => {
  datosBusqueda.marca = e.target.value;
  filtrarAutos();
});

year.addEventListener("change", (e) => {
  datosBusqueda.year = e.target.value;
  filtrarAutos();
});

minimo.addEventListener("change", (e) => {
  datosBusqueda.minimo = e.target.value;
  filtrarAutos();
});

maximo.addEventListener("change", (e) => {
  datosBusqueda.maximo = e.target.value;
  filtrarAutos();
});

puertas.addEventListener("change", (e) => {
  datosBusqueda.puertas = e.target.value;
  filtrarAutos();
});

transmision.addEventListener("change", (e) => {
  datosBusqueda.transmision = e.target.value;
  filtrarAutos();
});

color.addEventListener("change", (e) => {
  datosBusqueda.color = e.target.value;
  filtrarAutos();
});

/*
    Funciones
*/
function limpiarHTML() {
  //contendorCarrito.innerHTML = "";
  while (resultado.firstChild) {
    resultado.removeChild(resultado.firstChild);
  }
}

function mostrarAutos(autosR) {
  limpiarHTML();
  autosR.forEach((auto) => {
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

function filtrarAutos() {
  const resul = autos
    .filter(filtrarMarca)
    .filter(filtrarAnio)
    .filter(filtrarPuertas)
    .filter(filtrarTransmision)
    .filter(filtrarColor)
    .filter(filtrarMin)
    .filter(filtrarMax);

  if (resul.length > 0) {
    mostrarAutos(resul);
  } else {
    noResultado();
  }
}

function filtrarMarca(auto) {
  if (datosBusqueda.marca) {
    return auto.marca === datosBusqueda.marca;
  }
  return auto;
}

function filtrarAnio(auto) {
  if (datosBusqueda.year) {
    return auto.year === parseInt(datosBusqueda.year);
  }
  return auto;
}

function filtrarPuertas(auto) {
  if (datosBusqueda.puertas) {
    return auto.puertas === parseInt(datosBusqueda.puertas);
  }
  return auto;
}

function filtrarTransmision(auto) {
  if (datosBusqueda.transmision) {
    return auto.transmision === datosBusqueda.transmision;
  }
  return auto;
}

function filtrarColor(auto) {
  if (datosBusqueda.color) {
    return auto.color === datosBusqueda.color;
  }
  return auto;
}

function filtrarMin(auto) {
  if (datosBusqueda.minimo) {
    return auto.precio >= datosBusqueda.minimo;
  }
  return auto;
}

function filtrarMax(auto) {
  if (datosBusqueda.maximo) {
    return auto.precio <= datosBusqueda.maximo;
  }
  return auto;
}

function noResultado() {
  limpiarHTML();
  const noResultado = document.createElement("div");
  noResultado.classList.add("alert", "error");
  noResultado.textContent = "No se encontraron resultados.";
  resultado.appendChild(noResultado);
}
