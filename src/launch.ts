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
    $ npm start -- compile style.css style.optimized.css`)
    .command('compile')
    .argument('<input.css>', 'css file to compile')
    .requiredOption('-o', '--output <output.css>', 'output css file')
    .option('-osh, --optimize-short-hand', 'optimize padding and margin short hand')
    .option('-om, --optimize-margin', 'optimize margin short hand')
    .option('-op, --optimize-padding', 'optimize padding short hand')
    .action((file: string, options: Options) => {
      const css = fs.readFileSync(file)
      const optimizations = getOptimizations(options)
      const optimizedCss = compile(css.toString(), optimizations)
      if (options.output !== undefined) {
        fs.writeFileSync(options.output, optimizedCss)
      } else {
        console.log(optimizedCss)
      }
    })
  program.parse(process.argv)
}

start()

