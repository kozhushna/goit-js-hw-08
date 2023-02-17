import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const feedbackForm = document.querySelector('.feedback-form');

const formInit = () => {
  let formState = localStorage.getItem(STORAGE_KEY);
  if (formState) {
    formState = JSON.parse(formState);
    Object.entries(formState).forEach(([name, value]) => {
      feedbackForm.elements[name].value = value;
    });
  }
};

formInit();

feedbackForm.addEventListener('submit', e => {
  e.preventDefault();
  const { currentTarget } = e;
  const formData = new FormData(currentTarget);
  let hasEmptyFields;
  const messages = [];
  formData.forEach((value, name) => {
    if (value.trim()) {
      messages.push(`${name}: ${value}`);
    } else {
      hasEmptyFields = true;
      alert(`Заповніть, будь ласка, поле '${name}'`);
    }
  });
  if (hasEmptyFields) {
    return;
  }
  messages.forEach(m => console.log(m));
  currentTarget.reset();
});

feedbackForm.addEventListener(
  'input',
  throttle(e => {
    let formState = localStorage.getItem(STORAGE_KEY);
    formState = formState ? JSON.parse(formState) : {};
    formState[e.target.name] = e.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formState));
  }, 500)
);

feedbackForm.addEventListener('reset', e => {
  localStorage.removeItem(STORAGE_KEY);
});
