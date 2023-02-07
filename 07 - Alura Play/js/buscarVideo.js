import { conectaAPI } from "./conectaAPI.js";
import constroiCard from "./mostrarVideos.js";

const botaoDePesquisa = document.querySelector("[data-botao-pesquisa]");

async function buscarVideo(event) {
   event.preventDefault();

   const dadosDePesquisa = document.querySelector("[data-pesquisa]").value;
   const busca = await conectaAPI.buscaVideo(dadosDePesquisa);

   const lista = document.querySelector("[data-lista]");

   while (lista.firstChild) {
      lista.removeChild(lista.firstChild);
   }

   busca.forEach(elemento => lista.appendChild(
      constroiCard(elemento.titulo, elemento.descriacao, elemento.url, elemento.imagem)
   ))

   if (busca.length == 0) {
      lista.innerHTML = `
         <h2 class="mensagem__titulo">Não existe vídeos com o termo "${ dadosDePesquisa.toUpperCase() }" em nossa base de dados.</h2>
      `;
   }
}

botaoDePesquisa.addEventListener('click', event => buscarVideo(event));
