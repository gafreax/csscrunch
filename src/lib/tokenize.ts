import { BuildMediaTokensFunction, GetRuleValueFunction, Tokens } from './tokenize.d'
import { getMediaQueries } from './mediaQuery'
import { isWhitespace } from './utils'
import { MediaQuery } from './mediaQuery.d'
import { removeComments } from './removeComments'
import { removeDuplicates } from './removeDuplicates'

/**
 * Check if char is skippable because its value does mean nothing in css
 * This is useful for optimization purposes
 * @param {string} char current char
 * @param {string} oldChar old char to compare
 * @param {string} nextChar next char to compare
 * @returns if the current char is skippable
 */
export const isSkippable = (char: string, oldChar: string, nextChar: string): boolean => {
  const whiteSpace = (isWhitespace(oldChar) && isWhitespace(char)) || char === '\n'
  const spaceAfter = (oldChar === ';' || oldChar === ':' || oldChar === '{' || oldChar === '}') && isWhitespace(char)
  const punctuationNext = isWhitespace(char) && isPunctuation(nextChar)
  const isLastSemicolon = char === ';' && isPunctuation(nextChar)
  return whiteSpace || spaceAfter || punctuationNext || isLastSemicolon
}

/**
 * Verify if the char is punctuation like ; : { } ( )
 * @param char the char to check
 * @returns if the char is punctuation like ; : { } ( )
 */
export const isPunctuation = (char: string): boolean => {
  // this is more readable but slower version return [';', ':', '{', '}', '(', ')'].includes(char)
  switch (char) {
    case ';':
    case ':':
    case '{':
    case '}':
    case '(':
    case ')':
      return true
    default:
      return false
  }
}

/**
 * build media queries tokens
 * todo: merge same media query rules
 * @param css the css string
 * @param object media query
 * @returns {Tokens} media tokens
 */
const buildMediaTokens: BuildMediaTokensFunction = ({ css, mediaQueries }) => {
  const mediaTokens: Tokens = {}
  for (const mediaQuery of mediaQueries) {
    const mediaQueryStart = mediaQuery.start
    const mediaQueryEnd = mediaQuery.end
    const mediaQueryFirstParenthesis = css.indexOf('{', mediaQueryStart)
    const rule = css.slice(mediaQueryStart, mediaQueryFirstParenthesis)
    const value = css.slice(mediaQueryFirstParenthesis + 1, mediaQueryEnd - 1)
    // add new rule and little size optimization
    if (mediaTokens[rule] !== undefined) {
      mediaTokens[rule] = mediaTokens[rule] + value.replaceAll('\n', '').replaceAll('\t', '').replaceAll('  ', '')
    } else {
      mediaTokens[rule] = value.replaceAll('\n', '').replaceAll('\t', '').replaceAll('  ', '')
    }
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

const getRuleValue: GetRuleValueFunction = ({ oldChar, currentRules, newRules }) => {
  if (currentRules === undefined || currentRules.includes(newRules.trim())) {
    return newRules.trim()
  }

  const currentRuleValue = (oldChar === ';') ? newRules.slice(0, -1) : newRules
  const optimizedRuleValue = optimizeZeroUnitsRule(currentRuleValue)
  const lastRuleChar: string = currentRules[currentRules.length - 1]
  const concat = lastRuleChar === ';' ? '' : ';'
  return currentRules + concat + optimizedRuleValue
}

/**
 * Clean css string by removing comments and duplicates
 * @param css css string
 * @returns cleaned css string
 */
export const cleanCss = (css: string): string => {
  css = removeDuplicates(css, [';', '.', ' '])
  css = removeComments(css)
  return css
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
  // todo: change these var into state object
  let selector = ''
  let rules = ''
  let isValueToken = false
  let oldChar = ''
  let mediaQueryParsed = 0

  for (let index = 0; index < css.length; index++) {
    const char = css[index]
    const nextChar = css[index + 1]
    // optimization
    if (isSkippable(char, oldChar, nextChar)) {
      oldChar = char // reset old char to avoid error
      continue
    }
    if (index >= mediaQueries[mediaQueryParsed]?.start) {
      index = mediaQueries[mediaQueryParsed].end + 1 // NOSONAR
      mediaQueryParsed++
      oldChar = '' // reset old char to avoid error
      continue
    }

    // tokenization
    if (char === '}' && rules?.length === 0) {
      // remove empty rules
      delete tokens[selector] // eslint-disable-line
      selector = ''
      rules = ''
      isValueToken = false
    } else if (char === '}') {
      tokens[selector] = getRuleValue({ oldChar, currentRules: tokens[selector], newRules: rules })
      selector = ''
      rules = ''
      isValueToken = false
    } else if (char === '{') {
      isValueToken = true
    } else if (isValueToken) {
      rules += char
    } else {
      selector += char
    }
    oldChar = char
  }

  const mediaTokens: Tokens = buildMediaTokens({ css, mediaQueries })
  return { ...tokens, ...mediaTokens }
}
