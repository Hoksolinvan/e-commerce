import React from 'react';
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";



const Homepage = () => {
    return(<>
    <main h-full>
    <section className="w-full min-h-[663px] content-grid bg-[#F2F0F1] pb-28 pt-12 lg:pt-24 flex flex-row">
  <div className="mx-8 lg:mx-32 flex flex-col gap-y-12 lg:gap-y-7">
    <h1 className="text-4xl lg:text-[64px] text-black font-integral max-w-[577px] leading-tight">
      FIND CLOTHES THAT MATCH YOUR STYLE
    </h1>

    <p className="font-satoshi text-lg lg:text-base max-w-[545px] leading-relaxed">
      Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
    </p>

    <div>
      <Button
        variant="outline"
        className="bg-black text-white hover:bg-white hover:text-black rounded-2xl px-6 py-3 lg:w-[210px] lg:h-[52px]"
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

<section className="w-full h-[200px]">
    <h1 className="text-center text-[60px] font-bold">Important Notice</h1>
    <div className="flex flex-row gap-8">
        <div className="bg-black"></div>
        <div className="bg-black"></div>
    </div>
</section>

   
    </main>
    </>);
}


export default Homepage;