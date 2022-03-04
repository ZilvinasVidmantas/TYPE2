import React, { useEffect } from 'react';
import {
  Alert,
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
import {
  createService,
} from 'store/user-services';
import { useDispatch, useSelector } from 'store/hooks';
import { ServiceData } from 'types';
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

  const handleCreateService = (formData: ServiceData) => {
    dispatch(createService(formData));
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

      {categories.length > 0 && cities.length > 0 && (
        <UserServicePanelPageForm
          initialCategories={categories}
          initialCities={cities}
          onSubmit={handleCreateService}
        />
      )}
    </div>
  );
};

export default UserServicePanelPage;
