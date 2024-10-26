import CleanCssLib from 'clean-css'
import fs from 'node:fs'
import { parse } from './index'

const cleanCssInstance = new CleanCssLib({
  compatibility: {
    properties: {
      colors: false // controls color optimizations
    }
  },
  level: {
    2: {
      restructureRules: true,
      mergeSemantically: true
    }
  }
})

function calculatePerformanceMetrics(perf: { d1: number; d2: number; win: string }[], a: string, b: CleanCssLib.Output, css: string): any {
  return {
    average: {
      mine: perf.reduce((prev, cur) => prev + cur.d1, 0) / perf.length,
      lib: perf.reduce((prev, cur) => prev + cur.d2, 0) / perf.length
    },
    wins: {
      mine: perf.reduce((prev, cur) => prev + (cur.win === 'd1' ? 1 : 0), 0),
      lib: perf.reduce((prev, cur) => prev + (cur.win === 'd2' ? 1 : 0), 0)
    },
    size: {
      mine: a.length,
      lib: b.styles.length
    },
    'orginal css': { size: css.length }
  }
}

function start(css: string, testNumber:number) {
  console.log('css ', css.toString())

  const perf = []
  for (let i = 0; i < testNumber; i++) {
    const t1 = performance.now()
    parse(css.toString())
    const d1 = performance.now() - t1
    const t2 = performance.now()
    cleanCssInstance.minify(css)
    const d2 = performance.now() - t2
    perf.push({ d1, d2, win: d1 < d2 ? 'd1' : 'd2' })
  }


  const a = parse(css.toString())
  const b = cleanCssInstance.minify(css)
  console.log('== result mine == \n', a, '\n')
  console.log('== result lib ==\n', b.styles, '\n')
  fs.writeFileSync('mine.css', a)
  fs.writeFileSync('lib.css', b.styles)
  const performanceMetrics = calculatePerformanceMetrics(perf, a, b, css.toString())
  console.table(performanceMetrics)
  console.log('== RESULT ==')
  console.log('mine: ', a)
}

function init(callback: Function) {
  if(process.argv.length < 2) {
    console.error('please provide a file path')
    console.log('usage: npm run launch -- <file-path> [<test-number>]')
    process.exit(1)
  }
  const filePath = process.argv[2]
  const css = fs.readFileSync(filePath)
  const testNumber = process.argv[3] ? parseInt(process.argv[3]) : 1
  callback(css.toString(), testNumber)
}

init(start)