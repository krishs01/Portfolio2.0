'use client';

import React from 'react'
import { Button, MovingBorder } from './ui/moving-border';
import { HoverBorderGradient } from './ui/hover-border-gradient';
import { ButtonHTMLAttributes } from 'react';
import Link from 'next/link';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import Image from 'next/image';
import Abt from '../../public/About.png'
import BCAImage from '../../public/BCA.png'
import class10Image from '../../public/class10.png'
import class12Image from '../../public/class12.png'
import MCAImage from '../../public/MCAImage.jpg'



function About() {
  return (
   <>
   
    <div className='h-auto md:h-[12rem] w-full relative flex items-center justify-center overflow-hidden mx-auto py-10 md:py-0'>      
    </div>

    <h1 className='text-4xl flex justify-center items-center'>Nice to see you, I am&nbsp;<span>Krish Kumar</span></h1>
    <div className=' mt-7 text-2xl flex justify-center items-center'>A highly skilled and motivated competitive programmer and web developer.</div>

    <div className="m-12 flex justify-center text-center">
      <Link href={'/'} download='KRISH_RESUME(1).pdf'>
      <HoverBorderGradient
      
      
        containerClassName="rounded-md"
        as="button"
        className="flex items-center space-x-2 dark:active:bg-black dark:bg-[#0f0f0f] bg-purple-700 hover:bg-purple-600 active:bg-purple-800"
        
      >
        
        <span id='about'>Download Resume</span>
      </HoverBorderGradient>
      </Link>

      
    </div>

    <div className='flex justify-center items-center mt-[112px] w-auto'>
     <div className=' text-[2.4rem]'>
      About

     </div>
      <Image src={Abt} alt='Image'  className='mx-7' width={55}
      height={55}/>  
      </div>

      <div className='mt-16 ml-[16rem]  '>

      <script src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs" type="module"></script> 

    <Player src="https://lottie.host/56b37349-3f4f-49ad-901a-e28621cba703/Sy7fxEurBl.json" style={{ height: '450px', width: '450px' }}   className='float-left  ' background="transparent" loop autoplay></Player>
      </div>

      <div className='mt-0 mr-[6rem] h-[32rem] w-[36rem] float-right  '>

      <div className='h-24 w-auto my-6 flex justify-center items-center gap-x-4'>
      <div className='h-16 w-16 float-left'>
      <Image src={MCAImage} alt='Image' height={60} width={60} className='rounded-full' />

        </div>

        <div className='h-16 w-82'>
          <div>
          Masters in Computer Applications
          </div>

          <div>
          Currently I am Pursuing my MAsters in Computer Applications Degree from M.D.U Rohtak
          </div>
        </div>
        </div>



        <div className='h-24 w-auto my-6 flex justify-center items-center gap-x-4'>
        <div className='h-16 w-16 float-left'>

        <Image src={BCAImage} alt='Image' height={60} width={60} />
        </div>
        <div className='h-16 w-82'>
          <div>
          Bachelors in Computer Applications
          </div>

          <div>
          I completed my Bachelors in Computer Applications from GITM Gurgaon | M.D.U Rohtak 
          </div>
        </div>
        </div>

        <div className='h-24 w-auto my-6 flex justify-center items-center gap-x-4'>
        <div className='h-16 w-16 float-left'>

        <Image src={class12Image} alt='Image' height={70} width={70} />
        </div>

        <div className='h-16 w-82'>

        </div>

          <div>
          Class 12th
            <div>
            I completed my 12th from Rose Land Public School, Gurgaon | C.B.S.E. Board
            </div>
          </div>

        </div>

        <div className='h-24 w-auto my-6 flex justify-center items-center  gap-x-4'>
      <div className='h-16 w-16 float-left'>
      <Image src={class10Image} alt='Image' height={60} width={60} className='rounded-full' />

        </div>

        <div className='h-16 w-82'>
          <div>
          Class 12th
          </div>

          <div>
          I completed my 12th from Rose Land Public School, Gurgaon | C.B.S.E. Board         
           </div>
        </div>
        </div>
          
        </div>

         
    
   </>
  )
}

export default About

// h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center 
// justify-center relative overflow-hidden mx-auto py-10 md:py-0