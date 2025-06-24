"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Users, Calendar, TrendingUp, Clock } from "lucide-react"

export function DashboardStats() {
  // Dados de exemplo para demonstração
  const stats = {
    totalClasses: 42,
    totalStudents: 156,
    occupancyRate: "78%",
    firstTimeStudents: 23,
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card className="overflow-hidden border-t-4 border-t-blue-500">
        <CardContent className="p-6">
          <div className="flex flex-col items-center space-y-2">
            <div className="p-2 rounded-full bg-blue-100">
              <Calendar className="h-6 w-6 text-blue-500" />
            </div>
            <div className="text-3xl font-bold text-blue-700">{stats.totalClasses}</div>
            <p className="text-sm text-muted-foreground">Aulas este mês</p>
          </div>
        </CardContent>
      </Card>

      <Card className="overflow-hidden border-t-4 border-t-green-500">
        <CardContent className="p-6">
          <div className="flex flex-col items-center space-y-2">
            <div className="p-2 rounded-full bg-green-100">
              <Users className="h-6 w-6 text-green-500" />
            </div>
            <div className="text-3xl font-bold text-green-700">{stats.totalStudents}</div>
            <p className="text-sm text-muted-foreground">Alunos ativos</p>
          </div>
        </CardContent>
      </Card>

      <Card className="overflow-hidden border-t-4 border-t-orange-500">
        <CardContent className="p-6">
          <div className="flex flex-col items-center space-y-2">
            <div className="p-2 rounded-full bg-orange-100">
              <TrendingUp className="h-6 w-6 text-orange-500" />
            </div>
            <div className="text-3xl font-bold text-orange-700">{stats.occupancyRate}</div>
            <p className="text-sm text-muted-foreground">Taxa de ocupação</p>
          </div>
        </CardContent>
      </Card>

      <Card className="overflow-hidden border-t-4 border-t-purple-500">
        <CardContent className="p-6">
          <div className="flex flex-col items-center space-y-2">
            <div className="p-2 rounded-full bg-purple-100">
              <Clock className="h-6 w-6 text-purple-500" />
            </div>
            <div className="text-3xl font-bold text-purple-700">{stats.firstTimeStudents}</div>
            <p className="text-sm text-muted-foreground">Novos alunos</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
