import React from 'react';
import {
  Grid,
  Typography,
  TextField,
  FormControl,
} from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import InputLabel from '@mui/material/InputLabel';
import AddButton from './add-car-page-button';
import AddCarFormContainer from './add-car-page-container';
import PictureUpload from './add-car-page-picture-upload';
import AddCarPageSelectItems from './add-car-page-select-items';

const AddCar = () => {
  const [selectedValue, setSelectedValue] = React.useState({
    brand: null,
    model: null,
    year: null,
    fuelType: null,
    transmission: null,
    engingeVolume: null,
    city: null,
  });

  const data = [
    {
      name: 'brand',
      title: 'Markė',
      options: [
        { id: '0', label: '-- Pasirinkti markę --' },
        { id: '1', label: 'Audi' },
        { id: '2', label: 'BMW' },
        { id: '3', label: 'Volvo' },
      ],
    },
    {
      name: 'model',
      title: 'Modelis',
      options: [
        { id: '0', label: '-- Pasirinkti modelį --' },
        { id: '1', label: '100' },
        { id: '2', label: 'X5' },
        { id: '3', label: 'XC90' },
      ],
    },
    {
      name: 'year',
      title: 'Metai',
      options: [
        { id: '0', label: '-- Pasirinkti metus --' },
        { id: '1', label: '2000' },
        { id: '2', label: '2001' },
        { id: '3', label: '2002' },
      ],
    },
    {
      name: 'fuelType',
      title: 'Kuro Tipas',
      options: [
        { id: '0', label: '-- Pasirinkti kuro tipą --' },
        { id: '1', label: 'Dyzelis' },
        { id: '2', label: 'Dujos' },
        { id: '3', label: 'Benzinas' },
      ],
    },
    {
      name: 'transmission',
      title: 'Pavarų dėžė',
      options: [
        { id: '0', label: '-- Pasirinkti pavarų dėžę --' },
        { id: '1', label: 'Automatinė' },
        { id: '2', label: 'Mechaninė' },
      ],
    },
    {
      name: 'engingeVolume',
      title: 'Variklio tūris',
      options: [
        { id: '0', label: '-- Pasirinkti pavarų dėžę --' },
        { id: '1', label: '1.6' },
        { id: '2', label: '2.0' },
        { id: '3', label: '2.2' },
      ],
    },
    {
      name: 'city',
      title: 'Miestas',
      options: [
        { id: '0', label: '-- Pasirinkti miestą --' },
        { id: '1', label: 'Vilnius' },
        { id: '2', label: 'Kaunas' },
        { id: '3', label: 'Šiauliai' },
        { id: '4', label: 'Klaipėda' },
      ],
    },
  ];

  const handleChange = (event, option, name) => {
    setSelectedValue({
      ...selectedValue,
      [name]: option,
    });
  };
  return (
    <AddCarFormContainer>
      <Typography
        variant="h5"
        component="h2"
        sx={{ mb: 3 }}
      >
        Pridėti automobilį
      </Typography>
      <Typography
        variant="h6"
        component="h3"
        sx={{ mb: 1 }}
      >
        Pagrindiniai skelbimo duomenys
      </Typography>
      <Grid container spacing={1}>
        {data
          .filter((_, i) => i < 6)
          .map(({ name, title, options }) => (
            <AddCarPageSelectItems
              name={name}
              key={uuidv4()}
              value={selectedValue[name]}
              title={title}
              options={options}
              onChange={handleChange}
            />
          ))}
        <Grid item xs={12} md={4}>
          <FormControl sx={{ m: 1, width: 200 }}>
            <InputLabel>Kaina</InputLabel>
            <TextField id="outlined-size-normal" />
          </FormControl>
        </Grid>
        <Grid item xs={12} md={4}>
          <PictureUpload />
        </Grid>
      </Grid>
      <Typography variant="h6" component="h3" sx={{ mb: 1 }}>Kontaktai</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <FormControl sx={{ m: 1, minWidth: 200 }}>
            <InputLabel>Telefonas</InputLabel>
            <TextField id="outlined-size-normal" />
          </FormControl>
        </Grid>
        <Grid item xs={12} md={4}>
          <FormControl sx={{ m: 1, minWidth: 200 }}>
            <InputLabel>El.paštas</InputLabel>
            <TextField id="outlined-size-normal" />
          </FormControl>
        </Grid>
        <Grid item xs={12} md={4}>
          <FormControl sx={{ m: 1, minWidth: 200 }}>
            {data
              .filter((_, i) => i === 6)
              .map(({ name, title, options }) => (
                <AddCarPageSelectItems
                  name={name}
                  key={uuidv4()}
                  value={selectedValue[name]}
                  title={title}
                  options={options}
                  onChange={handleChange}
                />
              ))}
          </FormControl>
        </Grid>
      </Grid>
      <AddButton />
    </AddCarFormContainer>
  );
};
export default AddCar;
