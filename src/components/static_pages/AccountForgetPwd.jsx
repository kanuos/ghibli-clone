//  static login page
import React from 'react';
import {Link} from 'react-router-dom'
import Navbar from '../Navbar';
import Footer from '../Footer'

const AccountForgetPwd = () => {
    return (
        <div>
            <Navbar />
            <div className="static-container">
                <h3 className="static-header">reset your password</h3>
                <form className="static-form">
                <p className="static-text">
                    We will send you an email to reset your password.
                </p>
                    <input type="email" className="static-input" placeholder="Email"/>
                    <button className="static-btn">Submit</button>
                </form>
                <div className="static-link-box">
                    <Link to="/" className="static-link">cancel</Link>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default AccountForgetPwd
