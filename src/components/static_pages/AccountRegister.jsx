import React from 'react'
import Navbar from '../Navbar';
import Footer from '../Footer'

const AccountRegister = () => {
    return (
        <div>
            <Navbar />
            <div className="static-container">
                <h3 className="static-header">create account</h3>
                <form className="static-form">
                    <input type="text" className="static-input" placeholder="First Name"/>
                    <input type="text" className="static-input" placeholder="Last Name"/>
                    <input type="email" className="static-input" placeholder="Email"/>
                    <input type="password" className="static-input" placeholder="Password"/>
                    <button className="static-btn">Create</button>
                </form>
                <div className="static-link-box">
                    <a href="#" className="static-link">Already have an Account? Login</a>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default AccountRegister
