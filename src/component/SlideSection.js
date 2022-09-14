import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { EffectCreative } from "swiper";
import { Autoplay } from "swiper";



export default function App() {
    return (
        <>
            <section className="slide">
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

                    <SwiperSlide className="storyslide">
                        <img src={process.env.PUBLIC_URL + "/assets/img/last_slide01.png"} alt="" />
                        <div className="inner">
                            <p>Armstrong and Aldrin blast off and<br />
                                dock with Collins in Columbia. Collins later says that</p>
                            <h2>Here men from the planet Earth<br />
                                first set foot upon the moon.<br />
                                July 1969 A.D. We came in peace<br />
                                for all mankind.</h2>
                            <a href="">Read More</a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="storyslide blue">
                        <img src={process.env.PUBLIC_URL + "/assets/img/last_slide02.png"} alt="" />
                        <div className="inner">
                            <p>Apollo 11 Crew Trains<br />
                                for Excursion on the Sea of Tranquility</p>
                            <h2>Landing on the Moon's Mare<br />
                                Tranquillitatis, or Sea of Tranquility, <br />
                                on July 20, 1969, Armstrong <br />
                                and Aldrin became the first people<br />
                                to walk on another terrestrial body. </h2>
                            <a href="">Read More</a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="storyslide">
                        <img src={process.env.PUBLIC_URL + "/assets/img/last_slide03.png"} alt="" />
                        <div className="inner">
                            <p>Armstrong and Aldrin blast off and<br />
                                dock with Collins in Columbia. Collins later says that</p>
                            <h2>Here men from the planet Earth<br />
                                first set foot upon the moon.<br />
                                July 1969 A.D. We came in peace<br />
                                for all mankind.</h2>
                            <a href="">Read More</a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="storyslide blue">
                        <img src={process.env.PUBLIC_URL + "/assets/img/last_slide04.png"} alt="" />
                        <div className="inner">
                            <p>Apollo 11 Crew Trains<br />
                                for Excursion on the Sea of Tranquility</p>
                            <h2>Landing on the Moon's Mare<br />
                                Tranquillitatis, or Sea of Tranquility, <br />
                                on July 20, 1969, Armstrong <br />
                                and Aldrin became the first people<br />
                                to walk on another terrestrial body. </h2>
                            <a href="">Read More</a>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </section>
        </>
    );
}