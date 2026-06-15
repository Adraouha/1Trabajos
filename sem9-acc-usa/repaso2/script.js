/* ---------------- EJERCICIO 1 ---------------- */

function alternar() {
    let frase = document.getElementById("frase").value;
    let ignorar = document.getElementById("ignorarEspacios").checked;

    let resultado = "";
    let contador = 0;

    for (let i = 0; i < frase.length; i++) {
        let char = frase[i];

        if (char === " " && ignorar) {
            resultado += " ";
            continue;
        }

        if (contador % 2 === 0) {
            resultado += char.toUpperCase();
        } else {
            resultado += char.toLowerCase();
        }

        contador++;
    }

    document.getElementById("resultado1").innerText = resultado;
}


/* ---------------- EJERCICIO 2 ---------------- */

function calcularIMC() {
    let altura = parseFloat(document.getElementById("altura").value);
    let peso = parseFloat(document.getElementById("peso").value);
    let sexo = document.querySelector("input[name='sexo']:checked").value;

    if (!altura || !peso) {
        document.getElementById("resultado2").innerText = "Introduce valores válidos.";
        return;
    }

    let imc = peso / (altura * altura);
    let pesoIdeal = 22 * (altura * altura); // IMC ideal aproximado

    if (sexo === "hombre") {
        pesoIdeal += 10;
    }

    let mensaje = 
`Para la altura ${altura} m y el peso ${peso} kg:
Tu IMC es: ${imc.toFixed(2)}
Tu peso ideal sería: ${pesoIdeal.toFixed(1)} kg`;

    if (imc < 18.5) {
        mensaje += "\nEstás por debajo del peso recomendado.";
    }

    document.getElementById("resultado2").innerText = mensaje;
}


/* ---------------- EJERCICIO 3 ---------------- */

function generarSaludos() {
    let veces = parseInt(prompt("¿Cuántas frases quieres generar?"));

    if (isNaN(veces) || veces <= 0) {
        document.getElementById("resultado3").innerText = "Número no válido.";
        return;
    }

    let resultado = "";

    for (let i = 0; i < veces; i++) {
        let saludo = prompt("Escribe un saludo (Hola, Adiós, etc):");
        let nombre = prompt("Escribe un nombre:");

        resultado += `${saludo} ${nombre}\n`;
    }

    document.getElementById("resultado3").innerText = resultado;
}