function calcularPrecio(precioUnitario, cantidad) {
  const total = precioUnitario * cantidad;
  return total;
}

function puedeReservar(cantidad) {
  return cantidad <= 2;
}

function puedeReservar(tazasDisponibles) {
  return tazasDisponibles > 0;
}

//const botonReservar = document.querySelector("#boton-reservar");

//botonReservar.addEventListener("click", function() {
//console.log("El usuario hizo clic");
//});

const botonReservar = document.querySelector("#boton-reservar");
const contadorTazas = document.querySelector("#contador-tazas");

botonReservar.addEventListener("click", function() {
  const tazasActuales = Number(contadorTazas.textContent);

  if (puedeReservar(tazasActuales)) {
    contadorTazas.textContent = tazasActuales - 1;
    console.log("Reserva registrada");
    if (tazasActuales - 1 === 0) {

    console.log("No hay cupos disponibles");

    botonReservar.textContent = "Sin cupos";

    botonReservar.disabled = true;

}
  } else {
    console.log("No HAY CUPOS DISPONIBLES");
    botonReservar.textContent = "Sin cupos";
    botonReservar.disabled = true;
  }
});


