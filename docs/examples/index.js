// Import compile when is it exported as module.exports.default = compile;
import csscrunch from '@gafreax/csscrunch'
const { default: compile } = csscrunch

const cssToOptimize = `
.mclass { color: red; }
.mclass { background-color: blue; }
.mclass { color: red; } /* duplicate rule */
/* This is a comment that should be removed */
body {
    margin: 0px 10px 0px 10px;
}
@media screen and (max-width: 600px) {
    body {
        background-color: lightblue; /* comment inside media query */
    }
}
.bclass { padding-top: 5px; padding-right: 10px; padding-bottom: 5px; padding-left: 10px; }
.bclass { margin: 10px auto; }
.xclass { border: 1px solid black; border: 1px solid black; } /* duplicate rule */
.yclass { border: 1px solid black; border: 1px solid black; } /* duplicate rule */
.lclass { line-height: 1.5; line-height: 1.5; } /* duplicate rule */
.keyframes slidein {
    from {
        transform: translateX(0%);
    }
    to {
        transform: translateX(100%);
    }
}
`

const optimizedCss = compile(cssToOptimize, {
  removeDuplicateRules: true,
  removeComments: true,
  optimizeSpacing: true
})

console.log(optimizedCss)
