'use client'

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
  } from "@/components/ui/navigation-menu"
import { cn } from '@/lib/utils';
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



  


const components: { title: string; href: string; description: string; categories: string[][]}[] = [
    {
      title: "Men's Fashion",
      href: "/docs/primitives/alert-dialog",
      description:
        "Discover trendy shirts, shoes, and watches for men.",
        categories: [["SHIRTS","/"],["SHOES","/"],["WATCHES","/"]],
    },
    {
      title: "Women's Fashion",
      href: "/docs/primitives/hover-card",
      description:
        "Explore elegant dresses, bags, jewelry, and accessories for women.",
        categories: [["DRESSES","/"],["BAGS","/"],["JEWELRY","/"],["SHOES","/"],["WATCHES","/"],["TOPS","/"]]
    },
    {
      title: "Electronics",
      href: "/docs/primitives/progress",
      description:
        "Browse latest smartphones, laptops, tablets, and accessories.",
        categories: [["SMARTPHONES","/"],["LAPTOPS","/"],["TABLETS","/"],["MOBILE ACCESSORIES","/"]]

    },
    {
      title: "Beauty & Care",
      href: "/docs/primitives/scroll-area",
      description: "Find skincare products, fragrances, and beauty essentials.",
      categories: [["SKINCARE","/"],["FRAGRANCE","/"]]

    },
    {
      title: "Home & Living",
      href: "/docs/primitives/tabs",
      description:
        "Shop furniture, kitchen accessories, and home decoration items.",
        categories: [["FURNITURE","/"],["KITCHEN ACCESSORIES","/"],["HOME DECORATION","/"],["GROCERIES","/"]]

    },
    {
      title: "Sports & Automotive",
      href: "/docs/primitives/tooltip",
      description:
        "Explore sport gears, vehicles, and automotive accessories.",
        categories: [["SPORTS ACCESSORIES","/"],["SUNGLASSES","/"],["MOTORCYCLE","/"],["VEHICLE","/"]]

    },
  ]



const UserNavigationbar = () => {
    return(<>

<section className=" bg-white border-b-[1px] border-gray py-4  items-center justify-between w-full px-32 z-[1] fixed">
      

<NavigationMenu className="flex flex-row gap-x-40 ">
  <NavigationMenuList className="flex flex-row gap-x-8">
        <Link href="/" legacyBehavior passHref>
        <NavigationMenuLink className="text-4xl font-integral text-black">
        SHOP.CO
        </NavigationMenuLink>
        </Link>

        <Link href="/" legacyBehavior passHref>
        <NavigationMenuLink className="font-satoshi text-black text-xl mt-3">
        shop
        </NavigationMenuLink>
        </Link>

    <NavigationMenuItem className="">
        <NavigationMenuTrigger className="font-satoshi text-black text-xl mt-3 ">categories</NavigationMenuTrigger>
            <NavigationMenuContent className="z-[10]">
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[1200px] bg-white z-[10]">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                  <br />

                  {component.categories.map((x, index) => (
    <React.Fragment key={index}>
      <i 
        onClick={() => {  }} 
        className="cursor-pointer font-medium hover:underline"
      >
        {x[0]}
        
      </i>
      {index !== component.categories.length - 1 && " | "}
    </React.Fragment>
  ))}
                 
                </ListItem>
              ))}
            </ul>
            </NavigationMenuContent>
        

    </NavigationMenuItem>

    <NavigationMenuItem className="relative">
    
    <div className="absolute inset-y-0 start-0 flex items-center ps-3 mt-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
    <Input type="search" className="w-[500px] border-none bg-gray-100 mt-3 p-7 pl-12 rounded-3xl placeholder:text-slate-500 text-base	bg-[url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=search')]" placeholder="Search your product here..."></Input>
    
    </NavigationMenuItem>

    
  
    


    </NavigationMenuList>
    
    
    <NavigationMenuList>
    <NavigationMenuItem className="mt-3 flex flex-row gap-3 hover:pointer">
        
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z"/></svg>   
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z"/></svg>

     </NavigationMenuItem>

     </NavigationMenuList>

</NavigationMenu>


        
</section>
    
    
    </>);
}




const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
        >
          <div className="text-sm font-medium leading-none font-bold">{title}</div>
          
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
         

        </a>
        
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"



export default UserNavigationbar;