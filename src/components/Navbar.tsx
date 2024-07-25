'use client';
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/app/utils/cn";
import Link from "next/link";
import Image from "next/image";
import studentImage from '../../public/logo.png'
import amzaoneCloneImage from '../../public/amazon.png'
import netflixCloneImage from '../../public/netflix.png'
import passwordGeneratorImage from '../../public/password.jpg'
import BlogWebsiteImage from '../../public/Blog.png'
import ToggleTheme from "./ToggleTheme";


function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
  return (
    <>
        
         <div className={cn("fixed top-2 inset-x-0 flex items-baseline mx-auto z-50 shadow-md dark:shadow-gray-500 w-full", className)}>

          <div className="flex justify-center items-center float-left">

        <Image src={studentImage} alt="Image" width={55} height={55} className='flex justify-center items-center py-2 ml-8' />

        <Menu setActive={setActive}>
            <Link href={"/"} className="hover:bg-gray-200 dark:hover:bg-gray-600 px-3 py-2 rounded-md mx-2 text-lg">
            <MenuItem setActive={setActive} active={active} item="Home">
            
            </MenuItem>
            </Link>

            <Link href={'/#about'} className="hover:bg-gray-200 dark:hover:bg-gray-600 px-3 py-2 rounded-md text-lg">
            <MenuItem
            setActive={setActive} active={active} item="About"
            >
            </MenuItem>
            </Link>

            <Link href={'/#projects'} className="hover:bg-gray-200 dark:hover:bg-gray-500 px-3 py-2 rounded-md text-lg">
            <MenuItem setActive={setActive} active={active} item="Projects" >
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Mystery Message"
              href="/projects"
              src=''
              description="Send anonymous message to anyone without revealing your identity."
            />
            <ProductItem
              title="Blog Website"
              href="/projects"
              src={''}
              description="Sharing ideas through posts and media content."
            />

            <ProductItem
              title="Netflix Clone"
              href="/projects"
              src=""
              description="Web application that replicates the user interface of Netflix."
            />

            <ProductItem
              title="Amazone Clone"
              href="/projects"
              src={""}
              description="Get your faviorates products from amazon"
            />

            <ProductItem
              title="Password Generator"
              href="/projects"
              src=""
              description="Generate strong passwords to enhance security"
            />
          </div>
        </MenuItem>
        </Link>

            

            <Link href={'/#achivements'} className="hover:bg-gray-200 dark:hover:bg-gray-600 px-3 py-2 rounded-md text-lg">
            <MenuItem
            setActive={setActive} active={active} item="Achivements"
            >
            </MenuItem>
            </Link>
            
            <Link href={"/#contact"} className="hover:bg-gray-200 dark:hover:bg-gray-600 px-3 py-2 rounded-md text-lg">
            <MenuItem setActive={setActive} active={active} item="Contact Me">
            
            </MenuItem>
            </Link>
        </Menu>
          <ToggleTheme />
          </div>
        </div>         
  

      
          
    </>
  )
}

export default Navbar