import { cleanCss, tokenize } from './lib/tokenize'
import { stringify } from './lib/stringify'
import { compact } from './lib/compact'
export { tokenize, stringify, compact }

export const parse = (css: string): string => {
    const cleanedCss = cleanCss(css)
    const tokens = tokenize(cleanedCss)
    const compactedTokens = compact(tokens)
    return stringify(compactedTokens)
}
