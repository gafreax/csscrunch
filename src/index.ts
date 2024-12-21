import { cleanCss, tokenize } from './lib/tokenize'
import { stringify } from './lib/stringify'
import { compact } from './lib/compact'
export { tokenize, stringify, compact }

const compile = (css: string): string => {
  const cleanedCss = cleanCss(css)
  const tokens = tokenize(cleanedCss)
  const compactedTokens = compact(tokens)
  return stringify(compactedTokens)
}

export default compile
