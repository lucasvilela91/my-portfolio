// modules/animation.js

const textsPt = [
  'Inovação.',
  'Agilidade.',
  'Criatividade.',
  'Qualidade.',
  'Colaboração.',
  'Expertise.',
];

const textsEn = [
  'Innovation.',
  'Agility.',
  'Creativity.',
  'Quality.',
  'Collaboration.',
  'Expertise.',
];

// Verifica se está na página em português ou inglês
const texts = window.location.pathname.includes('index.html')
  ? textsPt
  : textsEn;

let i = 0;

export function typeAndBackspace(textElement) {
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

  setTimeout(() => typeAndBackspace(textElement), 1000);
}
