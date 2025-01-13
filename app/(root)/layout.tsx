


import UserNavigationbar from '@/components/ui/userNavigationbar';



export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
   
        <main>
            <div className="mx-32">
               <UserNavigationbar/>
            </div>
               {children}
        </main>
       
   
    );
  }