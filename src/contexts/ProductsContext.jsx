import React, {useState,createContext} from 'react'


export const ProductContext = createContext();

const ProductsContextProvider = (props) => {
    const [products] = useState(
        [
            {id:5,name: 'totoro and mei',price: 59.99, size: 'L', type:'apparel'},
            {id:12,name: 'princess mononoke',price: 149.99, type: 'apparel' ,size:'M'},
            {id:51,name: 'Spirited Away',price: 19.99, type: 'accessories', desc:'keychain'},
            {id:77,name: 'totoro plush',price: 59.99, type: 'accessories'},
            {id:52,name: 'meiko bus',price: 59.99, size: 'L', type:'apparel'},
            {id:123,name: 'ghibli music box',price: 149.99, type: 'apparel' ,size:'M'},
            {id:511,name: 'ryuk ',price: 19.99, type: 'accessories', desc:'keychain'},
            {id:771,name: 'yagami light',price: 59.99, type: 'accessories'},
            {id:523,name: 'L and Light',price: 59.99, size: 'L', type:'apparel'},
            {id:128,name: 'dark note',price: 149.99, type: 'apparel' ,size:'M'},
            {id:518,name: 'L and Watari',price: 19.99, type: 'accessories', desc:'keychain'},
            {id:770,name: 'Misa',price: 59.99, type: 'accessories'},
        ]
    ) 
    return (
        <ProductContext.Provider value = {[...products]}>
            {props.children}
        </ProductContext.Provider>
    )
}

export default ProductsContextProvider



// change the state data with real 180 products 
//  apparel = 60
//  accessories = 60
//  plushies = 60