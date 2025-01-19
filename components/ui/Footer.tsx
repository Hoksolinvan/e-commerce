import React from 'react';
import { Input } from "@/components/ui/input";

const Footer_compo = () => {
    return(<>
    
    {/* mt-[150] h-[663] */}
    <section className="w-full bg-[#F2F0F1] mt-[150] h-[663] ">
        <div className="text-center bg-black mx-[110] flex flex-column w-[1240px] h-[180px] p-7 rounded-3xl gap-[20%] relative bottom-[80]">
            <div className="text-gray-100 w-[551] h-[94] font-integral text-[40px] text-left ">STAY UPTO DATE ABOUT OUR LATEST OFFERS</div>

            <div className="text-gray-100 w-[349px] h-[108px]">
            
            <div contentEditable={true} className="flex flex-row gap-[6px] w-[349px] h-[48px] bg-white rounded-3xl mb-[20px] mt-[5px] text-black pl-[15] pt-[15] ">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"/>
            </svg>
            <Input className="border-none font-satoshi text-gray-500 pb-[17] w-[100%] pl-[0] text-[32] text-gray-500" placeholder="Enter your email address"></Input>
            </div>

            <div className="bg-white w-[349px] h-[48px] rounded-2xl content-center hover:cursor-pointer text-black font-black font-medium ">
               Subscribe to Newsletter 
            </div>
            
            </div>

           
        </div>
        {/* className="flex flex-row mx-[110] gap-[100px]" */}
        <section  className="mx-[110px] border-b-slate-200 border-b-[2px] pb-9  ">
            {/* <div className="[&>p]:mb-[20] [&>pre]:mb-[20] w-[248px]">
                <p className="text-4xl text-black font-black font-integral">SHOP.CO</p>
                <p className="font-satoshi text-[14px] text-neutral-500">We have clothes that suits your style and which you’re proud to wear. From women to men.
                </p>
                <div className="flex flex-row">

                <img src="/Social.svg"></img>


                </div>
            </div>
            <div className="[&>p]:mb-[12]">
            <p>COMPANY</p>
                <p>About</p>
                <p>Features</p>
                <p>Works</p>
                <p>Career</p>
            </div>
            <div className="[&>p]:mb-[12]">
                <p>HELP</p>
                <p>Customer Support</p>
                <p>Delivery Details</p>
                <p>Terms & Condition</p>
                <p>Privacy Policy</p>
               
            </div>
            <div className="[&>p]:mb-[12]">
                <p>FAQ</p>
                <p>Account</p>
                <p>Manage Deliveries</p>
                <p>Order</p>
                <p>Payment</p>
            </div>
            <div className="[&>p]:mb-[12]">
                <p>RESOURCES</p>
                <p>Development Tutorials</p>
                <p>How To - Blog</p>
                <p>Youtube Playlist</p>
            </div>
        </section>
        <hr></hr> */}

        <img src="/Frame 52.svg"></img>
       </section>

       <section className="flex flex-row gap-[500px] mx-[110px] mt-[50px]">
                <div className="text-slate-600 mt-[10]">Shop.co © 2000-2023, All Rights Reserved</div>
                <div><img src="Frame 53.svg"></img></div>
       </section>
    </section>
    
    </>);
}


export default Footer_compo;