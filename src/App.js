import React from 'react';
// import Homepage from './components/Homepage';
import CartContextProvider from './contexts/CartContext';
// import TestComponent from './components/test';
import ProductsContextProvider from './contexts/ProductsContext';
// import Cart from './components/Cart';
import ProceedToPayment from './components/static_pages/ProceedToPayment';


function App() {
  return (
    <ProductsContextProvider >
      <CartContextProvider>
        <div className="App">
          <ProceedToPayment />
          {/* <Cart /> */}
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