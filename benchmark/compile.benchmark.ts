import { bench, describe } from 'vitest'
import { readFileSync } from 'fs'
import { join } from 'path'
import compile from '../src'
import CleanCSS from 'clean-css'

const cleanCss = new CleanCSS({ level: 2 })
const files = ['current.css', 'big.css', 'media-query.css']

for (const file of files) {
  const css = readFileSync(join(__dirname, '../tests/__css__', file), 'utf-8')
  describe(`CSS Minification Benchmark (${file})`, () => {
    bench(`csscrunch`, () => {
      compile(css)
    })

    bench(`clean-css`, () => {
      cleanCss.minify(css)
    })
  })
}
