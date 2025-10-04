import { describe, it, expect } from 'vitest'
import { readFile } from 'node:fs/promises'
import path from 'path'

import compile from '../src/index'
import { getIntegrationFiles } from './integration'

describe('compile', () => {
  const cssList = getIntegrationFiles()
  it.each(cssList)('compiles CSS %s', async (cssFile: string) => {
    const css = await readFile(path.join(__dirname, '__css__', cssFile), 'utf-8')
    const result = compile(css)
    expect(result).toMatchSnapshot()
  })
})
