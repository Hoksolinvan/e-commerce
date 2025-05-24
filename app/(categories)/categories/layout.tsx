


import Footer_compo from '@/components/ui/Footer';
import UserNavigationbar from '@/components/ui/userNavigationbar';



export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        // mx-32
        <main className="flex flex-col">
          
          <div className="flex flex-col relative">
               <UserNavigationbar/>
            </div>
        
            <div h-full className="mt-[100px] flex flex-col  pb-[100px] mb-[50px]">
            {children}
            
            </div>

            
            <Footer_compo />
        </main>
       
   
    );
  }