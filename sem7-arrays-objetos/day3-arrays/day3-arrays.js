let bandas = ["Oasis", "Queen", "Coldplay", "AC/DC", "The Beatles"];
let opcion = prompt(
  "CATÁLOGO DE MÚSICA\n" +
  "1 - Borrar primer elemento (shift)\n" +
  "2 - Añadir al principio (unshift)\n" +
  "3 - Borrar último (pop)\n" +
  "4 - Añadir al final (push)\n" +
  "5 - Borrar/cambiar en índice (splice)\n" +
  "6 - Buscar grupo (indexOf)\n" +
  "7 - Mostrar si existe (includes)\n" +
  "8 - Ver catálogo\n"
);

switch (opcion) {

  case "1":
    alert("Borrado: " + bandas.shift());
    break;

  case "2":
    let nuevoInicio = prompt("¿Qué banda quieres añadir al principio?");
    bandas.unshift(nuevoInicio);
    break;

  case "3":
    alert("Borrado: " + bandas.pop());
    break;

  case "4":
    let nuevoFinal = prompt("¿Qué banda quieres añadir al final?");
    bandas.push(nuevoFinal);
    break;

  case "5":
    let indice = parseInt(prompt("Índice a modificar:"));
    let cantidad = parseInt(prompt("¿Cuántos borrar?"));
    let nuevo = prompt("Nuevo valor (o deja vacío para no añadir):");

    if (nuevo === "") {
      bandas.splice(indice, cantidad);
    } else {
      bandas.splice(indice, cantidad, nuevo);
    }
    break;

  case "6":
    let buscar = prompt("¿Qué banda buscas?");
    let pos = bandas.indexOf(buscar);
    alert(pos >= 0 ? "Está en el índice: " + pos : "No encontrada");
    break;

  case "7":
    let nombre = prompt("¿Qué banda quieres comprobar?");
    alert(bandas.includes(nombre) ? "Sí está" : "No está");
    break;

  case "8":
    alert("Catálogo actual:\n" + bandas.join(", "));
    break;

  default:
    alert("Opción no válida");
}

let bandasConPais = [];

bandas.forEach(banda => {
  let pais = prompt(`¿De qué país es ${banda}?`);
  bandasConPais.push(`${banda} (${pais})`);
});

console.log(bandasConPais);

while (true) {
  let nueva = prompt("Añade una banda (o escribe STOP para terminar):");

  if (nueva.toLowerCase() === "stop") break;

  bandas.push(nueva);
}

console.log(bandas);

function borrarPrimero() {
  alert("Borrado: " + bandas.shift());
}

function añadirPrimero() {
  let b = prompt("Banda nueva:");
  bandas.unshift(b);
}

function borrarUltimo() {
  alert("Borrado: " + bandas.pop());
}

function añadirUltimo() {
  let b = prompt("Banda nueva:");
  bandas.push(b);
}

function modificarIndice() {
  let i = parseInt(prompt("Índice:"));
  let c = parseInt(prompt("Cantidad a borrar:"));
  let n = prompt("Nuevo valor:");
  bandas.splice(i, c, n);
}

