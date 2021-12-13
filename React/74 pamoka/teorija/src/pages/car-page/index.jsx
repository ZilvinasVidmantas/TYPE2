import React, { useContext } from 'react';
import { Container, Box } from '@mui/material';
import { useParams } from 'react-router-dom';
import ImageFluid from '../../components/images/image-fluid';
import CarContext from '../../contexts/car-context';
import CarPageTitle from './car-page-title';
import CarPageCarPropsContainer from './car-page-car-props-container';
import CarPageCarProp from './car-page-car-prop';
import CarPageActionContainer from './car-page-action-container';
import CarPageAction from './car-page-action';

const CarPage = () => {
	const carContext = useContext(CarContext);
	const { id } = useParams();
	const car = carContext.getCar(id);

	return (
		<Box component="main">
			<>
				{car !== undefined ? (
					<>
						<ImageFluid src={car.images[0]} />
						<CarPageTitle brand={car.brand} model={car.model} year={car.year} />
						<Container>
							<CarPageCarPropsContainer>
								<CarPageCarProp name="kaina" value={`${car.price}$`} />
								<CarPageCarProp name="kaina" value={`${car.price}$`} />
								<CarPageCarProp name="kaina" value={`${car.price}$`} />
							</CarPageCarPropsContainer>
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
