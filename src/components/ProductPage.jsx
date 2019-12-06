import React, {useState, useContext, useEffect} from 'react'
import './ProductPage.css';
import {FaFacebookF, FaTwitter, FaInstagram} from 'react-icons/fa';
import {GoVerified} from 'react-icons/go';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {CartContext} from '../contexts/CartContext';

import secure from '../assets/product-secure.webp';
import { CurrencyContext } from '../contexts/CurrencyContext';


/**
 * ************************************************************************************
 * ************************************************************************************
 * ************************************************************************************
 * ************************************************************************************
 */

const product = {
    id: 100,
    images : [
        'https://cdn.shopify.com/s/files/1/0014/2648/9388/products/bluefin-home-decor-studio-ghibli-my-neighbor-totoro-3d-puzzle-5598257414188_2000x2000.jpg?v=1565004823',
        'https://cdn.shopify.com/s/files/1/1962/4445/products/product-image-180644881_1024x1024.jpg?v=1535371369',
        'https://ae01.alicdn.com/kf/HTB1I.GKKFXXXXcHXFXXq6xXFXXXF/221698128/HTB1I.GKKFXXXXcHXFXXq6xXFXXXF.jpg'
    ],
    title: 'Totoro plush',
    category: 'plush figurine',
    price: [
        {
            size: 30,
            original:27.00,
            offer: 13.95
        },
        {
            size: 40,
            original:45.00,
            offer: 23.95
        },
        {
            size: 50,
            original:60.00,
            offer: 35.95
        },
    ],
    reviews: [
        {
            id: 1,
            name:'Rimi Chowdhury',
            rating: 5,
            comment: 'Very cute plush! Good quality',
            date: 12345,
        },
        {
            id: 2,
            name:'Drisana Mukherjee',
            rating: 5,
            comment: 'He\'s so sweet and cute. Perfect for my Ghibli collection. I love him so much.',
            date: 14445,

        },    
        {
            id: 3,
            name:'Migu',
            rating: 4,
            comment: 'la la la la la la',
            date: 22345,

        },
        {
            id: 4,
            name:'Gidli',
            rating: 4.5,
            comment: 'tra la la la la la la laaa',
            date: 12445,

        },    
    ],
    
    description:{
        features: 'stuffed & plush,soft',
        filling: 'pp cotton',
        material: 'cotton',
        summary: `Imagine how fun it would be to have your very own  Life Size Totoro Plush Toy This lovable Forest Guardian from My Neighbor Totoro would be a great present for yourself… or your favorite Studio Ghibli fan.

        This Totoro is SOOOOOO big! It can even be used as a piece of furniture! Curl up on Totoro’s lap on those bad days…. and everything will be ok.
        
        The rest of these huge stuffed Totoro’s are cuddly and soft, and they always wear a huge smile.  The perfect thing for your bedroom or dorm room, to keep you happy and feeling safe and protected. Everyone knows that when Totoro is around, nothing bad can happen. Gentle Totoro makes a fierce ROAR and keeps the bad away!
        
        You can even use it as a Totoro Pillow! And have a restful nap like Mei did when she found him in the forest. Just don’t fall in when he snores!
        
        Never be alone again! Totoro will keep you company day and night! These huge Totoros are perfect for hugging!
        
        `
    }

}


