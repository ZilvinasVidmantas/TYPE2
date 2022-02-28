import React from 'react';
import { useNavigate } from 'react-router-dom';

import { ListItem, ListItemIcon, ListItemText } from '@mui/material';

export type DashboardLayoutDrawerLinkProps = {
  Icon: React.FC,
  path: string,
  title: string,
};

const DashboardLayoutDrawerLink: React.FC<DashboardLayoutDrawerLinkProps> = ({
  Icon,
  path,
  title,
}) => {
  const navigate = useNavigate();

  return (
    <ListItem button onClick={() => navigate(path)}>
      <ListItemIcon>
        <Icon />
      </ListItemIcon>
      <ListItemText primary={title} />
    </ListItem>
  );
};

export default DashboardLayoutDrawerLink;
