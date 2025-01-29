export function reloadLogo() {
  const logos = document.querySelectorAll('.logo img'); // Seleciona todas as imagens dentro de .logo

  logos.forEach((logo) => {
    logo.addEventListener('click', function () {
      const currentPage = window.location.pathname;

      if (currentPage.endsWith('index-en.html')) {
        window.location.href = 'index-en.html'; // Recarrega a página
      } else {
        window.location.href = 'index.html'; // Redireciona para a versão em inglês
      }
    });
  });
}
