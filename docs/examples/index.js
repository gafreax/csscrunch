// Import compile when is it exported as module.exports.default = compile;
import compile from '@gafreax/csscrunch'

const cssToOptimize = `
.mclass { color: red; }
.mclass { background-color: blue; }
`

const optimizedCss = compile.default(cssToOptimize)

console.log(optimizedCss)
