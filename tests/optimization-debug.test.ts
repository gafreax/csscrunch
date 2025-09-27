import { describe, it } from 'vitest'
import compile from '../src/index'
import fs from 'fs'
import path from 'path'
import { Optimizations } from '../src/lib/optimization.d'

describe('Test CSS Compilation with Different Options', () => {
  it('should preserve all properties including background-color in div', () => {
    // Test simple CSS with only div properties
    const simpleCSS = `.row-4 .col-1 .block-1 div {
      font-family: inherit;
      font-size: 14px;
      font-weight: 400;
      background-color: #3AAEE0;
      border-radius: 4px;
      color: #ffffff;
      line-height: 200%;
      letter-spacing: 0px;
      padding-top: 5px;
      padding-right: 20px;
      padding-bottom: 5px;
      padding-left: 20px;
      width: auto;
      direction: ltr;
    }`

    // Test with no optimizations
    const noOptResult = compile(simpleCSS)
    console.log('=== With NO optimizations ===')
    console.log(noOptResult)
    console.log('Has background-color:', noOptResult.includes('background-color'))
    console.log('Has #3AAEE0:', noOptResult.includes('#3AAEE0'))

    // Test with padding shorthand optimization
    const paddingOpt: Optimizations = { paddingShortHand: true }
    const paddingOptResult = compile(simpleCSS, paddingOpt)
    console.log('\n=== With PADDING optimizations ===')
    console.log(paddingOptResult)
    console.log('Has background-color:', paddingOptResult.includes('background-color'))
    console.log('Has #3AAEE0:', paddingOptResult.includes('#3AAEE0'))

    // Test with all optimizations
    const allOpt: Optimizations = { paddingShortHand: true, marginShortHand: true }
    const allOptResult = compile(simpleCSS, allOpt)
    console.log('\n=== With ALL optimizations ===')
    console.log(allOptResult)
    console.log('Has background-color:', allOptResult.includes('background-color'))
    console.log('Has #3AAEE0:', allOptResult.includes('#3AAEE0'))

    // Now test with the actual media-query.css file
    console.log('\n=== Testing actual media-query.css file ===')
    const inputPath = path.join(__dirname, '__css__', 'media-query.css')
    const css = fs.readFileSync(inputPath, 'utf-8')

    // No optimizations
    const fullNoOptResult = compile(css)
    console.log('Has background-color (no opt):', fullNoOptResult.includes('background-color:#3AAEE0'))

    // With all optimizations
    const fullAllOptResult = compile(css, allOpt)
    console.log('Has background-color (all opt):', fullAllOptResult.includes('background-color:#3AAEE0'))

    // Write the results for inspection
    fs.writeFileSync(path.join(__dirname, 'media-query-no-opt.out.css'), fullNoOptResult)
    fs.writeFileSync(path.join(__dirname, 'media-query-all-opt.out.css'), fullAllOptResult)
  })
})
