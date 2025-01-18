
'use client'

import React from 'react';
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";



const Homepage = () => {
    return(<>
    <main className='h-[1083px] w-[100vw]'>
    <section className="w-full min-h-[663px] content-grid bg-[#F2F0F1] pb-28 pt-12 lg:pt-24 flex flex-row">
  <div className="mx-8 lg:mx-32 flex flex-col gap-y-12 lg:gap-y-7">
    <h1 className="text-4xl lg:text-[64px] text-black font-integral max-w-[577px] leading-tight">
      FIND CLOTHES THAT MATCH YOUR STYLE
    </h1>

    <p className="font-satoshi text-lg lg:text-base max-w-[545px] leading-relaxed">
      Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
    </p>

    <div onClick={()=>{console.log('hello')}}>
      <Button
        variant="outline"
        className="bg-black text-white hover:cursor-pointer hover:text-white hover:bg-black hover:opacity-75  rounded-2xl px-6 py-3 lg:w-[210px] lg:h-[52px]"
        
      >
        Shop Now
      </Button>
    </div>
    <div className="flex flex-row w-[596px] h-[74px] gap-x-9">
        <div className="w-[141px] h-[74px] flex flex-col">
           <div className="w-[107px] h-[54px] font-satoshi font-black text-[40px]"> 200+</div> 
            <div className="font-satoshi text-[16px] w-[141px] h-[22px]">International Brand</div>
            </div>
        <div className="w-[141px] h-[74px]">
            <div className="w-[107px] h-[54px] font-satoshi font-black text-[40px]"> 2000+ </div>
            <div className="font-satoshi text-[16px]  w-[141px] h-[22px]">High-Quality Products</div>
        </div>
        <div className="w-[141px] h-[74px]">
            <div className="w-[107px] h-[54px] font-satoshi font-bold text-[40px]"> 30,000+</div>
            <div className="font-satoshi text-[16px]  w-[141px] h-[22px]">Happy Customers</div>
        </div>
  </div>
  </div>
  {/* skibidi toilet */}
  <div className="z-[0]">
  <Skeleton className="h-[400] w-[400] rounded-full  bg-[#9ca3af]" />
  </div>
  
   
</section>

<section className="w-full h-[200px] items-center">
    <h1 className="text-center text-[52px] font-bold font-integral">Important Notice</h1>
    <div className="w-full flex flex-row">
        <div className="font-integral w-1/2 px-32 mt-[20]">Demo Project <br />
        <br></br>
        <div className="font-normal text-[16px] text-slate-500	font-satoshi">
            
        This is a demo e-commerce website built to showcase web development skills. It is not a real online store and no actual transactions can be made.
        <br></br>
        All product data is provided by  <b className="text-black hover:underline hover:cursor-pointer">DummyJSON API.</b>

        <br></br>
        <div className="mt-[30] text-black text-[24px] font-satoshi ">Design Credits
            <br></br> 
            <br></br>
            <div className="flex flex-row gap-[40px]">
            <Button className="bg-black text-white rounded-xl w-[200px] py-[20] h-[50px] text-[16px] hover:bg-black hover:font-black hover:w-[205px] hover:h-[55px] transition-all duration-300">
                View Figma Template 
            </Button>
            <Button className="bg-white text-black rounded-xl w-[200px] py-[20] h-[50px] text-[16px] hover:bg-white hover:font-black border-[1px] border-black hover:w-[205px] hover:h-[55px] transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" className='bg-white'>
            <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>
                View Source Code</Button>
            </div>
        </div>
        </div>
        </div>

        <div className="font-integral w-1/2 px-32 mt-[20]">stuff
        <br />

        <div className="font-normal text-[16px] text-slate-500	font-satoshi">
            <br></br>
       
            <ul className="list-disc">
                <li>Built with Next.js 14 (App Router)</li>
                <li>Styling with TailwindCSS</li>
                <li>UI Components from shadcn/ui</li>
                <li>State Management using Redux Toolkit</li>
                <li>API Integration with Axios</li>
            </ul>

        </div>
       
        </div>
    </div>
</section>

<section>

</section>

   
    </main>
    </>);
}


export default Homepage;