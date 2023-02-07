***
<img src="assets/titulo%20Alura%20Play.png" width="100%">

## 📃 Sobre o Projeto

O projeto **Alura Play** foi o 7º projeto desenvolvido na formação ```Javascript para Frontend``` da Alura.

<img src="assets/Layout%20Inicial%20Alura%20Play.png" width="100%">
<img src="assets/Layout%20cadastro%20Video%20Alura%20Play.png" width="100%"> </br>

Nesse projeto foi aplicado varios recursos de Javascript, tais como:

- ```export/import``` Usando o **export** para exportar codigo javascript criado em um arquivo para outro, **importar**
usado para importar o codigo javascript para o arquivo atual, após o outro arquivo ter sido exportado com o **export**. 
Necessario define o **type="module"** na tag **script** do HTML para que seja possivel usar o **export/import**.

````HTML
   <script src="..." type="module"></script>
````


- ```fetch()``` Dessa vez foi aplicado a forma de rquisição **POST** da fetch, visto que por padrão a fetch utiliza 
a requisição **GET**, a diferença entre **GET** e **POST** é que o metodo **GET** enviar os dados pela **URL** da 
requisição, porém o método **POST** enviar os dados no **BODY** da requisição.

- ```async/await``` Por trabalhar com consumo de **API** foi utilizado **async/await** para utilizarmos a forma 
assincrona do Javascript, pois assim não e preciso esperar os dados da API para que o codigo Javascript execute, 
o codigo será executado normalmente, ate que seja obtido os dados da API para carregar os videos na tela.

- ```template string``` utilizado para criar elementos HTML via javascript, como as estruturas dos cards dos videos 
que foram feito dinamicamente pelo JS com o uso das **templates strings**.

- ```try/catch``` utilizado para tratar erros e excessoes no codigo ao receber dados da API.

- ```throw Error()``` utilizado para criar erros personalizados quando o entra no **CATCH**, informando ao usuario 
o motivo do erro.

## Execução do Projeto

Para que o projeto execute no seu computador e preciso realizar os seguintes passos:

- Baixar o **[Node.js](https://nodejs.org/en/)** no seu computador.

- Agora com o Node.js baixado e instalado, abra o VS Code com a pasta do projeto **Alura Play**, abra o **CMD** com 
as teclas **CTRL + SHIFT + "**, após abrir o **CMD** execute o comando abaixo para baixar a pasta **Node_Modules** 
com as dependencias necessarias para o projeto executar, a pasta Node_Modules apenas tem uma dependencia que esta 
sendo usada nesse projeto que é o ```json-server``` para a criação da API.

````BASH 
> npm init
````

- Agora por ultimo será preciso colocar a API para funcionar, a API que será consumida esta salva no arquivo ```db.json```, 
no **CMD** do VS Code execute o comando abaixo para executar a API e o projeto funcionar perfeitamente.

````BASH 
> npx json-server --watch db.json
````

- Após tudo isso e so abrir o arquivo ```index.html``` no navegador que o projeto será executado.

## 🚀 Tecnologias

<div display="inline-block">
   <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" width="30" height="40" />
   <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" width="30" height="40" />
   <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" width="30" height="40" />
   <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" width="30" height="40" />
   <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" width="30" height="40" />
</div>

<div align="center">
   :octocat: Feito por Mateus Barros :octocat:
</div>

***