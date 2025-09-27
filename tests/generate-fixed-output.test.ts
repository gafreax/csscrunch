import { describe, it } from 'vitest'
import compile from '../src/index'
import fs from 'fs'
import path from 'path'

describe('Generate Fixed Output', () => {
  it('generates a fixed media-query.out.css file with all properties', () => {
    const inputPath = path.join(__dirname, '__css__', 'media-query.css')
    const outputPath = path.join(__dirname, '__css__', 'media-query-fixed.out.css')

    const css = fs.readFileSync(inputPath, 'utf-8')
    const result = compile(css)
    fs.writeFileSync(outputPath, result, 'utf-8')

    console.log('CSS processed and written to', outputPath)
  })
})
