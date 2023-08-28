import Notiflix from 'notiflix';
const form = document.querySelector('.form');
form.addEventListener('input', handlerForm);
form.addEventListener('submit', handlerSubmit);

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
  promise
    .then(({ position, delay }) => {
      console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    });
}

const formData = {};
function handlerForm(evt) {
  formData[evt.target.name] = evt.target.value;
 }

function handlerSubmit(evt) {
  evt.preventDefault();
  const { delay, step, amount } = formData;
  for (let i = 0; i < amount; i += 1) {
    let position = i + 1;
    let delayStep = Number(delay) + i * Number(step);
    createPromise(position, delayStep);
  }
}
