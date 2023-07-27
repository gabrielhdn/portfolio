import { DefaultTheme } from 'styled-components';
import { createContext, useContext } from 'react';

interface IThemeContext {
  theme: DefaultTheme,
  handleToggleTheme: () => void,
}

export const ThemeContext = createContext<IThemeContext>({} as IThemeContext);

export const useTheme = () => useContext(ThemeContext);
