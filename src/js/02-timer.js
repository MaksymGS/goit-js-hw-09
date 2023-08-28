import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Ukrainian } from 'flatpickr/dist/l10n/uk.js';
import Notiflix from 'notiflix';

const start = document.querySelector('button[data-start]');
const daysLeft = document.querySelector('.value[data-days');
const hoursLeft = document.querySelector('.value[data-hours');
const minutesLeft = document.querySelector('.value[data-minutes');
const secondsLeft = document.querySelector('.value[data-seconds');
const dateTime = document.querySelector('#datetime-picker');

const fp = flatpickr(dateTime, {
  locale: Ukrainian,
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
       if (new Date().getTime() < selectedDates[0].getTime()) {
      start.disabled = false;
    } else {
      start.disabled = true;
      Notiflix.Notify.failure('Please choose a date in the future');
    }
  },
});

start.disabled = true;
start.addEventListener('click', handlerClick);

function handlerClick() {
  start.disabled = true;
  dateTime.disabled = true;

  counter = setInterval(() => {
    const currentTime = new Date().getTime();
    const leftTime = fp.selectedDates[0].getTime() - currentTime;
    const { days, hours, minutes, seconds } = convertMs(leftTime);
    daysLeft.textContent = addLeadingZero(days);
    hoursLeft.textContent = addLeadingZero(hours);
    minutesLeft.textContent = addLeadingZero(minutes);
    secondsLeft.textContent = addLeadingZero(seconds);
    if (leftTime <= 0) {
      clearInterval(counter);
      dateTime.disabled = false;
      daysLeft.textContent = '00';
      hoursLeft.textContent = '00';
      minutesLeft.textContent = '00';
      secondsLeft.textContent = '00';
    }
  }, 1000);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}
