import React from 'react'
import './footer.css';
import {FaPaypal, FaFacebookF, FaInstagram} from 'react-icons/fa';

const Footer = () => {
    return (
        <footer>
            <section className="footer-container">

                <article className="footer-block">
                    <h3 className="footer-header">information</h3>
                    <span className="footer-text">
                        <span className="footer-link">contact us</span>
                    </span>
                    <p className="footer-text">
                        returns & refunds
                    </p>
                    <p className="footer-text">
                        <span className="footer-link">
                        shipping & delivery

                        </span>
                    </p>
                    <p className="footer-text">
                        <span className="footer-link">
                        size guide

                        </span>
                    </p>
                    <p className="footer-text">
                        <span className="footer-link">
                        privacy policy

                        </span>
                    </p>
                </article>

                <article className="footer-block">
                    <h3 className="footer-header">buyer protection: money back guarantee!</h3>
                    <p className="footer-text">
                    We are here to make sure that you are 100% satisfied with your purchase! If, for any reason, you are unhappy with your purchase, please contact support and we will take it back!
                    </p>
                    <br/>
                    <p className="footer-text">
                    Ghibli Store Is All About The Service :)
                    </p>
                </article>
                <article className="footer-block">
                    <h3 className="footer-header text-center">follow us</h3>
                    <p className="footer-text text-center">
                        <FaFacebookF className="footer-icon footer-link"/>
                        <FaInstagram className="footer-icon footer-link"/>
                    </p>
                </article>
                <article className="footer-block">
                    <h3 className="footer-header">be in the know</h3>
                    <p className="footer-text">
                        Sign up for the latest news, offers and styles
                    </p>
                    <div className="footer-form">
                        <input type="text" placeholder="Your email"/>
                        <span className="footer-btn">&gt;</span>
                    </div>
                </article>
            </section>
            <div className="footer-sign">
                <p className="footer-text--mini">
                    Not copyrighted. Clone of official <span className="footer-link">Ghibli store</span>
                </p>
                <FaPaypal className="footer-icon"/>
            </div>
        </footer>
    )
}

export default Footer
