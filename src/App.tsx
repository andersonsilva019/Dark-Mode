import React, { useCallback } from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import { Header } from './components/Header';
import { usePersistedState } from './hooks/usePersistedState';
import light from './styles/themes/light';
import dark from './styles/themes/dark';
import GlobalStyles from './styles/global';

function App() {

  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

  const toggleTheme = useCallback(() => {
    setTheme(theme.title === 'light' ? dark : light);
  }, [theme]);

  return (
    <ThemeProvider theme={theme}>
      <>
        <Header toggleTheme={toggleTheme} />
        <GlobalStyles />
      </>
    </ThemeProvider>
  );
}

export default App;
