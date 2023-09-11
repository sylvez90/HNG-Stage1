let currentDay = document.querySelector(".currentDay");
let currentTime = document.querySelector(".utcTime");
const days = [
  "Sunday:",
  "Monday:",
  "Tuesday:",
  "Wednesday:",
  "Thursday:",
  "Friday:",
  "Saturday:",
];
const date = new Date();
let day = days[date.getDay()];

currentDay.innerHTML = day;
currentTime.innerHTML = date.getTime();