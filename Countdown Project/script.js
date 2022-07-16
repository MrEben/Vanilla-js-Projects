const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.daedline');
const items = document.querySelectorAll('.deadline-format h4');
const date = new Date(2022, 7, 12, 10, 5);
const year = date.getFullYear();
const hour = date.getHours();
const minutes = date.getMinutes()
const month = date.getMonth();
const weekday = date.getDay();
const dates = date.getDate();
giveaway.textContent = `giveaway ends on ${weekdays[weekday]},${dates} ${months[month]} ${year} ${hour}:0${minutes}am`;
const futureTime=date.getTime();
function getRemainingTime() {
  const today=new Date().getTime();
  const t=date-today;
  console.log(t);
  const oneDay=24*60*60*1000;
  console.log(oneDay);
};
getRemainingTime();