import React, {useState, createContext} from 'react'


export const CartContext = createContext()

const CartContextProvider = (props) => {

    const [cartItems, setCartItems] = useState([])
    const [specialInstruction, setSpecialInstruction] = useState("")

    const itemPresentInCart = (new_item) =>{
        const presentInCart = cartItems.filter(item =>{
            return item.id === new_item.id
        })
        return presentInCart;
    }

    const cartTotal = () =>{
        return cartItems.reduce((acc, current)=>{
            return acc += (current.price * current.quantity)
        },0)
    }

    const addNewItem = new_item =>{
        // check if item already in cart
        const presentInCart = itemPresentInCart(new_item)

        if(!presentInCart.length){
            new_item.quantity = 1;
            setCartItems([...cartItems, new_item])
        }
    }

    const removeItem =(new_item) =>{
        const presentInCart = itemPresentInCart(new_item)
        if(presentInCart.length){
            const filteredArray = cartItems.filter(item =>{
                return item.id!==new_item.id
            })
            setCartItems(filteredArray)
            }
        }

    const updateItemQuantity = (item, operation='add') =>{
        
        // item searched from cart array and stored in temp value
        const updatedItem = cartItems.filter(entry =>{
            return entry.id === item.id
        })[0];
        
        if (operation === 'add'){
            // temp's quantity increased by 1 if quantity < 10
            if(updatedItem.quantity < 10){
                updatedItem.quantity++;
               }
        }
        else{
            // temp's quantity decrease by 1 if quantity > 1
            if(updatedItem.quantity > 1){
                updatedItem.quantity--;
            }
        }

        // filter out item from array to create new filteredArray
        const filteredArray = cartItems.filter(entry =>{
            return entry.id !== item.id
        });
        // insert temp to filteredArray and update cart state
        setCartItems([...filteredArray, updatedItem]);

    }
    

    return (
        <CartContext.Provider value={
            {
                data: [...cartItems],
                addNewItem,
                removeItem,
                cartTotal,
                updateItemQuantity,
                setSpecialInstruction,
                specialInstruction,
                itemPresentInCart
            }
        }>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartContextProvider
