import { MediaQuery } from './mediaQuery.d'

export const deepLevel = (char: string): number => {
  if (char === '{') {
    return +1
  } else if (char === '}') {
    return -1
  }
  return 0
}

export const findIndexOfMediaQueries = (css: string): number[] => {
  const indexList = []
  let currentIndex = css.indexOf('@media')

  while (currentIndex >= 0) {
    indexList.push(currentIndex)
    currentIndex = css.indexOf('@media', currentIndex + '@media'.length)
  }
  return indexList
}

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
        if (css.indexOf('/*', i) === i) {
          const commentEnd = css.indexOf('*/', i)
          if (commentEnd === -1) break // Malformed CSS with unclosed comment
          i = commentEnd + 1 // Position at the end of comment
          continue
        }
        deep = deep + deepLevel(css[i])
        if (deep > 0) {
          val += css[i]
        }
      }
      const mediaQueryEnd = i > 0 ? i : firstParenthesis
      mediaQueries.push({ rule, val, start: index, end: mediaQueryEnd })
    }
  }
  return mediaQueries
}
