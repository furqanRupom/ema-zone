import React from 'react';

const Cart = ({cart}) => {

    // set prices,shipping and tax of products

const totalPrice = cart.reduce((acc,product) => acc + product.price,0)
const totalShippingCharges = cart.reduce((acc,product) => acc + product.shipping,0)
const getTax = totalPrice*7/100

const grandTotal = (totalPrice + totalShippingCharges + getTax)




    return (
        <div className="bg-amber-400/25 my-5 md:my-0 w-full rounded sticky top-0">
             <h1 className="text-center text-2xl font-semibold py-5">orders summary</h1>
             <div className="space-y-4 px-4 py-2">
            <p>Selected Items: {cart.length}</p>
            <p>Total Price :${totalPrice}</p>
            <p>Total Shipping charges :${totalShippingCharges}</p>
            <p>Tax : {Number.isInteger(getTax) ? getTax : getTax.toFixed(2)}</p>
            <h3 className="font-bold text-lg">Grand Total : {grandTotal}</h3>

             </div>

        </div>
    );
};

export default Cart;