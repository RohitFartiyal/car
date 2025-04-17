"use client"

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ImgSlider = () => {
    return (

        <section className="relative container mx-auto py-5 text-center">
            <div className="w-full h-screen flex items-center justify-center">
                <div className="w-full max-w-6xl">

                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        navigation
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 3000 }}
                        loop
                        className="rounded-2xl shadow-lg overflow-hidden"
                    >
                        <SwiperSlide>
                            <img src={'/slider/s1.png'} alt={`slider image`} className="w-full h-[600px] object-cover" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={'/slider/s2.png'} alt={`slider image`} className="w-full h-[600px] object-cover" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={'/slider/s3.png'} alt={`slider image`} className="w-full h-[600px] object-cover" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={'/slider/s4.png'} alt={`slider image`} className="w-full h-[600px] object-cover" />
                        </SwiperSlide>
                        


                    </Swiper>
                </div>
            </div>

        </section>
    )
}
export default ImgSlider