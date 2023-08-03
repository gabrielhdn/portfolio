import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import ThemeProvider from './context/ThemeProvider';
import App from './components/App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>/
  <ThemeProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>,
  // </React.StrictMode>,
);
