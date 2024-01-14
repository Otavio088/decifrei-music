const head = document.head;
const body = document.body;

const estiloLink = document.createElement('link');
estiloLink.rel = 'stylesheet';
estiloLink.href = 'css/header-style.css';
estiloLink.type = 'text/css';
document.head.appendChild(estiloLink);

const header = document.createElement("header");

header.innerHTML = 
   `    <div>
            <a href='index.html'><img src='img/logos/logo-DeCifrei.png' alt='Logo DeCifrei' width='65px'></a>
        </div>
        <nav id='nav'>
            <button id='btn-mobile' onclick='efeitoMenu()'><span id='hamburger'></span></button>
            <ul>
                <a href='index.html'><li>Home</li></a>
                <a href='cursos.html'><li>Cursos</li></a>
                <a href='https://forms.gle/tMkNdSbadG54h25i8' target='_blank'><li>Aulas Presenciais</li></a>
                <a href='#sobre'><li>Sobre nós</li></a>
                <a href='loja.html'><li>Loja</li></a>
            </ul>
        </nav>`;

header.classList.add('header');

body.prepend(header);

//
document.addEventListener("DOMContentLoaded", function() {
    const sobreLink = document.querySelector('a[href="#sobre"]');

    if (sobreLink) {
        sobreLink.addEventListener('click', function(event) {
            event.preventDefault();
            window.location.href = 'index.html#sobre';
        });
    }
});
//

const btnMobile = document.getElementById('btn-mobile');

function efeitoMenu() {
    const nav = document.getElementById('nav');

    nav.classList.toggle('active');
}