const form = document.getElementById("novoitem");
const lista = document.querySelector('.lista')
const itens = JSON.parse(localStorage.getItem("itens")) || [];

itens.forEach(element => criarElemento(element));

function eventoDeSubmit(event) {
   event.preventDefault();

   const nome = event.target.elements['nome'];
   const quantidade = event.target.elements['quantidade'];

   const itemAtual = {
      "nome": nome.value,
      "quantidade": quantidade.value
   }

   const existe = itens.find(element => element.nome === nome.value);

   if (existe) {
      itemAtual.id = existe.id;
      atualizaElemento(itemAtual);
      itens[itens.findIndex(element => element.id === existe.id)] = itemAtual;
   } else {
      itemAtual.id = itens[itens.length - 1] ? (itens[itens.length - 1]).id + 1 : 0;
      criarElemento(itemAtual);
      itens.push(itemAtual)
   }
   
   limparInputs(nome, quantidade);
   localStorage.setItem("itens", JSON.stringify(itens));
}

function criarElemento(item) {
   const novoItem = document.createElement('li');
   const numeroItem = document.createElement('strong');

   novoItem.classList.add('item');
   numeroItem.innerHTML = item.quantidade;
   numeroItem.dataset.id = item.id;

   novoItem.appendChild(numeroItem);
   novoItem.innerHTML += item.nome;
   novoItem.appendChild(botaoDeleta(item.id));
   lista.appendChild(novoItem);
}

function botaoDeleta(id) {
   const elementoBotao = document.createElement('button');
   elementoBotao.innerText = 'X';

   elementoBotao.addEventListener('click', function () {
      deletaElemento(this.parentNode, id);
   });
   return elementoBotao;
}

function deletaElemento(tag, id) {
   tag.remove();
   itens.splice(itens.findIndex(element => element.id === id), 1);
   localStorage.setItem("itens", JSON.stringify(itens));
}

function limparInputs(nome, quantidade) {
   nome.value = "";
   quantidade.value = "";
}

function atualizaElemento(item) {
   document.querySelector("[data-id='" + item.id + "']").innerHTML = item.quantidade;
}

form.addEventListener("submit", eventoDeSubmit);
