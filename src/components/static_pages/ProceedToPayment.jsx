import React, {useState, useContext} from 'react';
import logo from '../../assets/nav-logo.jpg';
import trust from '../../assets/trust.png';
import {ProductContext} from '../../contexts/ProductsContext';
import {FaPaypal} from 'react-icons/fa';

const ProceedToPayment = () => {
    const [...products] = useContext(ProductContext);
    const [toggle, setToggle] = useState(false)
    const image = "https://i.etsystatic.com/10457041/r/il/f04019/1229341011/il_794xN.1229341011_8spw.jpg";

    return (
        <div className="payment">
            <section className="payment-top-left">
                <nav className="payment-nav">
                    <img src={logo} alt="ghibli-logo" className="payment-logo"/>
                    <h1 className="payment-logo-text">Ghibli Store</h1>
                </nav>
                
                <details className="payment-detail">
                    <summary className="payment-summary" onClick={()=> setToggle(!toggle)}>
                        <span>{!toggle? "Show" : "Hide"} order summary</span>
                        <span>${products[0].price}</span>
                    </summary>
           
            {/* LOOP THE SECTION BELOW BASED ON CART CONTEXT ARRAY LENGTH */}
                
                    <div className="payment-expand">
                        {products.map(product => (<div className="payment-line" key={product.id}>
                            <div className="payment-thumbnail-badge">
                                <img src={image} alt={product.name} className="payment-thumnail"/>
                                <span className="payment-badge">{5}</span>
                            </div>
                            <p className="static-text payment-sub-title">
                                {product.name}
                            </p> 
                            <span className="payment-sub-amt">${product.price}</span>
                        </div>))
                        }
                        <div className="payment-line">
                            <input type="text" placeholder="gift card or discount code" className="static-input"/>
                            <button className="coupon-btn">&rarr;</button>
                        </div>
                        <p className="payment-flex"><span>Subtotal</span><strong>${4502}</strong></p>
                    
                        <p className="payment-flex"><span>Shipping</span><span className="payment-text">calculated at next step</span></p> <hr/>
                        <p className="payment-flex"><span>Total</span> <strong>USD ${4502}</strong> </p>    

                    </div>
                </details>

    
                <div className="express-checkout">
                    <div className="legend">express checkout</div>
                    <button className="paypal">
                        <FaPaypal /> PayPal
                    </button>
                </div>

                <div className="muted-caps"><span className="legend">OR</span> </div>
                <img src={trust} alt="verified" className="protected-transaction"/>
            </section>
            <form className="payment-info static-form">
                <div className="payment-flex">
                    <h4 className="payment-heading">
                        Contact information
                    </h4>
                    <span className="payment-text">Already have an account? LINK TO Log In</span>
                </div>
                <input type="email" className="static-input" placeholder="Email"/>
                <div className="payment-input-check">
                    <input type="checkbox" checked onChange={()=> false}/> Keep me up to date on mews amd exclusive offers 

                </div>
                <div className="payment-flex">
                    <h4 className="payment-heading">
                        Shipping address
                    </h4>
                </div>
                <input type="text" className="static-input" placeholder="First Name"/>
                <input type="text" className="static-input" placeholder="Last Name"/>
                <input type="text" className="static-input" placeholder="Address"/>
                <input type="text" className="static-input" placeholder="Apart,emt, suite etc (optional)"/>
                <input type="text" className="static-input" placeholder="City"/>
                <select className="payment-select">
                    <option value="us">USA</option>
                    <option value="us">UK</option>
                    <option value="us">Canada</option>
                    <option value="us">France</option>
                    <option value="us">--</option>
                    <option value="us">India</option>
                    <option value="us">Japan</option>
                    <option value="us">China</option>
                    <option value="us">Australia</option>
                    <option value="us">Sweden</option>
                    <option value="us">Norway</option>
                    <option value="us">Croatia</option>
                    <option value="us">Belgium</option>
                    <option value="us">Pakistan</option>
                    <option value="us">Bangladesh</option>
                    <option value="us">Russia</option>
                    <option value="us">South Korea</option>
                </select>
                <input type="text" className="static-input" placeholder="State (optional)"/>
                <input type="text" className="static-input" placeholder="ZIP Code"/>
                <input type="text" className="static-input payment-phone" placeholder="Phone"/>

                <div className="payment-input-check">
                    <input type="checkbox"/>Save this information for the next time 
                </div>
                <button className="payment-cta">Continue to shipping</button>
            </form>
                <span>&lt; Return to cart</span>
            <section className="payment-bottom-right">
            <details>
                    <summary>
                        <span>&rarr; Show order summary ||</span>
                        <span>$259.90</span>
                    </summary>
                    item icon <p> item name</p> <span>amount</span>
                    <input type="text" placeholder="gift card or discount code"/>
                    <button>-></button>
                    subtotal    259.90
                    <p>shipping         calculated at next step</p>
                    <p>totak 259 </p>    
                </details>

            <footer className="payment-footer">
                <ul>
                    <li>refund policy</li>
                    <li>privacy policy</li>
                    <li>terms of service</li>
                </ul>
            </footer>
            </section>
        </div>
    )
}

export default ProceedToPayment
