'use client';

import React from 'react'
import Image from 'next/image';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import { Form } from './ui/form';
import contactMe from '../../public/contact.png'

function Contact() {
  return (

    <>
    <div className='flex justify-center items-center mt-[4rem] gap-x-4' id='contact'>
    <div className='text-4xl'>Contact Me </div>

    <div>
    <Image src={contactMe} alt='Image' width={75} height={75} className='mx-4'/>
    </div>
    </div>

    <div className='float-left mt-[4rem] ml-[14rem]   '>
    <script src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs" type="module"></script> 

    <Player src="https://lottie.host/b64eb04d-10bd-4417-b8b5-efb302155667/bJYqTRk6ri.json" background="transparent" style={{ height: '400px', width: '400px' }} loop autoplay></Player>

    </div>

    <div className='border-2 border-gray-500 mt-[4rem] mr-[14rem] h-[400px] w-[400px] float-right dark:shadow-gray-500 shadow-md   '>

    </div>
    </>
  )
}

export default Contact