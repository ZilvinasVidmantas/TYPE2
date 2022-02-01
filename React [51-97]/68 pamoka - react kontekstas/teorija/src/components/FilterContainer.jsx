import { Typography, Box, Divider } from '@mui/material';

const FilterContainer = ({ children, title }) => {
  return (
    <Box>
      <Divider sx={{ my: 1 }} />
      <Typography component="h3" variant="h5">{title}</Typography>
      {children}
    </Box>
  );
};

export default FilterContainer;
