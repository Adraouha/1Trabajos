/* ---------------- EJERCICIO 1 ---------------- */

document.getElementById("btnMostrar").onclick = function () {
    let nombre = document.getElementById("nombre").value;

    document.getElementById("resultado").innerText = nombre;

    console.log(nombre);

    prompt("Tu nombre es:", nombre);
};

document.getElementById("resultado").onclick = function () {
    this.style.animationPlayState = "running";
};


/* ---------------- EJERCICIO 2 ---------------- */

let personajes = ["Elon Musk", "Shakira", "Messi", "Batman", "Goku"];
let lugares = ["la playa", "el bosque", "el espacio", "Barcelona", "Tokio"];
let estados = ["muy feliz", "disgustado", "cansado", "emocionado", "furioso"];

function random(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

document.getElementById("btnFrase").onclick = function () {
    let frase = `Estaba ${random(personajes)} en ${random(lugares)} ${random(estados)}.`;
    document.getElementById("frase").innerText = frase;
};


/* ---------------- EJERCICIO 3 ---------------- */

document.getElementById("btnStock").onclick = function () {
    let stock = parseInt(prompt("¿Cuántos regalos hay en el almacén? (más de 100)"));

    if (isNaN(stock) || stock <= 100) {
        alert("Debes poner un número mayor de 100");
        return;
    }

    while (stock > 0) {
        document.getElementById("stock").innerText = `Quedan ${stock} regalos`;

        let repartidos = parseInt(prompt("¿Cuántos regalos has repartido hoy?"));

        if (isNaN(repartidos) || repartidos < 0) {
            alert("Número no válido");
            continue;
        }

        if (repartidos > stock) {
            alert("No puedes repartir más de los que quedan");
            continue;
        }

        stock -= repartidos;

        if (stock < 100 && stock > 0) {
            alert("¡¡¡Ojo, quedan menos de 100 regalos!!!");
        }
    }

    document.getElementById("stock").innerText = "¡Muy bien! Misión cumplida. ¡Hasta el año que viene!";
};