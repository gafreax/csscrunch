export function removeDuplicates (str: string, chars: string[]): string {
  chars.forEach(char => {
    const regex = new RegExp(`\\${char}{2,}`, 'g')
    str = str.replace(regex, char)
  })
  return str
}
