import React, { useState } from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Link } from 'react-router-dom';
import ImageFluid from '../images/image-fluid';

const StyledCard = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  minHeight: theme.spacing(38),
  borderRadius: theme.spacing(2),
  color: theme.palette.common.black,
  transition: theme.transitions.easeMe,
  boxShadow: theme.shadows[26],
  ':hover': {
    transform: 'scale(1.02)',
    transformOrigin: 'center',
  },
}));

const StyledCardContent = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  textAlign: 'center',
  margin: '0',
  padding: '0',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
});

const CarCard = ({
  image, title, subtitle, id,
}) => {
  const theme = useTheme();
  const [favorite, setFavorite] = useState(false);
  return (
    <StyledCard>
      <Box sx={{
        position: 'relative',
      }}
      >
        <Link
          to={`/car/${id}`}
          style={{
            textDecoration: 'none',
          }}
        >
          <ImageFluid
            sx={{
              height: theme.spacing(28.75),
              borderTopLeftRadius: theme.spacing(1.875),
              borderTopRightRadius: theme.spacing(2),
            }}
            src={image}
          />
        </Link>
        <IconButton
          onClick={() => setFavorite(!favorite)}
          sx={{
            position: 'absolute',
            top: '0',
            right: '0',
            color: 'white',
          }}
        >
          {favorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </IconButton>
      </Box>
      <Link
        to={`/car/${id}`}
        style={{
          textDecoration: 'none',
          color: theme.palette.common.black,
        }}
      >
        <StyledCardContent>
          <Typography
            component="h3"
            variant="h5"
            sx={{
              textTransform: 'none',
              textOverflow: 'ellipsis',
              overflow: 'hidden',
            }}
          >
            {title}
          </Typography>
          <Typography component="h4" variant="subtitle1">
            {subtitle}
          </Typography>
        </StyledCardContent>
      </Link>
    </StyledCard>
  );
};

export default CarCard;
