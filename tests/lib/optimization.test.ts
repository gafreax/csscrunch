import { describe, it, expect } from 'vitest'
import { isAllSideDifferent, existsNullSides, createShorthandProperty, getSideValue, removeComments, removeDuplicates, reduceHexColor, optimizeColor } from '../../src/lib/optimization'
import { Sides } from '../../src/lib/optimization.d'

describe('optimizeColor', () => {
  it('should extract color and optimize it', () => {
    const css = `
      .a{ background: #ffffff }
      .b{ color: #ffaa00; border-color: #FFAAEE; }
      .c{ color: #fff }
      .d{ color: purple }
    `
    const res = optimizeColor(css).toLowerCase()
    expect(res).not.toContain('#ffffff')
    expect(res).toContain('#fa0')
    expect(res).toContain('#fae')
    expect(res).toContain('color: purple')
  })

  it('should handle line breaks and tabs correctly', () => {
    const css = `
      .a {
        background:
        #ffffff;
      }
      .b {
        color:    #000000;
      }
    `
    const res = optimizeColor(css).toLowerCase()
    expect(res).not.toContain('#ffffff')
    expect(res).not.toContain('#000000')
    expect(res).toContain('#fff')
    expect(res).toContain('#000')
  })

  it('should not affect non-color values', () => {
    const css = `
      .a { font-size: 12px; margin: 10px; }
      .b { border-width: 1px; padding: 5px; }
    `
    const res = optimizeColor(css)
    expect(res).toBe(css)
  })

  it('should handle empty strings', () => {
    const css = ''
    const res = optimizeColor(css)
    expect(res).toBe('')
  })

  it('should handle multiple colors in a single rule', () => {
    const css = `
      .a { box-shadow: 0 0 5px #FFFFFF, 0 0 10px #FFAAEE; }
      .b { text-shadow: 1px 1px 2px #AABBCC, 2px 2px 4px #FFAAEE; }
    `
    const res = optimizeColor(css).toLowerCase()
    expect(res).not.toContain('#ffffff')
    expect(res).toContain('#fff')
    expect(res).not.toContain('#ffaaee')
    expect(res).toContain('#fae')
    expect(res).not.toContain('#aabbcc')
    expect(res).toContain('#abc')
  })

  it('should handle !important correctly', () => {
    const css = `
      .a { color: #FFFFFF !important; }
      .b { border-color: #AABBCC !important; }
    `
    const res = optimizeColor(css).toLowerCase()
    expect(res).not.toContain('#ffffff')
    expect(res).toContain('#fff')
    expect(res).not.toContain('#aabbcc')
    expect(res).toContain('#abc')
  })
})

describe('allSideDifferent', () => {
  it('should return true if all sides are different', () => {
    expect(isAllSideDifferent({ left: '10px', right: '20px', top: '30px', bottom: '40px' })).toBe(true)
    expect(isAllSideDifferent({ left: '10px', right: '20px', top: '30px', bottom: '50px' })).toBe(true)
  })

  it('should return false if any sides are the same', () => {
    expect(isAllSideDifferent({ left: '10px', right: '10px', top: '30px', bottom: '40px' })).toBe(false)
    expect(isAllSideDifferent({ left: '10px', right: '20px', top: '10px', bottom: '40px' })).toBe(false)
    expect(isAllSideDifferent({ left: '10px', right: '20px', top: '30px', bottom: '30px' })).toBe(false)
  })
})

