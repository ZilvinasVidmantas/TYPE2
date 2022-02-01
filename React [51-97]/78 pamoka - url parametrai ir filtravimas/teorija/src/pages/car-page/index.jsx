import React, { useContext } from 'react';
import { Container, Box, Divider, Grid } from '@mui/material';
import { useParams } from 'react-router-dom';
import ImageFluid from '../../components/images/image-fluid';
import CarContext from '../../contexts/car-context';
import CarPageTitle from './car-page-title';
import CarPageAnimatedCarPropsContainer from './car-page-animated-car-props-container';
import CarPageCarProp from './car-page-car-prop';
import CarPageAnimatedContactContainer from './car-page-animated-contact-container';

const animationDelayProgress = {
	xs: true,
	sm: false,
};

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

	const fullname = `${car?.user.name} ${car?.user.surname[0]}.`;
	const userInitials = car?.user.name[0] + car?.user.surname[0];

	const actions = [
		{ href: car?.user.mobile, type: 'tel', btnText: 'Skambinti' },
		{ href: car?.user.email, type: 'mailto', btnText: 'Siųsti el. laišką' },
	];

	return (
		<Box
			component="main"
			sx={{
				bgcolor: { xs: '#eeffee', sm: '#ffeeee', md: '#eeffff', lg: '#ffffee' },
			}}
		>
			{car !== undefined ? (
				<>
					<ImageFluid src={mainImageSrc} />
					<CarPageTitle brand={car.brand} model={car.model} year={car.year} />
					<Container>
						<Grid container sx={{ mt: { sm: 2 } }}>
							<Grid item xs={12} sm={true}>
								<CarPageAnimatedCarPropsContainer
									delayProgress={animationDelayProgress}
								>
									{carProps.map(({ name, value }) => (
										<CarPageCarProp key={name} name={name} value={value} />
									))}
								</CarPageAnimatedCarPropsContainer>
							</Grid>

							<Grid item xs={12} sx={{ display: { sm: 'none' } }}>
								<Divider sx={{ my: 2 }} />
							</Grid>

							<Grid item xs={12} sm={true}>
								<CarPageAnimatedContactContainer
									fullname={fullname}
									userInitials={userInitials}
									actions={actions}
									delayProgress={animationDelayProgress}
								/>
							</Grid>
						</Grid>
					</Container>
				</>
			) : null}
		</Box>
	);
};

export default CarPage;
