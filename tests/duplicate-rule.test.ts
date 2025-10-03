import { describe, it, expect } from 'vitest'
import compile from '../src/index'

describe('Duplicate Rule Handling', () => {
  it('should preserve all properties when merging duplicate rules', () => {
    const css = `
      .test-duplicate-rule-handling {
        color: red;
        background-color: blue;
      }

      .test-duplicate-rule-handling {
        color: red;
      }
    `

    const result = compile(css)

    expect(result).toContain('color:red')
    expect(result).toContain('background-color:blue')

    // Should only have one rule for the selector
    const ruleMatches = result.match(/\.test-duplicate-rule-handling\{[^}]+\}/g)
    expect(ruleMatches).toHaveLength(1)
  })

  it('should handle multiple duplicate rules with different properties', () => {
    const css = `
      .multi-duplicate {
        color: red;
        font-size: 16px;
      }

      .multi-duplicate {
        background-color: blue;
      }

      .multi-duplicate {
        color: red;
        margin: 10px;
      }
    `

    const result = compile(css)

    // Should contain all unique properties
    expect(result).toContain('color:red')
    expect(result).toContain('font-size:16px')
    expect(result).toContain('background-color:blue')
    expect(result).toContain('margin:10px')

    // Should only have one rule for the selector
    const ruleMatches = result.match(/\.multi-duplicate\{[^}]+\}/g)
    expect(ruleMatches).toHaveLength(1)
  })

  it('should handle duplicate rules with conflicting values', () => {
    const css = `
      .conflicting-duplicate {
        color: red;
        font-size: 16px;
      }

      .conflicting-duplicate {
        color: blue;
        font-size: 14px;
      }
    `

    const result = compile(css)

    // Should contain both properties (last one wins for conflicting values)
    expect(result).toContain('color:blue')
    expect(result).toContain('font-size:14px')

    // Should only have one rule for the selector
    const ruleMatches = result.match(/\.conflicting-duplicate\{[^}]+\}/g)
    expect(ruleMatches).toHaveLength(1)
  })

  it('should handle minified CSS with duplicate rules on same line', () => {
    const css = `.test{color:red;background-color:blue;}.test{color:red;}`

    const result = compile(css)

    // Should contain both properties
    expect(result).toContain('color:red')
    expect(result).toContain('background-color:blue')

    // Should only have one rule for the selector
    const ruleMatches = result.match(/\.test\{[^}]+\}/g)
    expect(ruleMatches).toHaveLength(1)
  })

  it('should handle duplicate rules with overlapping properties', () => {
    // This CSS has two rules for the same selector, with the second rule overlapping and adding a new property
    const css = `
      .test-duplicate-rule-handling {
        color: red;
        background-color: blue;
      }

      .test-duplicate-rule-handling {
        color: red;
        font-size: 16px;
      }
    `

    const result = compile(css)

    // Should contain all unique properties, and the last value for overlapping ones
    expect(result).toContain('color:red')
    expect(result).toContain('background-color:blue')
    expect(result).toContain('font-size:16px')

    // Should only have one rule for the selector
    const ruleMatches = result.match(/\.test-duplicate-rule-handling\{[^}]+\}/g)
    expect(ruleMatches).toHaveLength(1)
  })
})
