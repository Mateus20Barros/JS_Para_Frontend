const listaDeTeclas = document.querySelectorAll('.tecla');

const tocaSom = seletorAudio => {
   const elemento = document.querySelector(seletorAudio);

   elemento && elemento.localName === 'audio'
      ? elemento.play()
      : console.log("Elemento não encontrado ou seletor inválido");
}

for (let contador = 0; contador < listaDeTeclas.length; contador++) {

   const tecla = listaDeTeclas[contador];
   const instrumento = tecla.classList[1];
   const idAudio = `#som_${instrumento}`;

   tecla.onclick = () => tocaSom(idAudio);

   tecla.onkeydown = evento => {
      const codigoDaTecla = evento.code;

      const teclaEspaco = codigoDaTecla === 'Space'
      const teclaEnter = codigoDaTecla === 'Enter'
      const teclaEnterNumerico = codigoDaTecla === 'NumpadEnter'

      if (teclaEspaco || teclaEnter || teclaEnterNumerico) {
         tecla.classList.toggle('ativa');
      }
   }

   tecla.onkeyup = () => tecla.classList.remove('ativa');
}
