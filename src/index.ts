import { tokenize } from './tokenize'
import { Tokens } from './index.d'

/**
 * Compact the tokens
 * @param Tokens that will be compacted 
 * @returns compacted Tokens
 */
export const compact = function (tokens: Tokens): Tokens {
  for (const token in tokens) {
    // do not optimize media queries
    if (token.includes('@media')) continue
    const matchedToken = []
    for (const matchToken in tokens) {
      if (tokens[token] === tokens[matchToken] && token !== matchToken) {
        matchedToken.push(matchToken)
        delete tokens[matchToken] // eslint-disable-line 
      }
    }
    if (matchedToken.length > 0) {
      const newToken = token + ',' + matchedToken.join(',')
      tokens[newToken] = tokens[token]
      delete tokens[token]  // eslint-disable-line 
    }
  }
  return tokens
}

/**
 * Stringify tokens object to use as css string
 * @param {object} tokens
 * @returns string with stringified tokens
 */
export const stringify = function (tokens: Tokens): string {
  const result = []
  const resultMediaQueries = []
  for (const token in tokens) {
    if (token.includes('@media')) {
      resultMediaQueries.push(''.concat(token, '{').concat(tokens[token], '}'))
    } else {
      result.push(''.concat(token, '{').concat(tokens[token], '}'))
    }
  }
  return result.join('').concat('\n').concat(resultMediaQueries.join('\n'))
}

const cleancss = (css: string): string => stringify(compact(tokenize(css)))

export default cleancss
