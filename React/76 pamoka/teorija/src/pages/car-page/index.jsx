import React, { useContext } from 'react';
import { Container, Box } from '@mui/material';
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
		{ value: `${car.price}$`, name: 'Kaina' },
		{ value: car.fuelType, name: 'Kuro tipas' },
		{ value: car.transition, name: 'Pavarų dėžė' },
		{ value: `${car.engineVolume} l`, name: 'Variklio tūris' },
	];

	return (
		<Box component="main">
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

						<CarPageAnimatedActionsContainer>
							{/* Panaudokite savybes: user.email, user.mobile */}
							<CarPageAnimatedAction
								href="+37065623666"
								type="tel"
								btnText="Skambinti"
							/>

							<CarPageAnimatedAction
								href="zilvinas.vidmantas@gmail.com"
								type="mailto"
								btnText="Siųsti el. laišką"
							/>
						</CarPageAnimatedActionsContainer>
					</Container>
				</>
			) : null}
		</Box>
	);
};

export default CarPage;

/*
	1. Įgalinti vienoje vietoje, animacijų uždelsimo laikus.
		 * Pakeitus car-page-prop animacijų laikus, car-page-action-container animacijos, prasidėtų pasibaigus car-page-prop animacijoms

	2. Perkelti gaubiantį komponentą car-page-action-container komponentą į car-page-action
	
	3. Patobulinti car-search-page mobilaus dydžio dizainą
*/
