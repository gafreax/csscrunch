import { describe, it, expect } from 'vitest'
import { readFile } from 'node:fs/promises'
import path from 'path'
import fs from 'fs'

import compile from '../src/index'

describe('compile', () => {
  it('compiles CSS', async () => {
    // get the list of css files in the test folder
    const cssList = fs.readdirSync(path.join(__dirname, '__css__')).filter(file => file.endsWith('.css'))
    for (const cssFile of cssList) {
      const css = await readFile(path.join(__dirname, '__css__', cssFile), 'utf-8')
      const result = compile(css)
      expect(result).toMatchSnapshot()
    }
  })
})
