import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
const CarruselCom = () => {
    return (
        <div className='px-10'>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    },
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation, Autoplay]}
                className="mySwiper"

            >
                <SwiperSlide>
                    <div className='min-h-[400px] rounded-lg p-3 bg-blue-200'>Carausel slide 1</div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='min-h-[400px] rounded-lg p-3 bg-blue-200'>Carausel slide 2</div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='min-h-[400px] rounded-lg p-3 bg-blue-200'>Carausel slide 3</div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='min-h-[400px] rounded-lg p-3 bg-blue-200'>Carausel slide 4</div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='min-h-[400px] rounded-lg p-3 bg-blue-200'>Carausel slide 5</div>
                </SwiperSlide>
            </Swiper>
        </div >
    );
}

export default CarruselCom