const frequently = [
    {
        id: 1010,
        images : [
            'https://cdn.shopify.com/s/files/1/0014/2648/9388/products/bluefin-home-decor-studio-ghibli-my-neighbor-totoro-3d-puzzle-5598257414188_2000x2000.jpg?v=1565004823'
        ],
        title: 'meiko plush',
        category: 'plush figurine',
        price: [
            {
                size: 30,
                original:127.00,
                offer: 113.95
            },
            {
                size: 40,
                original:145.00,
                offer: 123.95
            },
            {
                size: 50,
                original:260.00,
                offer: 235.95
            },
        ],
    },
    {
        id: 1210,
        images : [
            'https://cdn.shopify.com/s/files/1/1962/4445/products/product-image-180644881_1024x1024.jpg?v=1535371369',
            
        ],
        title: ' plush',
        category: 'plush figurine',
        price: [
            {
                size: 30,
                original:42.00,
                offer: 23.95
            },
            {
                size: 40,
                original:55.00,
                offer: 43.95
            },
            {
                size: 50,
                original:80.00,
                offer: 55.95
            },
        ],
    },
    {
        id: 3010,
        images : [
            'https://ae01.alicdn.com/kf/HTB1I.GKKFXXXXcHXFXXq6xXFXXXF/221698128/HTB1I.GKKFXXXXcHXFXXq6xXFXXXF.jpg'
        ],
        title: 'Totoro plush',
        category: 'plush figurine',
        price: [
            {
                size: 30,
                original:27.00,
                offer: 13.95
            },
            {
                size: 40,
                original:45.00,
                offer: 23.95
            },
            {
                size: 50,
                original:60.00,
                offer: 35.95
            },
        ],
    },
]
// jajajajaja
const also_like = [
    {
        id: 1,
        images : [
            'https://www.thesun.co.uk/wp-content/uploads/2019/12/NINTCHDBPICT000534055070.jpg'
        ],
        title: 'zlatan',
        category: 'plush figurine',
        price: [
            {
                size: 30,
                original:127.00,
                offer: 113.95
            },
            {
                size: 40,
                original:145.00,
                offer: 123.95
            },
            {
                size: 50,
                original:260.00,
                offer: 235.95
            },
        ],
    },
    {
        id: 2,
        images : [
            'https://cdn.shopify.com/s/files/1/1962/4445/products/product-image-180644881_1024x1024.jpg?v=1535371369',
            
        ],
        title: ' messi',
        category: 'plush figurine',
        price: [
            {
                size: 30,
                original:42.00,
                offer: 23.95
            },
            {
                size: 40,
                original:55.00,
                offer: 43.95
            },
            {
                size: 50,
                original:80.00,
                offer: 55.95
            },
        ],
    },
    {
        id: 3,
        images : [
            'https://ae01.alicdn.com/kf/HTB1I.GKKFXXXXcHXFXXq6xXFXXXF/221698128/HTB1I.GKKFXXXXcHXFXXq6xXFXXXF.jpg'
        ],
        title: 'ronaldo',
        category: 'plush figurine',
        price: [
            {
                size: 30,
                original:27.00,
                offer: 13.95
            },
            {
                size: 40,
                original:45.00,
                offer: 23.95
            },
            {
                size: 50,
                original:60.00,
                offer: 35.95
            },
        ],
    },
    {
        id: 4,
        images : [
            'https://ae01.alicdn.com/kf/HTB1I.GKKFXXXXcHXFXXq6xXFXXXF/221698128/HTB1I.GKKFXXXXcHXFXXq6xXFXXXF.jpg'
        ],
        title: 'lewandowski',
        category: 'plush figurine',
        price: [
            {
                size: 30,
                original:27.00,
                offer: 13.95
            },
            {
                size: 40,
                original:45.00,
                offer: 23.95
            },
            {
                size: 50,
                original:60.00,
                offer: 35.95
            },
        ],
        },
    {
        id: 5,
        images : [
            'https://ae01.alicdn.com/kf/HTB1I.GKKFXXXXcHXFXXq6xXFXXXF/221698128/HTB1I.GKKFXXXXcHXFXXq6xXFXXXF.jpg'
        ],
        title: 'neymar',
        category: 'plush figurine',
        price: [
            {
                size: 30,
                original:27.00,
                offer: 13.95
            },
            {
                size: 40,
                original:45.00,
                offer: 23.95
            },
            {
                size: 50,
                original:60.00,
                offer: 35.95
            },
        ],
    },
]

/**
 * ************************************************************************************
 * ************************************************************************************
 * ************************************************************************************
 * ************************************************************************************
 */



