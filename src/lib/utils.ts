import { Optimizations } from './optimization.d'

export interface Options {
  output: string
  optimizeShortHand: boolean
  optimizeAll: boolean
  optimizeMargin: boolean
  optimizePadding: boolean
  removeZeroUnits: boolean
}

export const isWhitespace = function (char: string): boolean { return char === ' ' || char === '\t' || char === '\n' }

export const isEmpty = (str: string | undefined | null): boolean => { return str === '' || str === undefined || str === null }

export const getOptimizations = (options: Options): Optimizations => {
  return {
    paddingShortHand: options.optimizePadding || options.optimizeShortHand || options.optimizeAll,
    marginShortHand: options.optimizeMargin || options.optimizeShortHand || options.optimizeAll,
    removeZeroUnits: options.removeZeroUnits || options.optimizeAll
  }
}

export const cleanArgs = (args: string[]): string[] => {
  // Find where the -- delimiter is and remove it
  const dashDashIndex = args.indexOf('--')
  if (dashDashIndex === -1) {
    return args
  }
  return args.filter((_, index) => index !== dashDashIndex)
}
