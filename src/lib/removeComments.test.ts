import { removeComments } from './removeComments'

describe('removeComments', () => {
  it('should remove single-line comments', () => {
    expect(removeComments('color: black; // background-color: white')).toBe('color: black;')
  })

  it('should remove comments and duplicate characters', () => {
    const input = `
            /* 
                Multi-line Comment
                Line 2 
            */
            body {
                color: black; // Lorem ipsum
                background-color: white;
            }
            
            /* A comment here */
            
            div {
                border: 1px solid black; /* Another One */
            }
            
            // this is the closing comment
            
        `
    const output = `
            body {
                color: black; 
                background-color: white;
            }
            
            
            
            div {
                border: 1px solid black; 
            }
        `
    expect(removeComments(input)).toBe(output.trim())
  })
})
