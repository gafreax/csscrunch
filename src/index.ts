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
  const mediaOptimizedRules = Object.entries(tokens).reduce((acc, curr) => {
    const [key, value] = curr
    if (key.startsWith('@media')) {
      const compiledRulesForMedia = compile(value, optimization)
      return { ...acc, [key]: compiledRulesForMedia }
    }
    return { ...acc, [key]: value }
  }, {})
  const compactedTokens = compact(mediaOptimizedRules)
  return stringify(compactedTokens)
}

export default compile
