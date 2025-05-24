"use client";

import React from 'react';
import useStore from '../../store/store';


const Cart = () => {

    const cart = useStore((state: any) => state.cart);
    const count = useStore((state: any) => state.count);
    const decreaseQuantity = useStore((state: any) => state.decreaseQuantity);


    let value: number = 0;
    let discount: Number = 0;
    let delivery_fee: Number = 15;


    cart.reduce((acc: number, item: any) => {
        const itemTotal = (item.price * (item.quantity || 1));
        value += itemTotal;
        return acc + itemTotal;
    }, 0);


    return(
        <>

        <div className="w-full h-[550] px-[110] p-[40]">
            <div className="w-full font-integral font-bold text-5xl">YOUR CART</div>
            <div className="flex flex-row mb-[10] gap-x-5 h-[550]">

                <div className="border-[1px] mt-[40] w-3/5 h-4/5 text-center rounded-xl content-center text-satoshi text-gray-500 overflow-y-auto">
                
                {cart.length > 0 ? (
                    cart.map((item: any) => (
                      <div
                        key={item.id + Math.random()} // allows duplicates by avoiding duplicate key error
                        className="flex items-center justify-between border rounded-lg p-4"
                      >
                        <div className="flex items-center space-x-4">
                          <img
                            src={item.thumbnail}
                            alt={item.title}
                            className="w-16 h-16 object-cover rounded"
                          />
                          <div className="text-left">
                            <p className="text-lg font-bold">{item.title}</p>
                            <p className="text-sm text-gray-500">
                              Price: ${item.price} × {item.quantity || 1}
                            </p>
                          </div>
                        </div>
                        <button
                          onClick={() => decreaseQuantity(item.id)}
                          className="text-red-500 text-xl font-bold hover:scale-110 transition-transform"
                        >
                          &times;
                        </button>
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-400">Your cart is empty</p>
                  )}
                
                
                </div>
                <div className="border-[1px] mt-[40] w-2/5 h-5/6 rounded-xl p-[20px]">
                <p className="font-bold text-satoshi text-2xl b-[20px] mb-[30]">Order Summary</p>
                <ul>
                    <li className="mb-[20] text-gray-500 text-satoshi ">Subtotal: $ {value > 0 ? value : "0.00"}</li>
                    <li className="mb-[30] text-gray-500 text-satoshi">Discount: <span className="text-red-600 font-black">$ 0.00</span></li>
                    <li className="mb-[30] text-gray-500 text-satoshi">Delivery Fee: $ {value > 0 ? value * 0.15 : "0.00"} </li>
                </ul>


                <div>
                    
                        <p className="font-bold text-satoshi text-2xl b-[20px] mb-[30] underline">Total</p>
                        <ul>
                            <li className="mb-[20] text-gray-500 text-satoshi ">Total: $ {value > 0 ? value + (value * 0.15) : "0.00"}</li>
                            <li className="mb-[30] text-gray-500 text-satoshi">Items in Cart: {count}</li>
                        </ul>
                        <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors">
                            Checkout
                        </button>
                   
                </div>

                </div>

                


            </div>
        </div>
        </>

    );
}


export default Cart;