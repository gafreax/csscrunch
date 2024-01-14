import { tokenize } from './lib/tokenize'
import { stringify } from './lib/stringify'
import { compact } from './lib/compact'

const cleancss = (css: string): string => stringify(compact(tokenize(css)))

export default cleancss
