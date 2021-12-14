import React, { useContext, useState, useEffect } from 'react';
import { Container, Box } from '@mui/material';
import { useParams } from 'react-router-dom';
import ImageFluid from '../../components/images/image-fluid';
import CarContext from '../../contexts/car-context';
import CarPageTitle from './car-page-title';
import CarPageCarPropsContainer from './car-page-car-props-container';
import CarPageCarProp from './car-page-car-prop';
import CarPageActionContainer from './car-page-action-container';
import CarPageAction from './car-page-action';

let counter = 0;
const baseDelay = 500;
const delayDelta = 500;

const calcDelay = () => baseDelay + delayDelta * counter++;

const CarPage = () => {
	const [visible, setVisible] = useState(true);
	const carContext = useContext(CarContext);
	const { id } = useParams();
	const car = carContext.getCar(id);
	const [carProps, setCarProps] = useState([]);
	const [actions, setActions] = useState([]);
	const [animDelays, setAnimDelays] = useState([]);

	useEffect(() => {
		// Ateityje čia būtų atliekamas duomenų formavimas
		const carProps = [
			{ name: 'Greitis', value: '5000LT' },
			{ name: 'Bakas', value: '5000LT' },
			{ name: 'Linoliaumas', value: '5000LT' },
		];
		const actions = [
			{
				href: 'zilvinas.vidmantas@gmail.com',
				type: 'tel',
				btnText: 'Skambinti',
			},
			{ href: '+37065623666', type: 'mailto', btnText: 'Siųsti el. laišką' },
		];
		setCarProps(carProps);
		setActions(actions);
		const animDelays = [...carProps, ...actions].map((_) => calcDelay());
		setAnimDelays(animDelays);
		return () => {
			counter--;
		};
	}, []);
	let animDelayCounter = 0;

	return (
		<Box component="main">
			<>
				{car !== undefined ? (
					<>
						<ImageFluid src={car.images[0]} />
						<button onClick={() => setVisible(!visible)}>
							{visible ? 'Slepti' : 'Rodyti'}
						</button>
						<CarPageTitle brand={car.brand} model={car.model} year={car.year} />
						<Container>
							{visible ? (
								<CarPageCarPropsContainer>
									{carProps.map(({ name, value }) => (
										<CarPageCarProp
											key={name}
											name={name}
											value={value}
											delay={animDelays[animDelayCounter++]}
										/>
									))}
								</CarPageCarPropsContainer>
							) : null}
							<Box
								sx={{
									justifyContent: 'center',
									gap: 2,
									textAlign: 'center',
									overflow: 'hidden',
								}}
							>
								{actions.map(({ href, type, btnText }) => (
									<CarPageActionContainer
										key={href}
										delay={animDelays[animDelayCounter++]}
									>
										<CarPageAction href={href} type={type} btnText={btnText} />
									</CarPageActionContainer>
								))}
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
