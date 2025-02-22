import { cleanCss, tokenize } from './lib/tokenize'
import { stringify } from './lib/stringify'
import { compact } from './lib/compact'
import { Optimizations } from './lib/optimization.d'

export { tokenize, stringify, compact }

export interface Options {
  paddingShortHand?: boolean
  marginShortHand?: boolean
}

const compile = (css: string, optimization?: Optimizations): string => {
  const cleanedCss = cleanCss(css)
  const tokens = tokenize(cleanedCss, optimization)
  const compactedTokens = compact(tokens)
  return stringify(compactedTokens)
}

export default compile
