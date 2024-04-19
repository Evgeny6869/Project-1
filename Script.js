const slider = document.querySelector('.swiper');
const button = document.querySelector('.btn-more');
let mySwiper; 
const rotate = document.querySelector('.read-more');
const btn_text = document.querySelector('.show-hide');
const show = 'Показать все';
const hidden = 'Скрыть';


const mobileSlider = function() {
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
  let element = document.querySelectorAll('.element');
    for (let i = 0; i < element.length; i++) {
      element[i].classList.toggle("hidden-item");
  if (element[i].classList.contains("hidden-item")) {
    btn_text.textContent = show;
    rotate.style.transform = null;
  } 
  else {
    btn_text.textContent = hidden;
    rotate.style.transform = 'rotate(' + 180 + 'deg)';
  }
  }
});
