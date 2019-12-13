import React, {useState, useEffect, useContext} from 'react';
import {Link} from 'react-router-dom';
import { CurrencyContext } from '../contexts/CurrencyContext';
import './pagination_category.css';
import ListView from './ListView';

const NUMBER_PER_PAGES = 20;

const Pagination = ({list}) => {
    let [currentpageNumber, setCurrentPageNumber] = useState(0);
    let [previousPageNumber, setPreviousPageNumber] = useState(undefined);
    let [nextPageNumber, setNextPageNumber] = useState(currentpageNumber + 1);
    const [products, setProducts] = useState(list.slice(currentpageNumber * NUMBER_PER_PAGES, nextPageNumber*NUMBER_PER_PAGES))
    
    const NUMBER_OF_PAGES = Math.ceil(list.length/NUMBER_PER_PAGES);

    useEffect(()=>{
        setProducts(list.slice(currentpageNumber * NUMBER_PER_PAGES, nextPageNumber*NUMBER_PER_PAGES))
    },[currentpageNumber, previousPageNumber, nextPageNumber, list])

    const {...currency} = useContext(CurrencyContext);
    return (
        <div>            
            <ol className="category-list">
                {products.map(item =>{
                return <Link to={`/product/${item.id}`} className="list-card" key={item.id}>
                    <ListView 
                        image = {item.images[0]}
                        name = {item.name}
                        size = {item.price[0].size}
                        currency = {currency.currencyConverter()}
                        original = {currency.rateConverter(item.price[0].original).toFixed(2)}
                        offer = {currency.rateConverter(item.price[0].offer).toFixed(2)}
                    />
                </Link>
                })}
            </ol>
            <section className="pagination-btn-box">
            {previousPageNumber > 0 && 
                <button className="pagination-btn" onClick={()=>{
                    if(previousPageNumber >= 1){
                        if(nextPageNumber > 2){
                            setNextPageNumber(nextPageNumber - 1)
                        }
                        else{
                            setNextPageNumber(1)
                        }
                        setPreviousPageNumber(previousPageNumber - 1)
                        setCurrentPageNumber(currentpageNumber - 1)
                    }
                    else{
                        setPreviousPageNumber(undefined)
                    }
                }}>
                    PREV
                </button>
            }
              <span className="pagination-btn">
                Current Page : {currentpageNumber + 1} <br/>
              </span>  
            
            {nextPageNumber < NUMBER_OF_PAGES &&
                <button className="pagination-btn" onClick={()=>{
                    if(nextPageNumber * NUMBER_OF_PAGES){
                        if(previousPageNumber!==undefined){
                            setPreviousPageNumber(previousPageNumber + 1)
                        }
                        else{
                            setPreviousPageNumber(1)
                        }
                        setNextPageNumber(nextPageNumber + 1)
                        setCurrentPageNumber(currentpageNumber + 1)
                    }
                    else{
                        setNextPageNumber(undefined)
                    }
                }}>
                NEXT
                </button>
            }
            </section>
        </div>
    )
}

export default Pagination
