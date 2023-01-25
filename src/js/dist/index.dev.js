"use strict";

var hamburger = document.querySelector(".hamburger");
var menu = document.querySelector(".menu");
var close = document.querySelector(".menu-close");
hamburger.addEventListener("click", function () {
  menu.classList.add("active");
});
close.addEventListener("click", function () {
  menu.classList.remove("active");
});