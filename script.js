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

// scroll

const menuItems = document.querySelectorAll('.fixed-header ul li a, .logo a');

menuItems.forEach((item) => {
  item.addEventListener('click', function (e) {
    e.preventDefault(); // Impede o comportamento padrão do link

    const targetID = this.getAttribute('href');
    const targetSection = document.querySelector(targetID);

    targetSection.scrollIntoView({
      behavior: 'smooth',
    });
  });
});

//Recarregar a const logo = document.querySelector('.logo img');

const logos = document.querySelectorAll('.logo img'); // Seleciona todas as imagens dentro de .logo

logos.forEach((logo) => {
  logo.addEventListener('click', function () {
    window.location.href = '../index.html'; // Recarrega a página
  });
});

// ano atual
const currentYear = () => {
  const anoAtual = new Date().getFullYear();
  document.getElementById('currentYear').innerText = anoAtual;
};

currentYear(); // Chame a função
