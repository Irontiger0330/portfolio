import React from 'react'
import {FC, useEffect, useState} from 'react'
import {useLanguageColor} from 'src/hooks/useLanguageColor'
import {RepositoryType} from 'src/type/RepositoryType'

export const Repository: FC<RepositoryType> = (props) => {
  const {name, description, languages, url} = props
  const {handleColor} = useLanguageColor()
  const [total, setTotal] = useState(0)

  useEffect(() => {
    const sum = Object.values(languages).reduce((x, value) => x + value, 0)
    setTotal(sum)
  }, [languages])

  return (
    <a
      href={url}
      target='_blank'
      rel='noopener noreferrer'
      className='block mt-5 first-of-type:mt-3 sm:mt-7'
    >
      <h3 className='dark:text-[#F5FFFA] text-[15px] sm:text-[17px] font-semibold'>{name}</h3>
      <p className='dark:text-[#F5FFFA] text-sm sm:text-[15px] mt-2 sm:mt-3'>
        {description ?? 'No descroption'}
      </p>
      <div className='w-full h-2 outline outline-transparent rounded-full overflow-hidden flex mt-2 sm:mt-4'>
        {Object.keys(languages).map((item) => (
          <span
            key={item}
            className={`h-full block ${handleColor(item)}`}
            style={{
              width: `${Math.round((languages[item] / total) * 1000) / 10 + '%'}`,
            }}
          ></span>
        ))}
      </div>
      <ul className='flex flex-wrap items-center justify-start space-x-2 mt-2'>
        {Object.keys(languages).map((item) => (
          <li key={item} className='text-xs sm:text-sm flex items-center dark:text-[#F5FFFA]'>
            <span
              className={`w-[10px] h-[10px] mr-1 rounded-full inline-block ${handleColor(item)}`}
            ></span>
            {item}
            <span className='pl-1'>{Math.round((languages[item] / total) * 1000) / 10}%</span>
          </li>
        ))}
      </ul>
    </a>
  )
}
