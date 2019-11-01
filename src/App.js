import React from 'react';
// import Homepage from './components/Homepage';
import CartContextProvider from './contexts/CartContext';
// import TestComponent from './components/test';
import ProductsContextProvider from './contexts/ProductsContext';
import Cart from './components/Cart';


function App() {
  return (
    <ProductsContextProvider >
      <CartContextProvider>
        <div className="App">
            <Cart />
        </div>
      </CartContextProvider>
    </ProductsContextProvider>
  );
}

export default App;


/* scheme for app structure

currencycontext 
  navbar
    productcontext
      cartcontext
        ----------
        ----------
        ----------
        ----------
      cartcontext
    productcontext
  footer
currencycontext

*/