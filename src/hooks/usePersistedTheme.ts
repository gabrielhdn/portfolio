import {
  useEffect, useState, Dispatch, SetStateAction,
} from 'react';

type Response<T> = [
  T,
  Dispatch<SetStateAction<T>>,
];

export default function usePersistedTheme<T>(key: string, initialState: T): Response<T> {
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem(key);

    if (storedTheme) return JSON.parse(storedTheme);
    return initialState;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(theme));
  }, [key, theme]);

  return [theme, setTheme];
}
