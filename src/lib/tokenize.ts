import { BuildMediaTokensFunction, GetRuleValueFunction, Tokens } from './tokenize.d'
import { MediaQuery } from './mediaQuery.d'
import { getMediaQueries } from './mediaQuery'
import { isWhitespace } from './utils'

/**
 * Check if char is skippable because its value does mean nothing in css
 * This is useful for optimization purposes
 * @param {string} char current char
 * @param {string} oldChar old char to compare
 * @returns if the current char is skippable
 */
export const isSkippable = function (char: string, oldChar: string): boolean {
  const whiteSpace = (isWhitespace(oldChar) && isWhitespace(char)) || char === '\n'
  const afterSpace = (oldChar === ';' || oldChar === ':' || oldChar === '{' || oldChar === '}') && isWhitespace(char)
  return whiteSpace || afterSpace
}

/**
 *
 * @param css build media queries tokens
 * @param object
 * @returns {Tokerns} media tokens
 */
const buildMediaTokens: BuildMediaTokensFunction = ({ css, mediaQueries }) => {
  const mediaTokens: Tokens = {}
  for (const mediaQuery of mediaQueries) {
    const mediaQueryStart = mediaQuery.start
    const mediaQueryEnd = mediaQuery.end
    const mediaQueryFirstParenthesis: number = css.indexOf('{', mediaQueryStart)
    const rule = css.slice(mediaQueryStart, mediaQueryFirstParenthesis)
    const value = css.slice(mediaQueryFirstParenthesis + 1, mediaQueryEnd - 1)
    mediaTokens[rule] = value.replaceAll('\n', '').replaceAll('\t', '').replaceAll('  ', '')
  }
  return mediaTokens
}

const optimizeZeroUnitsRule = (ruleValue: string): string => {
  if (ruleValue.includes(':0px')) {
    return ruleValue.replace(':0px', ':0')
  }
  if (ruleValue.includes(':0%')) {
    return ruleValue.replace(':0%', ':0')
  }
  return ruleValue
}

const getRuleValue: GetRuleValueFunction = ({ oldChar, rule, ruleValue }) => {
  // remove last ; in css rules
  if (oldChar === ';') {
    ruleValue = ruleValue.slice(0, -1)
  }
  // optimize 0 pixel values
  ruleValue = optimizeZeroUnitsRule(ruleValue)
  // first rule usage on the css
  if (rule === undefined) {
    return ruleValue
  }
  // size output optimization
  const lastRuleChar: string = rule[rule.length]
  return lastRuleChar === ';' ? rule + ruleValue : rule + ';' + ruleValue
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
export const tokenize = (css: string): Tokens => {
  const tokens: Tokens = {}
  const mediaQueries: MediaQuery[] = getMediaQueries(css)
  // todo: change theese var into state object
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
      index = css.indexOf('*/', index) + 2 // NOSONAR
      continue
    }
    if (index >= mediaQueries[mediaQueryParsed]?.start) {
      index = mediaQueries[mediaQueryParsed].end + 1 // NOSONAR
      mediaQueryParsed++
      continue
    }
    if (isSkippable(char, oldChar)) { continue }

    // tokenization
    if (char === '}' && ruleValue?.length === 0) { // remove empty rules
      delete tokens[ruleId] // NOSONAR
      ruleId = ''
      ruleValue = ''
      isValueToken = false
    } else if (char === '}') {
      tokens[ruleId] = getRuleValue({ oldChar, rule: tokens[ruleId], ruleValue })
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

  const mediaTokens: Tokens = buildMediaTokens({ css, mediaQueries })
  return { ...tokens, ...mediaTokens }
}
