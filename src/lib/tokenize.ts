import { BuildMediaTokensFunction, GetRuleValueFunction, RuleObject, Tokens } from './tokenize.d'
import { getMediaQueries } from './mediaQuery'
import { isEmpty, isWhitespace } from './utils'
import { MediaQuery } from './mediaQuery.d'
import { Optimizations } from './optimization.d'
import { optimizeRule, removeComments, removeDuplicates } from './optimization'
import { removeRuleLastSemi } from './removeRuleLastSemi'

const REGEX_MEDIA_QUERY_BRACKETS_WITH_SPACE = /[\n\t]| {2,}| ?([{}() ,;:]) ?/g

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

export const cleanMediaQueryRule = (rule: string): string => {
  return rule.replace(REGEX_MEDIA_QUERY_BRACKETS_WITH_SPACE, (_, p) => p !== undefined ? p : '')
}

export const buildMediaTokens: BuildMediaTokensFunction = ({ css, mediaQueries }) => {
  const mediaTokens: Tokens = {}
  for (const mediaQuery of mediaQueries) {
    const mediaQueryStart = mediaQuery.start
    const mediaQueryEnd = mediaQuery.end
    const mediaQueryFirstParenthesis = css.indexOf('{', mediaQueryStart)
    const rule = css.slice(mediaQueryStart, mediaQueryFirstParenthesis).trim()
    const value = css.slice(mediaQueryFirstParenthesis + 1, mediaQueryEnd - 1).trim()
    if (mediaTokens[rule] !== undefined) {
      mediaTokens[rule] = mediaTokens[rule] + cleanMediaQueryRule(value)
    } else {
      mediaTokens[rule] = cleanMediaQueryRule(value)
    }
  }
  return mediaTokens
}

/**
 * Parses a CSS rules string into a key-value object representation
 * @param rules - CSS rules string in the format "key1:value1;key2:value2;..."
 * @returns Object with CSS property names as keys and their values as string values
 * @example
 * getRuleObject("color:red;background:blue;") // { color: "red", background: "blue" }
 */
const getRuleObject = (rules: string): RuleObject => {
  return rules.split(';').reduce<RuleObject>((acc, rule) => {
    if (rule === '') return acc
    const columnIndex = rule.indexOf(':')
    if (columnIndex === -1) return acc
    const key = rule.slice(0, columnIndex)
    const value = rule.slice(columnIndex + 1)
    if (!isEmpty(key) && !isEmpty(value)) {
      acc[key.trim()] = value.trim()
    }
    return acc
  }, {})
}

const getRuleValue: GetRuleValueFunction = ({ currentRules, newRules }) => {
  if (currentRules === undefined) {
    return newRules.trim()
  }

  const currentRulesObject: RuleObject = getRuleObject(currentRules)

  const newRulesObject: RuleObject = getRuleObject(newRules)

  Object.entries(newRulesObject).forEach(([key, value]) => {
    currentRulesObject[key] = value
  })

  return Object.entries(currentRulesObject).map(([key, value]) => `${key}:${value}`).join(';')
}

/**
 * Clean css string by removing comments and duplicates
 * @param css css string
 * @returns cleaned css string
 */
export const cleanCss = (css: string): string => {
  const cssNoComments = removeComments(css)
  const cssNoLastSemi = removeRuleLastSemi(cssNoComments)
  const cssNoDuplicates = removeDuplicates(cssNoLastSemi, [';', '.', ' '])
  return cssNoDuplicates
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
export const tokenize = (css: string, optmizations?: Optimizations): Tokens => {
  const tokens: Tokens = {}
  const mediaQueries: MediaQuery[] = getMediaQueries(css)

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
    // Handle media queries
    if (mediaQueries.length > 0 && mediaQueryParsed < mediaQueries.length &&
      index >= mediaQueries[mediaQueryParsed].start && index < mediaQueries[mediaQueryParsed].end) {
      // We're inside a media query
      if (index === mediaQueries[mediaQueryParsed].end - 1) {
        // We're at the closing brace
        oldChar = char
        if (char === '}') {
          mediaQueryParsed++
          // Make sure we don't skip the next character after the media query
          // This is important when a selector immediately follows a media query
          if (index + 1 < css.length && css[index + 1] === '.') {
            // Make sure we don't accidentally skip a class selector
            continue
          }
        }
      }
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
      const ruleValue = getRuleValue({ currentRules: tokens[selector], newRules: rules })
      const optimizedRuleValue = optimizeRule(ruleValue, optmizations)

      tokens[selector] = optimizedRuleValue

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
