const playBtn = document.querySelector(".fa-play-circle");
const item1Btn = document.querySelector(".item1");
const item2Btn = document.querySelector(".item2");
const item3Btn = document.querySelector(".item3");
const time = document.querySelector(".status h2");
const status = document.querySelector(".status h3");
const message = document.querySelector(".items h4");

item1Btn.addEventListener("mouseenter", (e) => {
  e.target.childNodes[1].style.display = "block";
});
item2Btn.addEventListener("mouseenter", (e) => {
  e.target.childNodes[1].style.display = "block";
});
item3Btn.addEventListener("mouseenter", (e) => {
  e.target.childNodes[1].style.display = "block";
});

item1Btn.addEventListener("mouseleave", (e) => {
  e.target.childNodes[1].style.display = "";
});
item2Btn.addEventListener("mouseleave", (e) => {
  e.target.childNodes[1].style.display = "";
});
item3Btn.addEventListener("mouseleave", (e) => {
  e.target.childNodes[1].style.display = "";
});
