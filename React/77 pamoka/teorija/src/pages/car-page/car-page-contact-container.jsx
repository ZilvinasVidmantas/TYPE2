import React from 'react';
import { Grid, Avatar, Typography } from '@mui/material';
import CarPageAnimatedActionsContainer from './car-page-animated-actions-container';
import CarPageAnimatedAction from './car-page-animated-action';

const CarPageContactContainer = ({ fullname, userInitials, actions }) => {
	return (
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
	);
};

export default CarPageContactContainer;
