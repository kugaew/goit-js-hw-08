import throttle from 'lodash.throttle';

const formEl = document.querySelector('form.feedback-form');
const obj = {};
const INPUT_FORM_KEY = 'feedback-form-state';

reloadPage();

formEl.addEventListener('input', throttle(onWriteDataToLocalStorage, 500));
formEl.addEventListener('submit', onSubmitForm);

function onWriteDataToLocalStorage(evt) {
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
}
