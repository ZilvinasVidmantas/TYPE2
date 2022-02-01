import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import ApiService from '../services/api-service';
import { createUrlParamObj } from '../helpers';

const useFiltersAndSearchParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState([]);

  // Sukuria objekta su visais suformuotais filtrais
  const formatFilters = ([
    brands, models, transmissions, fuelTypes, year, price,
  ]) => ({
    brands,
    models,
    transmissions,
    fuelTypes,
    year,
    price,
  });

  useEffect(() => {
    (async () => {
      setLoading(true);
      const fetchedFilters = await Promise.all([
        ApiService.getBrands(),
        ApiService.getModels(),
        ApiService.getTransmissions(),
        ApiService.getFuelTypes(),
        ApiService.getYears(),
        ApiService.getPrice(),
      ]);
      try {
        const formatedFilters = formatFilters(fetchedFilters);
        setFilters(formatedFilters);
      } catch (err) {
        throw new Error('Error', err.message);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const changeSearchParams = (selectedOptions, filterName, limit, page) => {
    let params = [];
    const keys = ['filterName', '_limit', '_page'];
    keys.forEach((key) => {
      if (key === 'filterName') searchParams.delete(filterName);
      searchParams.delete(key);
    });
    if (selectedOptions) {
      params = selectedOptions.map(({ id }) => ({
        key: filterName,
        value: id,
      }));
    }
    params.push(
      { key: '_limit', value: limit ?? 20 },
      { key: '_page', value: page ?? 1 },
    );
    const newParams = createUrlParamObj(searchParams, params);
    setSearchParams(newParams);
  };

  return {
    loading,
    filters,
    changeSearchParams,
  };
};

export default useFiltersAndSearchParams;
