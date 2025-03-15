import { Optimizations, Sides } from './optimization.d'

export const optimizeZeroUnitsRule = (ruleValue: string): string => {
  if (ruleValue.includes(':0px')) {
    return ruleValue.replace(':0px', ':0')
  }
  if (ruleValue.includes(':0%')) {
    return ruleValue.replace(':0%', ':0')
  }
  return ruleValue
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
  const bottom = getSideValue({ rule, ruleValue, side: 'bottom' })
  const left = getSideValue({ rule, ruleValue, side: 'left' })
  const right = getSideValue({ rule, ruleValue, side: 'right' })
  const top = getSideValue({ rule, ruleValue, side: 'top' })
  if (existsNullSides({ left, right, top, bottom })) {
    return ruleValue
  }
  if (isAllSideEqual({ left, right, top, bottom })) {
    return `${rule}:${top};`
  }
  if (isVerticalAndHorizontalEqual({ top, bottom, left, right })) {
    return `${rule}:${top} ${right};`
  }
  // return shortcut if all rules are specified
  if (isAllSideDifferent({ left, right, top, bottom })) {
    return `${rule}:${top} ${right} ${bottom} ${left};`
  }
  return ruleValue
}

export const optimizeRule = (ruleValue: string, optimizations?: Optimizations): string => {
  if (optimizations === undefined) {
    return ruleValue
  }
  let optimized = ruleValue
  if (optimizations.paddingShortHand !== undefined) {
    optimized = getSidesShortcut(optimized, 'padding')
  }
  if (optimizations.marginShortHand !== undefined) {
    optimized = getSidesShortcut(optimized, 'margin')
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
