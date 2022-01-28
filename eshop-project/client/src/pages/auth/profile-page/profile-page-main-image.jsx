import React from 'react';
import {
  styled,
  Button,
  Box,
} from '@mui/material';

const StyledMainImage = styled('img')({
  borderRadius: '50%',
  height: '250px',
  width: '250px',
  objectFit: 'cover',
});

/*
  Paspaudus mygtuką "Keisti", šio komponento <Box> fonas pasidaro raudonas
  Paspaudus dar kartą raudonas fonas dingsta:
    paspaudimas 1 - raudona
    paspaudimas 2 - fono nėra
    paspaudimas 3 - raudona
    paspaudimas 4 - fono nėra
    paspaudimas 5 - raudona

  Tai padarykite sukurdami būsenos kintamajį
    * paspaudus mygtuką, keičiamas kintamasis
    * fonas priklauso nuo šio būsenos kintamojo reikšmės

  * Ar persikrauna komponentas paspaudusu mygtuką?
  * Kokiais atvejais persikrauna komponentas?
  * Ar vykdosi useState funkcija, kiekvieną kartą persikrovus komponentui?
*/

const MainImage = ({ mainImg }) => (
  <Box sx={{
    display: { xs: 'flex' },
    flexDirection: { xs: 'column' },
    alignItems: { xs: 'center' },
    gap: 2,
  }}
  >
    <StyledMainImage
      src={(mainImg && mainImg.src) ?? '/no-image.jpg'}
      alt="user"
    />
    <Button variant="outlined" size="large">Keisti</Button>
  </Box>
);

export default MainImage;
