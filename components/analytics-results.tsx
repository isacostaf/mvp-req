"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { BarChart, TrendingUp, Users } from "lucide-react"

export function AnalyticsResults() {
  // Dados de exemplo para demonstração
  const analyticsData = {
    firstTimeStudents: {
      total: 45,
      notReturned: 12,
      returnRate: "73.3%",
      byInstructor: [
        { name: "João Silva", count: 18, notReturned: 3, rate: "83.3%" },
        { name: "Maria Oliveira", count: 15, notReturned: 5, rate: "66.7%" },
        { name: "Pedro Santos", count: 8, notReturned: 3, rate: "62.5%" },
        { name: "Ana Costa", count: 4, notReturned: 1, rate: "75.0%" },
      ],
    },
  }

  return (
    <div className="space-y-6">
      <Card className="border-t-4 border-t-purple-500 overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-purple-50 to-white">
          <CardTitle className="flex items-center">
            <BarChart className="mr-2 h-5 w-5 text-purple-500" />
            Resultados da Análise
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="flex flex-col items-center justify-center rounded-lg border p-6 text-center bg-gradient-to-br from-blue-50 to-white">
              <div className="p-3 rounded-full bg-blue-100 mb-3">
                <Users className="h-6 w-6 text-blue-500" />
              </div>
              <div className="text-4xl font-bold text-blue-700">{analyticsData.firstTimeStudents.total}</div>
              <div className="mt-2 text-sm font-medium">Alunos de Primeira Vez</div>
            </div>
            <div className="flex flex-col items-center justify-center rounded-lg border p-6 text-center bg-gradient-to-br from-red-50 to-white">
              <div className="p-3 rounded-full bg-red-100 mb-3">
                <Users className="h-6 w-6 text-red-500" />
              </div>
              <div className="text-4xl font-bold text-red-700">{analyticsData.firstTimeStudents.notReturned}</div>
              <div className="mt-2 text-sm font-medium">Não Retornaram</div>
            </div>
            <div className="flex flex-col items-center justify-center rounded-lg border p-6 text-center bg-gradient-to-br from-green-50 to-white">
              <div className="p-3 rounded-full bg-green-100 mb-3">
                <TrendingUp className="h-6 w-6 text-green-500" />
              </div>
              <div className="text-4xl font-bold text-green-700">{analyticsData.firstTimeStudents.returnRate}</div>
              <div className="mt-2 text-sm font-medium">Taxa de Retorno</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-t-4 border-t-blue-500 overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-blue-50 to-white">
          <CardTitle className="flex items-center">
            <Users className="mr-2 h-5 w-5 text-blue-500" />
            Detalhamento por Professor
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader className="bg-gray-50">
              <TableRow>
                <TableHead className="text-blue-700">Professor</TableHead>
                <TableHead className="text-right text-blue-700">Alunos de Primeira Vez</TableHead>
                <TableHead className="text-right text-blue-700">Não Retornaram</TableHead>
                <TableHead className="text-right text-blue-700">Taxa de Retorno</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {analyticsData.firstTimeStudents.byInstructor.map((instructor) => (
                <TableRow key={instructor.name} className="hover:bg-blue-50">
                  <TableCell className="font-medium">{instructor.name}</TableCell>
                  <TableCell className="text-right">
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full">{instructor.count}</span>
                  </TableCell>
                  <TableCell className="text-right">
                    <span className="px-2 py-1 bg-red-100 text-red-800 rounded-full">{instructor.notReturned}</span>
                  </TableCell>
                  <TableCell className="text-right">
                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full">{instructor.rate}</span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
