import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import { CurrencyContext } from '../contexts/CurrencyContext'

import './ProductPage.css';

const YouMayAlso = ({list}) => {
    
    const {...context} = useContext(CurrencyContext);

    return (
        <div className="product-recommendation">
        <h2 className="product-title-sub">You may also like...</h2>
        <article className="card-container-flex">
            {list.map(entry =>(

                <Link to={`/product/${entry.id}`} key={entry.id} className="card">
                    <figure className="card-img-box">
                        <img src={entry.images[0]} alt={entry.title} className="card-img"/>
                    </figure>
                    <span className="card-title">{entry.title}</span>
                    <div className="single-line">
                        <span className="card-price">{context.currencyConverter()}{context.rateConverter(entry.price[0].offer).toFixed(2)}</span>
                        <span className="cancel">
                        {context.currencyConverter()}{context.rateConverter(entry.price[0].original).toFixed(2)}
                        </span>
                    </div>
                </Link>
            ))}
        </article>
    </div>
    )
}

export default YouMayAlso
