import React from 'react';
import { styled } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectFade, Navigation, Pagination } from 'swiper';
import { v4 as uuidv4 } from 'uuid';

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import './styles/swiperArrow.css';

const ImageSwiper = ({ images, buttons }) => {
  const ImageContainer = styled('div')(({ theme }) => ({
    position: 'relative',
    overflow: 'hidden',
    [theme.breakpoints.up('xs')]: {
      height: '41vh',
    },
    [theme.breakpoints.up('md')]: {
      height: '55vh',
    },
    [theme.breakpoints.up('lg')]: {
      height: '86.3vh',
    },
    '>img': {
      position: 'absolute',
      objectFit: 'cover',
      objectPosition: 'center',
    },
  }));

  SwiperCore.use([Navigation, Pagination, EffectFade]);

  return (
    <Swiper
      slidesPerView={1}
      effect="fade"
      loop
      navigation={!buttons}
      pagination={buttons}
    >
      {images.map((image) => (
        <SwiperSlide key={uuidv4()} className="swiper-slide">
          <ImageContainer>
            {image}
          </ImageContainer>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
export default ImageSwiper;
