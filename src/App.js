import React from 'react';
// import Homepage from './components/Homepage';
import CartContextProvider from './contexts/CartContext';
import ProductsContextProvider from './contexts/ProductsContext';
import ProductPage from './components/ProductPage';
import CurrencyContextProvider from './contexts/CurrencyContext';


function App() {
  return (
    <CurrencyContextProvider>
      <ProductsContextProvider >
        <CartContextProvider>
          <div className="App">
            {/* <Homepage /> */}
            <ProductPage />
          </div>
        </CartContextProvider>
      </ProductsContextProvider>
    </CurrencyContextProvider>
  );
}

export default App;

