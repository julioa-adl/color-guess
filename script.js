// Iniciar Jogo
function iniciarJogo() {
  const inicio = document.getElementById('answer');
  inicio.innerText = 'Escolha uma cor';
}
function pegarCor(element) { /* Função para pegar o valor RGB do bgColor */
  const cssObj = window.getComputedStyle(element);
  const bcElement = cssObj.getPropertyValue('background-color');
  return bcElement;
}
let placar = 0; /* Placar Inicial */
const score = document.getElementById('score');
score.innerText = `Placar: ${placar}`;

// Requisito 4 - adicionar cores ao carregar
function criarRGB() {
  function baseRgbAleatoria() {
    const num = Math.floor(Math.random() * (255) + 1);
    return num;
  }
  const rgb = `rgb(${baseRgbAleatoria()}, ${baseRgbAleatoria()}, ${baseRgbAleatoria()})`;
  return rgb;
}

function pintarBolas() { /* Usa a função criarRGB para dar cores aleatórias as bolas */
  const balls = document.querySelectorAll('.ball');
  for (let i = 0; i < balls.length; i += 1) {
    balls[i].style.backgroundColor = (criarRGB());
  }
  const num = Math.floor(Math.random() * 6); /* Pega o bgColor de umas das bolas aleatóriamente e escreve no rgb() para ser advinhado */
  document.getElementById('rgb-color').innerText = pegarCor(balls[num]);
  iniciarJogo();
}

// Requisito 5 texto indicando se acertou
function acertou(event) {
  const guessRGB = document.getElementById('rgb-color').innerText;
  const inicio = document.getElementById('answer');
  const ball = event.target;
  if (pegarCor(ball) === guessRGB) {
    inicio.innerText = 'Acertou!';
    placar += 3;
  } else {
    inicio.innerText = 'Errou! Tente novamente!';
    if (placar > 0) {
      placar -= 1;
    }
  }
  score.innerText = `Placar: ${placar}`; /* Atualiza Placar */
}
const balls = document.querySelectorAll('.ball');
for (let i = 0; i < balls.length; i += 1) {
  balls[i].addEventListener('click', acertou);
}

// Requisito 6 botão reset
function resetar() {
  iniciarJogo();
  pintarBolas();
}
const btnReset = document.getElementById('reset-game');
btnReset.addEventListener('click', resetar);

window.onload = pintarBolas;
