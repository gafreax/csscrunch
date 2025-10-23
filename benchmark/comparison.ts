// benchmarks/comparison.ts
import compile from '../src/index'
import CleanCSS from 'clean-css'
import fs from 'fs'
import path from 'path'
import benny from 'benny'

const cssDir = path.resolve(__dirname, '../tests/__css__')
const cssFiles = fs.readdirSync(cssDir).filter(file => file.endsWith('.css'))

const cleanCss = new CleanCSS({ level: 2 })

console.log('Running benchmark comparison against clean-css...')

for (const file of cssFiles) {
  const filePath = path.join(cssDir, file)
  const cssContent = fs.readFileSync(filePath, 'utf-8')

  benny.suite(
    `Benchmarking: ${file}`,
    benny.add('csscrunch (full optimization)', () => {
      compile(cssContent, {
        paddingShortHand: true,
        marginShortHand: true,
        removeZeroUnits: true
      })
    }),
    benny.add('clean-css (level 2)', () => {
      cleanCss.minify(cssContent)
    }),
    benny.cycle(),
    benny.complete(),
    benny.save({ file: 'csscrunch-vs-cleancss', version: '1.0.0' }),
    benny.save({ file: 'csscrunch-vs-cleancss', format: 'chart.html' })
  ).catch((e) => {
    console.error(e)
  })
}
