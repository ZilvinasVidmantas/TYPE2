import React from 'react';
import {
  Grid,
} from '@mui/material';
import { Service } from 'types';
import ServiceCard from './service-card';

export type HomePageServicesProps = {
  services: Service[]
};

const HomePageServices: React.FC<HomePageServicesProps> = ({
  services,
}) => (
  <Grid container spacing={3}>
    {
      services.map((serviceProps) => (
        <Grid key={serviceProps.id} item xs={4}>
          <ServiceCard {...serviceProps} />
        </Grid>
      ))
    }
  </Grid>
);

export default HomePageServices;
