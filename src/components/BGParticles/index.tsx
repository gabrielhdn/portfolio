import { useCallback } from 'react';
import { loadFull } from 'tsparticles';
import Particles from 'react-particles';
import type { Engine } from 'tsparticles-engine';

import { useTheme } from '../../context/ThemeContext';
import { whiteOptions, blackOptions } from './config/options';
import Container from './styles';

const BGParticles = () => {
  const { theme } = useTheme();
  const { title } = theme;

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Container>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={title === 'dark' ? whiteOptions : blackOptions}
      />
    </Container>
  );
};

export default BGParticles;
