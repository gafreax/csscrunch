// TODO: clean out comments from css
import { MediaQuery } from './mediaQuery.d'
import { Tokens } from './index.d'
import { getMediaQueries } from './mediaQuery'

export const isWhitespace = function (char: string): boolean { return char === ' ' || char === '\t' || char === '\n' }

/**
 * Check if char is skippable because its value does mean nothing in css
 * This is useful for optimization purposes
 * @param {string} char current char
 * @param {string} oldChar old char to compare
 * @returns if the current char is skippable
 */
export const isSkippable = function (char: string, oldChar: string): boolean {
  const witheSpace = (isWhitespace(oldChar) && isWhitespace(char)) || char === '\n'
  const afterPunctuation = (oldChar === ';' || oldChar === ':') && isWhitespace(char)
  return witheSpace || afterPunctuation
}

/**
 * Simple function to tokenize css string into tokens object
 * Tokens object is used to optimize css string by removing redundant css rules.
 * Redundant css rules are rules that have the same css value as another rule.
 * For example:
 *  .class { color: red; }
 *  .class { background: blue; }
 *
 * Become:
 *
 * {'.class': 'color: red; background: blue;' }
 * 
 * TODO: add configuration parameter to allow only some optimizations 
 * @param css String with css style
 * @returns string Tokens with identification tokens and its style rules
 */
export const tokenize = function (css: string): Tokens {
  const tokens: Tokens = {}
  const mediaQueries: MediaQuery[] = getMediaQueries(css)
  let ruleId = ''
  let ruleValue = ''
  let isValueToken = false
  let oldChar = ''
  let mediaQueryParsed = 0
  for (let index = 0; index < css.length; index++) {
    const char = css[index]
    // optimization
    if (oldChar === '/' && char === '*') {
      index = css.indexOf('*/', index) + 2
    }
    if (index >= mediaQueries[mediaQueryParsed]?.start) {
      index = mediaQueries[mediaQueryParsed].end + 1
      mediaQueryParsed++
      continue
    }
    if (isSkippable(char, oldChar)) { continue }

    // tokenization
    if (char === '}') {
      ruleId = ruleId.trim()
      ruleValue = ruleValue.trim()
      if (oldChar === ';') {
        ruleValue = ruleValue.slice(0, -1)
      }
      const rule = tokens[ruleId]
      if (rule === undefined) {
        tokens[ruleId] = ruleValue
      } else {
        // size output optimization
        const lastRuleChar: string = rule[rule.length]
        const joinedRule = lastRuleChar === ';' ? rule + ruleValue : rule + ';' + ruleValue
        tokens[ruleId] = joinedRule
      }
      ruleId = ''
      ruleValue = ''
      isValueToken = false
    } else if (char === '{') {
      isValueToken = true
    } else if (isValueToken) {
      ruleValue += char
    } else {
      ruleId += char
    }
    oldChar = char
  }
  const mediaTokens: Tokens = {}
  for (const mediaQuery of mediaQueries) {
    const mediaQueryStart = mediaQuery.start
    const mediaQueryEnd = mediaQuery.end
    const mediaQueryFirstParenthesis = css.indexOf('{', mediaQueryStart)
    const rule = css.slice(mediaQueryStart, mediaQueryFirstParenthesis)
    const value = css.slice(mediaQueryFirstParenthesis + 1, mediaQueryEnd - 1)
    mediaTokens[rule] = value.replaceAll('\n', '').replaceAll('\t', '').replaceAll('  ', '')
  }
  return { ...tokens, ...mediaTokens }
}

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
