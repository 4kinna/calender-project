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
