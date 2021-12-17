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

	return (
		<Box component="main">
			{car !== undefined ? (
				<>
					<ImageFluid src={mainImageSrc} />
					<CarPageTitle brand={car.brand} model={car.model} year={car.year} />
					<Container>
						<CarPageAnimatedCarPropsContainer>
							<CarPageAnimatedCarProp name="kaina" value={`${car.price}$`} />
							<CarPageAnimatedCarProp name="kaina" value={`${car.price}$`} />
							<CarPageAnimatedCarProp name="kaina" value={`${car.price}$`} />
						</CarPageAnimatedCarPropsContainer>

						<CarPageAnimatedActionsContainer>
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
