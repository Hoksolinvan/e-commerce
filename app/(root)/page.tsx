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
    <div className="flex flex-row">
        <div>vgbhnj</div>
        <div>vgbhjn</div>
        <div>cfvtgybh</div>
  </div>
  </div>
  
  <div>
  <Skeleton className="h-[400] w-[400] rounded-full  bg-[#9ca3af]" />

  </div>
   
</section>


   <div>
    vfgbrfv
   </div>
    </main>
    </>);
}


export default Homepage;