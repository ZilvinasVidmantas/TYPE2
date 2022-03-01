import React, { useState, useEffect } from 'react';
import {
  Container,
  Box,
  Typography,
  Alert,
} from '@mui/material';
import { User } from 'types';
import UserPanelPageTable from './user-panel-page-table';
import UserService from './services/user-service';

const UserPanelPage = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<string | null>(null);

  const deleteUser = async (id: string) => {
    const deletedUser = await UserService.deleteUser(id);
    if (typeof deletedUser === 'string') {
      setError(deletedUser);
      return;
    } else if (error) {
      setError(null)
    }
    setUsers(users.filter(x => x.id !== id));
  }

  useEffect(() => {
    (async () => {
      const fetchedUsers = await UserService.getUsers();
      if (typeof fetchedUsers === 'string') {
        console.error(fetchedUsers);
        return;
      }

      setUsers(fetchedUsers);
    })();
  }, []);

  return (
    <Container maxWidth="xl">
      <Typography component="h1" variant="h2">Vartotojų panelė</Typography>
      {
        error && (
          <Alert
            onClose={() => setError(null)}
            color="error"
            sx={{ mb: 2 }}
          >
            {error}
          </Alert>
        )
      }
      <UserPanelPageTable
        data={users}
        onDelete={deleteUser}
      />
    </Container>
  );
}

export default UserPanelPage;
