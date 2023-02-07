let cep = document.getElementById('cep');
let cidade = document.querySelector('#cidade');
let logradouro = document.querySelector('#endereco');
let estado = document.querySelector('#estado');
let mensagemErro = document.querySelector('#erro');

mensagemErro.innerHTML = "";

async function buscaEndereco(numeroCep) {
   try {
      const consultaCEP = await fetch(`https://viacep.com.br/ws/${numeroCep}/json/`)
      const consultaCEPConvertida = await consultaCEP.json();

      if (consultaCEPConvertida.erro) {
         throw Error('CEP não existente!')
      }

      cidade.value = consultaCEPConvertida.localidade;
      logradouro.value = consultaCEPConvertida.logradouro;
      estado.value = consultaCEPConvertida.uf;
      cep.style.borderColor = '#002F52'
      
      return consultaCEPConvertida;
   } catch (erro) {
      mensagemErro.innerHTML = `<p>CEP Inválido! Tente Novamente.</p>`
      cep.style.borderColor = 'red'
   }
}

cep.addEventListener('focusout', () => buscaEndereco(cep.value));