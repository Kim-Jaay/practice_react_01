import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCreative } from "swiper";



// import required modules
import { Autoplay } from "swiper";

export default function App() {
    return (
        <><section className="slide">
            <h2>THE EAGLE HAS LANDED...</h2>
            <Swiper
                spaceBetween={20}
                centeredSlides={true}
                slidesPerView={4}
                loop={true}
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                }}
                speed={3000}

                modules={[Autoplay]}
                className="mySwiper top"
            >
                <SwiperSlide><img src={process.env.PUBLIC_URL + "/assets/img/slide_img01.png"} alt="" /></SwiperSlide>
                <SwiperSlide><img src={process.env.PUBLIC_URL + "/assets/img/slide_img02.png"} alt="" /></SwiperSlide>
                <SwiperSlide><img src={process.env.PUBLIC_URL + "/assets/img/slide_img03.png"} alt="" /></SwiperSlide>
                <SwiperSlide><img src={process.env.PUBLIC_URL + "/assets/img/slide_img04.png"} alt="" /></SwiperSlide>
                <SwiperSlide><img src={process.env.PUBLIC_URL + "/assets/img/slide_img05.png"} alt="" /></SwiperSlide>

            </Swiper>

            <Swiper
                spaceBetween={20}
                centeredSlides={false}
                slidesPerView={4}
                loop={true}

                autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                }}
                speed={3000}


                modules={[Autoplay]}
                className="mySwiper bot"
            >
                <SwiperSlide><img src={process.env.PUBLIC_URL + "/assets/img/slide_img06.png"} alt="" /></SwiperSlide>
                <SwiperSlide><img src={process.env.PUBLIC_URL + "/assets/img/slide_img07.png"} alt="" /></SwiperSlide>
                <SwiperSlide><img src={process.env.PUBLIC_URL + "/assets/img/slide_img08.png"} alt="" /></SwiperSlide>
                <SwiperSlide><img src={process.env.PUBLIC_URL + "/assets/img/slide_img09.png"} alt="" /></SwiperSlide>
                <SwiperSlide><img src={process.env.PUBLIC_URL + "/assets/img/slide_img10.png"} alt="" /></SwiperSlide>

            </Swiper>
        </section>




            <section className="slide02">
                <Swiper
                    grabCursor={true}
                    slidesPerView={1.25}
                    loop={true}
                    effect={"creative"}
                    creativeEffect={{
                        prev: {
                            shadow: true,
                            translate: ["-20%", 0, -1],
                        },
                        next: {
                            translate: ["100%", 0, 0],
                        },
                    }}
                    modules={[EffectCreative, Autoplay]}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    className="mySwiper3"
                >
                    <SwiperSlide><img src={process.env.PUBLIC_URL + "/assets/img/last_slide01.png"} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={process.env.PUBLIC_URL + "/assets/img/last_slide02.png"} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={process.env.PUBLIC_URL + "/assets/img/last_slide03.png"} alt="" /></SwiperSlide>
                </Swiper>
            </section>
        </>
    );
}