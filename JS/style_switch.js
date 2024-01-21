// TOGGLE SWITCH

const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
  document.querySelector(".style-switcher").classList.toggle("open");
});

// Hiding the switcher while Scrolling

window.addEventListener("scroll", () => {
  if (document.querySelector(".style-switcher").classList.contains("open")) {
    document.querySelector(".style-switcher").classList.remove("open");
  }
});

// Theme Switch

const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color) {
  alternateStyles.forEach((style) => {
    if (color === style.getAttribute("title")) {
      style.removeAttribute("disabled");
    } else {
      style.setAttribute("disabled", true);
    }
  });
}

// Night Mode

const day = document.querySelector(".day-night");
day.addEventListener("click", () => {
  day.querySelector("i").classList.toggle("fa-sun");
  day.querySelector("i").classList.toggle("fa-moon");
  document.body.classList.toggle("dark");
});
window.addEventListener("load", () => {
  if (document.body.classList.contains("dark")) 
  {
    day.querySelector("i").classList.add("fa-sun");
  } else {
    day.querySelector("i").classList.add("fa-moon");
  }
});
