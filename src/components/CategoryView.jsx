import React from 'react'
import {products} from '../Productdata';
import Navbar from './Navbar';
import Footer from './Footer';
import Pagination from './Pagination';


const getProductList = cat =>{
    switch(cat){
        case 'app' : return products.filter(item => item.category === 'app');
        case 'acc' : return products.filter(item => item.category === 'acc');
        case 'pf' : return products.filter(item => item.category === 'pf');
        default : return products;
}
}
const getCategory = cat =>{
    switch(cat){
        case 'app' : return 'apparel';
        case 'acc' : return 'accessories';
        case 'pf' : return 'plush & figurines';
        default : return 'Ghibli Studio';
    }
}



const CategoryView = props => {
    const category = props.match.params.cat.toLowerCase();

    const productList = getProductList(category);

    return (
        <React.Fragment>
            <Navbar />
            <main className="category-container">
                <h1 className="category-heading">{getCategory(category)} section</h1>
                <Pagination list = {productList} />
            </main>
            <Footer />
        </React.Fragment>
    )
}

export default CategoryView
