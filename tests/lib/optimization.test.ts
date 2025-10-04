import { describe, it, expect } from 'vitest'
import { existsNullSides, createShorthandProperty, getSideValue, removeComments, removeDuplicates } from '../../src/lib/optimization'
import { Sides } from '../../src/lib/optimization'

describe('removeComments', () => {
  it('should remove single-line comments', () => {
    expect(removeComments('color: black;')).toBe(
      'color: black;'
    )
  })

  it('should remove comments and duplicate characters', () => {
    const input = `
            /*
                Multi-line Comment
                Line 2
            */
            body {
                color: black;
                background-color: white;
            }

            /* A comment here */

            div {
                border: 1px solid black; /* Another One */
            }
        `
    const expected = `
            body {
                color: black;
                background-color: white;
            }
            div {
                border: 1px solid black;
            }
        `
    const result = removeComments(input)

    expect(result.replace(/[\s\t]*/g, '')).toEqual(expected.replace(/[\s\t]*/g, ''))
  })
})

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

describe('getSideValue', () => {
  it('should return the value of the side', () => {
    const rule = 'padding'
    const ruleValue = `
      padding-left: 11px;
      padding-right: 12px;
      padding-top: 13px;
      padding-bottom: 14px;
    `

    const top = getSideValue({ rule, ruleValue, side: 'top' })
    const right = getSideValue({ rule, ruleValue, side: 'right' })
    const left = getSideValue({ rule, ruleValue, side: 'left' })
    const bottom = getSideValue({ rule, ruleValue, side: 'bottom' })

    expect(top).toBe('13px')
    expect(right).toBe('12px')
    expect(left).toBe('11px')
    expect(bottom).toBe('14px')
  })

  it('should return null if no rule', () => {
    const rule = 'padding'
    const ruleValue = 'padding-top: 11px; padding-left: 23px'
    const bottom = getSideValue({ rule, ruleValue, side: 'bottom' })
    expect(bottom).toBeFalsy()
  })
})

describe('getSidesShortcut', () => {
  it('margin if all side are different return 4 values single shortcut', () => {
    const marginRules = 'margin-top: 12px; margin-right: 23px; margin-bottom: 11px; margin-left: 40px;'
    const res = createShorthandProperty(marginRules, 'margin')
    expect(res).toBe('margin:12px 23px 11px 40px;')
  })

  it('margin if top and bottom are the same but not the left and right return 4 diffrent rules', () => {
    const marginRules = 'margin-top: 12px; margin-right: 23px; margin-bottom: 12px; margin-left: 40px;'
    const expected = 'margin:12px 23px 12px 40px;'
    const res = createShorthandProperty(marginRules, 'margin')
    expect(res).toBe(expected)
  })

  it('padding if all side are different return 4 values single shortcut', () => {
    const paddingRules = 'padding-top: 12px; padding-right: 23px; padding-bottom: 11px; padding-left: 40px;'
    const res = createShorthandProperty(paddingRules, 'padding')
    expect(res).toBe('padding:12px 23px 11px 40px;')
  })

  it('padding if top and bottom are the same but not the left and right return 4 diffrent rules', () => {
    const paddingRules = 'padding-top: 12px; padding-right: 23px; padding-bottom: 12px; padding-left: 40px;'
    const expected = 'padding:12px 23px 12px 40px;'
    const res = createShorthandProperty(paddingRules, 'padding')
    expect(res).toBe(expected)
  })

  it('should return one padding rules with all the sides different', () => {
    const paddingRules = 'padding-bottom:3px;padding-left:4px;padding-right:2px;padding-top:1px'
    const expected = 'padding:1px 2px 3px 4px;'
    const res = createShorthandProperty(paddingRules, 'padding')
    expect(res).toBe(expected)
  })

  it('should return the optmized rule and also do not affect other rules', () => {
    const paddingRules = 'background-color:red;padding-top:10px;padding-bottom:10px;padding-right:10px;padding-left:30px;color:black;'
    const expected = 'background-color:red;color:black;padding:10px 10px 10px 30px;'
    const res = createShorthandProperty(paddingRules, 'padding')
    expect(res).toBe(expected)
  })

  it('should return the optimized rule and also do not affect other rules while mixed with', () => {
    const paddingRules = 'padding-top:10px;background-color:red;padding-bottom:10px;padding-right:10px;padding-left:30px;color:black;'
    const expected = 'background-color:red;color:black;padding:10px 10px 10px 30px;'
    const res = createShorthandProperty(paddingRules, 'padding')
    expect(res).toBe(expected)
  })

  it('should return expected side value', () => {
    const paddingRules = 'padding-bottom:3px;padding-left:4px;padding-right:2px;padding-top:1px'
    const expectedSides: Sides = {
      top: '1px',
      right: '2px',
      bottom: '3px',
      left: '4px'
    }
    const top = getSideValue({ rule: 'padding', ruleValue: paddingRules, side: 'top' })

    expect(top).toBe(expectedSides.top)
  })
})

describe('existsNullSides', () => {
  it('should return true if any side is null or undefined', () => {
    expect(existsNullSides({ left: '10px', right: '10px', top: '10px', bottom: undefined })).toBe(true)
    expect(existsNullSides({ left: '10px', right: '10px', top: '', bottom: '10px' })).toBe(true)
    expect(existsNullSides({ left: undefined, right: '10px', top: '10px', bottom: '10px' })).toBe(true)
    expect(existsNullSides({ left: '10px', right: '', top: '10px', bottom: '10px' })).toBe(true)
  })
  it('should return false if all sides have values', () => {
    expect(existsNullSides({ left: '10px', right: '10px', top: '10px', bottom: '10px' })).toBe(false)
    expect(existsNullSides({ left: '0', right: '0', top: '0', bottom: '0' })).toBe(false)
  })

  it('should return true if any side is empty string', () => {
    expect(existsNullSides({ left: '10px', right: '10px', top: '', bottom: '10px' })).toBe(true)
  })
})
