import React, {useState, useContext} from 'react';
import {NavLink, Link, Redirect} from 'react-router-dom';
import './navbar.css';
import totoro from '../assets/nav-logo.jpg';
import { FaAngleDown, FaAngleUp} from 'react-icons/fa';
import {MdShoppingCart } from 'react-icons/md';
import {IoIosSearch} from 'react-icons/io';
import {GiHamburgerMenu} from 'react-icons/gi';
import 'react-flags-select/css/react-flags-select.css';
import ReactFlagsSelect from 'react-flags-select';

import { CurrencyContext } from '../contexts/CurrencyContext';
import { CartContext } from '../contexts/CartContext';


const Navbar = () => {
    
    const {...cart} = useContext(CartContext);
    const {...context} =  useContext(CurrencyContext);
    
    const defaultState = () => {
        if(navMobile){
            document.getElementsByTagName('body')[0].style.overflow = 'scroll';
        }
    }
    const [search, setSearch] = useState(false);
    const [subMenu, setSubMenu] = useState(false)
    const [navMobile, setNavMobile] = useState(false)
    const [country, setCountry] = useState(context.data)  
    const [searchText, setSearchText] = useState('')  
    const [char, setChar] = useState('')  

    

    return (
        <nav>
            {/* top half of navbar */}
            <div className={`nav-default nav-${navMobile}`}>
                <span 
                className='nav-toggler nav-link'
                onClick={()=>{
                    setNavMobile(!navMobile);
                    document.getElementsByTagName('body')[0].style.overflow = 'hidden';
                    defaultState();
                    }}>
                        {navMobile? <span className="nav-close">&times;</span>: <><GiHamburgerMenu/> Menu</>}
                </span>

                <article className="nav-logo-box">
                    <Link to="/">
                        <img src={totoro} alt="Ghibli Store Logo" className="nav-logo"/>
                    </Link>
                        <h1 className="nav-logo-text">Ghibli Store</h1>
                </article>
                <ul className="nav-ul nav-icons">
                    <form className="search" onSubmit = {e =>{
                        e.preventDefault();
                        setSearchText(char);
                        setChar('');
                        defaultState();
                    }}>
                        <IoIosSearch 
                            className={`nav-link nav-temp nav-icon search-icon search-${search}`}
                            onClick={()=>{
                                if(!char){
                                    setSearch(!search)
                                }
                                else{
                                    setSearchText(char);
                                    setChar('')
                                }
                                defaultState();

                            }}
                        />
                        <input 
                            type="text"
                            autoFocus = {true}
                            value = {char}
                            placeholder={"Search Movie Name"}
                            onChange = {(e) => setChar(e.target.value)}
                            className = {search? 'show-form': 'hide-form'}
                         />
                    </form>
                    <Link to = '/mycart' className="cart">
                        {cart.data.length>0 && <span className="cart-full">&nbsp;</span>}
                        <MdShoppingCart className="nav-link nav-icon cart-icon" />
                    </Link>
                    <ReactFlagsSelect 
                        className = "country"
                        defaultCountry={country} 
                        countries={["US","IN","JP"]} 
                        customLabels = {{"US":"USD", "IN":"INR","JP":"YEN"}}
                        onSelect = {(country)=>{
                            setCountry(country);
                            context.getCurrency(country);
                        }}
                        />                   
                </ul>
            </div>
            


            {/* bottom half of navbar */}
            <div id="nav-mobile" className={navMobile? 'nav-show': 'nav-hide'}>
        
                <ul className={`nav-ul mt-${subMenu} `}>
                    <li className="nav-item" onClick={()=>setSubMenu(!subMenu)}>
                        Ghibli Movies
                        <span  className="nav-sub-toggler"> 
                        {subMenu? <FaAngleUp/> : <FaAngleDown/>} 
                        </span>
                    </li>
                    <div className={`expand-${subMenu}`}>
                            <NavLink to="/movie/totoro" className="nav-item">my neighbor totoro</NavLink>
                            <NavLink to="/movie/ponyo" className="nav-item">Ponyo</NavLink>
                            <NavLink to="/movie/spirited" className="nav-item">Spirited away</NavLink>
                            <NavLink to="/movie/mononoke" className="nav-item">princess mononoko</NavLink>
                            <NavLink to="/movie/howls" className="nav-item">howls moving castle</NavLink>
                            <NavLink to="/movie/laputa" className="nav-item">laputa castle in the sky</NavLink>
                            <NavLink to="/movie/kiki" className="nav-item">kikis delivery service</NavLink>
                            <NavLink to="/movie/the_wind_rises" className="nav-item">the wind rises </NavLink>
                    </div>
                    <NavLink activeClassName = "active" to="/category/acc" onClick={()=>{
                        setNavMobile(!navMobile);
                        defaultState();
                        }} className="nav-item">Accessories</NavLink>
                    <NavLink activeClassName="active" to="/category/app" onClick={()=>{
                        setNavMobile(!navMobile);
                        defaultState();
                        }} className="nav-item">Apparel</NavLink>
                    <NavLink activeClassName="active" to="/category/pf" onClick={()=>{
                        setNavMobile(!navMobile);
                        defaultState();
                        }} className="nav-item">Plushies & Figurines</NavLink>
                    <NavLink activeClassName="active" to='/account/login' className="nav-item account">Account</NavLink>
                </ul>
            </div>
            {searchText && <Redirect to={`/movie/${searchText}`} />}
        </nav>
    )
}

export default Navbar




// add Navlinks and active-class as active