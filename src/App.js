import React from 'react';
// import Homepage from './components/Homepage';
import CartContextProvider from './contexts/CartContext';
// import TestComponent from './components/test';
import ProductsContextProvider from './contexts/ProductsContext';
import Shipping from './components/static_pages/Shipping';

function App() {
  return (
    <ProductsContextProvider >
      <CartContextProvider>
        <div className="App">
          {/* <Homepage /> */}
          {/* <TestComponent /> */}
          <Shipping />
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