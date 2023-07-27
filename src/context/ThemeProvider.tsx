import { useCallback, useMemo } from 'react';
import { DefaultTheme } from 'styled-components';

import { ThemeContext } from './ThemeContext';
import usePersistedTheme from '../hooks/usePersistedTheme';
import themes from '../assets/styles/themes';

export interface Props {
  children: React.ReactNode;
}

function ThemeProvider({ children }: Props) {
  const [theme, setTheme] = usePersistedTheme<DefaultTheme>('theme', themes.dark);

  const handleToggleTheme = useCallback(() => {
    setTheme((prevState) => (prevState.title === 'dark' ? themes.light : themes.dark));
  }, [setTheme]);

  const contextValue = useMemo(() => ({ theme, handleToggleTheme }), [theme, handleToggleTheme]);

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
