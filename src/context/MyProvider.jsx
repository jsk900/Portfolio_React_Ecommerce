import React, { useState, useReducer, useEffect } from 'react';
import MyContext from './MyContext';

//Cocktail data
import data from '../data/cocktail-data';

//Actions
import { ACTIONS } from '../actions/actions';

//Reducers
import { cartItemsReducer } from '../reducers/cartItemsReducer';

const MyProvider = ({ children }) => {
  //useState
  const [cocktailData] = useState(data);

  //useReducer
  const [cartItems, cartItemsDispatch] = useReducer(cartItemsReducer, []);

  //Get localStorage
  useEffect(() => {
    const localStorageCartItems = JSON.parse(localStorage.getItem('cartItems'));
    localStorageCartItems &&
      cartItemsDispatch({ type: ACTIONS.SET, payload: localStorageCartItems });
  }, []);

  //SetLocalStorage
  useEffect(() => {
    localStorage.removeItem('cartItems');
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  //Add all state, data and functionality to the context(Store)
  return (
    <MyContext.Provider
      value={{
        cocktailData,
        cartItems,
        cartItemsDispatch,
      }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;
