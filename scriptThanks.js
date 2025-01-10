const logos = document.querySelectorAll('.logo img'); // Seleciona todas as imagens dentro de .logo

logos.forEach((logo) => {
  logo.addEventListener('click', function () {
    window.location.href = '../index.html'; // Recarrega a página
  });
});
