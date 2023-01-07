import style from '../style/style.scss';

const form = document.getElementById('form');
const first_name = document.getElementById('first_name');
const last_name = document.getElementById('last_name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirm_password = document.getElementById('confirm_password');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  validateInputs();
});
const setError = (element, message) => {
  const inputArea = element.parentElement;
  const errorDisplay = inputArea.querySelector('.error');
  errorDisplay.innerText = message;
  inputArea.classList.add('add_error');
  inputArea.classList.remove('success');
};
const setSucess = (element) => {
  const inputArea = element.parentElement;
  const errorDisplay = inputArea.querySelector('.error');
  errorDisplay.innerText = '';
  inputArea.classList.add('success');
  inputArea.classList.remove('add_error');
};

const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};
const validateInputs = () => {
  const first_name_value = first_name.value.trim();
  const last_name_value = last_name.value.trim();
  const email_value = email.value.trim();
  const password_value = password.value.trim();
  const confirm_password_value = confirm_password.value.trim();

  if (first_name_value === '') {
    setError(first_name, 'please enter a name');
  } else {
    setSucess(first_name);
  }
  if (last_name_value === '') {
    setError(last_name, 'please enter your last name');
  } else {
    setSucess(last_name);
  }
  if (email_value === '') {
    setError(email, 'enter your email');
  } else if (!isValidEmail(email_value)) {
    setError(email, 'email not valid');
  } else {
    setSucess(email);
  }

  if (password_value === '') {
    setError(password, 'enter your password');
  } else if (password_value.length < 8) {
    setError(password, 'password must beat at least 8 characters long');
  } else {
    setSucess(password);
  }

  if (confirm_password_value === '') {
    setError(confirm_password, 'confirm your password');
  } else if (password_value !== confirm_password_value) {
    setError(confirm_password, 'passwords do not match');
  } else {
    setSucess(confirm_password);
  }
};
