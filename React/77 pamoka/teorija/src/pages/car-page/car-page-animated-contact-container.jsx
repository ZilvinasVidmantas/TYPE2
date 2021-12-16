import React, { useRef } from 'react';
import { Grid, Avatar, Typography, Box } from '@mui/material';
import CarPageAction from './car-page-action';
import SlideOnMountWithProgressiveDelay from '../../components/animations/slide-on-mount-with-progressive-delay';

const CarPageAnimatedContactContainer = ({
	fullname,
	userInitials,
	actions,
}) => {
	const containerRef = useRef(null);
	return (
		<Box
			ref={containerRef}
			sx={{
				overflow: 'hidden',
				justifyContent: 'center',
				gap: 1,
				textAlign: 'center',
			}}
		>
			<SlideOnMountWithProgressiveDelay direction="up" ref={containerRef}>
				<Grid container>
					<Grid
						item
						xs={6}
						sm={true}
						sx={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							flexDirection: 'column',
						}}
					>
						<Avatar sx={{ bgcolor: 'primary.main' }}>{userInitials}</Avatar>
						<Typography variant="h6">{fullname}</Typography>
					</Grid>
					<Grid item xs={6} sm={true}>
						<Box sx={{}}>
							{actions.map(({ href, type, btnText }) => (
								<CarPageAction
									key={href}
									href={href}
									type={type}
									btnText={btnText}
								/>
							))}
						</Box>
					</Grid>
				</Grid>
			</SlideOnMountWithProgressiveDelay>
		</Box>
	);
};

export default CarPageAnimatedContactContainer;
