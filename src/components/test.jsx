import React, {useContext} from 'react'
import { CartContext } from '../contexts/CartContext'
import {ProductContext} from '../contexts/ProductsContext';

const TestComponent = () => {
    const {...cart} = useContext(CartContext);
    const [...products] = useContext(ProductContext);

    const style = {
        height:'13rem',
        width: '25rem',
        textAlign:'center',
        backgroundColor: 'orangered',
        color: '#fff',
        margin: '2rem',
        display: 'flex',
        flexDirection : 'column',
        justifyContent: 'space-around'
    }

    const btn = {
        width: '30%',
        margin: '0 auto',
        color: 'orangered'
    }

    const flex = {
        display: 'flex',
        flexWrap: 'wrap',

    }

    return (
        <div>
        <div style={flex}>
            {products.map(item =>(
                <article style={style} key={item.id}>
                <h1>{item.name}</h1>
                <strong>Price : {item.price}</strong>
                <button onClick = {()=> cart.addNewItem({
                    id: item.id,
                    name: item.name,
                    price:item.price
                })}
                    style = {btn}>
                    Add to Cart
                </button>
            </article>
            ))}
        </div>
                <br/>
                <div style={{padding: '1rem'}}>
                <h1>My Cart</h1>
                {cart.data.length < 1? <h1>No items in the cart</h1> :  cart.data.map(item =>{
                    return <div key = {item.id}>
                        <strong>{item.name}</strong>
                        <p>Size : {item.size}  &mdash; Price: ${item.price}</p>
                        <strong>Quantity : {item.quantity}</strong>
                        <button onClick = {()=>{
                            cart.removeItem(item)
                        }}>Remove Item</button>
                        <div>
                            <button onClick = {()=>cart.updateItemQuantity(item,'sub')}>&mdash;</button>
                            Quantity {item.quantity}
                            <button onClick = {()=>cart.updateItemQuantity(item,'add')}> &#65291;
                            </button>

                        </div>
                    </div>
                })}
                {cart.data.length >0 && <h1>Total : {(cart.cartTotal()).toFixed(2)}</h1>}
                {cart.data.length >0 && <h1>Tax : {(cart.cartTotal() * .18).toFixed(2)}</h1>}
                {cart.data.length >0 && <h1>Sub Total : {Math.floor((cart.cartTotal()) + (cart.cartTotal()*.18))}</h1>}
                </div>
          <hr/>
        </div>
    )
}

export default TestComponent
