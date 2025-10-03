#!/usr/bin/env node
import fs from 'node:fs'
import process from 'node:process'
import { program } from 'commander'

import compile from './index'
import { Optimizations } from './lib/optimization.d'

interface Options {
  output: string
  optimizeShortHand: boolean
  optimizeMargin: boolean
  optimizePadding: boolean
}

const getOptimizations = (options: Options): Optimizations => {
  const opt = {
    paddingShortHand: options.optimizePadding ? true : options.optimizeShortHand ?? false,
    marginShortHand: options.optimizeMargin ? true : options.optimizeShortHand ?? false
  }
  return opt
}

export function start (): void {
  program
    .name('csscrunch')
    .description('CSS parser that optimizes CSS files')
    .version(process.env.npm_package_version ?? 'no version')

  // Define the compile command
  program
    .command('compile')
    .description('Compile and optimize CSS')
    .argument('<input>', 'input CSS file')
    .argument('[output]', 'output CSS file')
    .option('--optimize-short-hand', 'optimize padding and margin short hand')
    .option('--optimize-margin', 'optimize margin short hand')
    .option('--optimize-padding', 'optimize padding short hand')
    .action((input: string, output: string, options: Options) => {
      try {
        const css = fs.readFileSync(input)
        const optimizations = getOptimizations(options)
        const optimizedCSS = compile(css.toString(), optimizations)
        if (output !== undefined) {
          fs.writeFileSync(output, optimizedCSS)
          console.log(`Optimized CSS written to ${output}`)
        } else {
          console.log(optimizedCSS)
        }
      } catch (error) {
        console.error(`Error: ${(error as Error).message}`)
        process.exit(1)
      }
    })

  program.addHelpText('after', `
  Example call:
    $ npx @gafreax/csscrunch compile style.css style.optimized.css
    $ npx @gafreax/csscrunch compile --optimize-short-hand style.css style.optimized.css
    $ npm start -- compile style.css style.optimized.css
    $ npm start -- compile --optimize-short-hand style.css style.optimized.css`)

  // Handle '--' in npm/pnpm scripts
  const args = process.argv
  // Find where the -- delimiter is and remove it
  const dashDashIndex = args.indexOf('--')
  const cleanedArgs = dashDashIndex !== -1
    ? [...args.slice(0, dashDashIndex), ...args.slice(dashDashIndex + 1)]
    : args

  program.parse(cleanedArgs)
}

start()
