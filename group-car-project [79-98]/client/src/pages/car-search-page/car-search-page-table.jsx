import React, { useEffect, useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
  Skeleton,
  IconButton,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { v4 as uuidv4 } from 'uuid';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import useCarSearchPageSearchParams from '../../hooks/useCarSearchPageSearchParams';

const StyledTableCell = styled(TableCell)({
  padding: 10,
});

const CarTable = ({ cars, count }) => {
  const [tablePage, setTablePage] = useState(0);
  const [priceOrder, setPriceOrder] = useState('');
  const [yearsOrder, setYearsOrder] = useState('_sort_desc=year');
  const [rowsPerPage, setRowsPerPage] = useState(20);
  const [loading, setLoading] = useState(false);
  const { getInitialSearchParams, setNewSearchParams } = useCarSearchPageSearchParams();

  useEffect(() => {
    const { page, limit } = getInitialSearchParams();
    setTablePage(page - 1);
    setRowsPerPage(limit);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 300);
  }, [cars]);

  const handleChangePage = (_, newPage) => {
    setLoading(true);
    setTablePage(newPage);
    setNewSearchParams([
      { key: '_limit', value: rowsPerPage },
      { key: '_page', value: newPage + 1 },
    ]);
  };

  const handleChangeRowsPerPage = (event) => {
    setLoading(true);
    setTablePage(0);
    setRowsPerPage(parseInt(event.target.value, 10));
    setNewSearchParams([
      { key: '_limit', value: rowsPerPage },
      { key: '_page', value: 1 },
    ]);
  };

  const handleYearsOrderChange = () => {
    if (yearsOrder === '_sort_asc=year') {
      setYearsOrder('_sort_desc=year');
      setNewSearchParams([{
        keyToDelete: '_sort_asc',
        key: '_sort_desc',
        value: 'year',
      }]);
    } else {
      setYearsOrder('_sort_asc=year');
      setNewSearchParams([{
        keyToDelete: '_sort_desc',
        key: '_sort_asc',
        value: 'year',
      }]);
    }
  };

  const handlePriceOrderChange = () => {
    if (priceOrder === '_sort_asc=price') {
      setPriceOrder('_sort_desc=price');
      setNewSearchParams([{
        keyToDelete: '_sort_asc',
        key: '_sort_desc',
        value: 'price',
      }]);
    } else {
      setPriceOrder('_sort_asc=price');
      setNewSearchParams([{
        keyToDelete: '_sort_desc',
        key: '_sort_asc',
        value: 'price',
      }]);
    }
  };

  const rows = cars
    .map(({
      id, brand, model, year, price, transmission, fuelType,
    }) => (
      <TableRow key={id}>
        <StyledTableCell>{id}</StyledTableCell>
        <StyledTableCell>{brand}</StyledTableCell>
        <StyledTableCell>{model}</StyledTableCell>
        <StyledTableCell>{transmission}</StyledTableCell>
        <StyledTableCell>{fuelType}</StyledTableCell>
        <StyledTableCell align="right">{price}</StyledTableCell>
        <StyledTableCell align="right">{year}</StyledTableCell>
        <StyledTableCell align="right" sx={{ width: 1 / 100, whiteSpace: 'nowrap' }}>
          <Link to={`/car/${id}`}>Peržiūrėti</Link>
        </StyledTableCell>
      </TableRow>
    ));

  const skeletonRows = Array.from(new Array(rowsPerPage)).map(() => (
    <TableRow key={uuidv4()}>
      <StyledTableCell><Skeleton animation="wave" height={20} /></StyledTableCell>
      <StyledTableCell><Skeleton animation="wave" height={20} /></StyledTableCell>
      <StyledTableCell><Skeleton animation="wave" height={20} /></StyledTableCell>
      <StyledTableCell><Skeleton animation="wave" height={20} /></StyledTableCell>
      <StyledTableCell><Skeleton animation="wave" height={20} /></StyledTableCell>
      <StyledTableCell><Skeleton animation="wave" height={20} /></StyledTableCell>
      <StyledTableCell><Skeleton animation="wave" height={20} /></StyledTableCell>
      <StyledTableCell>
        <Skeleton animation="wave" height={20} />
      </StyledTableCell>
    </TableRow>
  ));

  return (
    <TableContainer component={Paper} elevation={4} square>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Markė</TableCell>
            <TableCell>Modelis</TableCell>
            <TableCell>Pavarų dėžė</TableCell>
            <TableCell>Kuro tipas</TableCell>
            <TableCell align="right">
              Kaina €
              <IconButton onClick={handlePriceOrderChange}>
                {
                  priceOrder === '_sort_asc=price'
                    ? <ArrowDropUpIcon />
                    : <ArrowDropDownIcon />
                }
              </IconButton>
            </TableCell>
            <TableCell align="right">
              Gam. Metai
              <IconButton onClick={handleYearsOrderChange}>
                {
                  yearsOrder === '_sort_asc=year'
                    ? <ArrowDropUpIcon />
                    : <ArrowDropDownIcon />
                }
              </IconButton>
            </TableCell>
            <TableCell>Veiksmai</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            loading
              ? skeletonRows
              : rows
          }
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[10, 20, 25]}
        component="div"
        count={count}
        rowsPerPage={rowsPerPage}
        page={tablePage}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        labelRowsPerPage="Mašinų skaičius puslapyje:"
      />
    </TableContainer>
  );
};

export default CarTable;
