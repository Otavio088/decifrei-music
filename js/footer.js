document.addEventListener("DOMContentLoaded", function() {
    const body = document.body;
  
    const estiloLink = document.createElement('link');
    estiloLink.rel = 'stylesheet';
    estiloLink.href = 'css/footer-style.css';
    estiloLink.type = 'text/css';
    document.head.appendChild(estiloLink);

    const footer = document.createElement("footer");

    footer.innerHTML = 
      `<div class='informacoes'>
        <div class='atendimento'>
          <h1>ATENDIMENTO</h1>
          <p>Horario de atendimento: 08:00 às 18:00 de<br>
            segunda à sexta-feira, horário de Brasília.</p>
        </div>
        <div class='redes'>
          <h1>REDES SOCIAIS</h1>
          <div>
            <a href='https://www.facebook.com/decifreiviolao/' target='_blank'><img src='img/icones/icone-facebook.png' alt='imagem facebook' width='30px'></a>
            <a href='https://www.instagram.com/decifreimusic/' target='_blank'><img src='img/icones/icone-instagram.png' alt='imagem instagram'></a>
            <a href='https://www.youtube.com/@DeCifrei' target='_blank'><img src='img/icones/icone-youtube.png' alt='imagem youtube' width='30px'></a>
            <a href=''><img src='img/icones/icone-whatsapp.png' alt='imagem whatsapp'></a>
          </div>
        </div>
      </div>
      <div class='direitos'>
        <p>&copy; Otávio Augusto de Melo Ribeiro | DeCifreiMusic</p>
      </div>`;
  
    footer.classList.add('footer');
  
    body.appendChild(footer);
  });