export function smoothScroll() {
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
}
