// the contact us page

import React from 'react'

const Contact = () => {
    return (
        <div>
            <h3 className="static-header">contact us</h3>
            <form className="static-form">
                <div className="static-flex">
                    <input type="text" className="static-input" placeholder="Name"/>
                    <input type="email" className="static-input" placeholder="Email"/>
                </div>
                <input type="text" className="static-input" placeholder="Phone Number"/>
                <textarea  className="static-message"></textarea>
                <button className="static-btn">send</button>
            </form>
        </div>
    )
}

export default Contact
