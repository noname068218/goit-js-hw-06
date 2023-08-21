const inputSizeEl = document.querySelector('#font-size-control');
const textSizeEl = document.querySelector('#text');

inputSizeEl.addEventListener('input', () => {
  const fontSize = inputSizeEl.value + 'px';
  textSizeEl.style.fontSize = fontSize;

  const randomColor = getRandomColor();
  textSizeEl.style.color = randomColor;
});

inputSizeEl.classList.add('slider');

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
