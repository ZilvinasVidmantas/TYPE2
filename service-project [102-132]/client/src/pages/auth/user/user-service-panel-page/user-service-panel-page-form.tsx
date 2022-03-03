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
import Img from 'components/img';

type InitialValues = {
  title: string,
  category: string,
  price: number,
  cities: City[],
  description: string,
  images: string[],
};

type FormikSubmit = (
  values: InitialValues,
  formikHelpers: FormikHelpers<InitialValues>
) => void | Promise<void>;

const convertFileToUrl = (file: File) => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => resolve(reader.result);
  reader.onerror = (error) => reject(error);
});

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
};

const UserServicePanelPageForm: React.FC<UserServicePanelPageFormProps> = ({
  initialCategories,
  initialCities,
}) => {
  const [categoryOptions, setCategoryOptions] = useState<Category[]>([defaultCategoryOption]);

  const onSubmit: FormikSubmit = ({ cities, description, ...values }) => {
    // const formattedData: ServiceData = {
    //   ...values,
    //   cities: cities.map((x) => x.id),
    // };
    // if (description) formattedData.description = description;
    // console.log(formattedData);
  };

  const {
    values,
    handleChange,
    setFieldValue,
    handleSubmit,
  } = useFormik<InitialValues>({
    initialValues,
    onSubmit,
  });

  const handleCitiesChange = (_: unknown, newCities: City[]) => {
    setFieldValue('cities', newCities, true);
  };

  const handleImagesChange: React.FormEventHandler<HTMLInputElement> = (e) => {
    const input = e.target as HTMLInputElement;
    const { files } = input;
    if (files !== null) {
      const fileArr = Array.from(files);
      (async () => {
        const imgUrls = await Promise.all(fileArr.map(convertFileToUrl));
        setFieldValue('images', imgUrls, true);
      })();
    }
  };

  useEffect(() => {
    setCategoryOptions([defaultCategoryOption, ...initialCities]);
  }, [initialCategories]);

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
              <Checkbox
                sx={{ mr: 1 }}
                checked={selected}
              />
              {option.title}
            </MenuItem>
          )}
          renderInput={(params) => (
            <TextField {...params} label="Miestai" placeholder="Pasirinkite miestus" />
          )}
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
        <Box sx={{ width: '100%' }}>
          <Typography>Pasirinkite nuotraukas</Typography>
          <TextField
            type="file"
            fullWidth
            inputProps={{
              multiple: true,
              onChange: handleImagesChange,
            }}
          />
          <Box sx={{
            display: 'flex', flexWrap: 'wrap', gap: 2, mt: 2,
          }}
          >
            {values.images.map((src, i) => (
              <Img
                key={src}
                src={src}
                alt={String(i)}
                height={150}
                width={150}
              />
            ))}
          </Box>
        </Box>
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
