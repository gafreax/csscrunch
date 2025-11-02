import CleanCSS from 'clean-css'
import fs from 'fs'
import path from 'path'
import benny from 'benny'

import compile from '../src/index'

const cssDir = path.resolve(__dirname, '../tests/__css__')
const cssFiles = fs.readdirSync(cssDir).filter(file => file.endsWith('.css'))
const cleanCss = new CleanCSS({ level: 2 })

const csscrushOptions = {
  paddingShortHand: true,
  marginShortHand: true,
  removeZeroUnits: true
}

const flags = process.argv.slice(2)

const cssList = cssFiles.map(file => {
  const data = fs.readFileSync(path.join(cssDir, file), 'utf-8')
  const dataSizeInB = Buffer.byteLength(data, 'utf-8')
  if (dataSizeInB < 1024) {
    console.log(`Skipping ${file} (${dataSizeInB} b) - size less than 1024 b`)
    return null
  }
  if (file.includes('.out.css')) {
    console.log(`Skipping ${file} - output file`)
    return null
  }
  return [
    file,
    data
  ]
}).filter(item => item !== null) as Array<[string, string]>

if (flags.includes('--throughput') || flags.length === 0) {
  console.log('Running throughput benchmarks...')
  const opt = { minSamples: 10 }
  const comparisons = cssList.flatMap(([file, css]) => [
    benny.add(`csscrunch ${file}`, () => compile(css, csscrushOptions), opt),
    benny.add(`clean-css ${file}`, () => cleanCss.minify(css), opt)
  ])
  benny.suite(
    'Benchmarking: csscrunch vs clean-css',
    ...comparisons,
    benny.cycle(),
    benny.complete(),
    benny.save({ file: 'csscrunch-vs-cleancss', version: '1.0.0' }),
    benny.save({ file: 'csscrunch-vs-cleancss', format: 'chart.html' })
  ).catch((e) => {
    console.error(e)
  })
}

if (flags.includes('--size') || flags.length === 0) {
  console.log('Calculating size results...')
  const sizeResults: Record<string, { original: number, csscrunch: number, cleanCss: number }> = {}
  for (const [file, css] of cssList) {
    const csscrunchResult = compile(css, csscrushOptions)
    const cleanCssResult = cleanCss.minify(css)
    sizeResults[file] = {
      original: Math.floor(Buffer.byteLength(css, 'utf-8') / 1024),
      csscrunch: Math.floor(Buffer.byteLength(csscrunchResult, 'utf-8') / 1024),
      cleanCss: Math.floor(Buffer.byteLength(cleanCssResult.styles, 'utf-8') / 1024)
    }
  }

  console.log('Generating size report HTML...')

  const sizeReportID = 'chart-size-report' + Date.now().toString()
  const sizeReportHTMLTemplate = `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" />
      <script src="https://cdn.jsdelivr.net/npm/chart.js@3.5.1/dist/chart.min.js"></script>
      <title>Benchmarking: csscrunch vs clean-css</title>
      <style>
        body {
          margin: 0;
          padding: 0;
          background: #ddd;
        }

        .container {
          box-sizing: border-box;
          height: 96vh;
          width: 96vw;
          margin: 2vh 2vw;
          resize: both;
          overflow: hidden;
          padding: 20px;
          background: white;
          box-shadow: 0 0 15px #aaa;
        }
        canvas {
          height: 96% !important;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <canvas id="${sizeReportID}" width="16" ></canvas>
      </div>
      <script>
        const ctx = document.getElementById('${sizeReportID}')
        new Chart(ctx, {
          type: 'bar',
          data: {
            labels: ${JSON.stringify(Object.keys(sizeResults))},
            datasets: [
              {
                label: 'Original Size (log kb})',
                data: ${JSON.stringify(Object.values(sizeResults).map(r => r.original))},
                backgroundColor: 'rgba(91,91,91, 0.7)',
              },
              {
                label: 'csscrunch Size (log kb)',
                data: ${JSON.stringify(Object.values(sizeResults).map(r => r.csscrunch))},
                backgroundColor: 'rgba(0,200,0, 0.7)',
              },
              {
                label: 'clean-css Size (log kb)',
                data: ${JSON.stringify(Object.values(sizeResults).map(r => r.cleanCss))},
                backgroundColor: 'rgba(0,0,255, 0.7)',
              },
            ],
          },
          options: {
            responsive: true,
            plugins: {
              legend: {
                position: 'top',
              },
              title: {
                display: true,
                text: 'CSS Size Comparison: csscrunch vs clean-css',
              },
            },
          },
        })
      </script>
    </body>
  </html>
  `

  console.log('Writing size report to results/size-report.html...')
  fs.writeFileSync(
    path.resolve(__dirname, 'results/', 'size-report.html'),
    sizeReportHTMLTemplate
  )
}
console.log('Done.')
