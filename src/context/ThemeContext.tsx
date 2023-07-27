import { DefaultTheme } from 'styled-components';
import {
  createContext, useCallback, useContext, useMemo,
} from 'react';

import usePersistedTheme from '../hooks/usePersistedTheme';
import themes from '../assets/styles/themes';

interface IThemeContext {
  theme: DefaultTheme,
  handleToggleTheme: () => void,
}

interface Props {
  children: React.ReactNode;
}

const ThemeContext = createContext<IThemeContext>({} as IThemeContext);

export const useTheme = () => useContext(ThemeContext);

export function ThemeProvider({ children }: Props) {
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
