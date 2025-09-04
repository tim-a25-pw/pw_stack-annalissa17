import Swiper from 'swiper/bundle';


export default class Carousel {
  constructor(element) {
    this.element = element;

    this.options = {
      direction: 'vertical',
      loop: true,
      autoHeight: false,
      slidesPerView: 1,
      spaceBetween: 20,
      pagination: {
        el: this.element.querySelector('.swiper-pagination'),
      },
    };
    this.init();
  }

  init() {
    console.log('Initialisation de ma composante Carousel');
    this.swiperInit();
  }

  swiperInit() {
    const swiper = new Swiper(this.element, this.options);
  }
}