import { describe, test, expect } from 'vitest'
import { buildMediaTokens, cleanMediaQueryRule, tokenize } from '../../src/lib/tokenize'
import { getMediaQueries } from '../../src/lib/mediaQuery'

describe('cleanMediaQueryRule', () => {
  test('clean media query rule', () => {
    const rule = `
      @media screen and (max-width: 600px) {
        body { color: red; }
      }`
    const expected = '@media screen and(max-width:600px){body{color:red;}}'
    const res = cleanMediaQueryRule(rule)
    expect(res).toBe(expected)
  })
})

describe('buildMediaTokens', () => {

  test('build media tokens', () => {
    const css = `
      @media screen and (max-width: 600px) {
        body { color: red; }
      }`
    const mediaQueries = [
      {
        rule: '@media screen and (max-width: 600px)',
        val: 'body{color:red;}',
        start: 0,
        end: 0
      }
    ]
    const res = buildMediaTokens({ css, mediaQueries })
    expect(res).toEqual({ '@media screen and (max-width: 600px)': 'body{color:red;}' })
  })

  test('build media tokens with multiple media queries', () => {
    const css = `
      @media screen and (max-width: 600px) {
        body { color: red; }
      }
      @media screen and (max-width: 800px) {
        body { color: blue; }
      }`
    const mediaQueries = getMediaQueries(css)
    const res = buildMediaTokens({ css, mediaQueries })
    expect(res).toEqual({
      '@media screen and (max-width: 600px)': 'body{color:red;}',
      '@media screen and (max-width: 800px)': 'body{color:blue;}'
    })
  })
})

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
