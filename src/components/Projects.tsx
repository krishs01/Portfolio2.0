'use client';

import React from 'react'
import Image from 'next/image';
import { InfiniteMovingCards } from './ui/infinite-moving-cards';
import pjs from '../../public/projectIMages.png'

function Projects() {

    const MyProjects = [
        {
          
        },
        {

        },
        {

        },
    ]
    
  return (

    <>
    <div className='flex justify-center items-center mt-[8rem] gap-x-4 ' id='projects'>

    <div className='text-3xl'>Projects</div>
    <Image src={pjs} alt='Image' height={80} width={80} />
    </div>

    
    <div className="h-[40rem] rounded-md flex flex-col antialiased dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      {/* <InfiniteMovingCards */}
        {/* // items={MyProjects} */}
        {/* direction="right"
        speed="slow" */}
      {/* /> */}
    </div>
    
    </>
  )
}

export default Projects