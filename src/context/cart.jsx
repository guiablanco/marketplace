'use client'

import { createContext, useState } from "react";

//1. Crear contexto
export const CartContext = createContext();

//2. Crear provider para los children
export function CartProvider ({children}){
    const [cart, setCart] = useState([])

    const addToCart = product => {
        //Check if the product is already in the cart
        const productInCartIndex = cart.findIndex(item => item.id == product.id);

        if (productInCartIndex >= 0){
            //Una forma podría ser con structuredClone
            const newCart = structuredClone(cart);
            newCart[productInCartIndex].quantity += 1;
            return setCart(newCart);
        }

        //Product isn't in the cart
        setCart(prevState => (
            [
                ...prevState,
                {
                    ...product,
                    quantity: 1
                }
            ]
        ))
    }

    const clearCart = () => {
        setCart([])
    }

    const removeFromCart = product => {
        setCart(prevState => prevState.filter(item => item.id !== product.id))
    }

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            clearCart,
            removeFromCart
        }}>
        {children}
        </CartContext.Provider>
    )
}
