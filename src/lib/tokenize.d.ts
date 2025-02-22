export interface BuildMediaTokensI {
  css: string
  mediaQueries: MediaQuery[]
}

export type Token = string

export interface Tokens {
  [key: string]: Token
}

interface GetRuleValueI {
  oldChar: string
  currentRules: string
  newRules: string
  optimizations?: Optimizations
}

export type GetRuleValueFunction = (params: GetRuleValueI) => string

/**
 * build media queries tokens
 * todo: merge same media query rules
 * @param css the css string
 * @param object media query
 * @returns {Tokens} media tokens
 */
export type BuildMediaTokensFunction = (mediaTokens: BuildMediaTokensI) => Tokens
