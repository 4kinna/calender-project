"use strict";

const date = new Date();
//Variable year håller constructor function Date() =2020 aktuellt år
let currentYear = new Date().getFullYear();
// Ger månadernas indexnummer 0-11. +1 gör att månaderna får det värde som behövs i andra uträkningar.
let monthModified = date.getMonth() + 1;
let dateToday = date.getDate();
let thisMonth = date.getMonth();
let monthHeader = document.querySelector(".date h1");
let navmonth = document.querySelectorAll(".changeMonth");
let changeYear = document.getElementsByClassName("changeYear");
let yearHeader = document.getElementById("year");

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

//flyttade ut staffans element då jag behöver tillgång i changeYear
let element = document.getElementById("days-number-id");

//functionen tilldelar värdet i currentYear till id "year" i index.html
function showCalender() {
  let yearP = document.getElementById("year");
  yearP.innerHTML = currentYear;
}

//ändra år
changeYear[0].addEventListener("click", function () {
  currentYear--;
  element.innerHTML = "";
  showCalanderDays();
  hover_window();
  yearHeader.innerHTML = currentYear;
});
changeYear[1].addEventListener("click", function () {
  currentYear++;
  element.innerHTML = ""; //nollställer kalendernumrena
  showCalanderDays();
  hover_window();
  yearHeader.innerHTML = currentYear;
});

//ändrar månader
navmonth[0].addEventListener("click", function () {
  if (thisMonth !== 0) {
    thisMonth--;
    monthModified = thisMonth + 1;
    element.innerHTML = "";
    showCalanderDays();
    hover_window();
  } else {
    thisMonth = 11;

    monthModified = thisMonth + 1;
    element.innerHTML = "";
    showCalanderDays();
    hover_window();
  }
  monthHeader.innerHTML = months[thisMonth];
});

navmonth[1].addEventListener("click", function () {
  if (thisMonth !== 11) {
    thisMonth++;
    monthModified = thisMonth + 1;
    element.innerHTML = "";
    showCalanderDays();
    hover_window();
  } else {
    thisMonth = 0;

    monthModified = thisMonth + 1;
    element.innerHTML = "";
    showCalanderDays();
    hover_window();
  }
  monthHeader.innerHTML = months[thisMonth];
});

//functionen tilldelar värdet i thisMonth till classnamn "date" i index.html
monthHeader.innerHTML = months[thisMonth];

//Kallar functionen så året blir synligt
showCalender();
showCalanderDays();

// Räknar ut hur många dagar det finns i denna månad.
function totalDaysInMonthFunc(monthModified, year) {
  return new Date(year, monthModified, -0).getDate();
}

// Tar reda på vilken vilket index den första veckodagen i månaden har, 0=söndag.
function day() {
  return new Date(currentYear + "-" + monthModified + "-01").getDay();
}

// Skapar en div för varje dag (nummren) och tilldelar dem ett id-nummer och innehåll
function daysToCalendar(dayId, text) {
  let newDiv = document.createElement("div");
  newDiv.setAttribute("id", dayId);
  let textInDiv = document.createTextNode(text);
  newDiv.appendChild(textInDiv);
  element.appendChild(newDiv);
}

function blankDaysId(dayId) {
  return "last-month-day-id" + dayId;
}
function showCalanderDays() {
  // Om första dagen i månaden är en söndag.
  if (day() === 0) {
    for (let index = 0; index < 6; index++) {
      daysToCalendar(blankDaysId([index]), " ");
    }
  } else {
    for (let index = day(); index > 1; index--) {
      daysToCalendar(blankDaysId([index]), " ");
    }
  }

  // Skapar månadens alla dagar (nummer)
  for (
    let index = 1;
    index <= totalDaysInMonthFunc(monthModified, currentYear);
    index++
  ) {
    let dayNumberId = "this-number-id" + [index];
    daysToCalendar(dayNumberId, [index]);
  }

  // Markera dagens dag
  document.getElementById("this-number-id" + dateToday).style.backgroundColor =
    "green";
}
//

//----------------------------------------------------------
//----------------------------------------------------------
//--------------------Abbas--------------------------
//----------------------------------------------------------
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

// CLICK on a day

let hidden = document.querySelectorAll(".hidden");
let closeModal = document.querySelector(".close-modal");
let overlay = document.querySelector(".overlay");

function hover_window() {
  for (
    let index = 1;
    index <= totalDaysInMonthFunc(monthModified, currentYear);
    index++
  ) {
    let click = document.querySelector(`#this-number-id${index}`);
    console.log(click);
    click.addEventListener("click", function () {
      for (let i = 0; i < hidden.length; i++) {
        hidden[i].style.display = "block";
      }
    });

    click.addEventListener("mouseover", function () {
      click.style.backgroundColor = "green";
    });
    if (click.textContent != dateToday) {
      click.addEventListener("mouseout", function () {
        click.style.backgroundColor = " rgb(226, 226, 226)";
      });
    }
  }

  function close() {
    for (let i = 0; i < hidden.length; i++) {
      hidden[i].style.display = "none";
    }
  }

  closeModal.addEventListener("click", close);
  overlay.addEventListener("click", close);
}
hover_window();

//----------------------------------------------------------
//----------------------------------------------------------
//--------------------Abbas--------------------------
//----------------------------------------------------------
//----------------------------------------------------------
