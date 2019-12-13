import React from 'react';
import {CartContext} from '../contexts/CartContext';
import {CurrencyContext} from '../contexts/CurrencyContext'
import './pagination_category.css';


const FrequentlyBought = ({list}) => {
    const {...currency} = React.useContext(CurrencyContext);
    const {...cart} = React.useContext(CartContext);

    const suggestItemList = list.slice(0,3);
    return (
        <>
            {suggestItemList.map(item =>(
                    <article className="suggest-card" key={item.id}>
                        <div className="image-wrapper">
                            <img src={item.images[0]} alt={item.title}/>
                        </div>
                        <h4>{item.title}</h4>
                        <div className="suggest-flex">
                            <span>
                                {currency.currencyConverter()}
                                {currency.rateConverter(item.price[0].original.toFixed(2))}
                            </span>
                            <span>
                                {currency.currencyConverter()}
                                {currency.rateConverter(item.price[0].offer.toFixed(2))}
                            </span>
                        </div>
                        <button 
                            onClick={()=>{
                                cart.addNewItem(item);
                            }}
                        >
                            {cart.itemPresentInCart(item).length>0 ?'item added':'add to cart'}
                        </button>
                    </article>
            ))}
        </>
    )
}

export default FrequentlyBought
