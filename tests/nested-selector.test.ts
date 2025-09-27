import { describe, it, expect } from 'vitest'
import compile from '../src/index'

describe('Nested Selector Issue', () => {
  it('preserves properties in nested selectors with div elements', () => {
    const css = `.row .col .block div {
      background-color: #3AAEE0;
      border-radius: 4px;
      color: #ffffff;
      direction: ltr;
      font-family: inherit;
      font-size: 14px;
      font-weight: 400;
      padding: 5px 20px;
    }`

    const result = compile(css)

    // Check that all properties are preserved
    expect(result).toContain('background-color:#3AAEE0')
    expect(result).toContain('border-radius:4px')
    expect(result).toContain('color:#ffffff')
    expect(result).toContain('direction:ltr')
    expect(result).toContain('font-family:inherit')
    expect(result).toContain('font-size:14px')
    expect(result).toContain('font-weight:400')
    expect(result).toContain('padding:5px 20px')
  })
})
