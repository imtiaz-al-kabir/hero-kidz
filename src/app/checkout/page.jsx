import React from 'react';
import { getCart } from "../../actions/server/cart";
import Checkout from "../../components/home/Checkout";

const CheckoutPage = async() => {

    const cartItem=await getCart()
    return (
        <div className="w-full">
            <Checkout cartItems={cartItem}/>
        </div>
    );
};

export default CheckoutPage;