import React, {useState, useContext, useEffect} from 'react'
import './ProductPage.css';
import {FaFacebookF, FaTwitter, FaInstagram} from 'react-icons/fa';
import {GoVerified} from 'react-icons/go';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {CartContext} from '../contexts/CartContext';
import secure from '../assets/product-secure.webp';

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
    calculate_rating: function (){
        const totalRating = this.reviews.reduce(function(acc,item){
            return acc + item.rating;
        }, 0);
        const rating = (totalRating/this.reviews.length);
        return rating === Math.round(rating) ? rating : rating.toFixed(1);
    },
    description:{
        features: 'stuffed & plush,soft',
        filling: 'pp cotton',
        material: 'cotton'
    }

}


const ProductPage = () => {
    const {...cart} = useContext(CartContext);
    const [currentImg, setCurrentImg] = useState(product.images[0]);
    const [size, setSize] = useState(product.price[0].size);
    const [original, setOriginal] = useState(product.price[0].original);
    const [offer, setOffer] = useState(product.price[0].offer);

    useEffect(() => {
        const filteredPrice = product.price.filter(item =>{
            return item.size === (Number)(size);
        })
        setOffer(filteredPrice[0].offer);
        setOriginal(filteredPrice[0].original);

    }, [size])

    function offer_rate(){
        return (original - offer)/ original * 100;
    }

    return (
        <div>
            <Navbar/>
            <main className="product-container">

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
                <h1 className="product-title">{product.title}</h1>
                <span className="product-avg">{product.calculate_rating()} stars ( {product.reviews.length} reviews)</span>

                <div className="product-price">
                    <span className="product-sale">sale</span>
                    <span className="product-price-label">${offer}USD</span>
                    <span className="product-price-label strikethrough">${original}USD</span>
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
                        price:product.price.offer
                    })}>
                        {cart.data.length ? "item added to cart" : "add to cart"}
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
                <div className="product-frequently">
                    <h3 className="product-title-sub">frequently bought together</h3>
                </div>
                <h4 className="product-title-sub">description</h4>
                    <em className="product-def">{product.title}</em>
                {Object.entries(product.description).map(entry =>(
                    <div className="product-desc" key={entry}>
                        <strong className="product-desc-key">{entry[0]}</strong>
                        <span className="product-desc-key">{entry[1]}</span>
                    </div>
                ))}

                <h4 className="product-title-sub">Customer Reviews</h4>
                
                
                <details className="product-review">
                <summary><span className="product-em">{product.calculate_rating()}</span>/5</summary>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem voluptatum quod ipsa maiores nihil, soluta velit tempora consequuntur eius. Enim animi, ut ipsum accusamus saepe voluptates repellendus libero dolorem harum!</p>
                </details>
                
                
                <span className="product-avg">{product.calculate_rating()} stars ( 
                {product.reviews.length})</span>
                
                
                {product.reviews.map(item =>(
                    <div className="review" key={item.id}>
                        <strong>{item.rating}</strong>
                        <span>By {item.name}</span>
                        <span> <GoVerified className="verify"/> verified purchase</span>
                        <p>{item.comment}</p>
                    </div>
                ))}
                <div className="product-recommendation">
                    10 random items based on rating
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default ProductPage
