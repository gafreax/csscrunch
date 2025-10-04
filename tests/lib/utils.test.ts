import { describe, it, expect } from 'vitest'
import { isWhitespace, isEmpty, getOptimizations, cleanArgs } from '../../src/lib/utils'

describe('isWhitespace', () => {
  it('should return true for space character', () => {
    expect(isWhitespace(' ')).toBe(true)
  })

  it('should return true for tab character', () => {
    expect(isWhitespace('\t')).toBe(true)
  })

  it('should return true for newline character', () => {
    expect(isWhitespace('\n')).toBe(true)
  })

  it('should return false for non-whitespace characters', () => {
    expect(isWhitespace('a')).toBe(false)
    expect(isWhitespace('1')).toBe(false)
    expect(isWhitespace('!')).toBe(false)
  })
})

describe('isEmpty', () => {
  it('should return true for empty string', () => {
    expect(isEmpty('')).toBe(true)
  })

  it('should return true for undefined', () => {
    expect(isEmpty(undefined)).toBe(true)
  })

  it('should return true for null', () => {
    expect(isEmpty(null)).toBe(true)
  })

  it('should return false for non-empty strings', () => {
    expect(isEmpty('hello')).toBe(false)
    expect(isEmpty(' ')).toBe(false)
    expect(isEmpty('\t')).toBe(false)
  })
})

describe('getOptimizations', () => {
  it.each(generateOptmizationsCase())('optimizeShortHand: %s, optimizeAll: %s, optimizeMargin: %s, optimizePadding: %s, removeZeroUnits: %s, expected: %s',
    (optimizeShortHand: boolean, optimizeAll: boolean, optimizeMargin: boolean, optimizePadding: boolean, removeZeroUnits: boolean, expected: boolean[]) => {
      const options = {
        output: 'output.css',
        optimizeShortHand,
        optimizeAll,
        optimizeMargin,
        optimizePadding,
        removeZeroUnits
      }
      const [expectedMargin, expectedPadding, expectedRemoveZeroUnits] = expected
      const optimizations = getOptimizations(options)

      expect(optimizations.marginShortHand).toBe(expectedMargin)
      expect(optimizations.paddingShortHand).toBe(expectedPadding)
      expect(optimizations.removeZeroUnits).toBe(expectedRemoveZeroUnits)
    })
})

describe('cleanArgs', () => {
  it('should remove the -- delimiter from arguments', () => {
    const args = ['node', 'script.js', '--', '--option1', '--option2']
    const result = cleanArgs(args)
    expect(result).toEqual(['node', 'script.js', '--option1', '--option2'])
  })

  it('should return the original array if -- delimiter is not present', () => {
    const args = ['node', 'script.js', '--option1', '--option2']
    const result = cleanArgs(args)
    expect(result).toEqual(args)
  })

  it('should handle empty arrays', () => {
    expect(cleanArgs([])).toEqual([])
  })

  it('should handle arrays where -- is the only element', () => {
    expect(cleanArgs(['--'])).toEqual([])
  })

  it('should handle arrays where -- is at the beginning', () => {
    expect(cleanArgs(['--', 'value1', 'value2'])).toEqual(['value1', 'value2'])
  })

  it('should handle arrays where -- is at the end', () => {
    expect(cleanArgs(['value1', 'value2', '--'])).toEqual(['value1', 'value2'])
  })
})

function generateOptmizationsCase (): Array<[boolean, boolean, boolean, boolean, boolean, boolean[]]> {
  const ret: Array<[boolean, boolean, boolean, boolean, boolean, boolean[]]> = []
  for (let i = 0; i < 32; i++) {
    const optimizeShortHand = (i & 16) !== 0
    const optimizeAll = (i & 8) !== 0
    const optimizeMargin = (i & 4) !== 0
    const optimizePadding = (i & 2) !== 0
    const removeZeroUnits = (i & 1) !== 0
    const expectedMargin = optimizeMargin || optimizeShortHand || optimizeAll
    const expectedPadding = optimizePadding || optimizeShortHand || optimizeAll
    const expectedRemoveZeroUnits = removeZeroUnits || optimizeAll
    ret.push([optimizeShortHand, optimizeAll, optimizeMargin, optimizePadding, removeZeroUnits, [expectedMargin, expectedPadding, expectedRemoveZeroUnits]])
  }
  return ret
}
