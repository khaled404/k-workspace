/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useContext, useMemo, useState } from 'react';
import type { FC, TProvider } from '@k-workspace/types';
import { getItem } from '@k-workspace/utils';

type ThemeContextType = {
  theme: 'dark' | 'light';
  changeTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);
const ThemeProvider = ({ children }: FC): TProvider => {
  const [theme, setTheme] = useState<'dark' | 'light'>(getItem('theme'));

  const changeTheme = () => {
    document.documentElement.setAttribute(
      'data-theme',
      theme === 'dark' ? 'light' : 'dark'
    );

    setTheme(theme === 'dark' ? 'light' : 'dark');
  };
  const value = useMemo(
    () => ({
      theme,
      changeTheme,
    }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) throw Error('useTheme should be used within <ThemeProvider />');
  return context;
};

export { useTheme, ThemeProvider };
