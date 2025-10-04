import { Optimizations, Sides } from './optimization.d'

type SpacingRule = 'padding' | 'margin'
type Side = 'top' | 'right' | 'bottom' | 'left'

const REGEX_FIND_PADDING = /(\s*)(padding)-((top|right|bottom|left):[^;]+;?)(\s*)/g
const REGEX_FIND_MARGIN = /(\s*)(margin)-((top|right|bottom|left):[^;]+;?)(\s*)/g

export const optimizeZeroUnitsRule = (ruleValue: string): string => {
  return ruleValue.replace(/(:| )0(px|%|em|rem)/g, (match: string, p1: string) => p1 + '0')
}

export const isAllSideEqual = ({ left, right, top, bottom }: Sides): boolean => {
  return left === right && right === top && top === bottom
}

export const existsNullSides = ({ left, right, top, bottom }: Sides): boolean => {
  if ([left, right, top, bottom].includes(undefined)) {
    return true
  }
  if ([left, right, top, bottom].includes('')) {
    return true
  }
  return false
}

export const isVerticalAndHorizontalEqual = ({ top, bottom, left, right }: Sides): boolean => {
  return top === bottom && left === right
}

export const isAllSideDifferent = ({ left, right, top, bottom }: Sides): boolean => {
  return left !== right && right !== top && top !== bottom
}

export const getSideValue = (params: { rule: SpacingRule, ruleValue: string, side: Side }): string => {
  const { rule, ruleValue, side } = params
  const sideProp = `${rule}-${side}:`
  if (!ruleValue.includes(sideProp)) {
    return ''
  }
  const startSideValue = ruleValue.indexOf(sideProp) + sideProp.length
  const endSideValue = ruleValue.indexOf(';', ruleValue.indexOf(sideProp))
  return ruleValue.substring(startSideValue, endSideValue > 0 ? endSideValue : ruleValue.length).trim()
}

export const createShorthandProperty = (ruleValue: string, rule: SpacingRule): string => {
  // Extract the individual side values from the rule value
  const bottom = getSideValue({ rule, ruleValue, side: 'bottom' })
  const left = getSideValue({ rule, ruleValue, side: 'left' })
  const right = getSideValue({ rule, ruleValue, side: 'right' })
  const top = getSideValue({ rule, ruleValue, side: 'top' })

  // Don't optimize if any side is missing
  if (existsNullSides({ left, right, top, bottom })) {
    return ruleValue
  }

  // Build the shorthand property string
  let shorthandValue = ''

  if (isAllSideEqual({ left, right, top, bottom })) {
    shorthandValue = `${rule}:${top};`
  } else if (isVerticalAndHorizontalEqual({ top, bottom, left, right })) {
    shorthandValue = `${rule}:${top} ${right};`
  } else {
    shorthandValue = `${rule}:${top !== '' ? top + ' ' : ''}${right !== '' ? right + ' ' : ''}${bottom !== '' ? bottom + ' ' : ''}${left !== '' ? left : ''};`
  }
  const ruleWithoutPaddingOrMargin = ruleValue.replace(rule === 'padding' ? REGEX_FIND_PADDING : REGEX_FIND_MARGIN, '')
  if (ruleWithoutPaddingOrMargin.trim().length === 0 || ruleWithoutPaddingOrMargin.charAt(ruleWithoutPaddingOrMargin.length - 1) === ';') {
    return ruleWithoutPaddingOrMargin + shorthandValue
  }
  return ruleWithoutPaddingOrMargin + ';' + shorthandValue
}

export const optimizeRule = (ruleValue: string, optimizations?: Optimizations): string => {
  if (optimizations === undefined) {
    return ruleValue
  }
  let optimized = ruleValue
  if (optimizations.paddingShortHand !== undefined && optimizations.paddingShortHand) {
    optimized = createShorthandProperty(optimized, 'padding')
  }
  if (optimizations.marginShortHand !== undefined && optimizations.marginShortHand) {
    optimized = createShorthandProperty(optimized, 'margin')
  }
  if (optimizations.removeZeroUnits !== undefined && optimizations.removeZeroUnits) {
    optimized = optimizeZeroUnitsRule(optimized)
  }
  return optimized
}

export const removeComments = (css: string): string => {
  return css
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .trim()
}

export const removeDuplicates = (str: string, chars: string[]): string => {
  chars.forEach(char => {
    const regex = new RegExp(`\\${char}{2,}`, 'g')
    str = str.replace(regex, char)
  })
  return str
}
