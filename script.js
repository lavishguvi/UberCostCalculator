const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const title = document.querySelector('#title');
const weekday = document.querySelector('#weekday');
const date = new Date();
weekday.innerHTML = weekdays[date.getDay()];
