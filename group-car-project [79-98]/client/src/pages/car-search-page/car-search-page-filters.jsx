import React, { useState } from 'react';
import {
  Typography,
  Paper,
  Skeleton,
} from '@mui/material';
import RangeFilter from '../../components/controls/range-filter';
import AutocompleteCheckboxFilter from '../../components/controls/autocomplete-checkbox-filter';
import useFiltersAndSearchParams from '../../hooks/useFiltersAndSearchParams';

const CarFilters = () => {
  const [showModels, setShowModels] = useState(true);
  const { loading, filters, changeSearchParams } = useFiltersAndSearchParams();

  const handleFilterChange = (selectedOptions, filterName) => {
    if (filterName === 'brand' && selectedOptions.length > 0) {
      setShowModels(false);
    } else if (filterName === 'brand' && selectedOptions.length <= 0) {
      setShowModels(true);
    }
    changeSearchParams(selectedOptions, filterName);
  };

  return loading
    ? <Skeleton variant="rectangular" sx={{ minHeight: '500px' }} /> // Dar nezinia ar reiks
    : (
      <Paper
        elevation={4}
        sx={{
          p: 2, display: 'flex', flexDirection: 'column', gap: 1,
        }}
      >
        <Typography component="h2" variant="h4">
          Filtrai
        </Typography>
        {/* BRAND ------------------------------------------------------------------ */}
        <AutocompleteCheckboxFilter
          filterOptions={filters.brands}
          filterName="brand"
          label="Markė"
          onChange={(selectedOptions, filterName) => handleFilterChange(
            selectedOptions,
            filterName,
          )}
        />
        {/* BRAND ------------------------------------------------------------------ */}

        {/* MODEL ------------------------------------------------------------------ */}
        <AutocompleteCheckboxFilter
          filterOptions={filters.models}
          filterName="model"
          label="Modelis"
          disabled={showModels}
          onChange={(selectedOptions, filterName) => handleFilterChange(
            selectedOptions,
            filterName,
          )}
        />
        {/* MODEL ------------------------------------------------------------------ */}

        {/* TRANSMISSION ------------------------------------------------------------------ */}
        <AutocompleteCheckboxFilter
          filterOptions={filters.transmissions}
          filterName="transmission"
          label="Pavarų dėžė"
          onChange={(selectedOptions, filterName) => handleFilterChange(
            selectedOptions,
            filterName,
          )}
        />
        {/* TRANSMISSION ------------------------------------------------------------------ */}

        {/* FUELTYPE ------------------------------------------------------------------ */}
        <AutocompleteCheckboxFilter
          filterOptions={filters.fuelTypes}
          filterName="fuelType"
          label="Kuro tipas"
          onChange={(selectedOptions, filterName) => handleFilterChange(
            selectedOptions,
            filterName,
          )}
        />
        {/* FUELTYPE ------------------------------------------------------------------ */}
        {/* PRICE ------------------------------------------------------------------ */}
        <RangeFilter
          title="Kaina"
          filterName="Price"
          onChange={() => null}
          selectedMin={filters.price.min}
          selectedMax={filters.price.max}
          min={filters.price.min}
          max={filters.price.max}
        />
        {/* PRICE ------------------------------------------------------------------ */}

        {/* YEAR ------------------------------------------------------------------ */}
        <RangeFilter
          title="Metai"
          filterName="Year"
          onChange={() => null}
          selectedMin={filters.year.min}
          selectedMax={filters.year.max}
          min={filters.year.min}
          max={filters.year.max}
        />
        {/* YEAR ------------------------------------------------------------------ */}
      </Paper>
    );
};

export default CarFilters;
