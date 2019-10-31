import React, {useState} from 'react';
import './home.css';

import Footer from './Footer';
import Navbar from './Navbar';
import Carousel from './Carousel';


const Homepage = () => {
    const [sale, setSale] = useState(true)
    return (
        <React.Fragment>
            <Navbar />
                <main>
                    {sale && <div className="sale">
                        <p className="sale-text">
                        sale up to 50% off. free shipping worldwide
                        </p>
                        <span 
                            className="sale-close"
                            onClick = {()=> setSale(!sale)}>
                            &times;
                        </span>
                    </div>}
                    <Carousel />
                    <div className="home-container">
                        
                        <form className="home-search-box">
                            <input type="text" className="home-search" placeholder="Search"/>
                            <button className="home-search-btn">search</button>
                        </form>
                        <div className="item-grid">
                            ghibli <br/> spirited away
                        </div>
                        <div className="home-text u-bold">
                            100% Secure payments with your favorite payment methods <br/>
                            <ul>
                                <li>shopify</li>
                                <li>norton</li>
                                <li>visa</li>
                                <li>mastercard </li>    
                                <li>discover </li>
                                <li>apple pay</li>
                            </ul>
                        </div>
                        <div className="item-grid">
                            totoro <br/> princess mononoke
                        </div>
                        <section className="ghibli-ad">
                            totoro img
                            <br/>
                            the best place to find Ghibli Merchandise, Figures and other Anime related goodies <em>at an affordable price.</em><br/>
                            we have Limited edition products and <strong>Huge sales!</strong>
                            <br/><br/><br/>
                            our goal is to provide quality service to our customers with <strong>Unique & High quality</strong> Anime related items.
                            <br/>
                            <strong>We hope you will enjoy your shopping experience with us. Happy shopping!</strong>
                        </section>
                    </div>
                </main>
            <Footer />
        </React.Fragment>
    )
}

export default Homepage
