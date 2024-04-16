var slider = document.querySelector('.swiper');
var mySwiper;
var button = document.querySelector('.btn-more');
var show = 'Показать все';
var hidden = 'Скрыть';

var mobileSlider = function() {
  if (window.innerWidth <= 768 && slider.dataset.mobile == 'false') {
    mySwiper = new Swiper (slider, {
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
        },
        slidesPerView: "auto",
    });
    slider.dataset.mobile = 'true';
  }
  if (window.innerWidth > 768) {
    slider.dataset.mobile = 'false';
    if (slider.classList.contains('swiper-container-initialized')) {
      mySwiper.destroy();
    }
  }
}
mobileSlider();

window.addEventListener('resize', () => {
  mobileSlider();
});

/* -- Показать все элементы -- */

button.addEventListener("click", function () {
  var element = document.querySelectorAll('.element');
    for (let i = 0; i < element.length; i++) {
      element[i].classList.toggle("hidden-item");
  if (element[i].classList.contains("hidden-item")) {
    button.value = show;
  } 
  else {
    button.value = hidden;
  }
  var rotate = document.querySelector('.read-more');
  if (button.value === hidden) {
    rotate.style.transform = 'rotate(' + 180 + 'deg)';
  } 
  else {
    rotate.style.transform = null;
  }
  }
});
