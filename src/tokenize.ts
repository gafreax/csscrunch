import { getMediaQueries } from './mediaQuery'
import { MediaQuery } from './mediaQuery.d'
import { Tokens } from './index.d'

/**
 * Cleans the string
 * @param char string that must be cleaned up
 * @returns the string that was cleaned up
 */
export const isWhitespace = function (char: string): boolean { return char === ' ' || char === '\t' || char === '\n' }

/**
 * Check if char is skippable because its value does mean nothing in css
 * This is useful for optimization purposes
 * @param {string} char current char
 * @param {string} oldChar old char to compare
 * @returns if the current char is skippable
 */
export const isSkippable = function (char: string, oldChar: string): boolean {
  const whiteSpace = (isWhitespace(oldChar) && isWhitespace(char)) || char === '\n'
  const afterPunctuation = (oldChar === ';' || oldChar === ':') && isWhitespace(char)
  return whiteSpace || afterPunctuation
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
    const nextChar = css[index + 1]
    // optimization
    // remove comments
    if (char === '/' && nextChar === '*') {
      index = css.indexOf('*/', index) + 2
      continue;
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
