import { MediaQuery } from './mediaQuery.d'

export const getMediaQueries = (css: string): MediaQuery[] => {
  const indexList = findIndexOfMediaQueries(css)
  const mediaQueries: MediaQuery[] = []
  for (const index of indexList) {
    const firstParenthesis = css.indexOf('{', index)
    let deep = 1
    let val = ''
    const rule = css.slice(index, firstParenthesis)
    let i = firstParenthesis + 1
    if (i > 0) {
      for (i; deep > 0 && i <= css.length; i++) {
        if (css[i] === '{') {
          deep++
        } else if (css[i] === '}') {
          deep--
        }
        val += css[i]
      }
      mediaQueries.push({ rule, val, start: index, end: i })
    }
  }
  return mediaQueries
}

export const findIndexOfMediaQueries = (css: string): number[] => {
  const indexList = []
  const len = '@media'.length
  let currentIndex = css.indexOf('@media')

  while (currentIndex >= 0) {
    indexList.push(currentIndex)
    currentIndex = css.indexOf('@media', currentIndex + len)
  }
  return indexList
}
