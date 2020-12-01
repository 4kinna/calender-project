"use strict";
const date = new Date();

//Variable year håller constructor function Date() =2020 aktuellt år
let currentYear = new Date().getFullYear();

let monthModified = date.getMonth() + 1; // Ger månadernas indexnummer 0-11. +1 gör att månaderna får det värde som behövs i andra uträkningar.

let months = [
    "January",
    "February",
    "Mars",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "Novemeber",
    "December",
];

//två knappar går fram i tiden eller bakåt, 
//ta det steg för steg, börja med knappen så att den ändrar i loggen  

document.querySelector(".date h1").innerHTML = months[date.getMonth()];




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
// Räknar ut hur många dagar det finns i denna månad.
function totalDaysInMonthFunc(monthModified, year) {
    return new Date(year, monthModified, -0).getDate();
}

// Tar reda på vilken vilket index den första vexkodagen i månaden har, 0=söndag.
var day = new Date(currentYear + "-" + monthModified + "-01").getDay();

// Om första dagen i månaden är en söndag.
if (day === 0) {
    for (let index = 0; index < 6; index++) {
        let newDiv = document.createElement("div");
        let textInDiv = document.createTextNode(" ");
        newDiv.appendChild(textInDiv);
        let element = document.getElementById("days-number-id");
        element.appendChild(newDiv);
    }
} else {
    for (let index = day; index > 1; index--) {
        let newDiv = document.createElement("div");
        let textInDiv = document.createTextNode(" ");
        newDiv.appendChild(textInDiv);
        let element = document.getElementById("days-number-id");
        element.appendChild(newDiv);
    }
}

// Skapar månadens alla dagar (nummer)
for (
    let index = 1;
    index <= totalDaysInMonthFunc(monthModified, currentYear);
    index++
) {
    let newDiv = document.createElement("div");
    let textInDiv = document.createTextNode([index]);
    newDiv.appendChild(textInDiv);
    let element = document.getElementById("days-number-id");
    element.appendChild(newDiv);
}
