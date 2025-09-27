import { describe, it, expect } from 'vitest'
import compile from '../src/index'
import fs from 'fs'
import path from 'path'

describe('Media Query CSS Debug', () => {
  it('preserves all properties including background-color and colors in media-query.css', () => {
    // Read the actual media-query.css file from tests directory
    const css = fs.readFileSync(path.join(__dirname, '__css__', 'media-query.css'), 'utf-8')

    // Look for the problematic selectors before compilation
    const regex = /\.xkvEr67uu-row-4 \.xkvEr67uu-col-[1-3] \.xkvEr67uu-block-1 div \{[^}]*background-color: #3AAEE0;[^}]*\}/g
    const originalMatches = css.match(regex)

    console.log('Original selectors:', originalMatches !== null ? originalMatches.length : 0)
    if (originalMatches !== null) {
      console.log(originalMatches[0])
    }

    const result = compile(css)

    // Check if the output contains the expected properties
    expect(result).toContain('background-color:#3AAEE0')
    expect(result).toContain('font-family:inherit')
    expect(result).toContain('font-weight:400')

    console.log('Output contains background-color?', result.includes('background-color:#3AAEE0'))

    // Write the compiled CSS to a debug file
    fs.writeFileSync(path.join(__dirname, '__css__', 'debug-output.css'), result, 'utf-8')
  })
})
