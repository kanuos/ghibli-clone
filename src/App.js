import React from 'react';
// import Homepage from './components/Homepage';
import CartContextProvider from './contexts/CartContext';
import ProductsContextProvider from './contexts/ProductsContext';
import ProductPage from './components/ProductPage';


function App() {
  return (
    <ProductsContextProvider >
      <CartContextProvider>
        <div className="App">
          {/* <Homepage /> */}
          <ProductPage />
        </div>
      </CartContextProvider>
    </ProductsContextProvider>
  );
}

export default App;

