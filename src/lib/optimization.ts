import { Optimizations, Sides } from './optimization.d'

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

export const getSideValue = (params: { rule: string, ruleValue: string, side: string }): string => {
  const { rule, ruleValue, side } = params
  const sideProp = `${rule}-${side}:`
  if (!ruleValue.includes(sideProp)) {
    return ''
  }
  const startSideValue = ruleValue.indexOf(sideProp) + sideProp.length
  const endSideValue = ruleValue.indexOf(';', ruleValue.indexOf(sideProp))
  return ruleValue.substring(startSideValue, endSideValue).trim()
}

export const getSidesShortcut = (ruleValue: string, rule: string): string => {
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
  } else if (isAllSideDifferent({ left, right, top, bottom })) {
    shorthandValue = `${rule}:${top} ${right} ${bottom} ${left};`
  } else {
    // If no optimization applied, return original
    return ruleValue
  }

  // Remove the individual side properties from the rule value
  let updatedRuleValue = ruleValue
  updatedRuleValue = updatedRuleValue.replace(new RegExp(`${rule}-top:([^;]+);`, 'g'), '')
  updatedRuleValue = updatedRuleValue.replace(new RegExp(`${rule}-right:([^;]+);`, 'g'), '')
  updatedRuleValue = updatedRuleValue.replace(new RegExp(`${rule}-bottom:([^;]+);`, 'g'), '')
  updatedRuleValue = updatedRuleValue.replace(new RegExp(`${rule}-left:([^;]+);`, 'g'), '')

  // Clean up any double semicolons that might be created
  updatedRuleValue = updatedRuleValue.replace(/;;/g, ';')

  // Clean up any leading/trailing whitespace
  updatedRuleValue = updatedRuleValue.trim()

  // If there's remaining content, ensure it ends with a semicolon
  if (updatedRuleValue.length > 0) {
    if (!updatedRuleValue.endsWith(';')) {
      updatedRuleValue += ';'
    }
    // Add a space separator if needed
    updatedRuleValue += ' '
  }

  // Return just the shorthand if there's no other rules left
  return updatedRuleValue.length > 0 ? updatedRuleValue + shorthandValue : shorthandValue
}

export const optimizeRule = (ruleValue: string, optimizations?: Optimizations): string => {
  if (optimizations === undefined) {
    return ruleValue
  }
  let optimized = ruleValue
  if (optimizations.paddingShortHand !== undefined && optimizations.paddingShortHand) {
    optimized = getSidesShortcut(optimized, 'padding')
  }
  if (optimizations.marginShortHand !== undefined && optimizations.marginShortHand) {
    optimized = getSidesShortcut(optimized, 'margin')
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
