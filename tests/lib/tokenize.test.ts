import { describe, test, expect } from 'vitest'
import { tokenize } from '../../src/lib/tokenize'

describe('tokenize', () => {
  test('simple css', () => {
   const css = `
        a {  color: purple;}
        div { border: none; }
        .pippo { color: purple;}
        .mickey { color: purple;}
        .don { color: purple; background: red; }
        .goofy { background: red; }
        .goofy { color: purple; }`
    const res = tokenize(css)
    expect(res).toBeDefined()
  })

  test('simple css with duplicated rules', () => {
    const css = `
    .blu-class {
      background-color: #00ff00;
      color: #000000;
    }

    .blu-class {
      background-color: #00ff00;
      color: #000000;
    }`
    const res = tokenize(css)
    expect(res).toEqual({ '.blu-class': 'background-color:#00ff00;color:#000000;' })
  })

  test('media queries', () => {
    const css = `
    @media screen and (max-width: 600px) {
      body { color: red; }
    }`

    const res = tokenize(css)
    expect(res).toEqual({ '@media screen and (max-width: 600px)': 'body{color:red;}' })
  })
})
