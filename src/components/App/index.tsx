import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { AnimatePresence } from 'framer-motion';
import Router from '../../Router';
import Intro from '../Intro';

import GlobalStyles from '../../assets/styles/global';
import { useTheme } from '../../context/ThemeContext';
import { Container } from './styles';

const App: React.FC = () => {
  const [introAnimation, setIntroAnimation] = useState<boolean>(true);
  const { theme } = useTheme();

  useEffect(() => {
    const id = setTimeout(() => {
      setIntroAnimation(false);
    }, 2000);

    return () => clearTimeout(id);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Container>
        <AnimatePresence mode="wait">
          {introAnimation
            ? <Intro key="intro" />
            : <Router key="router" /> }
        </AnimatePresence>
      </Container>
    </ThemeProvider>
  );
};

export default App;
