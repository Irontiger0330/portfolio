import React from 'react'
import {FC} from 'react'
import {RepositoryType} from 'src/type/RepositoryType'

import {Repository} from '../Repository'

type Props = {
  repository: RepositoryType[]
}

export const Github: FC<Props> = (props) => {
  const {repository} = props

  return (
    <section className='section-wrap'>
      <h2 className='section-title'>Github</h2>
      {repository.map((data: RepositoryType) => (
        <Repository
          key={data.id}
          id={data.id}
          name={data.name}
          url={data.url}
          description={data.description ?? 'No description'}
          languages={data.languages}
        />
      ))}
      <a
        href='https://github.com/Irontiger0330'
        target='_blank'
        rel='noopener noreferrer'
        className='w-[200px] sm:w-[220px] h-10 sm:h-12 flex items-center justify-center text-sm sm:text-base text-white bg-black rounded-md mx-auto mt-10'
      >
        View on Github
      </a>
    </section>
  )
}
