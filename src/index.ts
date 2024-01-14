import { tokenize } from './lib/tokenize'
import { stringify } from './lib/stringify'
import { compact } from './lib/compact'
export { tokenize, stringify, compact }
export const parse = (css: string): string => stringify(compact(tokenize(css)))
