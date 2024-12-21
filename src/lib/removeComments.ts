export function removeComments (css: string): string {
  return css
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .trim()
}
