import type {GetStaticProps, NextPage} from 'next'
import React from 'react'
import {Bio} from 'src/components/Bio'
import {Github} from 'src/components/Github'
import {Hi} from 'src/components/Hi'
import {Profile} from 'src/components/Profile'
import {Seo} from 'src/components/Seo'
import {Skills} from 'src/components/Skills'
import {RepositoryType} from 'src/type/RepositoryType'

type PageProps = {
  repository: RepositoryType[]
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch(
    'https://api.github.com/users/otacleT/repos?sort=updated&direction=desc&per_page=3'
  )
  // const data = await response.json()
  const data = [
    {
      id: 1,
    name: 'kkk',
    description: 'hello world',
    html_url: 'https:asdasd',
    languages: 'language'
  }
  ]

  const repository: RepositoryType[] = []

  for (const item of data) {
    // const languages = await fetch(item.languages_url)
    // const languagesData = 'language'
    repository.push({
      id: item.id.toString(),
      name: item.name,
      description: item.description,
      languages: item.languages,
      url: item.html_url,
    })
  }

  return {
    props: {
      repository,
    },
    revalidate: 3600,
  }
}

const Home: NextPage<PageProps> = (props) => {
  const {repository} = props

  return (
    <div className='max-w-xl mx-auto px-4 pt-3 sm:pt-10'>
      <Seo
        pageTitle='Home'
        pageImg={'https://www.otacle.com'}
        pageImgWidth={1280}
        pageImgHeight={960}
        pagePath={'/'}
      />
      <Hi />
      <Profile />
      <Bio />
      <Skills />
      <Github repository={repository} />
    </div>
  )
}

export default Home
