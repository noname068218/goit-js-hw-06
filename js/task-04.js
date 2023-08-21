let counters = document.querySelectorAll('#counter');
let value = document.querySelector('#value');
let decrement = document.querySelector(
  '#counter button[data-action="decrement"]'
);
let increment = document.querySelector(
  '#counter button[data-action="increment"]'
);
let counterValue = 0;
decrement.addEventListener('click', () => {
  counterValue--;
  value.textContent = counterValue;
});
increment.addEventListener('click', () => {
  counterValue++;
  value.textContent = counterValue;
});

decrement.classList.add('buttons');

increment.classList.add('buttons');
value.classList.add('spans');
