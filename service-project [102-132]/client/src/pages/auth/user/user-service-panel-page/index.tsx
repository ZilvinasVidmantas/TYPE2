import React, { useEffect } from 'react';
import {
  Alert,
  Typography,
  Box,
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
  userServicesSelector,
  createService,
  fetchUserServices,
} from 'store/user-services';
import { useDispatch, useSelector } from 'store/hooks';
import { ServiceData } from 'types';
import UserServicePanelPageForm from './user-service-panel-page-form';
import UserServicePanelPageTable from './user-service-panel-page-table';

const UserServicePanelPage = () => {
  const categories = useSelector(categoriesSelector);
  const cities = useSelector(citiesSelector);
  const categoriesError = useSelector(categoriesErrorSelector);
  const citiesError = useSelector(citiesErrorSelector);
  const services = useSelector(userServicesSelector);
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
    dispatch(fetchUserServices());
  }, []);

  const updateService = () => {
    console.error('Not implemented updateService');
  };

  const deleteService = (id: string) => {
    console.log('deleteService:', id);
    console.error('Not implemented deleteService');
  };

  const editService = (id: string) => {
    console.log('editService:', id);
    console.error('Not implemented editService');
  };

  return (
    <div>
      {(categoriesError || citiesError) && (
        <Alert color="error" onClose={deleteError}>
          {categoriesError && <Typography>{categoriesError}</Typography>}
          {citiesError && <Typography>{citiesError}</Typography>}
        </Alert>
      )}

      {categories.length > 0 && cities.length > 0 && (
        <Box sx={{ display: 'flex', gap: 3 }}>
          <Box sx={{ flexBasis: 600 }}>
            <UserServicePanelPageForm
              initialCategories={categories}
              initialCities={cities}
              onSubmit={handleCreateService}
            />
          </Box>
          <UserServicePanelPageTable
            data={services.map((x) => ({ ...x, edited: false }))}
            onDelete={deleteService}
            onEdit={editService}
          />
        </Box>
      )}
    </div>
  );
};

export default UserServicePanelPage;
