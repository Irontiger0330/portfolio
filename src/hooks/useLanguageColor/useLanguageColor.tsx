import {useCallback} from 'react'

export const useLanguageColor = () => {
  const handleColor = useCallback((language: string) => {
    switch (language) {
      case 'TypeScript':
        return 'bg-[#3178C6]'
      case 'JavaScript':
        return 'bg-[#F1E05A]'
      case 'HTML':
        return 'bg-[#E34C26]'
      case 'CSS':
        return 'bg-[#563d7c]'
      case 'Solidity':
        return 'bg-[#AA6746]'
      case 'Vue':
        return 'bg-[#41b883]'
      case 'Python':
        return 'bg-[#3572A5]'
      case 'C++':
        return 'bg-[#f34b7d]'
      case 'C#':
        return 'bg-[#178600]'
      case 'Java':
        return 'bg-[#b07219]'
      case 'PHP':
        return 'bg-[#4F5D95]'
      case 'Ruby':
        return 'bg-[#701516]'
      case 'Go':
        return 'bg-[#00ADD8]'
      case 'Dart':
        return 'bg-[#00B4AB]'
      case 'Rust':
        return 'bg-[#dea584]'
      case 'Swift':
        return 'bg-[#ffac45]'
      case 'Kotlin':
        return 'bg-[#F18E33]'
      case 'C':
        return 'bg-[#555555]'
      case 'Objective-C':
        return 'bg-[#438eff]'
      case 'Perl':
        return 'bg-[#0298c3]'
      case 'Scala':
        return 'bg-[#DC322F]'
      case 'Elixir':
        return 'bg-[#6e4a7e]'
      case 'Clojure':
        return 'bg-[#db5855]'
      case 'Haskell':
        return 'bg-[#5e5086]'
      case 'Lua':
        return 'bg-[#000080]'
      case 'Groovy':
        return 'bg-[#e69f56]'
      case 'Erlang':
        return 'bg-[#B83998]'
      case 'R':
        return 'bg-[#198CE7]'
      case 'CoffeeScript':
        return 'bg-[#244776]'
      case 'Shell':
        return 'bg-[#89e051]'

      default:
        return ''
    }
  }, [])
  return {handleColor}
}
