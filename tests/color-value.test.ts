import { describe, it, expect } from 'vitest'
import compile from '../src/index'

describe('Color Value Test', () => {
  it('preserves background-color with hex values', () => {
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
    }

    .row-4 .col-2 .block-1 div {
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
    }

    .row-4 .col-3 .block-1 div {
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

    expect(result).toContain('background-color:#3AAEE0')
    expect(result).toContain('color:#ffffff')
    expect(result).toContain('font-family:inherit')
  })
})
