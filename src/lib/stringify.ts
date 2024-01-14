import { Tokens } from './tokenize.d'

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
