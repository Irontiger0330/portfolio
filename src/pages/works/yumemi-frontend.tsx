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
        pageTitle='Web app - Graph of total population by prefecture'
        pageImg={'https://www.Irontiger.com/works/yumemi-frontend'}
        pageImgWidth={1280}
        pageImgHeight={960}
        pagePath={'/works/yumemi-frontend'}
      />
      <Link href={pagesPath.works.$url().pathname}>
        <a className='text-sm pr-1 dark:text-[#F5FFFA]'>Works /</a>
      </Link>
      <h2 className='section-title mt-1 dark:text-[#F5FFFA]'>Graph of total population by prefecture</h2>
      <p className='text-sm sm:text-[15px] leading-6 mt-5 dark:text-[#F5FFFA] block rounded-md bg-[#E6F0EB] dark:bg-[#464646] px-3 py-4'>
        This is a web application that uses the RESAS API to display a graph of total population trends by prefecture.
        <br />
        Next.js API Routes are used in order to speed up the response at the time of initial access by using SSG and to prevent the API Key required for RESAS API requests from being leaked to the outside.
      </p>
      <h3 className='text-xs sm:text-sm font-bold mt-3 dark:text-[#F5FFFA]'>URL</h3>
      <a
        className='text-sm sm:text-[15px] block pt-2 pb-3 border-b-2 border-black dark:border-[#F5FFFA] dark:text-[#F5FFFA]'
        href='https://yumemi-frontend-production.vercel.app/'
        target='_blank'
        rel='noopener noreferrer'
      >
        https://yumemi-frontend-production.vercel.app/
      </a>
      <h3 className='text-xs sm:text-sm font-bold mt-3 dark:text-[#F5FFFA]'>Github</h3>
      <a
        className='text-sm sm:text-[15px] block pt-2 pb-3 border-b-2 border-black dark:border-[#F5FFFA] dark:text-[#F5FFFA]'
        href='https://github.com/Irontiger0330/yumemi-frontend'
        target='_blank'
        rel='noopener noreferrer'
      >
        https://github.com/Irontiger0330/yumemi-frontend
      </a>
      <div className='w-full aspect-video rounded-md overflow-hidden relative shadow-[0_0_0_2px_rgba(230,240,235,1)] dark:shadow-[0_0_0_2px_rgba(70,70,70,1)] mt-7'>
        <Image
          objectFit='cover'
          objectPosition='top'
          src='/yumemi-top.png'
          alt='Graph of total population by prefecture'
          width={600}
          height={360}
        />
      </div>
      <div className='w-full aspect-video rounded-md overflow-hidden relative shadow-[0_0_0_2px_rgba(230,240,235,1)] dark:shadow-[0_0_0_2px_rgba(70,70,70,1)] mt-7'>
        <Image
          objectFit='cover'
          objectPosition='top'
          alt='Graph of total population by prefecture'
          src='/yumemi-selected.png'
          width={600}
          height={360}
        />
      </div>
    </div>
  )
}

export default Work
