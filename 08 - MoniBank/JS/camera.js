const botaoIniciarCamera = document.querySelector("[data-video-botao]");
const botaoTirarFoto = document.querySelector("[data-tirar-foto]");
const botaoEnviarFoto = document.querySelector("[data-enviar]");
const canvas = document.querySelector("[data-video-canvas]");
const campoCamera = document.querySelector("[data-camera]");
const mensagem = document.querySelector("[data-mensagem]");
const video = document.querySelector("[data-video]");

let imagemURL = "";

async function iniciarCamera() {
   const iniciarVideo = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });

   botaoIniciarCamera.style.display = "nome";
   campoCamera.style.display = "block";

   video.srcObject = iniciarVideo;
}

function tirarFoto() {
   canvas.textContent('2d').drawImage(video, 0, 0, canvas.width, canvas.heigth);

   imagemURL = canvas.toDataURL("image/jpeg");

   campoCamera.style.display = "nome";
   mensagem.style.display = "block";
}

function enviarFoto() {
   const receberDadosExistentes = localStorage.getItem("cadastro");
   const converteRetorno = JSON.parse(receberDadosExistentes);

   converteRetorno.imagem = imagemURL;
   localStorage.setItem("cadastro", JSON.stringify(converteRetorno));

   window.location.href = "./abrir-conta-form-3.html";
}

botaoIniciarCamera.addEventListener('click', iniciarCamera);
botaoTirarFoto.addEventListener('click', tirarFoto);
botaoEnviarFoto.addEventListener('click', enviarFoto);
