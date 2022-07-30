const servicios = [
  { id: 1, nombre: "Agua" },
  { id: 2, nombre: "Electricidad" },
  { id: 3, nombre: "Gas" },
  { id: 4, nombre: "Internet" },
  { id: 5, nombre: "Cable Tv" },
];

function renderServicios(classContenedor, servicios) {
  const elemContenedor = document.querySelector("." + classContenedor);
  let html = "";

  for (const servicio of servicios) {
    html += `<li>${servicio.nombre} <button class="servicios-btn" id="${servicio.id}">Borrar</button></li>`;
  }

  elemContenedor.innerHTML = html;
}

function agregerEventoClickDinamico() {
  for (const elem of document.querySelectorAll(".servicios-btn")) {
    elem.addEventListener("click", (e) => {
      // console.log(elem.id)
      borrar(elem.id);
    });
  }
}

agregerEventoClickDinamico();
