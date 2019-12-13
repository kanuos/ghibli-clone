import React, {useState, useContext, useEffect} from 'react'
import {products} from '../Productdata';
import './Product.css';
import logo from '../assets/product-secure.webp';
import Navbar from './Navbar';
import Footer from './Footer';
import FrequentlyBought from './FrequentlyBought';
import YouMayAlso from './You_may_also';
import {CurrencyContext} from '../contexts/CurrencyContext';
import { CartContext } from '../contexts/CartContext';

const ProductPageRender = props => {
    const searchId = props.match.params.id;
    const product = products.filter(item => item.id === searchId)[0];
    
    const {...currency} = useContext(CurrencyContext);
    const {...cart} = useContext(CartContext);

    const [currentImage, setImage] = useState(products.filter(item => item.id === searchId)[0].images[0]);
    const [original, setOriginal] = useState(product.price[0].original);
    const [offer, setOffer] = useState(product.price[0].offer);
    const [size, setSize] = useState(product.price[0].size);
    const [quantity, setQuantity] = useState(1);
    
    useEffect(()=>{

    },[]);


    useEffect(()=>{
        setImage(products.filter(item => item.id === searchId)[0].images[0]);
        document.documentElement.scrollTo(0,0);

    },[props.match.params.id, searchId])

    useEffect(()=>{
    },[currentImage])


    useEffect(()=>{
        const currentPriceObject = product.price.filter(item =>{
            return item.size.toString() === size.toString()
        });

        setOffer(currentPriceObject[0].offer);
        setOriginal(currentPriceObject[0].original);
    },[size, product.price]);


    const averageRating = () =>{
        const val = product.review.reduce((acc, cur)=>{
            return acc+cur.rating
        },0);
        return Math.ceil(val/product.review.length);
    }
    
    const starPrints =number => {
        let str ='';
        for(let i=1;i<number;i++){
            str+= '★';
        }
        return str;
    }
    
    const also_like = products.filter(item => item.id !== product.id && item.category === product.category);
   
    const list = products.filter(item => item.id !== product.id).slice(0,15);

    return (
        <>
        <Navbar />
        <main className="product-main">
            <div className="product-container">
                <section className="product-image-box">
                    <img src={currentImage} alt={product.title} className="product-image"/>
                </section>

                <section className="thumbnail-container">
                    {product.images.map((img,key) => (
                        <div className="thumb-box" key={key}> 
                            <img 
                                src={img} 
                                alt="product-thumbnail" 
                                className="thumbnail-image"
                                onClick = {()=>setImage(img)}
                            />
                        </div>
                    ))}
                </section>

                <section className="product-info">
                    <h1 className="product-title">
                        {product.title}
                    </h1>
                    <div>
                        {/* replace this section with react-star-component */}
                        {product.review && 
                            <span className="flex-center">
                                <span className="star">
                                    {starPrints(averageRating())}
                                </span>
                                <span className="review-count">
                                    ({product.review.length} reviews)
                                </span>
                            </span>
                        }
                    </div>
                    <div className="flex-line-alt">
                        <div className="flex-line">
                            <span className="sale-badge">sale</span>
                            <span className="price">
                                {currency.currencyConverter()}{currency.rateConverter(offer).toFixed(2)}
                            </span>
                            <span className="price linethrough">
                                {currency.currencyConverter()}{currency.rateConverter(original).toFixed(2)}
                            </span>
                        </div>
                        <span className="discount-text">
                            you save {Math.round((original-offer)*100/original)}%
                        </span>
                    </div>
                    <span className="bold-text">with free shipping</span>

                    <article className="select-container">
                        <div className="flex-line">
                            {product.price.length>1 && 
                                (<div className="select-wrapper">
                                    <legend>Size</legend>
                                    <select 
                                        className="size-select"
                                        onChange = {(e)=>setSize(e.target.value)}
                                    >
                                        {product.price.map((entry,key) => (
                                            <option value={entry.size} key={key}>
                                                {typeof entry.size === 'number' ? `${entry.size} cm` : `${entry.size.toUpperCase()}`}
                                            </option>
                                        ))}
                                    </select>
                                </div>)
                            }
                            {!cart.itemPresentInCart(product).length>0 && 
                            <div className="select-wrapper">    
                                <legend className="quantity-legend">
                                    quantity
                                </legend>
                                 <div className="button-box">
                                    <button 
                                    onClick ={()=>{
                                        if(quantity >1){
                                            setQuantity(quantity - 1)
                                        }
                                    }}
                                    >-</button>
                                    <span>{quantity}</span>
                                    <button 
                                        onClick ={()=>{
                                            if(quantity <10){
                                                setQuantity(quantity + 1)
                                            }
                                        }}
                                    >+</button>
                                </div>
                            </div>}
                        </div>
                        <button 
                            className="add-btn"
                            onClick={()=>{
                                const temp_product = {...product};
                                temp_product.price = offer;
                                temp_product.size = size;
                                temp_product.images = product.images[0];
                                cart.addNewItem(temp_product, quantity);
                            }}
                        >
                            {cart.itemPresentInCart(product).length>0 ?'item added to cart':'add to cart'}
                        </button>
                        <div className="security-box">
                            <img src={logo} alt="secure transactions"/>
                        </div>
                    </article>
                </section>
            </div>
            <h2 className="category-heading">frequently bought together...</h2>
            <section className="frequent">
                <FrequentlyBought list = {also_like} />
            </section>
            <YouMayAlso list={list} />
    </main>
    <Footer />
    </>
    )
}

export default ProductPageRender
