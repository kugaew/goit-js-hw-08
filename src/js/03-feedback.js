import throttle from 'lodash.throttle';

const formEl = document.querySelector('form.feedback-form');
const obj = {};
const INPUT_FORM_KEY = 'feedback-form-state';

reloadPage();

formEl.addEventListener('input', throttle(onWriteDataToLocalStorage, 500));
formEl.addEventListener('submit', onSubmitForm);

function onWriteDataToLocalStorage(evt) {
  checkSubmitButton();
  obj[evt.target.getAttribute('name')] = evt.target.value;
  localStorage.setItem(INPUT_FORM_KEY, JSON.stringify(obj));
}

function onSubmitForm(evt) {
  evt.preventDefault();
  console.log(obj);
  formEl.reset();
  localStorage.removeItem(INPUT_FORM_KEY);
}

function reloadPage() {
  const dataFromLocalStorage = JSON.parse(localStorage.getItem(INPUT_FORM_KEY));

  if (dataFromLocalStorage) {
    if (dataFromLocalStorage.email) {
      formEl.querySelector('input[name="email"]').value =
        dataFromLocalStorage.email;
      obj.email = dataFromLocalStorage.email;
    }

    if (dataFromLocalStorage.message) {
      formEl.querySelector('textarea[name="message"]').value =
        dataFromLocalStorage.message;
      obj.message = dataFromLocalStorage.message;
    }
  }
  checkSubmitButton();
}

function checkSubmitButton() {
  if (
    !formEl.querySelector('input[name="email"]').value ||
    !formEl.querySelector('textarea[name="message"]').value
  ) {
    formEl.querySelector('button').setAttribute('disabled', 'true');
  } else {
    if (formEl.querySelector('button').hasAttribute('disabled')) {
      formEl.querySelector('button').removeAttribute('disabled');
    }
  }
}
