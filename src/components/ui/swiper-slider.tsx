import type { SwiperOptions } from "swiper/types";
import { Pagination } from "swiper/modules";

const baseSliderSettings: SwiperOptions = {
  slidesPerView: 1,
  spaceBetween: 18,
  grabCursor: true,
  watchOverflow: true,
};

export const sliderSettings: SwiperOptions = {
  ...baseSliderSettings,
  breakpoints: {
    480: {
      slidesPerView: 1.3,
    },
    640: {
      slidesPerView: 2.5,
    },
    768: {
      slidesPerView: 2.5,
    },
    1024: {
      slidesPerView: 2.5,
    },
    1200: {
      slidesPerView: 3.5,
    },
  },
};

export const sliderSettings1: SwiperOptions = {
  ...baseSliderSettings,
  modules: [Pagination],
  pagination: {
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 1.2,
    },
    1024: {
      slidesPerView: 1.2,
    },
  },
};
