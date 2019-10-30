import React, {useState} from 'react';
import './navbar.css';
import totoro from '../assets/nav-logo.jpg';
import { FaAngleDown, FaAngleUp} from 'react-icons/fa';
import {MdShoppingCart } from 'react-icons/md';
import {IoIosSearch} from 'react-icons/io';
import {GiHamburgerMenu} from 'react-icons/gi';
import 'react-flags-select/css/react-flags-select.css';
import ReactFlagsSelect from 'react-flags-select';


const Navbar = () => {
    const defaultState = () => {
        if(navMobile){
            document.getElementsByTagName('body')[0].style.overflow = 'scroll';
        }
    }
    const [search, setSearch] = useState(false);
    const [subMenu, setSubMenu] = useState(false)
    const [navMobile, setNavMobile] = useState(false)
    // const [cartItem, setCartItem] = useState(10)  
    const [country, setCountry] = useState('US')  
    const [searchText, setSearchText] = useState('')  
    const [char, setChar] = useState('')  

    
    // replace cartItem's state with cart context's length
    //  SearchText will be used to search context

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

                <a href="/" className="nav-logo-box">
                    <img src={totoro} alt="Ghibli Store Logo" className="nav-logo"/>
                    <h1 className="nav-logo-text">Ghibli Store</h1>
                </a>
                <ul className="nav-ul nav-icons">
                    <form className="search" onSubmit = {e =>{
                        e.preventDefault();
                        setSearchText(char);
                        setChar('')
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
                            }}
                        />
                        <input 
                            type="text"
                            autoFocus = {true}
                            value = {char}
                            placeholder={"Search products"}
                            onChange = {(e) => setChar(e.target.value)}
                            className = {search? 'show-form': 'hide-form'}
                         />
                    </form>
                    <span className="cart">
                        <MdShoppingCart className="nav-link nav-icon"/>
                    </span>
                    <ReactFlagsSelect 
                        className = "country"
                        defaultCountry={country} 
                        countries={["US","IN","JP"]} 
                        customLabels = {{"US":"USA", "IN":"INDIA","JP":"JAPAN"}}
                        onSelect = {(country)=>setCountry(country)}
                        />                   
                </ul>
            </div>

            {/* bottom half of navbar */}
            <div id="nav-mobile" className={navMobile? 'nav-show': 'nav-hide'}>
        
                <ul className={`nav-ul mt-${subMenu} `}>
                    <li className="nav-item">
                        Ghibli Movies
                        <span onClick={()=>setSubMenu(!subMenu)} className="nav-sub-toggler"> 
                        {subMenu? <FaAngleUp/> : <FaAngleDown/>} 
                        </span>
                    </li>
                    <div className={`expand-${subMenu}`}>
                            <li className="nav-item">my neighbor totoro</li>
                            <li className="nav-item">Ponyo</li>
                            <li className="nav-item">Spirited away</li>
                            <li className="nav-item">princess mononoko</li>
                            <li className="nav-item">howls moving castle</li>
                            <li className="nav-item">laputa castkel in the sky</li>
                            <li className="nav-item">kikis delivery service</li>
                            <li className="nav-item">the wind rises </li>
                    </div>
                    <li className="nav-item">Accessories</li>
                    <li className="nav-item">Apparel</li>
                    <li className="nav-item">Plushies & Figurines</li>
                    <li className="nav-item account">Account</li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar




// add Navlinks and active-class as active