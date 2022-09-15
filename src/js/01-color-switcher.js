function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  body: document.querySelector('body'),
  startBtn: document.querySelector('[data-start]'),
  stopBtn: document.querySelector('[data-stop]'),
};
let timerId = null;
let isClicked = false;

refs.startBtn.addEventListener('click', startColorSwitcher);
refs.stopBtn.addEventListener('click', stopColorSwitcher);

function startColorSwitcher() {
  isClicked = true;

  if (isClicked) {
    refs.startBtn.setAttribute('disabled', 'true');
  };

  timerId = setInterval(() => {
    refs.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function stopColorSwitcher() {
  clearInterval(timerId);
  refs.startBtn.removeAttribute('disabled');
}
