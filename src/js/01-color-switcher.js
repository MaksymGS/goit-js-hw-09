const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

startBtn.addEventListener('click', handlerClick);
stopBtn.addEventListener('click', handlerClick);

stopBtn.disabled = true;
let changeColor = null;
function handlerClick(evt) {
  switch (evt.target.dataset) {
    case startBtn.dataset:
      startBtn.disabled = true;
      stopBtn.disabled = false;

      changeColor = setInterval(() => {
        document.body.style.backgroundColor = getRandomHexColor();
      }, 1000);
      break;
    case stopBtn.dataset:
      startBtn.disabled = false;
      stopBtn.disabled = true;

      clearInterval(changeColor);
      break;
  }
}
3