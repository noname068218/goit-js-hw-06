const form = document.querySelector('.login-form');

form.addEventListener('submit', event => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === '' || password.value === '') {
    alert('Заповни всі поля');
  } else {
    const formData = {
      email: email.value,
      password: password.value,
    };

    console.log(formData);

    form.reset();
  }
});

const submitButton = document.querySelector('.login-form button');
submitButton.classList.add('btn-log-in');

const emailInput = document.querySelector('.style-inp[name="email"]');
const passwordInput = document.querySelector('.style-inp[name="password"]');
emailInput.classList.add('style-inp');
emailInput.placeholder = 'Email';
passwordInput.classList.add('style-inp');
passwordInput.placeholder = 'Password';
