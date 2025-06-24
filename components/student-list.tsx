"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search } from "lucide-react"

interface Student {
  id: string
  name: string
  phone: string
  credits: {
    available: number
    used: number
  }
  isFirstClass: boolean
  seatNumber: number
}

interface StudentListProps {
  students: Student[]
}

export function StudentList({ students }: StudentListProps) {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredStudents = students.filter(
    (student) => student.name.toLowerCase().includes(searchTerm.toLowerCase()) || student.phone.includes(searchTerm),
  )

  return (
    <div className="space-y-4">
      <div className="relative">
        <Search className="absolute left-2 top-2.5 h-4 w-4 text-blue-500" />
        <Input
          placeholder="Buscar aluno por nome ou telefone..."
          className="pl-8 border-blue-200 focus:border-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="rounded-md border overflow-hidden">
        <Table>
          <TableHeader className="bg-gray-50">
            <TableRow>
              <TableHead className="text-blue-700">Assento</TableHead>
              <TableHead className="text-blue-700">Nome</TableHead>
              <TableHead className="text-blue-700">Telefone</TableHead>
              <TableHead className="text-blue-700">Créditos Disponíveis</TableHead>
              <TableHead className="text-blue-700">Créditos Utilizados</TableHead>
              <TableHead className="text-blue-700">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredStudents.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} className="h-24 text-center">
                  Nenhum aluno encontrado.
                </TableCell>
              </TableRow>
            ) : (
              filteredStudents.map((student) => (
                <TableRow key={student.id} className="hover:bg-blue-50">
                  <TableCell className="font-medium">{student.seatNumber}</TableCell>
                  <TableCell>{student.name}</TableCell>
                  <TableCell>{student.phone}</TableCell>
                  <TableCell>
                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full">
                      {student.credits.available}
                    </span>
                  </TableCell>
                  <TableCell>
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full">{student.credits.used}</span>
                  </TableCell>
                  <TableCell>
                    {student.isFirstClass && (
                      <Badge variant="outline" className="bg-yellow-100 text-yellow-800 border-yellow-300">
                        Primeira Aula
                      </Badge>
                    )}
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
