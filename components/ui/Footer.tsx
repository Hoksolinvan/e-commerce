import React from 'react';
import { Input } from "@/components/ui/input";

const Footer_compo = () => {
    return(<>
    
    <section className="w-full bg-[#F2F0F1] mt-[150] h-[663]">
        <div className="text-center bg-black mx-[110] flex flex-column w-[1240px] h-[180px] p-7 rounded-3xl gap-[20%] mb-[500] relative bottom-[90]">
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
       
    </section>
    
    </>);
}


export default Footer_compo;