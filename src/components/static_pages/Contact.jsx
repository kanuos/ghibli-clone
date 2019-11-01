// the contact us page
import React from 'react';
import Footer from '../Footer';
import Navbar from '../Navbar';

const Contact = () => {
    return (
        <div>
            <Navbar />
            <div className="static-container">
                <h3 className="static-header">contact us</h3>
                <form className="static-form">
                    <div className="static-flex-col-to-row">
                        <input type="text" className="static-input" placeholder="Name"/>
                        <input type="email" className="static-input" placeholder="Email"/>
                    </div>
                    <input type="text" className="static-input" placeholder="Phone Number"/>
                    <textarea  className="static-message"></textarea>
                    <button className="static-btn">send</button>
                </form>
            </div>
            <Footer />
        </div>
    )
}

export default Contact
