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
        pageTitle='Web app - No Spoilers Twitter!!!'
        pageImg={'https://www.otacle.com/works/no-spoilers-twitter'}
        pageImgWidth={1280}
        pageImgHeight={960}
        pagePath={'/works/no-spoilers-twitter'}
      />
      <Link href={pagesPath.works.$url().pathname}>
        <a className='text-sm pr-1 dark:text-[#F5FFFA]'>Works /</a>
      </Link>
      <h2 className='section-title mt-1 dark:text-[#F5FFFA]'>No Spoilers Twitter!!!</h2>
      <p className='text-sm sm:text-[15px] leading-6 mt-5 dark:text-[#F5FFFA] block rounded-md bg-[#E6F0EB] dark:bg-[#464646] px-3 py-4'>
        This is an application that eliminates the difficulty of using Twitter's word mute function.
        Grouped words can be muted at once, and can be toggled on/off with a single click from the history.
        <br />
        In this app, by saving the access token required to obtain the Twitter timeline in a cookie, we have implemented an implementation that reduces the number of requests for obtaining the access token.
      </p>
      <h3 className='text-xs sm:text-sm font-bold mt-5 dark:text-[#F5FFFA]'>URL</h3>
      <a
        className='text-sm sm:text-[15px] block pt-2 pb-3 border-b-2 border-black dark:border-[#F5FFFA] dark:text-[#F5FFFA]'
        href='https://no-spoilers-twitter.vercel.app/'
        target='_blank'
        rel='noopener noreferrer'
      >
        https://no-spoilers-twitter.vercel.app/
      </a>
      <h3 className='text-xs sm:text-sm font-bold mt-3 dark:text-[#F5FFFA]'>Github</h3>
      <a
        className='text-sm sm:text-[15px] block pt-2 pb-3 border-b-2 border-black dark:border-[#F5FFFA] dark:text-[#F5FFFA]'
        href='https://github.com/otacleT/no-spoilers-twitter'
        target='_blank'
        rel='noopener noreferrer'
      >
        https://github.com/otacleT/no-spoilers-twitter
      </a>
      <h3 className='text-xs sm:text-sm font-bold mt-3 dark:text-[#F5FFFA]'>Hackathon page</h3>
      <a
        className='text-sm sm:text-[15px] block pt-2 pb-3 border-b-2 border-black dark:border-[#F5FFFA] dark:text-[#F5FFFA]'
        href='https://topaz.dev/projects/6dcf17745d7d26ad0c7e'
        target='_blank'
        rel='noopener noreferrer'
      >
        https://topaz.dev/projects/6dcf17745d7d26ad0c7e
      </a>
      <div className='w-full aspect-video rounded-md overflow-hidden relative shadow-[0_0_0_2px_rgba(230,240,235,1)] dark:shadow-[0_0_0_2px_rgba(70,70,70,1)] mt-7'>
        <Image
          objectFit='cover'
          objectPosition='top'
          alt='No Spoilers Twitter'
          src='/twitter-top.png'
          width={600}
          height={360}
        />
      </div>
      <div className='w-full aspect-video rounded-md overflow-hidden relative shadow-[0_0_0_2px_rgba(230,240,235,1)] dark:shadow-[0_0_0_2px_rgba(70,70,70,1)] mt-3'>
        <Image
          objectFit='cover'
          objectPosition='top'
          alt='No Spoilers Twitter'
          src='/twitter-timeline.png'
          width={600}
          height={360}
        />
      </div>
      <div className='w-full aspect-video rounded-md overflow-hidden relative shadow-[0_0_0_2px_rgba(230,240,235,1)] dark:shadow-[0_0_0_2px_rgba(70,70,70,1)] mt-3'>
        <Image
          objectFit='cover'
          objectPosition='top'
          alt='No Spoilers Twitter'
          src='/twitter-modal.png'
          width={600}
          height={360}
        />
      </div>
    </div>
  )
}

export default Work
