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
    if (firstParenthesis < 0) continue // Skip if no opening brace found

    let deep = 1
    let val = ''
    const rule = css.slice(index, firstParenthesis)
    let i = firstParenthesis + 1

    if (i > 0) {
      for (i; deep > 0 && i < css.length; i++) {
        // Handle comments within media queries
        if (i + 1 < css.length && css[i] === '/' && css[i + 1] === '*') {
          const commentEnd = css.indexOf('*/', i + 2)
          if (commentEnd === -1) break // Unclosed comment
          val += css.substring(i, commentEnd + 2)
          i = commentEnd + 1
          continue
        }

        // Track brace depth
        if (css[i] === '{') {
          deep++
        } else if (css[i] === '}') {
          deep--
        }

        // Collect characters for the value
        if (deep > 0) {
          val += css[i]
        }

        // Exit when we reach the closing brace of the media query
        if (deep === 0) {
          break
        }
      }

      // Set the end position to include the closing brace
      const mediaQueryEnd = i + 1

      mediaQueries.push({
        rule,
        val,
        start: index,
        end: mediaQueryEnd
      })
    }
  }
  return mediaQueries
}
