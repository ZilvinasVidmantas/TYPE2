import React, { useEffect, useState } from 'react';
import { Container, Box, Typography, Button, Link } from '@mui/material';
import { useParams } from 'react-router-dom';
import API from '../services/api-service';
import ImageFluid from '../components/images/image-fluid';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

const copyToClip = (content) => {
	navigator.clipboard.writeText(content);
};

const CarPage = () => {
	const { id } = useParams();
	const [car, setCar] = useState(null);
	console.log(car);

	useEffect(
		() => {
			const fecthInitialData = async () => {
				const car = await API.fetchCar(id);
				setCar(car);
			};

			fecthInitialData();
		},
		[id],
	);

	return (
		<Box component="main">
			<>
				{car !== null ? (
					<>
						<ImageFluid src={car.images[0]} />
						<Container>
							<Typography component="h1" variant="h4" align="center">
								{car.brand} {car.model}
							</Typography>
							<Typography
								component="h2"
								variant="h6"
								align="center"
								color="text.secondary"
							>
								{car.year}
							</Typography>
							<Box
								sx={{ display: 'flex', justifyContent: 'space-around', my: 3 }}
							>
								<Box sx={{ textAlign: 'center' }}>
									<Typography variant="h5">{car.price}$</Typography>
									<Typography>Kaina</Typography>
								</Box>
								<Box sx={{ textAlign: 'center' }}>
									<Typography variant="h5">{car.price}$</Typography>
									<Typography>Kaina</Typography>
								</Box>
								<Box sx={{ textAlign: 'center' }}>
									<Typography variant="h5">{car.price}$</Typography>
									<Typography>Kaina</Typography>
								</Box>
							</Box>
							<Box
								sx={{ justifyContent: 'center', gap: 2, textAlign: 'center' }}
							>
								<Box sx={{ my: 4 }}>
									<Link
										href={`tel:+37055555556`}
										sx={{ textDecoration: 'none' }}
									>
										<Button variant="outlined">Skambinti</Button>
									</Link>
									<Box
										sx={{
											display: 'flex',
											justifyContent: 'center',
											alignItems: 'center',
											gap: 1,
											mt: 0.5,
										}}
									>
										<Typography sx={{ fontWeight: 700 }}>
											+370 555 55556
										</Typography>
										<ContentCopyIcon
											color="primary"
											sx={{ cursor: 'pointer' }}
											onClick={() => copyToClip('+370 555 55556')}
										/>
									</Box>
								</Box>
								<Box sx={{ my: 4 }}>
									<Link
										href={`mailto:zilvinas.vidmantas.93@gmail.com`}
										sx={{ textDecoration: 'none' }}
									>
										<Button variant="outlined">Si??sti el. lai??k??</Button>
									</Link>
									<Box
										sx={{
											display: 'flex',
											justifyContent: 'center',
											alignItems: 'center',
											gap: 1,
											mt: 0.5,
										}}
									>
										<Typography sx={{ fontWeight: 700 }}>
											zilvinas.vidmantas.93@gmail.com
										</Typography>
										<ContentCopyIcon
											color="primary"
											sx={{ cursor: 'pointer' }}
											onClick={() =>
												copyToClip('zilvinas.vidmantas.93@gmail.com')
											}
										/>
									</Box>
								</Box>
							</Box>
						</Container>
					</>
				) : // <Typography component="h1" variant="h3" align="center">Loading...</Typography>
				null}
			</>
		</Box>
	);
};

export default CarPage;
