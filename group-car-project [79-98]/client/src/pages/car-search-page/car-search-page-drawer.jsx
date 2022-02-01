import React, { useState, useEffect } from 'react';
import {
  Box,
  IconButton,
  Typography,
  Drawer,
} from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { useSearchParams } from 'react-router-dom';
import { createUrlParamObj } from '../../helpers';
import RangeFilter from '../../components/controls/range-filter';
import APIService from '../../services/api-service';
import AutocompleteCheckboxFilter from '../../components/controls/autocomplete-checkbox-filter';

const CarSearchPageDrawer = ({
  drawerOpen, closeDrawer, cars,
}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filters, setFilters] = useState({
    brands: [],
    models: [],
    transmissions: [],
    fuelTypes: [],
    year: {
      min: 0,
      max: 1,
    },
    price: {
      min: 0,
      max: 1,
    },
  });
  const [showModels, setShowModels] = useState(true);

  const changeUrlFilters = (urlFilters) => {
    const newParams = createUrlParamObj(searchParams, urlFilters);
    setSearchParams(newParams);
  };

  const handleFilterChange = (selectedBrandOption, filter) => {
    searchParams.delete(filter);
    if (filter === 'brand' && selectedBrandOption.length > 0) {
      setShowModels(false);
    } else if (filter === 'brand' && selectedBrandOption.length <= 0) {
      setShowModels(true);
      searchParams.delete('model');
    }
    if (selectedBrandOption) {
      const urlFilter = selectedBrandOption.map(({ id }) => ({
        key: filter,
        value: id,
      }));
      changeUrlFilters(urlFilter);
    }
  };

  // Grazina min ir max reiksmes pagal nurodyta rakta is paduoto objektu masyvo
  const getMinMax = (data, from) => {
    const values = data.map((entity) => entity[from]);
    const uniqValues = values.sort((a, b) => a - b);
    const min = uniqValues.shift();
    const max = uniqValues.pop();
    return { min, max };
  };

  // Grazina min ir max filtru reiksmes
  const formatRangeFilters = (carsData) => ({ year: getMinMax(carsData, 'year'), price: getMinMax(carsData, 'price') });

  // Sukuria objekta su visais suformuotais filtrais
  const formatFilters = (fetchedFilters) => {
    const formatedFIlters = Object.entries(fetchedFilters).reduce(
      (result, [name, values]) => ({
        ...result,
        [name]: Object.values(values).map((item) => ({
          ...item,
          label: item.title,
        })),
      }),
      {
        brands: [],
        models: [],
        transmissions: [],
        fuelTypes: [],
      },
    );
    return { ...formatedFIlters, ...formatRangeFilters(cars) };
  };

  useEffect(() => {
    //  Immediatly invoked function expression
    (async () => {
      const fetchedFilters = {
        brands: await APIService.getBrands(),
        models: await APIService.getModels(),
        transmissions: await APIService.getTransmissions(),
        fuelTypes: await APIService.getFuelTypes(),
      };
      const formatedFilters = formatFilters(fetchedFilters);
      setFilters(formatedFilters);
    })();
  }, []);

  return (
    <Drawer
      open={drawerOpen}
      onClose={closeDrawer}
    >
      <Box
        sx={{
          width: 270, display: 'flex', flexDirection: 'column', gap: '10px',
        }}
      >
        <Typography
          component="h2"
          variant="h5"
          sx={{
            display: 'flex', justifyContent: 'space-between', ml: '15px',
          }}
        >
          Filtrai
          <IconButton onClick={closeDrawer}>
            <ChevronLeftIcon fontSize="large" />
          </IconButton>
        </Typography>
        <AutocompleteCheckboxFilter
          filterOptions={filters.brands}
          filterName="brand"
          label="Markė"
          sx={{
            width: 240, ml: '15px',
          }}
          onChange={(selectedFilterOptions, filterName) => handleFilterChange(
            selectedFilterOptions,
            filterName,
          )}
        />
        <AutocompleteCheckboxFilter
          filterOptions={filters.models}
          filterName="model"
          label="Modelis"
          disabled={showModels}
          sx={{
            width: 240, ml: '15px',
          }}
          onChange={(selectedFilterOptions, filterName) => handleFilterChange(
            selectedFilterOptions,
            filterName,
          )}
        />
        <AutocompleteCheckboxFilter
          filterOptions={filters.transmissions}
          filterName="transmission"
          label="Pavarų dėžė"
          sx={{
            width: 240, ml: '15px',
          }}
          onChange={(selectedFilterOptions, filterName) => handleFilterChange(
            selectedFilterOptions,
            filterName,
          )}
        />
        <AutocompleteCheckboxFilter
          filterOptions={filters.fuelTypes}
          filterName="fuelTypes"
          label="Kuro tipas"
          sx={{
            width: 240, ml: '15px',
          }}
          onChange={(selectedFilterOptions, filterName) => handleFilterChange(
            selectedFilterOptions,
            filterName,
          )}
        />
        <RangeFilter
          title="Kaina"
          key="asd"
          filterName="Price"
          sx={{
            width: '70%', ml: '40px',
          }}
          onChange={() => null}
          selectedMin={filters.price.min}
          selectedMax={filters.price.max}
          min={filters.price.min}
          max={filters.price.max}
        />
        <RangeFilter
          title="Metai"
          key="asds"
          filterName="Year"
          sx={{
            width: '70%', ml: '40px',
          }}
          onChange={() => null}
          selectedMin={filters.year.min}
          selectedMax={filters.year.max}
          min={filters.year.min}
          max={filters.year.max}
        />
      </Box>
    </Drawer>
  );
};

export default CarSearchPageDrawer;
