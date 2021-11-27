import React, { useEffect, useState } from 'react';
import Routes from '../../routes';
import {ThemeProvider} from '@mui/material/styles';
import theme from './app-theme/app.theme';
import {setProductsThunk} from '../../redux/main/main.actions';
import { useDispatch } from 'react-redux';
import useStyles from './app.styles';

const App = () => {

  const styles = useStyles();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setProductsThunk());
  }, []);

  return (
    <div className={styles.root}>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </div>
  );
}

export default App;
