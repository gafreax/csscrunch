import type { Tokens } from "./index.d.ts"

export const isWhitespace = function (char: string) { return char === ' ' || char === '\t' || char === '\n' }

/**
 * Check if char is skippable because its value does mean nothing in css
 * This is useful for optimization purposes
 * @param {string} char current char
 * @param {string} oldChar old char to compare
 * @returns if the current char is skippable
 */
export const isSkippable = function (char:string, oldChar: string) {
  return (isWhitespace(oldChar) && isWhitespace(char)) || char === '\n'
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
 * @param css String with css style
 * @returns Tokens with identification tokens and its style rules
 */
export const tokenize = function (css:string):Tokens {
  const tokens:Tokens = {}
  let ruleId = ''
  let ruleValue = ''
  let isValueToken = false
  let oldChar = ''
  for ( const char of css) {
    // optimization
    if ((0, exports.isSkippable)(char, oldChar)) { continue }
    // tokenization
    if (char === '}') {
      ruleId = ruleId.trim()
      const rule = tokens[ruleId]
      tokens[ruleId] = rule ? rule + ruleValue : ruleValue
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
  return tokens
}

export const compact = function (tokens: Tokens) {
  for (const token in tokens) {
    const matchedToken = []
    for (const matchToken in tokens) {
      if (tokens[token] === tokens[matchToken] && token !== matchToken) {
        matchedToken.push(matchToken)
        delete tokens[matchToken]
      }
    }
    if (matchedToken.length) {
      const newToken = token + ',' + matchedToken.join(',')
      tokens[newToken] = tokens[token]
      delete tokens[token]
    }
  }
  return tokens
}

/**
 * Stringify tokens object to use as css string
 * @param {object} tokens
 * @returns string with stringified tokens
 */
export const stringify = function (tokens: Tokens):string {
  const result = []
  for (const token in tokens) {
    result.push(''.concat(token, '{').concat(tokens[token], '}'))
  }
  return result.join('')
}

const cleancss = tokenize(css);

exports default cleancss
