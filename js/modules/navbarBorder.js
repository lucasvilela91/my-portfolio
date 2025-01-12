export function navbarBorder() {
  window.addEventListener('scroll', function () {
    let border = document.getElementById('border');
    let scrollPosition = window.scrollY;
    let documentHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    let scrollPercentage = (scrollPosition / documentHeight) * 100;
    border.style.width = scrollPercentage + '%';
  });
}
