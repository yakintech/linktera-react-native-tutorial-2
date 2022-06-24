import React, { createContext, useState } from "react";

export var cartContext = createContext(null);


export const CartProvider = ({ children }) => {

    //Global state i buraya tanımladım...
    const [cart, setCart] = useState([])


    const globalState = {
        cart,
        setCart
    }


    return <cartContext.Provider value={globalState}>{children}</cartContext.Provider>

}