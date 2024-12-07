export interface BuildMediaTokensI {
    css: string
    mediaQueries: MediaQuery[]
}

interface GetRuleValueI {
    oldChar: string
    rule: string
    ruleValue: string
}

export type Token = string

export interface Tokens {
    [key: string]: Token
}

export type GetRuleValueFunction = (params: GetRuleValueI) => string

export type BuildMediaTokensFunction = (
    mediaTokens: BuildMediaTokensI
) => Tokens
