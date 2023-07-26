import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../../assets/styles/global';

import Router from '../../Router';
import themes from '../../assets/styles/themes';

function App() {
  return (
    <ThemeProvider theme={themes.dark}>
      <GlobalStyles />

      <Router />
    </ThemeProvider>
  );
}

export default App;
