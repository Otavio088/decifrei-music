const head = document.head;
const body = document.body;

const estilo="<link rel='stylesheet' href='css/header-style.css' type='text/css'>";
head.innerHTML += estilo;

const footer = document.createElement("footer");

footer.innerHTML = 
    `<div class='informacoes'>
    <div>
        <h1>ATENDIMENTO</h1>
        <p>Horario de atendimento: 08:00 às 18:00 de<br>
            segunda à sexta-feira, horário de Brasília.</p>
    </div>
    <div>
        <h1>REDES SOCIAIS</h1>
        <div>
            <a href='><img src='img/icone-facebook.png' alt='imagem facebook' width='30px'></a>
            <a href='><img src='img/icone-instagram.png' alt='imagem instagram' width='30px'></a>
            <a href='><img src='img/icone-youtube.png' alt='imagem youtube' width='30px'></a>
            <a href='><img src='img/icone-whatsapp.png' alt='imagem whatsapp' width='30px'></a>
        </div>
    </div>
    </div>
    <div class='direitos'>
    <p>&copy; Otávio Augusto de Melo Ribeiro | DeCifreiMusic</p>
    </div>`;

    footer.classList.add('footer');

    body.prepend(footer);