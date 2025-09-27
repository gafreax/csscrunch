import { describe, it, expect } from 'vitest'
import compile from '../src/index'

describe('Complex Media Query Issue', () => {
  it('handles complex selectors after media queries', () => {
    const css = `@media (max-width: 520px) {
      .test {
        display: block;
      }
    }.row-4 .col-1 .block-1 div {
      background-color: #3AAEE0;
      border-radius: 4px;
      color: #ffffff;
      direction: ltr;
      font-family: inherit;
      font-size: 14px;
      font-weight: 400;
      letter-spacing: 0;
      line-height: 200%;
      width: auto;
      padding: 5px 20px;
    }`

    const result = compile(css)

    expect(result).toContain('background-color:#3AAEE0')
    expect(result).toContain('border-radius:4px')
    expect(result).toContain('color:#ffffff')
    expect(result).toContain('direction:ltr')
    expect(result).toContain('font-family:inherit')
  })
})
