// modules/animation.js

const texts = [
  'Inovação.',
  'Agilidade.',
  'Criatividade.',
  'Qualidade.',
  'Colaboração.',
  'Expertise.',
];
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
