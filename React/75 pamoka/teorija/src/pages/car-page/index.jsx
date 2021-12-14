import React, { useContext, useRef } from 'react';
import { Container, Box } from '@mui/material';
import { useParams } from 'react-router-dom';
import ImageFluid from '../../components/images/image-fluid';
import CarContext from '../../contexts/car-context';
import CarPageTitle from './car-page-title';
import CarPageCarPropsContainer from './car-page-car-props-container';
import CarPageAnimatedCarProp from './car-page-animated-car-prop';
import CarPageActionContainer from './car-page-action-container';
import CarPageAction from './car-page-action';

const CarPage = () => {
	const carContext = useContext(CarContext);
	const { id } = useParams();
	const car = carContext.getCar(id);
	const carPropsContainerRef = useRef(null);

	return (
		<Box component="main">
			<>
				{car !== undefined ? (
					<>
						<ImageFluid src={car.images[0]} />
						<CarPageTitle brand={car.brand} model={car.model} year={car.year} />
						<Container>
							{/* <CarPageCarPropsContainer ref={carPropsContainerRef}>
								<CarPageAnimatedCarProp
									name="kaina"
									value={`${car.price}$`}
									ref={carPropsContainerRef}
								/>
								<CarPageAnimatedCarProp
									name="kaina"
									value={`${car.price}$`}
									ref={carPropsContainerRef}
								/>
								<CarPageAnimatedCarProp
									name="kaina"
									value={`${car.price}$`}
									ref={carPropsContainerRef}
								/>
							</CarPageCarPropsContainer> */}
							<Box
								sx={{
									justifyContent: 'center',
									gap: 2,
									textAlign: 'center',
									overflow: 'hidden',
								}}
							>
								<CarPageActionContainer>
									<CarPageAction
										href="+37065623666"
										type="tel"
										btnText="Skambinti"
									/>
								</CarPageActionContainer>

								<CarPageActionContainer>
									<CarPageAction
										href="zilvinas.vidmantas@gmail.com"
										type="mailto"
										btnText="Siųsti el. laišką"
									/>
								</CarPageActionContainer>
							</Box>
						</Container>
					</>
				) : null}
			</>
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
