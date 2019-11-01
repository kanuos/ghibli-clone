// static size guide page
import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';

const SizeGuide = () => {
    return (
        <div>   
            <Navbar />
            <div className="static-container">
                <h3 className="static-header">size guide</h3>
                <h4 className="static-header--sub">Which size should I order?</h4>
                <p className="static-text">
                We offer different brands, each with different sizing. You can view size charts at the Sizing Guide below every Product
                </p>
            </div>
            <Footer />
        </div>
    )
}

export default SizeGuide
