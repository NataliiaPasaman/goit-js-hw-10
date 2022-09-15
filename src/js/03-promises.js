import { Notify } from 'notiflix';

 const refs = {
  form: document.querySelector('.form'),
  btn: document.querySelector('button'),
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise ((resolve, reject) => {
    setTimeout(() => {
      if(shouldResolve) {
        resolve({ position, delay });
      }
      reject({ position, delay });
    }, delay);
  });
}

  refs.form.addEventListener('submit', onSubmitForm);

  function onSubmitForm(event, position) {
    event.preventDefault();

    let delay =  Number(event.currentTarget.elements[0].value);
    let step = Number(event.currentTarget.elements[1].value);
    let amount = Number(event.currentTarget.elements[2].value);

    for(let i = 1; i <= amount; i += 1) {
      position = i;

      createPromise(position, delay)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
      delay += step;
    }
  }



