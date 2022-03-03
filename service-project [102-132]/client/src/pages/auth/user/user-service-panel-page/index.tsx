import React, { useEffect } from 'react';
import {
  Alert,
  Box,
  Typography,
} from '@mui/material';
import {
  categoriesSelector,
  categoriesErrorSelector,
  fetchCategories,
  deleteError as deleteCategoriesError,
} from 'store/categories';
import {
  citiesSelector,
  citiesErrorSelector,
  fetchCities,
  deleteError as deleteCitiesError,
} from 'store/cities';
import { useDispatch, useSelector } from 'store/hooks';
import UserServicePanelPageForm from './user-service-panel-page-form';

const UserServicePanelPage = () => {
  const categories = useSelector(categoriesSelector);
  const cities = useSelector(citiesSelector);
  const categoriesError = useSelector(categoriesErrorSelector);
  const citiesError = useSelector(citiesErrorSelector);
  const dispatch = useDispatch();

  const deleteError = () => {
    if (categoriesError) dispatch(deleteCategoriesError());
    if (citiesError) dispatch(deleteCitiesError());
  };

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchCities());
  }, []);

  return (
    <div>
      {(categoriesError || citiesError) && (
        <Alert color="error" onClose={deleteError}>
          {categoriesError && <Typography>{categoriesError}</Typography>}
          {citiesError && <Typography>{citiesError}</Typography>}
        </Alert>
      )}

      <UserServicePanelPageForm
        categoryOptions={categories}
        cityOptions={cities}
      />
    </div>
  );
};

export default UserServicePanelPage;
