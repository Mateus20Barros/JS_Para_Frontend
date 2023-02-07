const controle = document.querySelectorAll("[data-controle]");
const estatisticas = document.querySelectorAll("[data-estatistica]");

const pecas = {
   "bracos": {
      "forca": 29,
      "poder": 35,
      "energia": -21,
      "velocidade": -5
   },
   "blindagem": {
      "forca": 41,
      "poder": 20,
      "energia": 0,
      "velocidade": -20
   },
   "nucleos":{
      "forca": 0,
      "poder": 7,
      "energia": 48,
      "velocidade": -24
   },
   "pernas":{
      "forca": 27,
      "poder": 21,
      "energia": -32,
      "velocidade": 42
   },
   "foguetes":{
      "forca": 0,
      "poder": 28,
      "energia": 0,
      "velocidade": -2
   }
}

function manipularDados(operacao, controle) {
   const peca = controle.querySelector("[data-contador]");

   operacao === '-' 
      ? peca.value = Number(peca.value) - 1 
      : peca.value = Number(peca.value) + 1;
}

controle.forEach(element => {
   element.addEventListener('click', event => {
      manipularDados(event.target.dataset.controle, event.target.parentNode);
      atualizaEstatisticas(event.target.dataset.peca)
   })
})

function atualizaEstatisticas(peca) {
   estatisticas.forEach(element => {
      element.textContent = parseInt(element.textContent) + pecas[peca][element.dataset.estatistica];
   })
}
