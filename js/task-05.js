const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

inputEl.addEventListener('input', event => {
  if (inputEl.value === '') {
    const name = inputEl.value.trim();
    outputEl.textContent = 'Anonymous';
  } else {
    outputEl.textContent = event.currentTarget.value;
  }
});

inputEl.classList.add('input-css');
outputEl.classList.add('change-text');
