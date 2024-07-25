'use client';
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import lcw from '../../public/lcw.png'
import cf from '../../public/codechef.png'
import gfg from '../../public/gfgw.png'
import cn from '../../public/cn1.png'
import cp from '../../public/coding profiles.png'

function Coding_Profiles() {
  return (
    <>
    <div className='flex justify-center items-center mt-[10rem]' >
      
    <div className='text-3xl mx-8'>Coding Profiles</div>

    <Image src={cp} alt='Image' height={60} width={60} />
    </div>

    <div className='flex justify-center items-center mt-[4rem] gap-x-[4rem]'>

    <span className='hover:shadow-gray-400 hover:shadow-xl dark:hover:shadow-gray-500 dark:hover:shadow-lg delay-200 rounded-full hover:scale-110 duration-500 '>
    <Link href={'https://leetcode.com/u/krishs01/'} target='_blank' >
        <Image src={lcw} alt='Leetcode' height={300} width={300} className='rounded-full'/>
    </Link>
    </span>


    <span className='hover:shadow-gray-300 hover:shadow-xl dark:hover:shadow-gray-500 dark:hover:shadow-lg delay-200 rounded-full hover:scale-110 duration-500'>
    <Link href={'https://www.geeksforgeeks.org/user/krishs01/'} target='_blank'>
        <Image src={gfg} alt='GeeksForGeeks' height={300} width={300}/>
    </Link>
    </span>


    <span className='hover:shadow-gray-300 hover:shadow-xl dark:hover:shadow-gray-500 dark:hover:shadow-lg delay-200 rounded-full hover:scale-110 duration-500'>
    <Link href={'https://www.codechef.com/users/its_krish01'} target='_blank'>
        <Image src={cf} alt='CodeChef' height={300} width={300}/>
    </Link>
    </span>


    <span className='hover:shadow-gray-300 hover:shadow-xl dark:hover:shadow-gray-500 dark:hover:shadow-lg delay-200 rounded-full hover:scale-110 duration-500'>
    <Link href={'https://www.naukri.com/code360/profile/krishs01'} target='_blank'>
        <Image src={cn} alt='Coding Ninjas' height={280} width={280} className='rounded-full'/>
    </Link>
    </span>

    </div>

    </>
  )
}

export default Coding_Profiles