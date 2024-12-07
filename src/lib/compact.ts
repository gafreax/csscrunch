import { Tokens } from './tokenize.d'

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
            delete tokens[token] // eslint-disable-line
        }
    }
    return tokens
}
