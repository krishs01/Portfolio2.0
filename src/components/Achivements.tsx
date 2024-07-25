'use client';
import React from 'react'
import Image from 'next/image';
import achives from '../../public/Achivements.png'

function Achivements() {
  return (
    <>
    <div className='dark:bg-[#0f0f0f] py-4' id='achivements'>
    <div className=' flex justify-center items-center  '>
    
    <div className='text-4xl mx-8'>
        Achivements        
    </div>
       <div>
        
         <Image  src={achives} alt='Image' width={60} height={60}/>
        </div>
        </div>


        <div className='flex flex-col mt-[4rem] gap-y-10'>

            <div className='flex justify-center items-center'>
            <Image src={achives} alt='Image' width={45} height={45} className='mx-4'/> 
            &nbsp;3 star, 1600+ rating on CodeChef
            </div>

            <div className='flex justify-center items-center'>
            <Image src={achives} alt='Image' width={45} height={45} className='mx-4'/>
            &nbsp;200+ Problems solved on Leetcode
            </div>

            <div className='flex justify-center items-center'>
            <Image src={achives} alt='Image' width={45} height={45} className='mx-4'/>
            &nbsp;Under Top 10 Coders of Institue on GeeksForGeeks
            </div>

            <div className='flex justify-center items-center'>
            <Image src={achives} alt='Image' width={45} height={45} className='mx-4'/>
            &nbsp;400+ Problems solved on Codechef, GeeksForGeeks & Code Studio
            </div>

            <div className='flex justify-center items-center'>
            <Image src={achives} alt='Image' width={45} height={45} className='mx-4'/>
            Achived the tag of Achiever(Top 1%) & Specialist(Top 0.5%) on CodeStudio
            </div>

        
        </div>
        </div>
    </>
  )
}

export default Achivements

//
// Image
// 
// Image
// 
// Image
// 
// Image
//