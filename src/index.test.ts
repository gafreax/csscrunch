import { tokenize } from './index'

describe('index', () => {
  test('tokenize', () => {
    const css = `
        a {  color: purple;}
        div { border: none; }
        .pippo { color: purple;}
        .mickey { color: purple;}
        .don { color: purple; background: red; }
        .goofy { background: red; }
        .goofy { color: purple; }`
    const res = tokenize(css)
    expect(res).toBeDefined()
  })
})
