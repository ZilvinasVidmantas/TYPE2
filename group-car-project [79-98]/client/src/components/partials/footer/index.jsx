import React from 'react';
import Box from '@mui/material/Box';

const Footer = () => (
  <Box
    sx={(theme) => ({
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: theme.mixins.footer.height,
      px: 2,
      bgcolor: 'primary.main',
      color: 'common.white',
    })}
  >
    Automobilių pardavimas &reg; 2021 Visos teisės saugomos.
  </Box>
);

export default Footer;
