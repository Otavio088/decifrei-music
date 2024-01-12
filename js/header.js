const head = document.head;
const body = document.body;

const estilo="<link rel='stylesheet' href='css/header-style.css' type='text/css'>";
head.innerHTML += estilo;

const header = document.createElement("header");

header.innerHTML = 
   `<div>
        <a href='index.html'><img src='img/logo-DeCifrei.png' alt='Logo DeCifrei' width='65px'></a>
    </div>
    <nav>
        <a href='index.html'>Home</a>
        <a href='cursos.html'>Cursos</a>
        <a href='https://forms.gle/tMkNdSbadG54h25i8'>Aulas Presenciais</a>
        <a href='#sobre'>Sobre nós</a>
        <a href='loja.html'>Loja</a>
    </nav>`;

header.classList.add('header');

body.prepend(header);



document.addEventListener("DOMContentLoaded", function() {
    const sobreLink = document.querySelector('a[href="#sobre"]');

    if (sobreLink) {
        sobreLink.addEventListener('click', function(event) {
            event.preventDefault();
            window.location.href = 'index.html#sobre';
        });
    }
});