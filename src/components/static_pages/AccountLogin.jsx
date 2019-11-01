//  static login page
import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer'

const AccountLogin = () => {
    return (
        <div>
            <Navbar />
            <div className="static-container">
                <h3 className="static-header">login</h3>
                <form className="static-form">
                    <input type="email" className="static-input" placeholder="Email"/>
                    <input type="password" className="static-input" placeholder="Password"/>
                    <button className="static-btn">Sign In</button>
                </form>
                <div className="static-link-box">
                    <a href="#" className="static-link">forgot your password?</a>
                </div>
                <div className="static-link-box">
                    <a href="#" className="static-link">Create account</a>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default AccountLogin
