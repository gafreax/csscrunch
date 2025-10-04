import path from 'path'
import fs from 'fs'

const cssList = fs.readdirSync(path.join(__dirname, '__css__')).filter(file => file.endsWith('.css'))
export function getIntegrationFiles (): string[] {
  return cssList
}
