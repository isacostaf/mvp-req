import { openDB } from './db.js'

const db = await openDB()

await db.exec(`
  CREATE TABLE IF NOT EXISTS usuarios (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE
  )
`)

console.log('Tabela criada!')
process.exit()
