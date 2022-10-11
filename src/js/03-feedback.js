import throttle from 'lodash.throttle';

const refs = {
  formEl: document.querySelector('form.feedback-form'),
  inputEmailEl: document.querySelector('input'),
  textareaMessageEl: document.querySelector('textarea'),
  buttonSubmitEl: document.querySelector('button'),
};

/* const formEl = document.querySelector('form.feedback-form'); */
const obj = {};
const INPUT_FORM_KEY = 'feedback-form-state';

reloadPage();

refs.formEl.addEventListener('input', throttle(onWriteDataToLocalStorage, 500));
refs.formEl.addEventListener('submit', onSubmitForm);

function onWriteDataToLocalStorage(evt) {
  checkSubmitButton();
  obj[evt.target.getAttribute('name')] = evt.target.value;
  localStorage.setItem(INPUT_FORM_KEY, JSON.stringify(obj));
}

function onSubmitForm(evt) {
  evt.preventDefault();
  console.log(obj);
  refs.formEl.reset();
  localStorage.removeItem(INPUT_FORM_KEY);
  obj.email = '';
  obj.message = '';
  checkSubmitButton();
}

function reloadPage() {
  const dataFromLocalStorage = JSON.parse(localStorage.getItem(INPUT_FORM_KEY));

  if (dataFromLocalStorage) {
    if (dataFromLocalStorage.email) {
      refs.inputEmailEl.value = dataFromLocalStorage.email;
      obj.email = dataFromLocalStorage.email;
    }

    if (dataFromLocalStorage.message) {
      refs.textareaMessageEl.value = dataFromLocalStorage.message;
      obj.message = dataFromLocalStorage.message;
    }
  }
  checkSubmitButton();
}

function checkSubmitButton() {
  if (!refs.inputEmailEl.value.length || !refs.textareaMessageEl.value) {
    refs.buttonSubmitEl.setAttribute('disabled', 'true');
  } else {
    if (refs.buttonSubmitEl.hasAttribute('disabled')) {
      refs.buttonSubmitEl.removeAttribute('disabled');
    }
  }
}
