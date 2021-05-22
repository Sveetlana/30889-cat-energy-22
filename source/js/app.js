var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

var slider = document.querySelector('.range-slider__range');
var photoBefore = document.querySelector('.example__photo--before');
var showBefore = document.querySelector('.range-slider__button--before');
var showAfter = document.querySelector('.range-slider__button--after');

slider.oninput = function() {
  photoBefore.style.width = (100 - this.value) + "%";
}

showBefore.onclick = function() {
  slider.value = 0;
  photoBefore.style.width = "100%";
}

showAfter.onclick = function() {
  slider.value = 100;
  photoBefore.style.width = "0%";
}
