import React, { useState, useEffect } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import { useSearchParams } from 'react-router-dom';
import { SwiperSlide } from 'swiper/react';
import ApiService from '../../services/api-service';
import CarModel from '../../models/car-model';
import CarCard from '../../components/cards/car-card';
import { createUrlParamObj } from '../../helpers';
import CardSwiper from '../../components/swiper/card-swiper';

const CarCardSection = () => {
  const [cars, setCars] = useState([]);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    (async () => {
      const defaultParams = [
        { key: '_sort_desc', value: 'id' },
        { key: '_limit', value: 5 },
        { key: '_page', value: 1 },
      ];
      const params = createUrlParamObj(searchParams, defaultParams);
      const fetchedCars = await ApiService.getJoinedCars(params);
      const modeledCars = fetchedCars.data.map((carData) => new CarModel(carData));
      setCars(modeledCars);
    })();
  }, []);

  return (
    <Box
      sx={{
        width: '100%',
        p: 1,
      }}
      id="home-page-content"
    >
      <Typography
        component="h2"
        sx={{
          fontSize: {
            xs: '5vw',
            sm: '3.5vw',
            md: '3vw',
            lg: '2vw',
          },
          p: 2,
        }}
      >
        Naujausi automobiliai
      </Typography>
      <Box sx={{ display: { xs: 'flex', xl: 'none' }, justifyContent: 'center' }}>
        <CardSwiper style={{ padding: '10px' }}>
          {cars.map((
            {
              id, images, brand, model, year, price,
            },
          ) => (
            <SwiperSlide key={uuidv4()}>
              <CarCard image={images[0]} title={`${brand} - ${model}`} subtitle={`Metai: ${year} | Kaina: ${price} €`} id={id} />
            </SwiperSlide>
          ))}
        </CardSwiper>
      </Box>
      <Grid
        container
        spacing={2}
        sx={{
          display: { xs: 'none', xl: 'flex' },
          justifyContent: 'center',
          width: '100%',
        }}
      >
        {cars.map((
          {
            id, images, brand, model, year, price,
          },
        ) => (
          <Grid
            item
            key={id}
            xl={2.3}
          >
            <CarCard image={images[0]} title={`${brand} - ${model}`} subtitle={`Metai: ${year} | Kaina: ${price} €`} id={id} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CarCardSection;
