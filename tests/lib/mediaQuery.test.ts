import { findIndexOfMediaQueries, getMediaQueries } from '../../src/lib/mediaQuery'
const simpleCssWithMediaQuery = `
/* On screens that are 992px or less, set the background color to blue */
@media screen and (max-width: 992px) {
  body {
    background-color: blue;
  }
}

/* On screens that are 600px or less, set the background color to olive */
@media screen and (max-width: 600px) {
  body {
    background-color: olive;
  }
}
`
const complexCssWithMediaQuery = `

/* Small screens (phones) */
@media (max-width: 480px) {
  header {
    text-align: center;
  }

  nav {
    text-align: center;
  }

  nav li {
    display: block;
    margin-bottom: 10px;
  }
}

/* Medium screens (tablets) */
@media (min-width: 481px) and (max-width: 767px) {
  header {
    font-size: 18px;
  }

  nav {
    font-size: 14px;
  }
}

/* Large screens (desktops) */
@media (min-width: 768px) {
  header {
    background-color: #666;
    font-size: 24px;
  }

  nav {
    background-color: #f0f0f0;
    font-size: 16px;
  }

  section {
    display: flex;
    justify-content: space-between;
  }

  section div {
    flex: 1;
    padding: 20px;
  }
}

/* Specific device (iPhone 6/7/8) */
@media only screen and (device-width: 375px) and (device-height: 667px) and (-webkit-min-device-pixel-ratio: 2) {
  header {
    background-color: #999;
  }
}

/* Specific device (iPad Pro 12.9") */
@media only screen and (device-width: 1024px) and (device-height: 1366px) and (-webkit-min-device-pixel-ratio: 2) {
  nav {
    font-size: 18px;
  }
}

/* Specific orientation (landscape) */
@media (orientation: landscape) {
  section {
    flex-direction: column;
  }
}`

describe('findIndexOfMediaQueries', () => {
  it('return position of media query if present', () => {
    expect(findIndexOfMediaQueries(simpleCssWithMediaQuery)).toEqual([75, 233])
  })

  it('return empty array if no media query', () => {
    expect(findIndexOfMediaQueries('')).toEqual([])
  })
})

describe('getMediaQueries', () => {
  it('return media queries', () => {
    const rules = getMediaQueries(simpleCssWithMediaQuery)
    expect(rules.length).toEqual(2)
  })

  it('return media queries with complex css', () => {
    const rules = getMediaQueries(complexCssWithMediaQuery)

    expect(rules.some((i: MediaQuery) =>
      i.rule.includes('//') || i.rule.includes('/*') || i.rule.includes('*/') || i.val.includes('//') || i.val.includes('/*') || i.val.includes('*/')
    )).toBe(true)
  })
})
