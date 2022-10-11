import throttle from 'lodash.throttle';
/* const inputEmailEl = document.querySelector('input[name="email"]');
const inputMassageEl = document.querySelector('textarea[name="message"]'); */
const formEl = document.querySelector('form.feedback-form');
const obj = {};
const INPUT_FORM_KEY = 'feedback-form-state';

const dataFromLocalStorage = JSON.parse(localStorage.getItem(INPUT_FORM_KEY));

if (dataFromLocalStorage) {
  if (dataFromLocalStorage.email) {
    formEl.querySelector('input[name="email"]').value =
      dataFromLocalStorage.email;
  }

  if (dataFromLocalStorage.message) {
    formEl.querySelector('textarea[name="message"]').value =
      dataFromLocalStorage.message;
  }
}

formEl.addEventListener('input', throttle(onWriteDataToLocalStorage, 500));

function onWriteDataToLocalStorage(evt) {
  /* localStorage.setItem(
    INPUT_FORM_KEY,
    JSON.stringify({ [evt.target.getAttribute('name')]: evt.target.value })
  ); */

  obj[evt.target.getAttribute('name')] = evt.target.value;
  localStorage.setItem(INPUT_FORM_KEY, JSON.stringify(obj));
}
