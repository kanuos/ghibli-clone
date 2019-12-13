import React, {useState, useContext} from 'react';
import {Link, Redirect} from 'react-router-dom';
import './home.css';
import logo from '../assets/totoro_home.webp';
import Footer from './Footer';
import Navbar from './Navbar';
import Carousel from './Carousel';
import ListView from './ListView';

import {products} from '../Productdata';
import { CurrencyContext } from '../contexts/CurrencyContext';



const Homepage = () => {
    const {...currency} = useContext(CurrencyContext);
    const [sale, setSale] = useState(true);
    const [searchText, setSearchText] = useState('');
    const [text, setText] = useState('')

    const totoro = products.filter(item => item.movie.toLocaleLowerCase() === 'totoro').slice(3,6);
    // const spirit = products.filter(item => item.movie.toLocaleLowerCase() === 'spirited').slice(0,3);
    const ghibli = products.slice(12,15);
    // const mononoke = products.filter(item => item.movie.toLocaleLowerCase()==='mononoke');

    const iterateOverProducts = [
        {
            id:1,
            label: 'Ghibli',
            data: ghibli,
            movie:'totoro',
            url: `//cdn.shopify.com/s/files/1/1962/4445/collections/560196_480x480.jpg?v=1494720057`
        },
        {
            id:2,
            label: 'My neighbor totoro',
            data: totoro,
            movie:'totoro',
            url: '//cdn.shopify.com/s/files/1/1962/4445/collections/Untitl3ed_480x480.jpg?v=1507807958'
        },
        {
            id:3,
            label: 'Spirited Away',
            data: totoro,
            movie:'spirited',
            url:'//cdn.shopify.com/s/files/1/1962/4445/collections/b3b29a80937bdba054648cfeb1ffa12c_1e63eb44-4c42-4069-84c6-9a9dac4b9328_480x480.jpg?v=1507807736'
        },
        {
            id:4,
            label: 'Princess Mononoke',
            data: totoro,
            movie:'mononoke',
            url:'//cdn.shopify.com/s/files/1/1962/4445/collections/princess-mononoke-hime-cool-hd-wallpaper-princess-mononoke-879793542_480x480.jpg?v=1507807446'
        },
    ]


    return (
        <React.Fragment>
            <Navbar />
                <main>
                    {sale && <div className="sale">
                        <p className="sale-text">
                        sale up to 50% off. free shipping 
                        </p>
                        <span 
                            className="sale-close"
                            onClick = {()=> setSale(!sale)}>
                            &times;
                        </span>
                    </div>}
                    <Carousel />
                    <div className="home-container">
                        
                        <form 
                            className="home-search-box"
                            onSubmit = {e => {
                                e.preventDefault();
                                if(text){
                                    setSearchText(text)
                                    setText('')
                                }
                            }}
                        >
                            <input 
                                type="text" 
                                className="home-search" 
                                placeholder="Search"
                                value={text}
                                onChange = {e => setText(e.target.value)}
                            />
                            <button className="home-search-btn">Search</button>
                        </form>


                    <div className="home-grid-container">
                        {iterateOverProducts.map(entry => 
                            (<section className="home-grid" key={entry.id}>
                                <Link to={`/movie/${entry.movie}`} className="grid-block grid-main">
                                        <img src={entry.url} alt={entry.label} className="grid-main-img"/>
                                        <h2 className="grid-label">
                                            {entry.label}
                                        </h2>
                                        <span className="view-all">view all</span>
                                </Link>
                                {entry.data.map(item =>(
                                    <Link to={`/product/${item.id}`} className="list-card grid-block" key={item.id}>
                                        <ListView 
                                        image = {item.images[0]}
                                        name = {item.name}
                                        size = {item.price[0].size}
                                        currency = {currency.currencyConverter()}
                                        original = {currency.rateConverter(item.price[0].original).toFixed(2)}
                                        offer = {currency.rateConverter(item.price[0].offer).toFixed(2)}
                                        />
                                </Link> ))}
                                    
                                {entry.id === 2 && 
                                    <div className="home-grid-advertisement">
                                        <h3>
                                            100% Secure payments with your favorite payment methods
                                        </h3>
                                        <img src="https://cdn.shopify.com/s/files/1/1962/4445/files/Ghibli.store_8da090ae-dabc-4432-8b30-f69e3539f24b.png" alt="secure payment"/>
                                    </div>
                                }

                        </section>))}
                        <hr/>
                        <section className="ghibli-slogan">
                            <img src={logo} alt="totoro and chibi" className="ghibli-slogan-img"/>
                        
                            <h4 className="slogan">
                                we love everything ghibli!
                            </h4>
                            <div className="slogan-text">
                                <p>The best place to find Ghibli Merchandise,Figures and other Anime related goodies <em>at an affordable price.</em>
                                    <br/>We have Limited edition products and <strong>Huge sales!</strong>
                                </p>
                                <p>
                                    Our goal is to provide quality service to our customers with <strong>Unique &amp; High quality </strong> Anime related items. <br/>
                                        <strong>
                                            We hope you will enjoy your shopping experience with us. Happy Shopping!
                                        </strong>
                                </p>

                            </div>
                        </section>
                    </div>

                </div>
                </main>
            <Footer />

            {searchText && <Redirect to={`/movie/${searchText}`} />}

        </React.Fragment>
    )
}

export default Homepage
