import throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

formRef.addEventListener('input', throttle(onInput, 500));
formRef.addEventListener('submit', onSubmit);

const userData = {};

updateUserData();

function onInput() {
  userData.email = formRef.elements.email.value;
  userData.message = formRef.elements.message.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(userData));
}

function onSubmit(evt) {
  evt.preventDefault();
  if (formRef.elements.email.value && formRef.elements.message.value) {
    console.log(userData);

    evt.currentTarget.reset();

    localStorage.removeItem(STORAGE_KEY);
  }
}

function updateUserData() {
  if (localStorage.getItem(feedKey)) {
    const userData = JSON.parse(localStorage.getItem(feedKey) || '');
    formRef.elements.email.value = userData.email;
    formRef.elements.message.value = userData.message;
  }
}
