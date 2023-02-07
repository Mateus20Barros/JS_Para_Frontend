import { conectaAPI } from "./conectaAPI.js";

const lista = document.querySelector('[data-lista]');

export default function constroiCards(titulo, descricao, url, imagem) {
   const video = document.createElement('li');

   video.className = 'videos__item';
   video.innerHTML = `
      <iframe 
         width="100%" height="72%" src="${ url }" title="${ titulo }" frameborder="0"
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
      </iframe>
      <div class="descricao-video">
         <img src="${ imagem }"logo canal alura">
         <h3>${ titulo }</h3>
         <p>${ descricao }</p>
      </div>
   `;
   return video;
}

async function listaVideos() {
   try {
      const listaAPI = await conectaAPI.listaVideos();

      listaAPI.forEach(element => lista.appendChild(
         constroiCards(element.titulo, element.descricao, element.url, element.imagem)
      ));

   } catch(error) {
      lista.innerHTML = `<h2 class="mensagem__titulo">Não foi possivel carregar a lista de vídeos.</h2>`;
   }
}

listaVideos();