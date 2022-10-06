import React from 'react'
import '../assets/css/Hero.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";
const data = [
  {
    imageUrl: 'https://eskimo111.github.io/shopping-cart/static/media/banner-1.ff6c596cefb10eb35d1d.jpg',
    title: 'First Slide Babel',
    description: 'lorem ipsum dolor sit amet',
  },
  {
    imageUrl: 'https://eskimo111.github.io/shopping-cart/static/media/banner-2.6dbb8f7dc43bb80a0f1c.jpg',
    title: 'Second Slide Babel',
    description: 'lorem ipsum dolor sit amet',
  },
  {
    imageUrl: 'https://eskimo111.github.io/shopping-cart/static/media/banner-3.1e4defa8e802fa3f664a.jpg',
    title: 'Third Slide Babel',
    description: 'lorem ipsum dolor sit amet',
  },
]
function Hero() {
  return (
    <section id="hero" className='mt-14 h-full w-full'>
      <Swiper
        slidesPerView={1}
        slidesPerGroup={1}
        navigation={true}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation, Autoplay]}
        autoplay={{
          delay: 2000,
          disableOnInteraction: true,
        }}
        // loopFillGroupWithBlank={true}
        className="mySwiper"
      >
          {
            data.map( (item, index) => {
              return (
                <SwiperSlide>
                  <div key={index} className="flex justify-center items-center flex-col text-white relative">
                    <img className="w-full h-full" src={item.imageUrl} alt="" />
                    <div className="absolute m-auto left-0 right-0 bottom-8 flex justify-center items-center flex-col font-semibold text-lg">
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  </div>
                </SwiperSlide>
              )
            })
          }
      </Swiper>
    </section>
  )
}

export default Hero