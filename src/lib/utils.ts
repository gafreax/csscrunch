/**
* Cleans the string
* @param char string that must be cleaned up
* @returns the string that was cleaned up
*/
export const isWhitespace = function (char: string): boolean { return char === ' ' || char === '\t' || char === '\n' }
