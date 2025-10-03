import { describe, it, expect } from 'vitest'
import { readFile } from 'node:fs/promises'
import path from 'path'
import fs from 'fs'

import compile from '../src/index'

const cssList = fs.readdirSync(path.join(__dirname, '__css__')).filter(file => file.endsWith('.css'))
describe('compile', () => {
  it.each(cssList)('compiles CSS %s', async (cssFile: string) => {
    const css = await readFile(path.join(__dirname, '__css__', cssFile), 'utf-8')
    const result = compile(css)
    expect(result).toMatchSnapshot()
  })
})
