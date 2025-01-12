export function currentYear() {
  const anoAtual = new Date().getFullYear();
  document.getElementById('currentYear').innerText = anoAtual;
}
