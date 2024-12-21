#!/usr/bin/env node
import fs from 'node:fs'
import process from 'node:process'
import { program } from 'commander'
import compile from './index'

function start (): void {
  program
    .name('csscrunch')
    .description('CSS parser that optimizes CSS files')
    .version(process.env.npm_package_version ?? 'no version')
  program
    .addHelpText('after', `
  Example call:
    $ npx @gafreax/csscrunch compile style.css -o style.optimized.css
    $ npm start -- compile style.css -o style.optimized.css`)
    .command('compile')
    .argument('<file css>', 'css file to compile')
    .argument('[<output>]', 'css output file')
    .action((file: string, output: string) => {
      const css = fs.readFileSync(file)
      const optimizedCss = compile(css.toString())
      console.log(optimizedCss)
      if (output !== undefined) {
        fs.writeFileSync(output, optimizedCss)
      }
    })
  program.parse(process.argv)
}

start()
