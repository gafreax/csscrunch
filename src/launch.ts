#!/usr/bin/env node
import fs from 'node:fs'
import process from 'node:process'
import { program } from 'commander'

import compile from './index'
import { Optimizations } from './lib/optimization.d'

type Options = {
  output: string,
  optimizeShortHand: boolean,
  optimizeMargin: boolean,
  optimizePadding: boolean
}

const getOptimizations = (options: Options): Optimizations => {
  return {
    paddingShortHand: options.optimizePadding ?? false,
    marginShortHand: options.optimizeMargin ?? false
  }
}

export function start (): void {
  program
    .name('csscrunch')
    .description('CSS parser that optimizes CSS files')
    .version(process.env.npm_package_version ?? 'no version')
  program
    .addHelpText('after', `
  Example call:
    $ npx @gafreax/csscrunch compile style.css style.optimized.css
    $ npm start -- compile style.css -o style.optimized.css
    $ npm start -- compile --optimize-short-hand style.css -o style.optimized.css`)
    .command('compile <input> [output]')
    .option('--optimize-short-hand', 'optimize padding and margin short hand')
    .option('--optimize-margin', 'optimize margin short hand')
    .option('--optimize-padding', 'optimize padding short hand')
    .action((input: string, output: string, options: Options) => {
      const css = fs.readFileSync(input)
      const optimizations = getOptimizations(options)
      const optimizedCSS = compile(css.toString(), optimizations)
      if (output !== undefined) {
        fs.writeFileSync(output, optimizedCSS)
      } else {
        console.log(optimizedCSS)
      }
    })
  program.parse(process.argv)
}

start()

