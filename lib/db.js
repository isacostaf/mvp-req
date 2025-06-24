// lib/db.js
import sqlite3 from 'sqlite3'
import { open } from 'sqlite'

sqlite3.verbose()

export async function openDB() {
  return open({
    filename: './meubanco.sqlite',
    driver: sqlite3.Database,
  })
}
