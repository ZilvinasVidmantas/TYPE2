import * as React from 'react';
import { styled } from '@mui/material/styles';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import CarRepairIcon from '@mui/icons-material/CarRepair';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddIcon from '@mui/icons-material/Add';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)({
  textDecoration: 'none',
  color: 'inherit',
});

const DrawerList = (
  <Box>
    <StyledLink to="/dashboard">
      <ListItem button>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Pagrindinis" />
      </ListItem>
    </StyledLink>
    <StyledLink to="/user-cars">
      <ListItem button>
        <ListItemIcon>
          <CarRepairIcon />
        </ListItemIcon>
        <ListItemText primary="Mano automobiliai" />
      </ListItem>
    </StyledLink>
    <StyledLink to="/liked-cars">
      <ListItem button>
        <ListItemIcon>
          <FavoriteBorderIcon />
        </ListItemIcon>
        <ListItemText primary="Patinkantys automobiliai" />
      </ListItem>
    </StyledLink>
    <StyledLink to="/add-car">
      <ListItem button>
        <ListItemIcon>
          <AddIcon />
        </ListItemIcon>
        <ListItemText primary="Pridėti automobilį" />
      </ListItem>
    </StyledLink>
    <StyledLink to="/user-profile">
      <ListItem button>
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="Profilis" />
      </ListItem>
    </StyledLink>
    <StyledLink to="/user-settings">
      <ListItem button>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="Nustatymai" />
      </ListItem>
    </StyledLink>
  </Box>
);

export default DrawerList;
