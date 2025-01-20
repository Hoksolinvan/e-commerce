import React from 'react';
import { Skeleton } from "@/components/ui/skeleton";



const Profile = () => {
    return( 
        <>
        
        <div className="mx-[110] w-[1240px] h-[300px] mt-[40px] mb-[200px] border-[1px] border-gray-300 rounded-2xl grid grid-rows-[180px_100px] p-5">
           
           <div className="border-b border-gray mx-[17px] mb-[0] flex flex-row">

                <div className="w-1/6  mb-[10px] p-[10px]">
                   <div>
                     <Skeleton className="h-[80] w-[80] rounded-full  bg-[#9ca3af]" />
                     </div>
                    <p className="font-satoshi text-[21px] font-bold mt-[10] mb-[0]">Pseudo Name</p>
                    <p className="pb-[0]">1732ABC</p>
                    
                </div>

                {/* <div className="  w-full bg-[#9ca3af] mb-[30]">
                  
                </div> */}
                  <Skeleton className=" w-full bg-[#9ca3af]  mb-[30]"
                    />
                    

           </div>
           <div className="grid grid-cols-3 w-full mx-[30] mt-[20] text-[18px] font-satoshi">

            <div className="border-r-[1px] mr-[20] h-[50]">
                <div className="text-gray-500">EMAIL</div>
                <div>pseudoemail@email.com</div>

            </div>
            <div className="border-r-[1px] mr-[20] h-[50]">
                <div className="text-gray-500">ADDRESS</div>
                <div>1732 Pseudo Street</div>

            </div>
            <div>
                <div className="text-gray-500">LOCATION</div>
                <div>North Pole</div>

            </div>
                
           </div>
        </div>
        </>
    );
}


export default Profile;