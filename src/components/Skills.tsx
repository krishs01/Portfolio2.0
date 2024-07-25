'use client';

import React from 'react'
import { Player, Controls } from '@lottiefiles/react-lottie-player';

function Skills() {
  return (
    <>
    <div className='mt-[44rem] flex justify-center items-center'>
      <span className='text-4xl'>What I Know</span>
      <script src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs" type="module"></script> 

    <Player src="https://lottie.host/1dc5998c-fc2f-4aab-9b8d-bd01945d19b7/kclVv5TxdC.json" background="transparent" style={{ height: '150px', width: '105px' }} loop autoplay></Player>
      </div>

      <div className='flex justify-center items-center mt-4'>

      <div className='h-[12rem] w-[20rem] mx-[3rem] light:bg-[#f2f2f2] rounded-md bg-[#f2f2f2] dark:bg-gray-950'>

      <div className='ml-3 mt-1 font-semibold'>
      Programming Languages
      </div>

      <div className='mt-[2rem] ml-4'>

        <span className='h-[2.2rem] w-[2.5rem] flex justify-center items-center border-2 float-left border-blue-600 mx-2 rounded-md font-semibold'>C</span>
        <span className='h-[2.2rem] w-[2.7rem] flex justify-center items-center border-2 float-left border-purple-800 mx-2 rounded-md font-semibold'>C++</span>
      </div>

      </div>

      <div className='h-[12rem] w-[28rem] mx-[2rem] light:bg-[#f2f2f2] dark:bg-gray-950 rounded-md bg-[#f2f2f2]'>

      <div className='ml-3 mt-1 font-semibold'>
      Frontend
      </div>

      <div className='mt-[2rem] grid gap-3 grid-cols-3 grid-rows-3'>
        <span className='border-2 font-semibold h-[2.2rem] w-[4rem] flex justify-center items-center border-pink-600 dark:border-orange-700 light:border-orange-500 mx-1 rounded-md'>HTML</span>
        <span className='border-2 font-semibold h-[2.2rem] w-[4rem] flex justify-center items-center border-purple-800 mx-1 rounded-md'>CSS</span>
        <span className='border-2 font-semibold h-[2.2rem] w-[6rem] flex justify-center items-center border-yellow-500 mx-1 rounded-md'>JavaScript</span>
        <span className='border-2 font-semibold h-[2.2rem] w-[5.4rem] flex justify-center items-center border-sky-600 mx-2 rounded-md'>React JS</span>
        <span className='border-2 font-semibold h-[2.2rem] w-[7rem] flex justify-center items-center border-blue-700 rounded-md'>TailWind CSS</span>
        <span className='border-2 font-semibold h-[2.2rem] w-[5rem] flex justify-center items-center border-slate-700 dark:border-gray-400 mx-2 rounded-md'>Next JS</span>

      </div>

      </div>

      <div className='h-[12rem] w-[20rem] mx-[4rem] light:bg-[#f2f2f2] dark:bg-gray-950 rounded-md bg-[#f2f2f2]'>

      <div className='ml-3 mt-1 font-semibold'>
      Backend
      </div>

      <div className='mt-[2rem] grid gap-24 grid-cols-3 grid-rows-3'>
      <span className='border-2 float-left flex justify-center items-center h-[2.5rem] w-[6rem] border-green-800 rounded-md ml-4 font-semibold'>Node JS</span>
        <span className='border-2 float-left flex justify-center items-center h-[2.5rem] w-[6rem] border-pink-800 rounded-md ml-4 font-semibold'>Express JS</span>
      </div>

      </div>

      <div className='h-[12rem] w-[20rem] mx-[4rem] light:bg-[#f2f2f2] dark:bg-gray-950 rounded-md bg-[#f2f2f2]'>

      <div className='ml-3 mt-1 font-semibold'>
      Database
      </div>

      <div className='mt-[2rem] grid gap-24 grid-cols-3 grid-rows-3'>
      <span className='border-2 float-left flex justify-center items-center h-[2.5rem] w-[6rem] border-green-600 rounded-md ml-4 font-semibold'>Mongo DB</span>
        <span className='border-2 float-left flex justify-center items-center h-[2.5rem] w-[5rem] border-blue-700 rounded-md ml-4 font-semibold'>My SQL</span>

      </div>

      </div>


      </div>
    </>
  )
}

export default Skills