/* eslint-disable jsx-a11y/anchor-is-valid */
import {NextPage} from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {useTheme} from 'next-themes'
import React from 'react'
import {Seo} from 'src/components/Seo'
import {appList} from 'src/const/appList'
import {dappList} from 'src/const/dappList'
import {webpageList} from 'src/const/webpageList'

const Works: NextPage = () => {
  const {theme} = useTheme()
  return (
    <div className='max-w-xl mx-auto px-4 pt-5'>
      <Seo
        pageTitle='Works'
        pageImg={'https://www.Irontiger.com/works'}
        pageImgWidth={1280}
        pageImgHeight={960}
        pagePath={'/works'}
      />
      <h2 className='section-title'>Works</h2>
      <h3 className='section-subTitle'>- Decentralized app</h3>
      <div className='flex flex-wrap justify-between items-start gap-y-6 sm:gap-y-3 mt-3'>
        {dappList.map((item) => (
          <Link href={item.path} key={item.title}>
            <a className='w-full sm:w-[calc(50%-5px)] block group'>
              <div className='w-full aspect-video rounded-md overflow-hidden relative shadow-[0_0_0_2px_rgba(230,240,235,1)] dark:shadow-[0_0_0_2px_rgba(70,70,70,1)]'>
                <Image
                  objectFit='cover'
                  objectPosition='top'
                  className='group-hover:transform group-hover:scale-110 transition-all duration-[400ms]'
                  alt={`Image of${item.title}`}
                  src={item.img}
                  width={600}
                  height={360}
                />
              </div>
              <h4 className='dark:text-[#F5FFFA] text-[14px] sm:text-[15px] font-semibold text-center mt-3'>
                {item.title}
              </h4>
              <p className='dark:text-[#F5FFFA] text-xs sm:text-sm text-center mt-1'>
                {item.subTitle}
              </p>
            </a>
          </Link>
        ))}
      </div>
      <h3 className='section-subTitle mt-8'>- Web app</h3>
      <div className='flex flex-wrap justify-between items-start gap-y-6 sm:gap-y-3 mt-3'>
        {appList.map((item) => (
          <Link href={item.path} key={item.title}>
            <a className='w-full sm:w-[calc(50%-5px)] block group'>
              <div className='w-full aspect-video rounded-md overflow-hidden relative shadow-[0_0_0_2px_rgba(230,240,235,1)] dark:shadow-[0_0_0_2px_rgba(70,70,70,1)]'>
                <Image
                  objectFit='cover'
                  objectPosition='top'
                  className='group-hover:transform group-hover:scale-110 transition-all duration-[400ms]'
                  alt={`Image of${item.title}`}
                  src={item.img}
                  width={600}
                  height={360}
                />
              </div>
              <h4 className='dark:text-[#F5FFFA] text-[14px] sm:text-[15px] font-semibold text-center mt-3'>
                {item.title}
              </h4>
              <p className='dark:text-[#F5FFFA] text-xs sm:text-sm text-center mt-1'>
                {item.subTitle}
              </p>
            </a>
          </Link>
        ))}
      </div>
      <h3 className='section-subTitle mt-8'>- Web page</h3>
      <div className='flex flex-wrap justify-between items-start gap-y-6 sm:gap-y-3 mt-3'>
        {webpageList.map((item, index) => (
          <Link href={item.path} key={item.title}>
            <a className='w-full sm:w-[calc(50%-5px)] block group'>
              <div className='w-full aspect-video rounded-md overflow-hidden relative shadow-[0_0_0_2px_rgba(230,240,235,1)] dark:shadow-[0_0_0_2px_rgba(70,70,70,1)]'>
                <Image
                  objectFit='cover'
                  objectPosition='top'
                  className='group-hover:transform group-hover:scale-110 transition-all duration-[400ms]'
                  alt={`Image of${item.title}`}
                  src={index === 2 ? (theme === 'dark' ? item.img : item.imgDark || '') : item.img}
                  width={600}
                  height={360}
                />
              </div>
              <h4 className='dark:text-[#F5FFFA] text-[14px] sm:text-[15px] font-semibold text-center mt-3'>
                {item.title}
              </h4>
              <p className='dark:text-[#F5FFFA] text-xs sm:text-sm text-center mt-1'>
                {item.subTitle}
              </p>
            </a>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Works
