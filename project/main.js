"use strict";

//Variable year håller constructor function Date() =2020 aktuellt år
let currentYear = new Date().getFullYear();

//functionen tilldelar värdet i currentYear till id "year" i index.html
function showCalender() {
  let yearP = document.getElementById("year");
  yearP.innerHTML = currentYear;
}

//Kallar functionen så året blir synligt
showCalender();

//----------------------------------------------------------
// bättre att lägga till de via html direkt.....//Abbas
/* let days = [
  "Måndag",
  "tisdag",
  "onsdag",
  "torsdag",
  "fredag",
  "lördag",
  "Söndag",
];

for (let index = 0; index < days.length; index++) {
  document
    .querySelector(".weekDays")
    .insertAdjacentHTML("beforeend", `<div>${days[index]}<div/>`);
}
 */
