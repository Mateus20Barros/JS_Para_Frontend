const endPointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';
let livros = [];

async function getBuscarLivrosDaAPI() {
   const response = await fetch(endPointDaAPI);
   livros = await response.json()
   let livrosComDesconto = aplicarDesconto(livros);
   exibirLivros(livrosComDesconto);
}

getBuscarLivrosDaAPI();
