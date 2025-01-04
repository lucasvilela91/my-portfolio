// animacao showcase

const texts = [
  'Inovação.',
  'Agilidade.',
  'Criatividade.',
  'Qualidade.',
  'Colaboração.',
  'Expertise.',
];
let i = 0;
let textElement = document.querySelector('.span-title');

function typeAndBackspace() {
  textElement.textContent = texts[i];
  i = (i + 1) % texts.length; // Ciclo entre os textos

  textElement.style.animation = 'none'; // Resetando animação
  textElement.offsetHeight; // Força a atualização da animação
  textElement.style.animation =
    'typing 3s steps(' +
    texts[i].length +
    ') 1s forwards, backspace 0.5s steps(' +
    texts[i].length +
    ') 4s forwards';

  setTimeout(typeAndBackspace, 1000); // Chama novamente após 1 segundos para repetir o efeito
}

typeAndBackspace();

// navbar border
window.addEventListener('scroll', function () {
  let border = document.getElementById('border');
  let scrollPosition = window.scrollY;
  let documentHeight =
    document.documentElement.scrollHeight - window.innerHeight;
  let scrollPercentage = (scrollPosition / documentHeight) * 100;
  border.style.width = scrollPercentage + '%';
});
