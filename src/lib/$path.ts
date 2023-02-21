export const pagesPath = {
  "works": {
    "colorful_todo": {
      $url: (url?: { hash?: string }) => ({ pathname: '/works/colorful-todo' as const, hash: url?.hash })
    },
    "fukupoke": {
      $url: (url?: { hash?: string }) => ({ pathname: '/works/fukupoke' as const, hash: url?.hash })
    },
    "gourmet_app": {
      $url: (url?: { hash?: string }) => ({ pathname: '/works/gourmet-app' as const, hash: url?.hash })
    },
    "kyuko": {
      $url: (url?: { hash?: string }) => ({ pathname: '/works/kyuko' as const, hash: url?.hash })
    },
    "no_spoilers_twitter": {
      $url: (url?: { hash?: string }) => ({ pathname: '/works/no-spoilers-twitter' as const, hash: url?.hash })
    },
    "portfolio": {
      $url: (url?: { hash?: string }) => ({ pathname: '/works/portfolio' as const, hash: url?.hash })
    },
    "scroll_game": {
      $url: (url?: { hash?: string }) => ({ pathname: '/works/scroll-game' as const, hash: url?.hash })
    },
    "yumemi_frontend": {
      $url: (url?: { hash?: string }) => ({ pathname: '/works/yumemi-frontend' as const, hash: url?.hash })
    },
    $url: (url?: { hash?: string }) => ({ pathname: '/works' as const, hash: url?.hash })
  },
  $url: (url?: { hash?: string }) => ({ pathname: '/' as const, hash: url?.hash })
}

export type PagesPath = typeof pagesPath

export const staticPath = {
  $30_github_c0a4dde53e_png: '/30_github.c0a4dde53e.png',
  $45_github_tile_e1be128b4e_png: '/45_github-tile.e1be128b4e.png',
  $45_github_tile_e1be128b4e_svg: '/45_github-tile.e1be128b4e.svg',
  android_svg: '/android.svg',
  angularjs_png: '/angularjs.png',
  aspnetmvc_png: '/aspnetmvc.png',
  c_svg: '/c.svg',
  cSharp_svg: '/cSharp.svg',
  chrome_svg: '/chrome.svg',
  cpp_svg: '/cpp.svg',
  css_svg: '/css.svg',
  django_png: '/django.png',
  dotnetcore_svg: '/dotnetcore.svg',
  favicon_ico: '/favicon.ico',
  flask_png: '/flask.png',
  fukupoke_top_jpg: '/fukupoke-top.jpg',
  game_colorModal_png: '/game-colorModal.png',
  game_modal_png: '/game-modal.png',
  game_top_png: '/game-top.png',
  git_original_svg: '/git-original.svg',
  github_svg: '/github.svg',
  gourmet_map_png: '/gourmet-map.png',
  gourmet_modal_png: '/gourmet-modal.png',
  gourmet_top_png: '/gourmet-top.png',
  gulp_svg: '/gulp.svg',
  hackerrank_png: '/hackerrank.png',
  html5_svg: '/html5.svg',
  instagram_svg: '/instagram.svg',
  java_original_svg: '/java-original.svg',
  javascript_svg: '/javascript.svg',
  jquery_original_svg: '/jquery-original.svg',
  json_svg: '/json.svg',
  kyuko_top_jpg: '/kyuko-top.jpg',
  linkedin_svg: '/linkedin.svg',
  logo_github__white_png: '/logo-github--white.png',
  logo_github_png: '/logo-github.png',
  logo_twitter__white_png: '/logo-twitter--white.png',
  logo_twitter_png: '/logo-twitter.png',
  logo_wantedly__white_png: '/logo-wantedly--white.png',
  logo_wantedly_png: '/logo-wantedly.png',
  me_png: '/me.png',
  mysql_svg: '/mysql.svg',
  npm_svg: '/npm.svg',
  php_svg: '/php.svg',
  portfolio_single__dark_jpg: '/portfolio-single--dark.jpg',
  portfolio_single_jpg: '/portfolio-single.jpg',
  portfolio_top__dark_jpg: '/portfolio-top--dark.jpg',
  portfolio_top_jpg: '/portfolio-top.jpg',
  portfolio_work__dark_jpg: '/portfolio-work--dark.jpg',
  portfolio_work_jpg: '/portfolio-work.jpg',
  postgresql_svg: '/postgresql.svg',
  problemSolving_png: '/problemSolving.png',
  python_original_svg: '/python-original.svg',
  react_original_svg: '/react-original.svg',
  redux_svg: '/redux.svg',
  sass_svg: '/sass.svg',
  skill_cpp_svg: '/skill-cpp.svg',
  skill_css3_svg: '/skill-css3.svg',
  skill_ethers_svg: '/skill-ethers.svg',
  skill_firebase_svg: '/skill-firebase.svg',
  skill_hardhat_svg: '/skill-hardhat.svg',
  skill_html5_svg: '/skill-html5.svg',
  skill_js_svg: '/skill-js.svg',
  skill_mantine_svg: '/skill-mantine.svg',
  skill_mapbox_svg: '/skill-mapbox.svg',
  skill_metamask_svg: '/skill-metamask.svg',
  skill_nextjs_svg: '/skill-nextjs.svg',
  skill_php_svg: '/skill-php.svg',
  skill_react_svg: '/skill-react.svg',
  skill_sass_svg: '/skill-sass.svg',
  skill_solidity_svg: '/skill-solidity.svg',
  skill_tailwindcss_svg: '/skill-tailwindcss.svg',
  skill_ts_svg: '/skill-ts.svg',
  stackoverflow_svg: '/stackoverflow.svg',
  todo_modal_png: '/todo-modal.png',
  todo_top_png: '/todo-top.png',
  twitter_modal_png: '/twitter-modal.png',
  twitter_timeline_png: '/twitter-timeline.png',
  twitter_top_png: '/twitter-top.png',
  unity3d_svg: '/unity3d.svg',
  visualstudio_png: '/visualstudio.png',
  vscode_png: '/vscode.png',
  yumemi_selected_png: '/yumemi-selected.png',
  yumemi_top_png: '/yumemi-top.png'
} as const

export type StaticPath = typeof staticPath
