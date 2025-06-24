import { openDB } from '@/lib/db.js'

export async function GET() {
  const db = await openDB()
  const usuarios = await db.all('SELECT * FROM usuarios')
  return Response.json(usuarios)
}

export async function POST(request) {
  const db = await openDB()
  const data = await request.json()

  try {
    const result = await db.run(
      'INSERT INTO usuarios (nome, email) VALUES (?, ?)',
      data.nome,
      data.email
    )

    return Response.json({ id: result.lastID, ...data })
  } catch (err) {
    return new Response(JSON.stringify({ erro: err.message }), { status: 400 })
  }
}
