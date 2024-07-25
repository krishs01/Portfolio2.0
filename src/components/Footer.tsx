'use client';

import React from 'react'
import Image from 'next/image';
import leetcodesmall from '../../public/leetcodesmall.png'
import Link from 'next/link';
import linkedIn from '../../public/linkedIn.jpg'
import gfg2 from '../../public/gfg2.jpg'
import github from '../../public/github.png'
import codechef from '../../public/codechef.jpg'


function Footer() {
  return (
    <>
    <div className='dark:bg-[#0f0f0f]'>
    <div className='mt-[36rem] flex justify-center items-center text-3xl py-2 gap-x-8'>


    <Link href={'https://leetcode.com/u/krishs01/'}  target='_blank'>
    <Image src={leetcodesmall} alt='Image' height={55} width={55} className='rounded-2xl'/>
    </Link>

    <Link href={'https://www.geeksforgeeks.org/user/krishs01/'}  target='_blank'>
    <Image src={gfg2} alt='Image' height={55} width={55} className='rounded-2xl'/>
    </Link>

    <Link href={'https://www.codechef.com/users/its_krish01'}  target='_blank'>
    <Image src={codechef} alt='Image' height={55} width={55} className='rounded-2xl'/>
    </Link>

    <Link href={'https://github.com/krishs01'}  target='_blank'>
    <Image src={github} alt='Image' height={55} width={55} className='rounded-2xl'/>
    </Link>

    <Link href={'https://www.linkedin.com/in/krishs01/'}  target='_blank'>
    <Image src={linkedIn} alt='Image' height={55} width={55} className='rounded-2xl'/>
    </Link>

    </div>

    <div className='mt-4 flex justify-center items-center dark:bg-[#0f0f0f] bg-white text-black dark:text-white'>
    Copyright ©2024 Krish Kumar, Inc. All rights reserved
    </div>
    </div>
    </>
  )
}

export default Footer