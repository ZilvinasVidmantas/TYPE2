import React, { useRef } from 'react';
import { Box, Typography, Button, Link } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import SlideOnMountWithProgressiveDelay from '../../components/animations/slide-on-mount-with-progressive-delay';

const copyToClip = (content) => {
	navigator.clipboard.writeText(content);
};

const CarPageAnimatedAction = ({ href, btnText, type }) => {
	const containerRef = useRef(null);
	const hrefWithAction = `${type}:${href}`;

	return (
		<Box sx={{ my: 4 }} ref={containerRef}>
			<SlideOnMountWithProgressiveDelay direction="up" ref={containerRef}>
				<Box>
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
				</Box>
			</SlideOnMountWithProgressiveDelay>
		</Box>
	);
};

export default CarPageAnimatedAction;
