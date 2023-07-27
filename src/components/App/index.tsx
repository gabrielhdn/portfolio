import { ThemeProvider } from 'styled-components';
import { useTheme } from '../../context/ThemeContext';
import GlobalStyles from '../../assets/styles/global';
import Router from '../../Router';

function App() {
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <Router />
    </ThemeProvider>
  );
}

export default App;
