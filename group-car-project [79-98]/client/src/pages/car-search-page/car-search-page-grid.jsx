import React, { useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import InfiniteScroll from 'react-infinite-scroll-component';
import CarCard from '../../components/cards/car-card';
import CarCardSkeleton from '../../components/skeletons/car-card-skeleton';
import GridEndMessage from './car-search-page-grid-end-message';
import useCarSearchPageSearchParams from '../../hooks/useCarSearchPageSearchParams';

const CarGrid = ({ cars, count }) => {
  const [loading, setLoading] = useState(true);
  const [carsToLoad, setCarsToLoad] = useState(20);
  const [hasMore, setHasMore] = useState(true);
  const { getInitialSearchParams, setNewSearchParams } = useCarSearchPageSearchParams();

  const fetchMoreData = () => {
    setTimeout(() => {
      const carCount = carsToLoad + 20;
      if (carCount >= count) {
        setHasMore(false);
      }
      setNewSearchParams([
        { key: '_limit', value: carCount },
      ]);
      setCarsToLoad(carCount);
    }, 800);
  };

  useEffect(() => {
    const { limit } = getInitialSearchParams();
    setCarsToLoad(limit);
    setTimeout(() => {
      setLoading(false);
    }, 800);
  }, []);

  return loading ? (
    <CarCardSkeleton skeletonsAmount={9} />
  ) : (
    <InfiniteScroll
      dataLength={carsToLoad}
      next={fetchMoreData}
      hasMore={hasMore}
      loader={<CarCardSkeleton skeletonsAmount={6} />}
      endMessage={<GridEndMessage />}
    >
      <Grid
        container
        spacing={2}
        sx={{
          width: '100%',
          p: 2,
        }}
        id="car-cards-container-top"
      >
        {cars.map((
          {
            id, images, brand, model, year, price,
          },
        ) => (
          <Grid
            item
            key={id}
            xs={12}
            md={6}
            lg={4}
            xl={4}
            sx={{
              padding: '0',
            }}
          >
            <CarCard key={uuidv4()} image={images[0]} title={`${brand} - ${model}`} subtitle={`Metai: ${year} | Kaina: ${price} €`} id={id} />
          </Grid>
        ))}
      </Grid>
    </InfiniteScroll>
  );
};
export default CarGrid;
