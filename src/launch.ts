import CleanCssLib from 'clean-css'
import fs from 'node:fs'
import { parse } from './index'
// import { css } from './data'
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


// todo: remove empty rules
// const css = `div {color:red}div{float:left}a{color:yellow; /* comment */ background: #aaff00;} p{color:#fffff}div{padding:4px;margin:0px}`
const css = fs.readFileSync('./mobile.css')
console.log('css ', css.toString())
console.log('type of ', typeof css)
die("fine")
const perf = []
const testNumber = 1
for (let i = 0; i < testNumber; i++) {
  const t1 = performance.now()
  parse(css.toString())
  const d1 = performance.now() - t1
  const t2 = performance.now()
  cleanCssInstance.minify(css)
  const d2 = performance.now() - t2
  perf.push({ d1, d2, win: d1 < d2 ? 'd1' : 'd2' })
}


const a = parse(css)
const b = cleanCssInstance.minify(css)
console.log('== result mine == \n', a, '\n')
console.log('== result lib ==\n', b.styles, '\n')
fs.writeFileSync('mine.css', a)
fs.writeFileSync('lib.css', b.styles)
console.table({
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
})
