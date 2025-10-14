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

  it('preserves background with data URLs', () => {
    const css = '.a { background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA"); }'
    const result = compile(css)

    expect(result).toContain('background:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA")')
  })

  it('preserves background with URL containing hash', () => {
    const css = '.c { background: url(\'https://example.com/image.png?color=#000000\');}'
    const result = compile(css)

    expect(result).toContain("background:url('https://example.com/image.png?color=#000000')")
  })

  it('preserves color with URL containing hash runned with optimizations', () => {
    const css = '.c { background: url(\'https://example.com/image.png?color=#000000\');}'
    const result = compile(css, {
      paddingShortHand: true,
      marginShortHand: true,
      removeZeroUnits: true,
      optimizeColors: true
    })

    expect(result).toContain("background:url('https://example.com/image.png?color=#000000')")
  })

  it('process colors when optimizeColors is true', () => {
    const css = '.a { color: #ffffff; background-color: #000000; border: 1px solid #ff0000; }'
    const result = compile(css, { optimizeColors: true })

    expect(result).toContain('color:#fff')
    expect(result).toContain('background-color:#000')
    expect(result).toContain('border:1px solid #f00')
  })

  it('process colors and preserve correct spacing', () => {
    const css = '.a { box-shadow: 0 0 5px 0     #ff0000;  background-color:#000000; color: #ffffff;}'
    const result = compile(css, { optimizeColors: true })

    expect(result).toContain('box-shadow:0 0 5px 0 #f00')
    expect(result).toContain('background-color:#000')
    expect(result).toContain('color:#fff')
  })
  it('process colors in multiple shadows', () => {
    const css = `.a {
      box-shadow: 0 5px #fff; /* Multiple shadows */
      text-shadow: 1px 1px 2px #AABBCC,2px 2px 4px #FFAAAA;
    }`
    const result = compile(css, { optimizeColors: true }).toLowerCase()

    expect(result).toContain('box-shadow:0 5px #fff')
    expect(result).toContain('text-shadow:1px 1px 2px #abc,2px 2px 4px #faa')
  })

  it('process colors in border-color shorthand', () => {
    const css = `.a { border-color: #000000 #123456 #AABBCC #FFAAAA;}
    .b { border-color: red #123456 #AABBCC #FFAAAA; }
    .c { border-color: #0a0a0a green #AABBCC #FFAAAA; }`
    const result = compile(css, { optimizeColors: true }).toLowerCase()

    expect(result).toContain('border-color:#000 #123456 #abc #faa')
    expect(result).toContain('border-color:red #123456 #abc #faa')
    expect(result).toContain('border-color:#0a0a0a green #abc #faa')
  })
})