describe('reduceHexColor', () => {
  it('should shorten 6-digit hex colors to 3-digit when possible', () => {
    expect(reduceHexColor('#FFFFFF')).toBe('#FFF')
    expect(reduceHexColor('#000000')).toBe('#000')
    expect(reduceHexColor('#AABBCC')).toBe('#ABC')
    expect(reduceHexColor('#112233')).toBe('#123')
  })

  it('should return the original color if it cannot be shortened', () => {
    expect(reduceHexColor('#FFFAAA')).toBe('#FFFAAA')
    expect(reduceHexColor('#123456')).toBe('#123456')
    expect(reduceHexColor('#ABCDE1')).toBe('#ABCDE1')
  })

  it('should return the original string if it is not a valid 6-digit hex color', () => {
    expect(reduceHexColor('red')).toBe('red')
    expect(reduceHexColor('#FFF')).toBe('#FFF')
    expect(reduceHexColor('123456')).toBe('123456')
    expect(reduceHexColor('#12345G')).toBe('#12345G')
    expect(reduceHexColor('')).toBe('')
  })
})

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
  it('should return the value and if is important of the side', () => {
    const rule = 'padding'
    const ruleValue = `
      padding-left: 11px !important;
      padding-right: 12px;
      padding-top: 13px !important;
      padding-bottom: 14px;
    `

    const top = getSideValue({ rule, ruleValue, side: 'top' })
    const right = getSideValue({ rule, ruleValue, side: 'right' })
    const left = getSideValue({ rule, ruleValue, side: 'left' })
    const bottom = getSideValue({ rule, ruleValue, side: 'bottom' })

    expect(top.value).toBe('13px')
    expect(top.isImportant).toBe(true)
    expect(right.value).toBe('12px')
    expect(right.isImportant).toBe(false)
    expect(left.value).toBe('11px')
    expect(left.isImportant).toBe(true)
    expect(bottom.value).toBe('14px')
    expect(bottom.isImportant).toBe(false)
  })

  it('should handle spaces correctly', () => {
    const rule = 'padding'
    const ruleValue = `
      padding-left :  11px  !important ;
      padding-right:12px;
      padding-top:   13px!important;
      padding-bottom :14px ;
    `

    const top = getSideValue({ rule, ruleValue, side: 'top' })
    const right = getSideValue({ rule, ruleValue, side: 'right' })
    const left = getSideValue({ rule, ruleValue, side: 'left' })
    const bottom = getSideValue({ rule, ruleValue, side: 'bottom' })

    expect(top.value).toBe('13px')
    expect(top.isImportant).toBe(true)
    expect(right.value).toBe('12px')
    expect(right.isImportant).toBe(false)
    expect(left.value).toBe('11px')
    expect(left.isImportant).toBe(true)
    expect(bottom.value).toBe('14px')
    expect(bottom.isImportant).toBe(false)
  })

  it('should handle missing sides correctly', () => {
    const rule = 'padding'
    const ruleValue = `
      padding-left: 11px !important;
      padding-top: 13px !important;
    `

    const top = getSideValue({ rule, ruleValue, side: 'top' })
    const right = getSideValue({ rule, ruleValue, side: 'right' })
    const left = getSideValue({ rule, ruleValue, side: 'left' })
    const bottom = getSideValue({ rule, ruleValue, side: 'bottom' })

    expect(top.value).toBe('13px')
    expect(top.isImportant).toBe(true)
    expect(right.value).toBe('')
    expect(right.isImportant).toBe(false)
    expect(left.value).toBe('11px')
    expect(left.isImportant).toBe(true)
    expect(bottom.value).toBe('')
    expect(bottom.isImportant).toBe(false)
  })

  it('should handle empty rule values correctly', () => {
    const rule = 'padding'
    const ruleValue = ''

    const top = getSideValue({ rule, ruleValue, side: 'top' })
    const right = getSideValue({ rule, ruleValue, side: 'right' })
    const left = getSideValue({ rule, ruleValue, side: 'left' })
    const bottom = getSideValue({ rule, ruleValue, side: 'bottom' })

    expect(top.value).toBe('')
    expect(top.isImportant).toBe(false)
    expect(right.value).toBe('')
    expect(right.isImportant).toBe(false)
    expect(left.value).toBe('')
    expect(left.isImportant).toBe(false)
    expect(bottom.value).toBe('')
    expect(bottom.isImportant).toBe(false)
  })

  it('should handle auto values correctly', () => {
    const rule = 'margin'
    const ruleValue = `
      margin-left: auto !important;
      margin-right: 12px;
      margin-top: auto !important;
      margin-bottom: 14px;
    `

    const top = getSideValue({ rule, ruleValue, side: 'top' })
    const right = getSideValue({ rule, ruleValue, side: 'right' })
    const left = getSideValue({ rule, ruleValue, side: 'left' })
    const bottom = getSideValue({ rule, ruleValue, side: 'bottom' })

    expect(top.value).toBe('auto')
    expect(top.isImportant).toBe(true)
    expect(right.value).toBe('12px')
    expect(right.isImportant).toBe(false)
    expect(left.value).toBe('auto')
    expect(left.isImportant).toBe(true)
    expect(bottom.value).toBe('14px')
    expect(bottom.isImportant).toBe(false)
  })

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

    expect(top.value).toBe('13px')
    expect(right.value).toBe('12px')
    expect(left.value).toBe('11px')
    expect(bottom.value).toBe('14px')
  })

  it('should return null if no rule', () => {
    const rule = 'padding'
    const ruleValue = 'padding-top: 11px; padding-left: 23px'
    const bottom = getSideValue({ rule, ruleValue, side: 'bottom' })
    expect(bottom.value).toBeFalsy()
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

  it('should return the optimized rule and also do not affect other rules', () => {
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

    expect(top.value).toBe(expectedSides.top)
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
