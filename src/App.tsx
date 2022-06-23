import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import Guard from 'components/guard/guard';
import { LOGIN_URL } from 'screens/login/login.type';
import { MOVIES_LIST_URL } from 'screens/movies-list/movies-list.type';
import theme from 'themes/main/theme';
import { GlobalStyles } from 'themes/main/global-styles';
import MoviesList from 'screens/movies-list/movies-list';
import Login from 'screens/login/login.screen';
import store from 'store/store/store';

function App() {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Routes>
          <Route element={<Login />} path={LOGIN_URL} />
          <Route element={<Guard><MoviesList /></Guard>} path={MOVIES_LIST_URL} />
        </Routes>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
