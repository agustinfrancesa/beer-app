import React from 'react'
import { AppRouter } from './Pages/Routers/AppRouter'
import './Pages/GUI/styles/styles.scss'
import { Provider } from 'react-redux';
import { store } from './Redux/Store/store';

export const BeerApp = () => {


  
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  )
}
