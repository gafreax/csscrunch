const cssData = require('./data.js')
const a = `
  .don{
    color: purple;
    background: red;
  }
	@media screen and (max-width: 992px) {
    body {
      background-color: blue;
    }
	}
  a,.pippo,.mickey{
    color: purple;
  }
	@media screen and (max-width: 600px) {
  div{
    border: none;
  }
}`

const date = new Date()

// console.log('css', cssData);

const CSS_MEDIA_QUERY_REGEX = /@media\s+\(([^)]+)\)/g

const findIndexOfMediaQueriesB = (css) => {
  const matches = css.matchAll(CSS_MEDIA_QUERY_REGEX)
  const indexList = []
  for (const match of matches) {
    indexList.push(match.index)
  }
  return indexList
}

const findIndexOfMediaQueries = (css) => {
  const indexList = []
  const len = '@media'.length
  let currentIndex = css.indexOf('@media')

  while (currentIndex >= 0) {
    indexList.push(currentIndex)
    currentIndex = css.indexOf('@media', currentIndex + len)
  }
  return indexList
}

const getMediaQueriesC = (css) => {
  const indexList = findIndexOfMediaQueries(css)
  const mediaQueries = []
  const stack = []
  for (const index of indexList) {
    const firstParenthesis = css.indexOf('{', index)
    let deep = 1
    let val = ''
    const rule = css.slice(index, firstParenthesis)
    stack.push(rule)
    let i = firstParenthesis + 1
    if (i) {
      for (i; deep > 0 && i <= css.length; i++) {
        if (css[i] === '{') {
          deep++
          stack.push(css[i])
        } else if (css[i] === '}') {
          deep--
          const poppedRule = stack.pop()
          if (poppedRule === rule) {
            break
          }
          val += poppedRule
        } else {
          val += css[i]
        }
      }
      mediaQueries.push({ rule, val, start: index, end: i })
    }
  }
  return mediaQueries
}

const getMediaQueriesB = (css) => {
  const indexList = findIndexOfMediaQueries(css)
  const mediaQueries = []
  const stack = []
  for (const index of indexList) {
    const firstParenthesis = css.indexOf('{', index)
    let deep = 1
    const val = []
    const rule = css.slice(index, firstParenthesis)
    stack.push(rule)
    let i = firstParenthesis + 1
    if (i) {
      for (i; deep > 0 && i <= css.length; i++) {
        if (css[i] === '{') {
          deep++
          stack.push(css[i])
        } else if (css[i] === '}') {
          deep--
          const poppedRule = stack.pop()
          if (poppedRule === rule) {
            break
          }
          val.push(poppedRule)
        } else {
          val.push(css[i])
        }
      }
      mediaQueries.push({ rule, val: val.join(''), start: index, end: i })
    }
  }
  return mediaQueries
}

const getMediaQueries = (css) => {
  const indexList = findIndexOfMediaQueries(css)
  const mediaQueries = []
  for (const index of indexList) {
    const firstParenthesis = css.indexOf('{', index)
    let deep = 1
    let val = ''
    const rule = css.slice(index, firstParenthesis)
    let i = firstParenthesis + 1
    if (i) {
      for (i; deep > 0 && i <= css.length; i++) {
        if (css[i] === '{') {
          deep++
        } else if (css[i] === '}') {
          deep--
        }
        val += css[i]
      }
      mediaQueries.push({ rule, val, start: index, end: i })
    }
  }
  return mediaQueries
}

const isSkippable = function (char, oldChar) {
  return (isWhitespace(oldChar) && isWhitespace(char)) || char === '\n'
}

const isWhitespace = function (char) {
  return char === ' ' || char === '\t' || char === '\n'
}

const tokenize = function (css) {
  const tokens = {}
  let ruleId = ''
  let ruleValue = ''
  let isValueToken = false
  let oldChar = ''
  for (const char of css) {
    // optimization
    if (isSkippable(char, oldChar)) {
      continue
    }
    // tokenization
    if (char === '}') {
      ruleId = ruleId.trim()
      const rule = tokens[ruleId]
      tokens[ruleId] = rule ? rule + ruleValue : ruleValue
      ruleId = ''
      ruleValue = ''
      isValueToken = false
    } else if (char === '{') {
      isValueToken = true
    } else if (isValueToken) {
      ruleValue += char
    } else {
      ruleId += char
    }
    oldChar = char
  }
  return tokens
}

const tokenizeB = function (css) {
  const tokens = {}
  let ruleId = []
  let ruleValue = []
  let isValueToken = false
  let oldChar = ''
  for (const char of css) {
    // optimization
    if (isSkippable(char, oldChar)) {
      continue
    }
    // tokenization
    if (char === '}') {
      const ruleIdString = ruleId.join('').trim()
      const rule = tokens[ruleIdString]
      const ruleValueString = ruleValue.join('')
      tokens[ruleIdString] = rule ? rule + ruleValueString : ruleValueString
      ruleId = []
      ruleValue = []
      isValueToken = false
    } else if (char === '{') {
      isValueToken = true
    } else if (isValueToken) {
      ruleValue.push(char)
    } else {
      ruleId.push(char)
    }
    oldChar = char
  }
  return tokens
}

// console.log('res 1  ', r1);
// console.log('res 2', r2);
// const equal = r1.every((e, i) => {
//   if (e === r2[i]) {
//     return true;
//   } else {
//     console.log('e ', ' not equal to ', r2[i], ' at position ', i);
//     return false;
//   }
// });

// if (!equal) {
//   console.error('error not equal', equal);
// }

const p = []
const ntest = 1000
let time = performance.now()
const cent = ntest / 100
console.log()
console.log('execution', ntest)
for (let i = 0; i < ntest; i++) {
  const t1 = performance.now()
  const r1 = tokenize(cssData)
  const diff1 = performance.now() - t1
  const t2 = performance.now()
  const r2 = tokenizeB(cssData)
  const diff2 = performance.now() - t2
  p.push({ diff1, diff2, win: diff1 > diff2 ? 'b' : 'a' })
}
time = performance.now() - time
let ac = 0
let bc = 0
let avga = 0
let avgb = 0
for (const e of p) {
  avga += e.diff1
  avgb += e.diff2
  if (e.win === 'a') {
    ac++
  } else {
    bc++
  }
}

console.table({
  winner: { a: (ac / ntest) * 100, b: (bc / ntest) * 100 },
  average: { a: avga / ntest, b: avgb / ntest }
})
console.table({ total: { time: time / 1000, size: cssData.length } })
console.log(
  'timestamp',
  date.getFullYear() +
    '-' +
    (date.getMonth() + 1) +
    '-' +
    date.getDate() +
    ' ' +
    date.getHours() +
    ':' +
    date.getMinutes() +
    ':' +
    date.getSeconds()
)
