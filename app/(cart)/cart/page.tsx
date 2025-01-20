import React from 'react';


const Cart = () => {
    return(
        <>

        <div className="w-full h-[550] px-[110] p-[40]">
            <div className="w-full font-integral font-bold text-5xl">YOUR CART</div>
            <div className="flex flex-row mb-[10] gap-x-5 h-[550]">

                <div className="border-[1px] mt-[40] w-3/5 h-1/3 text-center rounded-xl content-center text-satoshi text-gray-500">Your cart is empty
                
                
                </div>
                <div className="border-[1px] mt-[40] w-2/5 h-5/6 rounded-xl">
                </div>


            </div>
        </div>
        </>

    );
}


export default Cart;