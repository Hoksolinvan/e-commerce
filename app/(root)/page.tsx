import React from 'react';
import { Button } from "@/components/ui/button";


const Homepage = () => {
    return(<>
    <main>
    <section className="w-[1440px] h-[663px] content-grid bg-[#F2F0F1] pb-28 pt-12 lg:pt-24 flex flex-row">
        <div className="mx-32 flex flex-col gap-y-32">
            <div className="text-[64px] text-black font-integral w-[577px] h-[173px]"> FIND CLOTHES THAT MATCHES YOUR STYLE </div>

            <div className="font-satoshi w-[545px] h-[33px]">
                Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
            </div>

            <div>
                <Button variant="outline" className="bg-black text-white hover:bg-white rounded-2xl w-[210px] h-[52px]">Shop Now</Button>
            </div>
            


        </div>


        
    </section>
    <section>

    </section>
    </main>
    </>);
}


export default Homepage;