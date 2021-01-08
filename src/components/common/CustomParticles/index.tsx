import React from 'react';
import Particles from 'react-particles-js';
import { useThemeMode, computeTheme } from '../../../theme';
import useWindowDimensions from '../../../utils/window-size';

function CustomParticles() {
  const currentTheme = useThemeMode();
  const theme = computeTheme(currentTheme);

  const { height } = useWindowDimensions();
  let numParticles = 120;
  if (height < 800) {
    numParticles = 20;
  }

  return (
    <Particles
      width="100%"
      height="100%"
      style={{ zIndex: -1, position: 'absolute' }}
      params={{
        background: { color: { value: theme.palette.background.default } },
        particles: {
          color: { value: theme.palette.primary.main },
          links: {
            color: theme.palette.primary.main,
            opacity: 0.3,
          },
          number: {
            value: numParticles,
          },
        },
      }}
    />
  );
}

export default CustomParticles;
