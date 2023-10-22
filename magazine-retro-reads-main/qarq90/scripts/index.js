let fullDay;

let currentDate = new Date();

const day = currentDate.getDate();

if (day === 1 || day === 21 || day === 31) {
  fullDay = day + "st";
} else if (day === 2 || day === 22) {
  fullDay = day + "nd";
} else if (day === 3 || day === 23) {
  fullDay = day + "rd";
} else {
  fullDay = day + "th";
}

const monthsOfYear = [
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
currentDate = new Date();
const currentMonth = currentDate.getMonth();
const monthName = monthsOfYear[currentMonth];

const formattedDate = fullDay + " " + monthName;

document.getElementById("myDate").textContent = formattedDate;

const gameFilterTrigger = document.getElementById("game-filter");
const entertainmentFilterTrigger = document.getElementById(
  "entertainment-filter",
);
const fashionFilterTrigger = document.getElementById("fashion-filter");
const sportsFilterTrigger = document.getElementById("sports-filter");

document.addEventListener("DOMContentLoaded", function () {
  const gDivHandler = () => {
    const gameDivs = document.getElementById("g-div");

    if (gameFilterTrigger.checked) {
      gameDivs.style.display = "block";
    } else {
      gameDivs.style.display = "none";
    }
  };

  const eDivHandler = () => {
    const eDivs = document.getElementById("e-div");

    if (entertainmentFilterTrigger.checked) {
      eDivs.style.display = "block";
    } else {
      eDivs.style.display = "none";
    }
  };

  const fDivHandler = () => {
    const fDivs = document.getElementById("f-div");

    if (fashionFilterTrigger.checked) {
      fDivs.style.display = "block";
    } else {
      fDivs.style.display = "none";
    }
  };

  const sDivHandler = () => {
    const sDivs = document.getElementById("s-div");

    if (sportsFilterTrigger.checked) {
      sDivs.style.display = "block";
    } else {
      sDivs.style.display = "none";
    }
  };

  gDivHandler();
  fDivHandler();
  sDivHandler();
  eDivHandler();
  gameFilterTrigger.addEventListener("change", gDivHandler);
  entertainmentFilterTrigger.addEventListener("change", eDivHandler);
  fashionFilterTrigger.addEventListener("change", fDivHandler);
  sportsFilterTrigger.addEventListener("change", sDivHandler);
});
