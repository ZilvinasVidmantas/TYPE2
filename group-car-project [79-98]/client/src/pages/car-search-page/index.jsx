/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import {
  Container, Typography, Grid, Fab, useTheme,
} from '@mui/material';
import { useSearchParams } from 'react-router-dom';
import SettingsInputCompositeIcon from '@mui/icons-material/SettingsInputComposite';
import { styled } from '@mui/material/styles';
import CarTable from './car-search-page-table';
import CarFilters from './car-search-page-filters';
import ApiService from '../../services/api-service';
import CarModel from '../../models/car-model';
import { createUrlParamObj } from '../../helpers';
import CarGrid from './car-search-page-grid';
import LoadingImg from './assets/loading.gif';
import CarSearchPageDrawer from './car-search-page-drawer';
// import useFiltersAndSearchParams from '../../hooks/useFiltersAndSearchParams';
import CarSearchPageMenu from './car-search-page-menu';
import useCarSearchPageSearchParams from '../../hooks/useCarSearchPageSearchParams';

const StyledGridItem = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down('lg')]: {
    display: 'none',
  },
  [theme.breakpoints.up('lg')]: {
    display: 'block',
  },
}));

const StyledFab = styled(Fab)(({ theme }) => ({
  right: 10,
  bottom: 10,
  zIndex: 10,
  position: 'fixed',
  [theme.breakpoints.down('md')]: {
    display: 'block',
  },
  [theme.breakpoints.up('md')]: {
    display: 'none',
  },
}));

const CarSearch = () => {
  const [cars, setCars] = useState([]);
  const [allCarsCount, setAllCarsCount] = useState(-1);
  const [carSearchViewType, setCarSearchViewType] = useState('grid'); // Atvaizdavimo tipas
  const [searchParams] = useSearchParams();
  const theme = useTheme();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const params = createUrlParamObj(searchParams);
      const fetchedCars = await ApiService.getJoinedCars(params);
      const modeledCars = fetchedCars.data.map((carData) => new CarModel(carData));
      const allCarsLength = fetchedCars.dataLength;
      setCars(modeledCars);
      setAllCarsCount(allCarsLength);
      setLoading(false);
    })();
  }, [searchParams]);

  const createToggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  // Keiciamas atvaizdavimo tipas
  const handleViewChange = (_, nextView) => {
    setCarSearchViewType(nextView);
  };

  const dataView = carSearchViewType === 'table' ? (
    // Jei atvaizdavimo tipas lentele
    <CarTable cars={cars} count={allCarsCount} />
  ) : (
    // Jei atvaizdavimo tipas ne lentele
    <CarGrid cars={cars} count={allCarsCount} />
  );

  return loading ? (
    <Container sx={{
      height: `calc(100vh - (${theme.mixins.footer.height}px + ${theme.mixins.toolbar.height}px))`, display: 'flex', justifyContent: 'center', alignItems: 'center',
    }}
    >
      <img src={LoadingImg} alt="..." style={{ objectFit: 'cover' }} />
    </Container>
  ) : (
    <Container
      maxWidth="xl"
      sx={{
        my: 3,
        minHeight: `calc(100vh - (${theme.mixins.footer.height}px + ${theme.mixins.toolbar.height}px))`,
      }}
    >
      {cars.length > 0 ? (
        <Typography component="h1" variant="h3" gutterBottom align="center">
          Automobiliai
        </Typography>
      ) : null}
      {/* Atvaizdavimo pasirinkimai */}
      <CarSearchPageMenu
        view={carSearchViewType}
        changeView={handleViewChange}
        openDrawer={createToggleDrawer(true)}
      />
      <Grid container spacing={2}>
        <StyledGridItem item md={12} lg={2}>
          <CarFilters className="filters" />
        </StyledGridItem>
        <Grid item xs={12} sm={12} md={12} lg={10}>
          {/* Jei yra masinu */}
          {cars.length > 0 ? dataView : null}
        </Grid>
      </Grid>
      <StyledFab
        color="primary"
        aria-label="add"
        size="small"
        onClick={createToggleDrawer(true)}
      >
        <SettingsInputCompositeIcon fontSize="small" />
      </StyledFab>
      <CarSearchPageDrawer
        drawerOpen={drawerOpen}
        closeDrawer={createToggleDrawer(false)}
        cars={cars}
      />
    </Container>
  );
};

export default CarSearch;
