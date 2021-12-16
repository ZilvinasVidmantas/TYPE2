import React, { useRef } from 'react';
import { Grid, Avatar, Typography, Box } from '@mui/material';
import CarPageActionsContainer from './car-page-actions-container';
import CarPageAction from './car-page-action';
import SlideOnMountWithProgressiveDelay from '../../components/animations/slide-on-mount-with-progressive-delay';

const CarPageAnimatedContactContainer = ({ fullname, userInitials, actions }) => {
	const containerRef = useRef(null);
	return (
		<Box ref={containerRef} sx={{ overflow: 'hidden' }}>
			<SlideOnMountWithProgressiveDelay direction="up" ref={containerRef}>
				<Grid container>
					<Grid
						item
						xs={6}
						sm={true}
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
					<Grid item xs={6} sm={true}>
						<CarPageActionsContainer>
							{actions.map(({ href, type, btnText }) => (
								<CarPageAction
									key={href}
									href={href}
									type={type}
									btnText={btnText}
								/>
							))}
						</CarPageActionsContainer>
					</Grid>
				</Grid>
			</SlideOnMountWithProgressiveDelay>
		</Box>
	);
};

export default CarPageAnimatedContactContainer;
