import React from 'react';
import {Route, Switch} from 'react-router-dom';

import CartContextProvider from './contexts/CartContext';
import ProductsContextProvider from './contexts/ProductsContext';
import CurrencyContextProvider from './contexts/CurrencyContext';


import Homepage from './components/Homepage';
import ProductPage from './components/ProductPage_1';
import CategoryView from './components/CategoryView';
import Cart from './components/Cart';
import AccountLogin from './components/static_pages/AccountLogin';
import AccountRegister from './components/static_pages/AccountRegister';
import AccountForgetPwd from './components/static_pages/AccountForgetPwd';
import SearchView from './components/SearchView';
import Contact from './components/static_pages/Contact'
import PrivacyPolicy from './components/static_pages/PrivacyPolicy'
import Refund from './components/static_pages/Refund'
import Shipping from './components/static_pages/Shipping'
import SizeGuide from './components/static_pages/SizeGuide'

function App() {
  return (
    <CurrencyContextProvider>
        <ProductsContextProvider >
          <CartContextProvider>
              <div className="App">
                  <Switch>{}
                    <Route exact path="/" component = {Homepage} />
                    <Route path="/category/:cat" component = {CategoryView} />
                    <Route path = "/myCart" component = {Cart} />
                    <Route path="/account/login" component = {AccountLogin} />
                    <Route path="/account/register" component = {AccountRegister} />
                    <Route path="/account/login" component = {AccountLogin} />
                    <Route path="/account/reset" component = {AccountForgetPwd} />
                    <Route path ="/movie/:id" component = {SearchView} />
                    <Route path ="/product/:id" component = {ProductPage} />
                    <Route path="/static/contact" component = {Contact} />
                    <Route path="/static/terms" component = {PrivacyPolicy} />
                    <Route path="/static/refund" component = {Refund} />
                    <Route path="/static/shipping" component = {Shipping} />
                    <Route path="/static/size" component = {SizeGuide} />
                  </Switch>
              </div>
          </CartContextProvider>
        </ProductsContextProvider>
      </CurrencyContextProvider>
  );
}

export default App;

