/* eslint-disable jsx-a11y/anchor-is-valid */
import {NextPage} from 'next'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {Seo} from 'src/components/Seo'
import {pagesPath} from 'src/lib/$path'

const Work: NextPage = () => {
  return (
    <div className='max-w-xl mx-auto px-4 pt-5'>
      <Seo
        pageTitle='Dapp - Restaurant evaluation app based on trust level'
        pageImg={'https://www.Irontiger.com/works/gourmet-app'}
        pageImgWidth={1280}
        pageImgHeight={960}
        pagePath={'/works/gourmet-app'}
      />
      <Link href={pagesPath.works.$url().pathname}>
        <a className='text-sm pr-1 dark:text-[#F5FFFA]'>Works /</a>
      </Link>
      <h2 className='section-title mt-1 dark:text-[#F5FFFA]'>Restaurant evaluation app based on trust level</h2>
      <p className='text-sm sm:text-[15px] leading-6 mt-5 dark:text-[#F5FFFA] block rounded-md bg-[#E6F0EB] dark:bg-[#464646] px-3 py-4'>
        In order to solve the problems of the existing gourmet service revealed in the Tabelog lawsuit, we implemented a gourmet service using blockchain technology.
        <br />
        I was able to take the stage at the Giiku Exhibition 2019 and receive an <strong>award for excellence</strong>
      </p>
      <h3 className='text-xs sm:text-sm font-bold mt-5 dark:text-[#F5FFFA]'>URL</h3>
      <a
        className='text-sm sm:text-[15px] block pt-2 pb-3 border-b-2 border-black dark:border-[#F5FFFA] dark:text-[#F5FFFA]'
        href='https://gourmet-app.vercel.app/'
        target='_blank'
        rel='noopener noreferrer'
      >
        https://gourmet-app.vercel.app/
      </a>
      <h3 className='text-xs sm:text-sm font-bold mt-3 dark:text-[#F5FFFA]'>Github</h3>
      <a
        className='text-sm sm:text-[15px] block pt-2 pb-3 border-b-2 border-black dark:border-[#F5FFFA] dark:text-[#F5FFFA]'
        href='https://github.com/Irontiger0330/gourmet-app-client'
        target='_blank'
        rel='noopener noreferrer'
      >
        https://github.com/Irontiger0330/gourmet-app-client
      </a>
      <a
        className='text-sm sm:text-[15px] block py-3 border-b-2 border-black dark:border-[#F5FFFA] dark:text-[#F5FFFA]'
        href='https://github.com/Irontiger0330/gourmet-app'
        target='_blank'
        rel='noopener noreferrer'
      >
        https://github.com/Irontiger0330/gourmet-app
      </a>
      <h3 className='text-xs sm:text-sm font-bold mt-3 dark:text-[#F5FFFA]'>Presentation slide</h3>
      <a
        className='text-sm sm:text-[15px] block pt-2 pb-3 border-b-2 border-black dark:border-[#F5FFFA] dark:text-[#F5FFFA]'
        href='https://speakerdeck.com/Irontiger0330/gourmet-app'
        target='_blank'
        rel='noopener noreferrer'
      >
        https://speakerdeck.com/Irontiger0330/gourmet-app
      </a>
      <div className='w-full aspect-video rounded-md overflow-hidden relative shadow-[0_0_0_2px_rgba(230,240,235,1)] dark:shadow-[0_0_0_2px_rgba(70,70,70,1)] mt-7'>
        <Image
          objectFit='cover'
          objectPosition='top'
          alt='Image of restaurant '
          src='/gourmet-top.png'
          width={600}
          height={360}
        />
      </div>
      <div className='w-full aspect-video rounded-md overflow-hidden relative shadow-[0_0_0_2px_rgba(230,240,235,1)] dark:shadow-[0_0_0_2px_rgba(70,70,70,1)] mt-3'>
        <Image
          objectFit='cover'
          objectPosition='top'
          alt='Image of restaurant '
          src='/gourmet-map.png'
          width={600}
          height={360}
        />
      </div>
      <div className='w-full aspect-video rounded-md overflow-hidden relative shadow-[0_0_0_2px_rgba(230,240,235,1)] dark:shadow-[0_0_0_2px_rgba(70,70,70,1)] mt-3'>
        <Image
          objectFit='cover'
          objectPosition='top'
          alt='Image of restaurant '
          src='/gourmet-modal.png'
          width={600}
          height={360}
        />
      </div>
    </div>
  )
}

export default Work
