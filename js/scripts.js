;(function initMenu() {
  const menu = document.querySelector(".menu");
  const menuBTN = document.querySelector(".menu-trigger");

  function openMenu() {
    this.classList.toggle("open");
    menu.classList.toggle("open");
  }

  menuBTN.addEventListener("click", openMenu);
}());

;(function initSlider() {
  const domEl = document.querySelector(".blaze-slider.slider");
  const sliderOptions = {
    all: {
      enableAutoplay: false,
      autoplayInterval: 5000,
      transitionDuration: 300,
      slidesToShow: 2,
      enablePagination: false,
    },
    '(max-width: 1000px)': {
      slidesToShow: 1,
    },
  }

  new BlazeSlider(domEl, sliderOptions)
}());

;(function initFAQ() {
  const faqList = document.querySelector('.faq__list');
  if (!faqList) {
    return;
  }

  const CLASS = {
    faqItem: 'faq__item',
    faqLabel: 'faq__label',
    faqBody: 'faq__body',
    faqOpen: 'open'
  }

  faqList.addEventListener('click', function handleFaqToggling(e) {
    if (e.target && e.target.closest(`.${CLASS.faqLabel}`)) {
      e.target.closest(`.${CLASS.faqItem}`).classList.toggle(CLASS.faqOpen);
    }
  });

}())
