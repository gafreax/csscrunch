import { bench, describe } from 'vitest'
import { readFileSync } from 'fs'
import { join } from 'path'
import compile from '../src'

const css = readFileSync(join(__dirname, '__css__', 'current.css'), 'utf-8')

describe('compile', () => {
  bench('css', () => {
    compile(css)
  })
})
