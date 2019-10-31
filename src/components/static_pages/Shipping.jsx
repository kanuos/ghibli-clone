// static shipping and delivery page

import React from 'react'

const Shipping = () => {
    return (
        <div>
            <h3 className="static-header">shipping & delivery</h3>
            
            <h3 className="static-header text-left">shipping & delivery</h3>
            <p className="static-text">
            We are proud to offer <strong>FREE</strong> international shipping services that currently operate in over 240 countries and islands world wide. Nothing means more to us than bringing our customers great value and service. We will continue to grow to meet the needs of all our customers, delivering a service beyond all expectation anywhere in the world.
            </p>

            <h4 className="static-header--sub">how do you ship packages?</h4>
            <p className="static-text">
            <p>Packages from our warehouse in China will be shipped by ePacket or EMS depending on the weight and size of the product.</p>
            </p>

            <h4 className="static-header--sub">do you ship worldwide?</h4>
            <p className="static-text">
            Yes. We provide free shipping to over 240 countries around the world. However, there are some location we are unable to ship to. If you happen to be located in one of those countries we will contact you.
            </p>

            <h4 className="static-header--sub">what about customs?</h4>
            <p className="static-text">
            We are not responsible for any custom fees once the items have shipped. By purchasing our products, you consent that one or more packages may be shipped to you and may get custom fees when they arrive to your country.
            </p>
            
            <h4 className="static-header--sub">How long does shipping take?</h4>

            <p className="static-text">
            Shipping time varies by location. These are our estimates:
            </p>
            <table>
                <thead>
                    <tr>
                        <td>location</td>
                        <td>*estimated shipping time</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>United States</td>
                        <td>10-30 Business days</td>
                    </tr>
                    <tr>
                        <td>Canada,Europe</td>
                        <td>10-30 Business days</td>
                    </tr>
                    <tr>
                        <td>Australia, New Zealand</td>
                        <td>10-30 Business days</td>
                    </tr>
                    <tr>
                        <td>Mexico, Central America, South America</td>
                        <td>15-30 Business days</td>
                    </tr>
                </tbody>
                <span className="static-text">
                    *This doesn’t include our 2-5 day processing time.
                </span>
            </table>
            
            <h4 className="static-header--sub">will my items be sent in one package?</h4>
            <p className="static-text">
                For logistical reasons, items in the same purchase will sometimes be sent in separate packages,even if you have specified combined shipping. <br/><br/>
                If you have any other questions, please contact us and we will do our best to help you out.
            </p>

            <h4 className="static-header--sub static-header">
                what is your tax policy?
            </h4>
            <p className="static-text">
            A: In order to minimize customers’ costs, we will write a low value description on our shipment package; so that you do not need to pay extra tax. <br/>
            <strong>Import Notice:</strong> <br/> Buyer is responsible for any import taxes charges (if any), at destination port. Buyer will be responsible for paying return shipping costs - for any shipment that is not accepted due to refusal to pay import fees. We can send your order with a low value invoice to help you avoid or reduce these costs, but it is not a guarantee.  
            </p>
        </div>
    )
}

export default Shipping
