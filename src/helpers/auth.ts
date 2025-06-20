import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'

const AUTH_PATH = path.join(os.homedir(), '.pno-sync-cli', 'auth.json')

export function isAuthenticated(): boolean {
  try {
    const data = fs.readFileSync(AUTH_PATH, 'utf8')
    const parsed = JSON.parse(data)
    return Boolean(parsed.loggedIn)
  } catch {
    return false
  }
}

export function saveAuth(user: string) {
  const dir = path.dirname(AUTH_PATH)
  if (!fs.existsSync(dir)) fs.mkdirSync(dir)
  fs.writeFileSync(AUTH_PATH, JSON.stringify({loggedIn: true, user}, null, 2))
}

export function logout() {
  if (fs.existsSync(AUTH_PATH)) fs.unlinkSync(AUTH_PATH)
}
