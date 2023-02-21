import Image from 'next/image'
import React from 'react'

import {Social} from '../Social'

export const Profile = () => {
  return (
    <div className='flex justify-center flex-wrap sm:justify-around sm:items-center'>
      <div className='w-32 h-32 rounded-full mx-auto sm:mx-0 overflow-hidden mt-24 sm:mt-0 sm:order-2 shadow-[0_0_0_2px_rgba(230,240,235,1)] dark:shadow-[0_0_0_2px_rgba(70,70,70,1)]'>
        <Image alt='Jones photo' src='/me.png' width={130} height={195} />
      </div>
      <div className='w-full sm:w-auto sm:order-1 sm:px-3'>
        <h1 className='dark:text-[#F5FFFA] text-[22px] sm:text-[34px] font-semibold tracking-wide text-center sm:text-left mt-2'>
          Jone Paul
        </h1>
        <p className='text-sm sm:text-base text-[#888888] dark:text-[#dadada] tracking-wide text-center sm:text-left sm:mt-1'>
          FullStack Developer
        </p>
        <Social />
      </div>
    </div>
  )
}
