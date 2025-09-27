import { describe, it, expect } from 'vitest'
import compile from '../src/index'

describe('Specific Row-4 Div Issue', () => {
  it('preserves all properties in row-4 div selector', () => {
    const css = `.row-4 .col-1 .block-1 div {
      font-family: inherit;
      font-size: 14px;
      font-weight: 400;
      background-color: #3AAEE0;
      border-radius: 4px;
      color: #ffffff;
      line-height: 200%;
      letter-spacing: 0px;
      padding: 5px 20px;
      width: auto;
      direction: ltr;
    }`

    const result = compile(css)

    // Check all properties are present
    expect(result).toContain('font-family:inherit')
    expect(result).toContain('font-size:14px')
    expect(result).toContain('font-weight:400')
    expect(result).toContain('background-color:#3AAEE0')
    expect(result).toContain('border-radius:4px')
    expect(result).toContain('color:#ffffff')
    expect(result).toContain('line-height:200%')
    expect(result).toContain('padding:5px 20px')
  })
})
