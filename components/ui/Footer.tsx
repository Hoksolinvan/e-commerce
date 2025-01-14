import React from 'react';

const Footer_compo = () => {
    return(<>
    <section className="w-full bg-[#F2F0F1] mt-[150] h-[663] ">
        <div className="text-center bg-black mx-[110] flex flex-column w-[1240px] h-[180px] p-7 rounded-3xl gap-[100px] ">
            <div className="text-gray-100 w-[551] h-[94] font-integral text-[40px] text-left ">STAY UPTO DATE ABOUT OUR LATEST OFFERS</div>

            <div className="text-gray-100 w-[349px] h-[108px]">
            
            <div className="bg-white text-black mb-[20px] mt-[5px] w-[349px] h-[48px] rounded-2xl content-center hover:cursor-pointer hover:brightness-0">
                Enter your Email Address
            </div>

            <div className="bg-red-900 w-[349px] h-[48px] rounded-2xl content-center hover:cursor-pointer hover:brightness-0">
               Subscribe to Newsletter 
            </div>
            
            </div>


        </div>
    </section>
    </>);
}


export default Footer_compo;