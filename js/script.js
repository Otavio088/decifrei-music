const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img");

let idx = 0;

function carrossel() {
    idx++;

    if (idx > img.length - 1) {
        idx = 0;
    }

    const windowWidth = window.innerWidth;

    if (windowWidth <= 700) {
        imgs.style.transform = `translateX(${-idx * 320}px)`;
    } else {
        imgs.style.transform = `translateX(${-idx * 600}px)`;
    }

}

setInterval(carrossel, 10000);

function carrosselInverso() {
    idx--;

    if (idx < 0) { //0 é a primeira foto
        idx = 4;
    }

    const windowWidth = window.innerWidth;

    if (windowWidth <= 700) {
        imgs.style.transform = `translateX(${-idx * 320}px)`;
    } else {
        imgs.style.transform = `translateX(${-idx * 600}px)`;
    }
}