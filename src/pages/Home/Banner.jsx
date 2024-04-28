// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Banner = () => {
    return (
      <div className='container mx-auto'>
        <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide><img className='w-full h-96' src="https://i.postimg.cc/gw9rsMMC/Landscape-Painting-Mountain-view-canvas-Forest-based-Landscape-1.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-full h-96' src="https://i.postimg.cc/v1dHf4TM/Watercolour-Painting-Floral-Watercolor-Art-Animal-Watercolor-Portrait.webp" alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-full h-96' src="https://i.postimg.cc/1VzzXbtq/Oil-Painting-Realistic-Oil-Portrait-Abstract-Oil-Painting.webp" alt="" /></SwiperSlide>
        </Swiper>
      </div>
    );
};

export default Banner;