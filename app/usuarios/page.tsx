'use client'
import { useEffect, useState, FormEvent } from 'react'

type Usuario = {
  id: number
  nome: string
  email: string
}

export default function UsuariosPage() {
  const [usuarios, setUsuarios] = useState<Usuario[]>([])
  const [form, setForm] = useState({ nome: '', email: '' })

  useEffect(() => {
    fetch('/api/usuarios')
      .then(res => res.json())
      .then((data: Usuario[]) => setUsuarios(data))
  }, [])

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()

    await fetch('/api/usuarios', {
      method: 'POST',
      body: JSON.stringify(form),
      headers: { 'Content-Type': 'application/json' },
    })

    const novaLista = await fetch('/api/usuarios').then(res => res.json())
    setUsuarios(novaLista)
    setForm({ nome: '', email: '' })
  }

  return (
    <main className="p-4 border rounded mb-6">
      <h1 className="text-2xl font-bold mb-4">Usuários</h1>

      <form onSubmit={handleSubmit} className="mb-4 flex gap-2">
        <input
          placeholder="Nome"
          value={form.nome}
          onChange={e => setForm({ ...form, nome: e.target.value })}
          className="border p-2 flex-1"
          required
          type="text"
        />
        <input
          placeholder="Email"
          value={form.email}
          onChange={e => setForm({ ...form, email: e.target.value })}
          className="border p-2 flex-1"
          required
          type="email"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white p-2 rounded"
        >
          Adicionar
        </button>
      </form>

      <ul>
        {usuarios.map(usuario => (
          <li key={usuario.id}>
            {usuario.nome} — {usuario.email}
          </li>
        ))}
      </ul>
    </main>
  )
}
