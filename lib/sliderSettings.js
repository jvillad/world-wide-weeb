export const sliderSettings = {
   infinite: false,
   speed: 500,
   infinite: true,
   slidesToShow: 7,
   initialSlide: 6,
   slidesToScroll: 6,
   responsive: [
      {
         breakpoint: 1200,
         settings: {
            slidesToShow: 5,
            slidesToScroll: 5,
            infinite: true,
         },
      },
      {
         breakpoint: 1024,
         settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
         },
      },
      {
         breakpoint: 600,
         settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
         },
      },
      {
         breakpoint: 480,
         settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
         },
      },
   ],
};
