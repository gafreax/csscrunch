import { describe, it, expect } from 'vitest'
import { removeDuplicates } from '../../src/lib/removeDuplicates'

describe('removeDuplicates', () => {
  it('should remove duplicate semicolons', () => {
    expect(removeDuplicates('color: black;;', [';'])).toBe('color: black;')
  })

  it('should remove duplicate periods', () => {
    expect(removeDuplicates('..className', ['.'])).toBe('.className')
  })

  it('should remove duplicate comma', () => {
    expect(removeDuplicates('.className,, .bar', [','])).toBe(
      '.className, .bar'
    )
  })

  it('should remove duplicate spaces', () => {
    expect(removeDuplicates('color:  black', [' '])).toBe('color: black')
  })

  it('should remove multiple duplicate characters', () => {
    expect(removeDuplicates('color:  black;; 1..0', [';', '.', ' '])).toBe(
      'color: black; 1.0'
    )
  })
})
