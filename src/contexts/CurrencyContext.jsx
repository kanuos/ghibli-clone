import React, {createContext,useState} from 'react'

export const CurrencyContext = createContext()

const CurrencyContextProvider = props => {
    const [currency, setCurrency] = useState('US');

    const getCurrency = (item) =>{
        setCurrency(item);
    }

    const rateConverter = (amount) =>{
        switch(currency){
            case 'JP': return Math.round(amount*110);
            case 'IN': return Math.round(amount*70);
            default: return amount;
        }
    }

    function currencyConverter(){
        switch(currency){
            case 'JP': return '\u00A5'       // YEN symbol UTF-8
            case 'IN': return '\u20B9'       // INR symbol 
            default: return '\u0024'       // USD symbol
        }
    }

    const context = {
        data: currency,
        getCurrency,
        rateConverter,
        currencyConverter
    }

    return (
        <CurrencyContext.Provider value={context}>
            {props.children}
        </CurrencyContext.Provider>
    )
}

export default CurrencyContextProvider
