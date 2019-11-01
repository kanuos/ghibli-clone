import React, {useState} from 'react';
import './cart.css';
import Navbar from './Navbar';
import Footer from './Footer';


const Cart = () => {
    const images = [
        `https://cdn.shopify.com/s/files/1/1962/4445/products/product-image-748979779_4d7d79af-6d76-44c1-8baa-6d86da4fa72d_1024x1024.jpg?v=1567876850`, 
        `http://img1.ak.crunchyroll.com/i/spire4/46aeb7e8f6f6692b04838ebbd6924eab1363320762_full.jpg`,
        'https://m.media-amazon.com/images/I/71+MaG4SrFL._SR500,500_.jpg'
    ]
    const title = "cat bus plush toy 30cm to 50cm";
    const feature = "30cm"; 
    // const feature = ""; 



    const [currentImg] =  useState(images[0])
    return (
        <div>
            <Navbar />
            <div className="cart-container">
            <h1 className="cart-heading">shopping cart</h1>
            <section className="cart-list">      
                {/* single item in the cart  */}
                <article className="cart-card">  
                    {/* item details */}
                    <div className="cart-detail">
                        <div className="cart-img-box">
                            <img src={currentImg} alt="blah" className="cart-img"/>
                        </div>
                        <div className="cart-text-box">
                            <h1 className="cart-title">{title}</h1>
                            {feature && <span className="cart-feature">{feature}</span>}
                            <button className="cart-remove">remove</button>
                        </div>
                    </div>
                    {/* order details */}
                    <div className="order-detail">
                        <div className="order-quantity">
                            <span className="cart-quantity-text">Quantity</span>
                            <div className="quantity-box">
                                <button className="quantity">&#10134;</button>
                                    <span className="quantity">5</span>
                                <button className="quantity">&#10133;</button>
                            </div>
                        </div>
                    </div>
                    {/* order price */}
                    <h3 className="order-price">
                        $15.95 USD
                    </h3>
                </article>





                <article className="cart-card">  
                    {/* item details */}
                    <div className="cart-detail">
                        <div className="cart-img-box">
                            <img src={currentImg} alt="blah" className="cart-img"/>
                        </div>
                        <div className="cart-text-box">
                            <h1 className="cart-title">{title}</h1>
                            {feature && <span className="cart-feature">{feature}</span>}
                            <button className="cart-remove">remove</button>
                        </div>
                    </div>
                    {/* order details */}
                    <div className="order-detail">
                        <div className="order-quantity">
                            <span className="cart-quantity-text">Quantity</span>
                            <div className="quantity-box">
                                <button className="quantity">&#10134;</button>
                                    <span className="quantity">5</span>
                                <button className="quantity">&#10133;</button>
                            </div>
                        </div>
                    </div>
                    {/* order price */}
                    <h3 className="order-price">
                        $1255.95 USD
                    </h3>
                </article>







            </section>
            </div>
            <Footer />
        </div>
    )
}

export default Cart
