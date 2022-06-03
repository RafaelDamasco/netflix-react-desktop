import React from 'react';
import Login from './screens/login/login.screen';
import { ThemeProvider } from 'styled-components';
import theme from './themes/main/theme'
import { GlobalStyles } from './themes/main/global-styles'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MoviesList from './screens/movies-list/movies-list';
import { LOGIN_URL } from './screens/login/login.type';
import { MOVIES_LIST_URL } from './screens/movies-list/movies-list.type';

function App() {
  return (
    <>
      <GlobalStyles/>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route element={<Login/>} path={LOGIN_URL} />
            <Route element={<MoviesList />} path={MOVIES_LIST_URL} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
