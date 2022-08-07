let circle = document.querySelector(".circle");
circle.addEventListener("click", () => {
  let body = document.querySelector("body");
  circle.classList.toggle("active");
  body.classList.toggle("dark");
});

const imageSlider = () => {
  let slider = document.querySelector(".slider");
  let sliderWidth = slider.offsetWidth;
  let sliderList = document.querySelector(".slider-ul");
  let count = 1;
  let items = sliderList.querySelectorAll("li").length;
  const prev = () => {
    if (count > 1) {
      count = count - 2;
      sliderList.style.left = "-" + count * sliderWidth + "px";
      count++;
    } else if ((count = 1)) {
      count = items - 1;
      sliderList.style.left = "-" + count * sliderWidth + "px";
      count++;
    }
  };
  setInterval(() => {
    prev();
  }, 3000);
};
window.addEventListener("load", () => {
  imageSlider();
});

let prebuiltLi = document.querySelector(".prebuilt-li");
let prebuilt = document.getElementById("prebuilt");
prebuiltLi.addEventListener("mouseenter", () => {
  prebuilt.classList.add("active");
});
let accpartsLi = document.querySelector(".accparts-li");
let accparts = document.getElementById("accparts");
accpartsLi.addEventListener("mouseenter", () => {
  accparts.classList.add("active");
});
let buildpartsLi = document.querySelector(".buildparts-li");
let buildparts = document.getElementById("buildparts");
buildpartsLi.addEventListener("mouseenter", () => {
  buildparts.classList.add("active");
});
let contactsLi = document.querySelector(".contacts-li");
let contacts = document.getElementById("contacts");
contactsLi.addEventListener("mouseenter", () => {
  contacts.classList.add("active");
});
window.addEventListener("click", () => {
  accparts.classList.remove("active");
  prebuilt.classList.remove("active");
  buildparts.classList.remove("active");
  contacts.classList.remove("active");
});

function ret() {
  window.location.pathname.replace("/");
}
let total = 0;
let totalContainer = document.getElementById("total");
totalContainer.textContent = "Total : " + total;
function addPrice(element) {
  let price = parseInt(
    document.querySelector(element).outerText.split(" Rs")[0]
  );
  total += price;
  totalContainer.textContent = "Total : " + total;
}
