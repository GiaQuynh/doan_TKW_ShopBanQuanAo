// JavaScript Document
//TRANG CHỦ
// QC
const imgPosition = document.querySelectorAll(".aspect-ratio-169 img");
const imgcontainer2 = document.querySelector(".aspect-ratio-169");
const dotItem = document.querySelectorAll(".dot");
let imgNumber = imgPosition.length;
let index = 0;
imgPosition.forEach(function (image, index) {
  image.style.left = index * 100 + "%";
  dotItem[index].addEventListener("click", function () {
    slider(index);
  });
});
function imgSlide() {
  index++;
  if (index >= imgNumber) {
    index = 0;
  }
  slider(index);
}
function slider(index) {
  imgcontainer2.style.left = "-" + index * 100 + "%";
  const dotActive = document.querySelector(".active");
  dotActive.classList.remove("active");
  dotItem[index].classList.add("active");
}
setInterval(imgSlide, 3000);

// SALE
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs((slideIndex += n));
}

function currentDiv(n) {
  showDivs((slideIndex = n));
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides3");
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "block";
}

//TRANG ĐĂNG NHẬP + ĐĂNG KÝ
const registerButton = document.getElementById("register");
const loginButton = document.getElementById("login");
const container2 = document.getElementById("container2");

registerButton.addEventListener("click", () => {
  container2.classList.add("right-panel-active");
});

loginButton.addEventListener("click", () => {
  container2.classList.remove("right-panel-active");
});

//TRANG GIỎ HÀNG
