import React from 'react';

const ListView = props => {
    return (
        <>
            <div className="img-box">
                    <img src={props.image} alt={props.name} className="item-img"/>
                    <span className="sale-tag">SALE</span>
                </div>
            <div className="list-item-text">
                    <h1 className="list-item-title">{props.name}</h1>
                    <h1 className="list-item-title">Size : {props.size}{typeof props.size === "number"? 'cm' : ''}</h1>
                    <ul className="flex-line">
                        <li className="linethrough">{props.currency}{props.original}</li>
                        
                        <li>{props.currency}{props.offer}</li>
                    </ul>
            </div>
        </>
    )
}

export default ListView