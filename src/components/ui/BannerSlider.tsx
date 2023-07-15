import { useEffect, useRef } from "react";
import Swiper from "swiper";

const BannerSlider = () => {
  const swiperContainerRef = useRef<HTMLDivElement | null>(null);
  const swiperInstanceRef = useRef<Swiper | null>(null);

  useEffect(() => {
    swiperInstanceRef.current = new Swiper(swiperContainerRef.current!, {
      slidesPerView: 1,
      spaceBetween: 10,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      autoplay: {
        delay: 500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

    return () => {
      if (swiperInstanceRef.current) {
        swiperInstanceRef.current.destroy();
      }
    };
  }, []);

  return (
    <div className="relative">
      <div
        className="swiper-container overflow-hidden"
        ref={swiperContainerRef}
      >
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div
              className="h-screen w-full bg-cover bg-center"
              style={{
                backgroundImage: "url('https://via.placeholder.com/1200x800')",
              }}
            ></div>
          </div>
          <div className="swiper-slide">
            <div
              className="h-screen w-full bg-cover bg-center"
              style={{
                backgroundImage: "url('https://via.placeholder.com/1200x800')",
              }}
            ></div>
          </div>
          <div className="swiper-slide">
            <div
              className="h-screen w-full bg-cover bg-center"
              style={{
                backgroundImage: "url('https://via.placeholder.com/1200x800')",
              }}
            ></div>
          </div>
          {/* Add more slides as needed */}
        </div>
        <div className="swiper-pagination swiper-pagination-bullets"></div>
      </div>
    </div>
  );
};

export default BannerSlider;
