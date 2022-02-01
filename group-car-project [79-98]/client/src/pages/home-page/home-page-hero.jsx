import React, { useRef } from 'react';
import {
  Link,
  Box,
  Button,
  Typography,
} from '@mui/material';
import PhoneEnabledRoundedIcon from '@mui/icons-material/PhoneEnabledRounded';
import { Link as ScrollLink } from 'react-scroll';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import SlideOnMount from '../../components/animations/slide-on-mount';
import pulse from '../../components/animations/pulse';
import BackgroundImageContainer from '../../components/containers/background-image-container';

const Hero = () => {
  const containerRef = useRef(null);

  return (
    <Box sx={(theme) => ({ height: `calc(100vh - ${theme.mixins.toolbar.height}px)` })}>
      <BackgroundImageContainer
        sx={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1),rgba(0, 0, 0, 0.9)) , url(https://c.tenor.com/aRO-vIeY0MsAAAAd/journey-car.gif)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexGrow: 1,
          }}
        >
          <SlideOnMount
            direction="right"
            ref={containerRef}
          >
            <Box sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              color: 'common.white',
              padding: '10px',
            }}
            >
              <Box>
                <Typography
                  variant="h6"
                  component="h1"
                  sx={{
                    textTransform: 'uppercase',
                    fontSize: {
                      xs: '6vw',
                      sm: '6vw',
                      md: '5vw',
                      lg: '4vw',
                    },
                  }}
                >
                  Automobilių pardavimas
                </Typography>
              </Box>
              <Box>
                <Typography
                  variant="h6"
                  component="h2"
                  sx={{
                    fontSize: {
                      xs: '3.5vw',
                      sm: '3vw',
                      md: '2.5vw',
                      lg: '2vw',
                    },
                  }}
                >
                  Parduodame automobilius už gerą kainą visoje Lietuvoje!
                </Typography>
              </Box>
              <Link href="tel:+37066356777" style={{ textDecoration: 'none' }}>
                <Button
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    fontSize: {
                      xs: '6vw',
                      sm: '5vw',
                      md: '4vw',
                      lg: '3vw',
                    },
                  }}
                >
                  <Typography
                    variant="h4"
                    color="secondary"
                    fontSize="inherit"
                  >
                    +370 663 56777
                  </Typography>
                  <PhoneEnabledRoundedIcon fontSize="inherit" color="secondary" />
                </Button>
              </Link>

              <Typography
                variant="h6"
                component="h2"
                sx={{
                  fontSize: {
                    xs: '5vw',
                    sm: '4vw',
                    md: '3vw',
                    lg: '2vw',
                  },
                }}
              >
                Paskambinkite mums dabar
              </Typography>
            </Box>
          </SlideOnMount>
        </Box>
        <ScrollLink to="home-page-content" smooth="true" duration={800}>
          <KeyboardDoubleArrowDownIcon sx={{
            height: {
              xs: '12vw',
              sm: '8vw',
              md: '6vw',
              lg: '4vw',
            },
            width: 'auto',
            animation: `${pulse} 2s infinite`,
            color: 'grey.500',
            '&:hover': {
              color: 'common.white',
              transform: 'scale(1.2)',
              cursor: 'pointer',
              animation: 'none',
            },
          }}
          />
        </ScrollLink>
      </BackgroundImageContainer>
    </Box>
  );
};

export default Hero;
