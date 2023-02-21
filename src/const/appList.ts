import {pagesPath} from 'src/lib/$path'

export const appList = [
  {
    title: 'Colorful Todo App',
    img: '/todo-top.png',
    path: pagesPath.works.colorful_todo.$url().pathname,
    subTitle: 'UI/It is a Todo app that focuses on UX.',
  },
  {
    title: 'No Spoilers Twitter!!!',
    img: '/twitter-top.png',
    path: pagesPath.works.no_spoilers_twitter.$url().pathname,
    subTitle: 'It is an application that prevents spoilers on Twitter.',
  },
  {
    title: 'Total population transition graph by prefecture',
    img: '/yumemi-top.png',
    path: pagesPath.works.yumemi_frontend.$url().pathname,
    subTitle: 'This is a front-end project for Yumemi Co., Ltd.',
  },
]
