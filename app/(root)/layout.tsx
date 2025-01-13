


import UserNavigationbar from '@/components/ui/userNavigationbar';



export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        // mx-32
        <main>
          
          <div className="flex flex-col">
               <UserNavigationbar/>
            </div>
        
            <div className="mt-[100px]">
            {children}
            </div>
        </main>
       
   
    );
  }