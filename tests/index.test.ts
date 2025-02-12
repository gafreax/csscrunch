import { describe, beforeAll, it, expect } from 'vitest'
import { readFile } from 'node:fs/promises'
import path from 'path'

import compile from '../src/index'

const css_path = path.join(__dirname, 'simple.css')

describe('compile', () => {
  let css: string

  beforeAll(async () => {
    css = await readFile(css_path, 'utf-8')
  })

  it('compiles CSS', () => {
    const result = compile(css)
    expect(result).toMatchSnapshot()
  })
})

