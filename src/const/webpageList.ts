import {pagesPath} from 'src/lib/$path'

export const webpageList = [
  {
    title: 'HP dedicated to Kyushu Koka Automobiles',
    img: '/kyuko-top.jpg',
    path: pagesPath.works.kyuko.$url().pathname,
    subTitle: 'I built the frontend with Wordpress.',
  },
  {
    title: 'Welfare portal site “Fukupoke” HP',
    img: '/fukupoke-top.jpg',
    path: pagesPath.works.fukupoke.$url().pathname,
    subTitle: 'I built the backend with Laravel.',
  },
  {
    title: 'Portfolio site',
    img: '/portfolio-top.jpg',
    imgDark: '/portfolio-top--dark.jpg',
    path: pagesPath.works.portfolio.$url().pathname,
    subTitle: 'I built the frontend with NextJS.',
  },
]
