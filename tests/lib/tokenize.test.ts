import { getSidesShortcut } from './../../src/lib/optimization'
import { describe, it, expect } from 'vitest'
import { buildMediaTokens, cleanMediaQueryRule, tokenize } from '../../src/lib/tokenize'
import { getMediaQueries } from '../../src/lib/mediaQuery'

describe('cleanMediaQueryRule', () => {
  it('clean media query rule', () => {
    const rule = `
      @media screen and (max-width: 600px) {
        body { color: red; }
      }`
    const expected = '@media screen and(max-width:600px){body{color:red;}}'
    const res = cleanMediaQueryRule(rule)
    expect(res).toBe(expected)
  })
})

describe('getSidesShortcut', () => {
  it('if all padding are specified return shortcut with 4 values', () => {
    const paddingRules = 'padding-top: 12px; padding-right: 23px; padding-bottom: 11px; padding-left: 40px;'
    const res = getSidesShortcut(paddingRules, 'padding')
    expect(res).toBe('padding:12px 23px 11px 40px;')
  })

  it('if top and bottom are the same but not the left and right return rules without optimization', () => {
    const paddingRules = 'padding-top: 12px; padding-right: 23px; padding-bottom: 12px; padding-left: 40px;'
    const res = getSidesShortcut(paddingRules, 'padding')
    expect(res).toBe(paddingRules)
  })

  it('if top and bottom are the same return shortcut with 2 values', () => {
    const paddingRules = 'padding-top: 12px; padding-right: 23px; padding-bottom: 12px; padding-left: 23px;'
    const res = getSidesShortcut(paddingRules, 'padding')
    expect(res).toBe('padding:12px 23px;')
  })

  it('if only top is specified return no shortcut', () => {
    const paddingRules = 'padding-top: 12px;'
    const res = getSidesShortcut(paddingRules, 'padding')
    expect(res).toBe('padding-top: 12px;')
  })
})

describe('buildMediaTokens', () => {
  it('build media tokens', () => {
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

  it('build media tokens with multiple media queries', () => {
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
  it('simple css', () => {
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

  it('simple css with duplicated rules', () => {
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
    expect(res).toEqual({ '.blu-class': 'background-color:#00ff00;color:#000000' })
  })

  it('Css with explicit padding for all sides has shortcut in output', () => {
    const css = `
    .p {
      padding-top: 12px;
      padding-right: 23px;
      padding-bottom: 11px;
      padding-left: 40px;
      z-index: 1;
    }`
    const res = tokenize(css, { paddingShortHand: true })
    expect(res).toEqual({ '.p': 'padding:12px 23px 11px 40px;' })
  })

  it('media queries', () => {
    const css = `
    @media screen and (max-width: 600px) {
      body { color: red; }
    }`

    const res = tokenize(css)
    expect(res).toEqual({ '@media screen and (max-width: 600px)': 'body{color:red;}' })
  })
})
