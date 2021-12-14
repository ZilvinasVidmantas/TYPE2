import React from 'react';
import { Box, Typography, Button, Link } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

const copyToClip = (content) => {
	navigator.clipboard.writeText(content);
};

const CarPageAction = ({ href, btnText, type }) => {
	const hrefWithAction = `${type}:${href}`;
	return (
		<>
			<Link href={hrefWithAction} sx={{ textDecoration: 'none' }}>
				<Button variant="outlined">{btnText}</Button>
			</Link>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					gap: 1,
					mt: 0.5,
				}}
			>
				<Typography sx={{ fontWeight: 700 }}>{href}</Typography>
				<ContentCopyIcon
					color="primary"
					sx={{ cursor: 'pointer' }}
					onClick={() => copyToClip(href)}
				/>
			</Box>
		</>
	);
};

export default CarPageAction;
