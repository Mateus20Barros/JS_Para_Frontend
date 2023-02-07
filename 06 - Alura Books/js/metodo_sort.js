const btnOrdenarPorPreco = document.getElementById('btnOrdenarPorPreco');

function ordenarLivrosPorPrecos() {
   let livrosOrdenados = livros.sort((livro01, livro02) => livro01.preco - livro02.preco);
   exibirLivros(livrosOrdenados);
}

btnOrdenarPorPreco.addEventListener('click', ordenarLivrosPorPrecos);
