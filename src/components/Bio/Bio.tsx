/* eslint-disable no-irregular-whitespace */
import React from 'react'

export const Bio = () => {
  return (
    <section className='section-wrap mt-28'>
      <h2 className='section-title'>Bio</h2>
      <ul className='[&>li]:text-sm sm:[&>li]:text-base mt-3'>
        <li className='dark:text-[#F5FFFA]'>
          <span className='font-semibold pr-3'>2020.3</span>
          Graduated from the Faculty of Information Engineering, Kyushu Institute of Technology
        </li>
        <li className='mt-3 dark:text-[#F5FFFA]'>
          <span className='font-semibold pr-3'>2022.4</span>
        </li>
      </ul>
    </section>
  )
}
