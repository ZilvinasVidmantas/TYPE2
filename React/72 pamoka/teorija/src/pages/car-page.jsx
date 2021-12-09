import React, { useEffect, useState } from 'react';
import {
	Container,
	Box,
	Typography,

} from '@mui/material';
import { useParams } from 'react-router-dom';
import API from '../services/api-service';
import ImageFluid from '../components/images/image-fluid';

const CarPage = () => {
	const { id } = useParams();
	const [car, setCar] = useState(null);
	console.log(car);

	useEffect(() => {
		const fecthInitialData = async () => {
			const car = await API.fetchCar(id);
			setCar(car);
		}

		fecthInitialData();
	}, [id]);

	// 11:15

	return (
		<Container component="main">
			{
				car !== null ?
					<>
						<ImageFluid
							src={car.images[0]}
						/>
						<Typography component="h1" variant="h3" align="center">{car.brand}  {car.model}</Typography>
					</> :
					// <Typography component="h1" variant="h3" align="center">Loading...</Typography>
					null
			}

		</Container>
	);
};

export default CarPage;
