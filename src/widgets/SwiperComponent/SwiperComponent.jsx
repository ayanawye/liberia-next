'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';

import Image1 from '../../shared/images/image1.jpeg';
import Image2 from '../../shared/images/image2.jpeg';
import Image3 from '../../shared/images/image3.jpeg';
import Image4 from '../../shared/images/image4.jpeg';
import Image5 from '../../shared/images/image5.jpeg';
import Image6 from '../../shared/images/image6.jpeg';
import Image7 from '../../shared/images/image7.jpeg';
import Image from "next/image";


const SwiperComponent = () => {
    return (
        <>
            <Swiper
                spaceBetween={30}
                autoplay={{
                    disableOnInteraction: false,
                }}
                speed={2000}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                modules={[EffectFade, Navigation, Pagination, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <Image src={Image1} alt="logo" />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={Image2} alt="logo"/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={Image3} alt="logo"/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={Image4} alt="logo"/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={Image5} alt="logo"/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={Image6} alt="logo"/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={Image7} alt="logo"/>
                </SwiperSlide>
            </Swiper>
        </>
    );
}

export default SwiperComponent;