#!/usr/bin/env node
import fs from 'node:fs'
import process from 'node:process'
import { program } from 'commander'

import compile from './index'
import { cleanArgs, getOptimizations, Options } from './lib/utils'

export function start (): void {
  program
    .name('csscrunch')
    .description('CSS parser that optimizes CSS files')
    .version(process.env.npm_package_version ?? 'no version')

  program
    .command('compile')
    .description('Compile and optimize CSS')
    .argument('<input>', 'input CSS file')
    .argument('[output]', 'output CSS file')
    .option('--optimize-short-hand', 'optimize padding and margin short hand')
    .option('--optimize-margin', 'optimize margin short hand')
    .option('--optimize-padding', 'optimize padding short hand')
    .option('--remove-zero-units', 'remove zero units')
    .option('--optimize-color', 'optimize hex color codes')
    .option('--optimize-all', 'shorthand for --optimize-short-hand --remove-zero-units --optimize-color')
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

  const cleanedArgs = cleanArgs(process.argv)
  program.parse(cleanedArgs)
}

start()
