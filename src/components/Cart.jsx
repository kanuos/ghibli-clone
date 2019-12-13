import React, { useContext} from 'react';
import './cart.css';
import Navbar from './Navbar';
import Footer from './Footer';
import { CartContext } from '../contexts/CartContext';
import { CurrencyContext } from '../contexts/CurrencyContext';


const Cart = () => {

    const {...cart} = useContext(CartContext);
    const {...currency} = useContext(CurrencyContext);



    return (
        <div>
            <Navbar />
            <div className="cart-container">
            <h1 className="cart-heading">shopping cart</h1>

            {cart.data.length>0 ? cart.data.map((item, index) =>(<section className="cart-list" key={item.id}>      

            {console.log(cart.data)}

                <article className="cart-card">  
                    {/* item details */}
                    <div className="cart-detail">
                        <h1>{index+1}.</h1>
                        <div className="cart-img-box">
                            <img src={item.images} alt={item.title} className="cart-img"/>
                        </div>
                        <div className="cart-text-box">
                            <h1 className="cart-title">{item.title}</h1>
                            {item.size && <span className="cart-feature">
                                Size : {item.size} {typeof item.size === "number" && 'cm'}
                            </span>}
                            <button 
                            className="cart-remove"
                            onClick = {()=>{
                                cart.removeItem(item)
                            }}
                            >remove</button>
                        </div>
                    </div>
                    {/* order details */}
                    <div className="order-detail">
                        <div className="order-quantity">
                            <span className="cart-quantity-text">Quantity</span>
                            <div className="quantity-box">
                                <button 
                                    className="quantity"
                                    onClick = {()=>{
                                        cart.updateItemQuantity(item,'sub');
                                    }}
                                ><span role="img" aria-label="decrease">&#10134;</span></button>
                                    <span className="quantity">{item.quantity}</span>
                                <button 
                                    className="quantity"
                                    onClick = {()=>{
                                        cart.updateItemQuantity(item,'add');
                                    }}
                                ><span role="img" aria-label="increase">&#10133;</span></button>
                            </div>
                        </div>
                    </div>
                    {/* order price */}
                    <h3 className="order-price">
                                {currency.currencyConverter()}
                                {currency.rateConverter((item.price * item.quantity)).toFixed(2)}
                    </h3>
                    </article>
                </section>
                )) : <h1 className="cart-heading">Cart is empty</h1>}


            </div>
            <Footer />
                {/* special instructions for seller */}
                {/* textarea which sends form data to checkout component */}
                {/* $69.90 USD  next line shipping and taxes calculated at checkout */}
                {/* link to checkout */}
                {/* you may also like ....  */}
                {/* related items of current article item <5 items>  */}
        </div>
    )
}

export default Cart
