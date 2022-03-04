import React, { useState, useEffect } from 'react';
import { useFormik, FormikHelpers } from 'formik';
import {
  Paper,
  Typography,
  Box,
  TextField,
  MenuItem,
  Autocomplete,
  Checkbox,
  Button,
} from '@mui/material';
import { Category, City, ServiceData } from 'types';
import FileUploadField, { FileUploadFieldProps } from '../../../../components/file-upload-field';

type InitialValues = {
  title: string,
  category: string,
  price: number,
  cities: City[],
  description: string,
  images: FileUploadFieldProps['imgDataArr'],
};

type FormikSubmit = (
  values: InitialValues,
  formikHelpers: FormikHelpers<InitialValues>
) => void | Promise<void>;

const defaultCategoryOption: Category = {
  id: '-1',
  title: 'Select Option',
  createdAt: '',
  updatedAt: '',
};

const initialValues: InitialValues = {
  title: '',
  category: defaultCategoryOption.id,
  price: 0,
  cities: [],
  description: '',
  images: [],
};

export type UserServicePanelPageFormProps = {
  initialCategories: Category[],
  initialCities: City[],
  onSubmit: (data: ServiceData) => void,
};

const UserServicePanelPageForm: React.FC<UserServicePanelPageFormProps> = ({
  initialCategories,
  initialCities,
  onSubmit,
}) => {
  const [categoryOptions, setCategoryOptions] = useState<Category[]>([defaultCategoryOption]);

  const onFormikSubmit: FormikSubmit = ({
    cities, description, images, ...values
  }) => {
    const formattedData: ServiceData = {
      ...values,
      cities: cities.map((x) => x.id),
      images: images
        .map((x) => (x.file ? x.file : undefined))
        .filter((x) => x) as File[],
    };
    if (description) formattedData.description = description;
    onSubmit(formattedData);
  };

  const {
    values,
    handleChange,
    setFieldValue,
    handleSubmit,
  } = useFormik<InitialValues>({
    initialValues,
    onSubmit: onFormikSubmit,
  });

  const handleCitiesChange = (_: unknown, newCities: City[]) => {
    setFieldValue('cities', newCities, true);
  };

  useEffect(() => {
    setCategoryOptions([defaultCategoryOption, ...initialCategories]);
  }, [initialCategories]);

  const hanldeImagesChange = (images: FileUploadFieldProps['imgDataArr']) => {
    setFieldValue('images', images, true);
  };

  return (
    <Paper component="form" sx={{ p: 3 }} onSubmit={handleSubmit}>
      <Typography variant="h4" sx={{ mb: 2 }}>Nauja Paslauga</Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        <TextField
          label="Pavadinimas"
          name="title"
          value={values.title}
          onChange={handleChange}
        />
        <TextField
          label="Kategorija"
          select
          name="category"
          value={values.category}
          onChange={handleChange}
        >
          {categoryOptions.map(({ id, title }, i) => (
            <MenuItem key={id} value={id} disabled={i === 0}>
              {title}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          label="Kaina"
          name="price"
          type="number"
          value={values.price}
          onChange={handleChange}
        />
        <Autocomplete
          multiple
          disableCloseOnSelect
          options={initialCities}
          value={values.cities}
          onChange={handleCitiesChange}
          getOptionLabel={(option) => option.title}
          renderOption={(props, option, { selected }) => (
            <MenuItem {...props}>
              <Checkbox sx={{ mr: 1 }} checked={selected} />
              {option.title}
            </MenuItem>
          )}
          renderInput={(params) => (<TextField {...params} label="Miestai" />)}
        />
        <TextField
          label="Aprašymas"
          name="description"
          value={values.description}
          onChange={handleChange}
          inputProps={{
            sx: { height: 80 },
          }}
        />
        <FileUploadField
          imgDataArr={values.images}
          onChange={hanldeImagesChange}
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          sx={{ alignSelf: 'center' }}
        >
          Kurti naują paslaugą
        </Button>
      </Box>
    </Paper>

  );
};

export default UserServicePanelPageForm;
