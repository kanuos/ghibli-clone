//  static login page
import React from 'react';
import {Link} from 'react-router-dom';
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
                    <Link to="/account/reset" className="static-link">forgot your password?</Link>
                </div>
                <div className="static-link-box">
                    <Link to="/account/register" className="static-link">Create account</Link>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default AccountLogin
