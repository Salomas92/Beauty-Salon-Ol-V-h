const getButton = (id) => {
  return document.getElementById(id);
}

const buttonSkipt = getButton('skipt');
const buttonStart = getButton('start');
const getServiceCard = document.getElementsByClassName('servicos')

buttonSkipt.addEventListener('click', (ev) => {
  ev.preventDefault();

  window.location.href = 'home.html'
})

buttonStart.addEventListener('click', (ev) => {
  ev.preventDefault();

  window.location.href = 'index-service.html'
})

