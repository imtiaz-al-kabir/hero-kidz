"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { getCart } from "../actions/server/cart";
import { useSession } from "next-auth/react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartCount, setCartCount] = useState(0);
    const { data: session } = useSession();

    const refreshCart = async () => {
        if (session?.user) {
            try {
                const cart = await getCart();
                const count = cart.reduce((total, item) => total + item.quantity, 0);
                setCartCount(count);
            } catch (error) {
                console.error("Failed to fetch cart", error);
            }
        } else {
            setCartCount(0);
        }
    };

    useEffect(() => {
        refreshCart();
    }, [session]);

    return (
        <CartContext.Provider value={{ cartCount, refreshCart, setCartCount }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
