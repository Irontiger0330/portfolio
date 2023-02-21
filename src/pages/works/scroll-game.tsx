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
        pageTitle='Web app - Scroll game using NFT'
        pageImg={'https://www.Irontiger.com/works/scroll-game'}
        pageImgWidth={1280}
        pageImgHeight={960}
        pagePath={'/works/scroll-game'}
      />
      <Link href={pagesPath.works.$url().pathname}>
        <a className='text-sm pr-1 dark:text-[#F5FFFA]'>Works /</a>
      </Link>
      <h2 className='section-title mt-1 dark:text-[#F5FFFA]'>Scroll game using NFT</h2>
      <p className='text-sm sm:text-[15px] leading-6 mt-5 dark:text-[#F5FFFA] block rounded-md bg-[#E6F0EB] dark:bg-[#464646] px-3 py-4'>
        In this game, only users in possession of color NFTs can change the color of their characters in the game. The game itself is simple, but we devised ways to keep users motivated by making it possible to earn NFTs if they achieve a specific score or higher.
        <br />
        At the Kyutech Global Hackathon, I was able to receive the <strong>Rakuten Enterprise Award</strong> for developing with overseas students.
      </p>
      <h3 className='text-xs sm:text-sm font-bold mt-3 dark:text-[#F5FFFA]'>Github</h3>
      <a
        className='text-sm sm:text-[15px] block pt-2 pb-3 border-b-2 border-black dark:border-[#F5FFFA] dark:text-[#F5FFFA]'
        href='https://github.com/Irontiger0330/scroll-game-client'
        target='_blank'
        rel='noopener noreferrer'
      >
        https://github.com/Irontiger0330/scroll-game-client
      </a>
      <h3 className='text-xs sm:text-sm font-bold mt-3 dark:text-[#F5FFFA]'>ColorNFT(OpenSea)</h3>
      <a
        className='text-sm sm:text-[15px] block pt-2 pb-3 border-b-2 border-black dark:border-[#F5FFFA] dark:text-[#F5FFFA]'
        href='https://testnets.opensea.io/ja/assets/goerli/0x54b6c7e79a80a24423dddb32e821fa2e88ececa4/0'
        target='_blank'
        rel='noopener noreferrer'
      >
        https://testnets.opensea.io/ja/assets/goerli/...
      </a>
      <div className='w-full aspect-video rounded-md overflow-hidden relative shadow-[0_0_0_2px_rgba(230,240,235,1)] dark:shadow-[0_0_0_2px_rgba(70,70,70,1)] mt-7'>
        <Image
          objectFit='cover'
          objectPosition='top'
          alt='image of NFT'
          src='/game-top.png'
          width={600}
          height={360}
        />
      </div>
      <div className='w-full aspect-video rounded-md overflow-hidden relative shadow-[0_0_0_2px_rgba(230,240,235,1)] dark:shadow-[0_0_0_2px_rgba(70,70,70,1)] mt-7'>
        <Image
          objectFit='cover'
          objectPosition='top'
          alt='image of NFT'
          src='/game-modal.png'
          width={600}
          height={360}
        />
      </div>
      <div className='w-full aspect-video rounded-md overflow-hidden relative shadow-[0_0_0_2px_rgba(230,240,235,1)] dark:shadow-[0_0_0_2px_rgba(70,70,70,1)] mt-7'>
        <Image
          objectFit='cover'
          objectPosition='top'
          alt='image of NFT'
          src='/game-colorModal.png'
          width={600}
          height={360}
        />
      </div>
    </div>
  )
}

export default Work