const ProductPage = (props) => {
    const {...cart} = useContext(CartContext);
    const {...context}  = useContext(CurrencyContext);
    const [currentImg, setCurrentImg] = useState(product.images[0]);
    const [size, setSize] = useState(product.price[0].size);
    const [original, setOriginal] = useState(product.price[0].original);
    const [offer, setOffer] = useState(product.price[0].offer);

    
    // calculates the discount offered in percentage
    function offer_rate(){
        return (original - offer)/ original * 100;
    }
    
    function calculate_rating(){
        const totalRating = product.reviews.reduce(function(acc,item){
            return acc + item.rating;
        }, 0);
        const rating = (totalRating/product.reviews.length);
        return rating === Math.round(rating) ? rating : rating.toFixed(1);
    }


    useEffect(() => {
        const filteredPrice = product.price.filter(item =>{
            return item.size === (Number)(size);
        })
        setOffer(filteredPrice[0].offer);
        setOriginal(filteredPrice[0].original);

    }, [size])

    return (
        <div>
            <Navbar/>
            <main className="product-container">
                <div className="product-wrapper">

                    <img src={currentImg} alt="product" className="product-img"/>

                    <div className="product-thumbnail-container">
                        {product.images.map(item => (
                            <img src={item} 
                            key = {item}
                            alt="product" 
                            className={`product-thumbnail`}
                            onClick = {()=>{
                                setCurrentImg(item);
                            }}
                            />
                        ))}
                    </div> 
                    <div className="product-detail">

                            <h1 className="product-title">{product.title}</h1>
                            <span className="product-avg">{calculate_rating()} stars ( {product.reviews.length} reviews)</span>
                            <div className="product-price">
                                <span className="product-sale">sale</span>
            <span className="product-price-label">{context.currencyConverter()}{context.rateConverter(offer).toFixed(2)}</span>
                                <span className="product-price-label strikethrough">{context.currencyConverter()}{context.rateConverter(original).toFixed(2)}</span>
                                <span className="product-offer">You save {Math.round(offer_rate())}%</span>
                            </div>
                            
                            <div className="product-line">
                                with free shipping!
                            </div>
                            <div className="product-cart-cta">
                                <button 
                                    className = "add-btn"
                                    onClick = {()=> cart.addNewItem({
                                    id: product.id,
                                    name: product.title,
                                    price:context.rateConverter(offer)
                                })}>
                                {cart.itemPresentInCart(
                                    {
                                        id: product.id,
                                        name: product.title,
                                        price:context.rateConverter(offer)
                                    }
                                ).length > 0 ? "item added to cart" : "add to cart"}
                                </button>
                            </div>

                            {cart.data.length>0 && 
                            <div className="product-quantity">
                                Quantity 
                                <div className="btn-group">
                                    <button className="update-btn" 
                                    onClick = {()=>cart.updateItemQuantity(product,'sub')}>&mdash;</button>
                                    <span className="update-btn">
                                    {cart.data[0].quantity}
                                    </span>
                                    <button className="update-btn"
                                    onClick = {()=>cart.updateItemQuantity(product,'add')}> &#65291;
                                    </button>
                                </div>
                            </div>
                            }
                            <div className="product-type">
                                <select 
                                    className="product-select"
                                    onChange = {(e)=> setSize(e.target.value)}
                                >
                                    {product.price.map(item =>{
                                    return <option 
                                        key={item.size} 
                                        value={item.size}>
                                            {item.size}cm
                                        </option>
                                    })}
                                </select>
                            </div>
                            <div className="security">
                                <img src={secure} alt="Transaction security"/>
                            </div>
                            <span className="product-social">
                                share <FaFacebookF /> <FaTwitter/> <FaInstagram/>
                            </span>
                        </div>
                    </div>

{/* Frequently bought together section */}

                <div className="product-frequently">
                    <h3 className="product-title-sub">frequently bought together</h3>
                    <div className="card-container">
                        {frequently.map(item =>(
                            <section key={item.id} className="card frequent-card">
                                <figure className="card-img-box">
                                    <img src={item.images[0]} alt={item.title} className="card-img"/>
                                </figure>
                                <span className="card-title">{item.title}</span>
                                <span>{context.currencyConverter()}{context.rateConverter(item.price[0].offer).toFixed(2)}</span>
                                <span className="cancel">
                                {context.currencyConverter()}{context.rateConverter(item.price[0].original).toFixed(2)}
                                </span>
                                <button 
                                    className = "add-btn"
                                    onClick = {()=> cart.addNewItem({
                                    id: item.id,
                                    name: item.title,
                                    price:context.rateConverter(item.price[0].offer)
                                })}>
                                    {cart.itemPresentInCart(item).length > 0 ? "item added to cart" : "add to cart"}
                                </button>

                            </section>
                        ))}
                    </div>
                </div>
                <h4 className="product-title-sub">description</h4>
                    <em className="product-def">{product.title}</em>
                    {product.description.summary && <p className="product-text">{product.description.summary}</p>}
                {Object.entries(product.description).map(entry =>(
                    <div className="product-desc" key={entry}>
                        {entry[0]!== 'summary' && <>
                        <strong className="product-desc-key">{entry[0]}</strong>
                        <span className="product-desc-key">{entry[1]}</span> </>}
                    </div>
                ))}

                <h4 className="product-title-sub">Customer Reviews</h4>
                <hr/>
                
                <details className="product-review">
                <summary><span className="product-em">{calculate_rating()}</span>/5</summary>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem voluptatum quod ipsa maiores nihil, soluta velit tempora consequuntur eius. Enim animi, ut ipsum accusamus saepe voluptates repellendus libero dolorem harum!</p>
                </details>
                
                
                <span className="product-avg">{calculate_rating()} stars ( 
                {product.reviews.length})</span>
                
                
                {product.reviews.map(item =>(
                    <div className="review" key={item.id}>
                        <strong>{item.rating}</strong>
                        <span>By &nbsp;<span className="verify">{item.name}</span></span>
                        <span className="verify"> <GoVerified className="verify"/> verified purchase</span>
                        <p className="text-muted">{item.comment}</p>
                    </div>
                ))}

{/* you may also like section */}

                <div className="product-recommendation">
                    <h2 className="product-title-sub">You may also like...</h2>
                    <article className="card-container-flex">
                        {also_like.map(entry =>(
                            <section key={entry.id} className="card">
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
                            </section>
                        ))}
                    </article>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default ProductPage
