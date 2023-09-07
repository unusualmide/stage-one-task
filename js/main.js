 'strict';

const hour = document.querySelector('.hour');
const minutes = document.querySelector('.minutes');
const day = document.querySelector('.day');
let newDate = new Date();

hour.innerHTML = `${newDate.getUTCHours()}`
minutes.innerHTML =`${newDate.getMinutes()}`


 const formatDay = function(dateStr) {
  return new Intl.DateTimeFormat("en", {
    weekday: "long",
  }).format(new Date(dateStr));
}

  day.innerHTML = `${formatDay(newDate)}`

