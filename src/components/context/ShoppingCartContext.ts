import { createContext, useReducer } from "react";


const ShoppingCartContext = createContext({});

const initialState = {
   cartItems : []
}

export default function ShoppingCartProvider({children}) 
{
    const [state , setStateItems] = useReducer(initialState , reducer)

    return (
        <ShoppingCartContext.Provider>{children}</ShoppingCartContext.Provider>
    )
}