const validInputEl = document.querySelector('#validation-input');
validInputEl.addEventListener('input', () => {
  const inputValue = validInputEl.value;
  const expectedLength = Number(validInputEl.dataset.length);

  if (inputValue.length <= expectedLength) {
    validInputEl.classList.remove('invalid');
    validInputEl.classList.add('valid');
  } else {
    validInputEl.classList.remove('valid');
    validInputEl.classList.add('invalid');
  }
});
