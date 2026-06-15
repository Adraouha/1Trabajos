/* Popup: aparece por botón o tras 5s; se puede cerrar con overlay o botón */
const popup = document.getElementById('popup');
const overlay = document.getElementById('overlay');
const btnAbrir = document.getElementById('abrir');
const btnCerrar = document.getElementById('cerrar');

let popupTimeout = null;

function openPopup() {
    popup.setAttribute('aria-hidden', 'false');
    overlay.setAttribute('aria-hidden', 'false');
    // si había timeout pendiente, limpiarlo
    if (popupTimeout) { clearTimeout(popupTimeout); popupTimeout = null; }
}

function closePopup() {
    popup.setAttribute('aria-hidden', 'true');
    overlay.setAttribute('aria-hidden', 'true');
}

btnAbrir.addEventListener('click', openPopup);
btnCerrar.addEventListener('click', closePopup);
overlay.addEventListener('click', closePopup);

// Abrir después de 5s si no se abrió antes
popupTimeout = setTimeout(openPopup, 5000);

// --- Movimiento de cajas ---
const palanca = document.getElementById('palanca');
const cajas = Array.from(document.querySelectorAll('.caja'));
const stopBtn = document.getElementById('stop');

let moviendo = false;
let moveInterval = null;
let autoStopTimeout = null;
let offset = 0;

function startMoving() {
    if (moviendo) return;
    moviendo = true;
    // cada 100ms incrementa el offset y aplica transform
    moveInterval = setInterval(() => {
        offset += 8;
        cajas.forEach(c => c.style.transform = `translateX(${offset}px)`);
    }, 100);

    // parada automática tras 4s
    autoStopTimeout = setTimeout(stopMoving, 4000);
}

function stopMoving() {
    if (!moviendo) return;
    moviendo = false;
    if (moveInterval) { clearInterval(moveInterval); moveInterval = null; }
    if (autoStopTimeout) { clearTimeout(autoStopTimeout); autoStopTimeout = null; }
}

palanca.addEventListener('click', () => {
    if (!moviendo) startMoving(); else stopMoving();
});

stopBtn.addEventListener('click', stopMoving);

cajas.forEach(caja => {
    caja.addEventListener('click', stopMoving);
});

// --- Semáforo: cicla entre 3 luces ---
const luces = Array.from(document.querySelectorAll('.luz'));
let posicion = 0;

function setLuz(pos) {
    luces.forEach((l, i) => l.classList.toggle('activa', i === pos));
}

setLuz(posicion);
setInterval(() => {
    posicion = (posicion + 1) % luces.length;
    setLuz(posicion);
}, 1000);

let num = parseInt("10");
console.log(num);