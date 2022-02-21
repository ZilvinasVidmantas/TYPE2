import React, { useState, useEffect } from 'react';
import User from '../../types/user';
import ApiService from '../../services/api-service';
import { Container } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
const UsersPage = () => {
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    (async () => {
      const fetchedUsers = await ApiService.getUsers();
      setUsers(fetchedUsers);
    })();
  }, []);

  return (
    <Container sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }} maxWidth="xl">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right">Id</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Username</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Website</TableCell>
              <TableCell>Company</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map(
              ({
                id,
                name,
                username,
                email,
                address: { street, suite, city, zipcode },
                phone,
                website,
                company,
              }) => (
                <TableRow key={id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell align="right">{id}</TableCell>
                  <TableCell>{name}</TableCell>
                  <TableCell>{username}</TableCell>
                  <TableCell>{email}</TableCell>
                  <TableCell>
                    {street}, {suite}, {city}, {zipcode}
                  </TableCell>
                  <TableCell>{phone}</TableCell>
                  <TableCell>{website}</TableCell>
                  <TableCell>{company.name}</TableCell>
                </TableRow>
              )
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};
export default UsersPage;
