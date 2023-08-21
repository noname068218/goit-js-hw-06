const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
};

const changeColorButton = document.querySelector('.change-color');
const bodyElement = document.body;
const colorSpan = document.querySelector('.color');

changeColorButton.addEventListener('click', () => {
  const randomColor = getRandomHexColor();
  bodyElement.style.backgroundColor = randomColor;
  colorSpan.textContent = randomColor;
});
