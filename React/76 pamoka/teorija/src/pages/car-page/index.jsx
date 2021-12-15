import React, { useContext } from 'react';
import {
	Container,
	Box,
	Divider,
	Grid,
	Avatar,
	Typography,
} from '@mui/material';
import { useParams } from 'react-router-dom';
import ImageFluid from '../../components/images/image-fluid';
import CarContext from '../../contexts/car-context';
import CarPageTitle from './car-page-title';
import CarPageAnimatedCarPropsContainer from './car-page-animated-car-props-container';
import CarPageAnimatedCarProp from './car-page-animated-car-prop';
import CarPageAnimatedActionsContainer from './car-page-animated-actions-container';
import CarPageAnimatedAction from './car-page-animated-action';

const CarPage = () => {
	const carContext = useContext(CarContext);
	const { id } = useParams();
	const car = carContext.getCar(id);
	const mainImageSrc = car?.images[0];
	const carProps = [
		{ value: `${car?.price}$`, name: 'Kaina' },
		{ value: car?.fuelType, name: 'Kuro tipas' },
		{ value: car?.transition, name: 'Pavarų dėžė' },
		{ value: `${car?.engineVolume} l`, name: 'Variklio tūris' },
	];

	const actions = [
		{ href: car?.user.mobile, type: 'tel', btnText: 'Skambinti' },
		{ href: car?.user.email, type: 'mailto', btnText: 'Siųsti el. laišką' },
	];

	const fullname = `${car.user.name} ${car.user.surname[0]}.`;
	const userInitials = car.user.name[0] + car.user.surname[0];

	return (
		<Box component="main" sx={{ bgcolor: { sm: '#dddddd' } }}>
			{car !== undefined ? (
				<>
					<ImageFluid src={mainImageSrc} />
					<CarPageTitle brand={car.brand} model={car.model} year={car.year} />
					<Container>
						<CarPageAnimatedCarPropsContainer>
							{carProps.map(({ name, value }) => (
								<CarPageAnimatedCarProp key="name" name={name} value={value} />
							))}
						</CarPageAnimatedCarPropsContainer>
						<Divider sx={{ my: 2 }} />
						<Grid container>
							<Grid
								item
								xs={6}
								sx={{
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									flexDirection: 'column',
								}}
							>
								<Avatar sx={{ bgcolor: 'primary.main' }}>{userInitials}</Avatar>
								<Typography variant="h6">{fullname}</Typography>
							</Grid>
							<Grid item xs={6}>
								<CarPageAnimatedActionsContainer>
									{actions.map(({ href, type, btnText }) => (
										<CarPageAnimatedAction
											key={href}
											href={href}
											type={type}
											btnText={btnText}
										/>
									))}
								</CarPageAnimatedActionsContainer>
							</Grid>
						</Grid>
					</Container>
				</>
			) : null}
		</Box>
	);
};

export default CarPage;

/*
	10min pertrauka

	1. Iškelti kontaktų sekciją į car-page-contact-container.jsx

	2. Nuo sm dydžio sustatyti elementu vienoje eilutėje

*/
