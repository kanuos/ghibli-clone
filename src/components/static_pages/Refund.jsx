// static webpage for returns and refunds
import React from 'react'
import Footer from '../Footer';
import Navbar from '../Navbar';

const Refund = () => {
    return (
        <div>
            <Navbar />
            <div className="static-container">

                <h3 className="static-header">Returns & refunds</h3>
                <h4 className="static-header--sub">returns</h4>
                <p className="static-text">
                Our policy lasts 90 days. If 90 days have gone by since your purchase, unfortunately we can’t offer you a refund or exchange. <br/>
                To be eligible for a return, your item must be unused and in the same condition that you received it. It must also be in the original packaging. <br/>
                Several types of goods are exempt from being returned. Perishable goods such as food, flowers, newspapers or magazines cannot be returned. We also do not accept products that are intimate or sanitary goods, hazardous materials, or flammable liquids or gases. <br/>
                <br/>
                Additional non-returnable items: <br/> Gift cards<br/>Downloadable software products<br/>Some health and personal care items<br/><br/>To complete your return, we require a receipt or proof of purchase.<br/><br/>Please do not send your purchase back to the manufacturer.<br/><br/>There are certain situations where only partial refunds are granted (if applicable)Book with obvious signs of useCD, DVD, VHS tape, software, video game, cassette tape, or vinyl record that has been openedAny item not in its original condition, is damaged or missing parts for reasons not due to our errorAny item that is returned more than 90 days after delivery
                </p>


                <h4 className="static-header--sub">refunds (if applicable)</h4>
                <p className="static-text">
                Once your return is received and inspected, we will send you an email to notify you that we have received your returned item. We will also notify you of the approval or rejection of your refund. <br/> If you are approved, then your refund will be processed, and a credit will automatically be applied to your credit card or original method of payment, within a certain amount of days.<br/><br/>Late or missing refunds (if applicable)If you haven’t received a refund yet, first check your bank account again.<br/>Then contact your credit card company, it may take some time before your refund is officially posted.Next contact your bank. There is often some processing time before a refund is posted.If you’ve done all of this and you still have not received your refund yet, please contact us at support@ghibli.store.<br/><br/> 
                
                </p>
                
                <h4 className="static-header--sub">Sale items (if applicable)</h4>
                <p className="static-text">
                    Only regular priced items may be refunded, unfortunately sale items cannot be refunded.Exchanges (if applicable)If for any reason you would like to exchange your product, perhaps for a different size in clothing. You must contact us first and we will guide you through the steps. <br/><br/>
                    Please do not send your purchase back to us unless we authorise you to do so.
                </p>
                <h4 className="static-header--sub">gifts</h4>
                <p className="static-text">
                    If the item was marked as a gift when purchased and shipped directly to you, you’ll receive a gift credit for the value of your return. Once the returned item is received, a gift certificate will be mailed to you.<br/><br/>If the item wasn’t marked as a gift when purchased, or the gift giver had the order shipped to themselves to give to you later, we will send a refund to the gift giver and he will find out about your return.
                </p>
                <h4 className="static-header--sub">
                    Shipping
                </h4>
                <p className="static-text">
                    You will be responsible for paying for your own shipping costs for returning your item. Shipping costs are non-refundable. If you receive a refund, the cost of return shipping will be deducted from your refund.<br/>Depending on where you live, the time it may take for your exchanged product to reach you, may vary.<br/>If you are shipping an item over $75, you should consider using a trackable shipping service or purchasing shipping insurance. We don’t guarantee that we will receive your returned item.<br/>

                </p>
            </div>
            <Footer />
        </div>
    )
}

export default Refund
