"use client"

import { useParams } from "next/navigation"
import { useState, useEffect } from "react"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SeatMap } from "@/components/seat-map"
import { StudentList } from "@/components/student-list"
import { ArrowLeft, Users, Calendar, Clock } from "lucide-react"
import Link from "next/link"
import { getClassById } from "@/lib/data"

export default function ClassDetailsPage() {
  const { id } = useParams()
  const [classData, setClassData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getClassById(id)
        setClassData(data)
      } catch (error) {
        console.error("Error fetching class data:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [id])

  if (loading) {
    return (
      <DashboardShell>
        <div className="flex items-center justify-center h-[400px]">
          <p>Carregando...</p>
        </div>
      </DashboardShell>
    )
  }

  if (!classData) {
    return (
      <DashboardShell>
        <div className="flex items-center justify-center h-[400px]">
          <p>Aula não encontrada</p>
        </div>
      </DashboardShell>
    )
  }

  return (
    <DashboardShell>
      <div className="flex items-center mb-4">
        <Button variant="ghost" size="sm" asChild className="mr-2 text-blue-600 hover:text-blue-700 hover:bg-blue-50">
          <Link href="/classes">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar
          </Link>
        </Button>
      </div>
      <DashboardHeader
        heading={classData.name}
        text={`${classData.date} - ${classData.time} - ${classData.instructor}`}
      >
        <Badge
          variant={classData.type === "bike" ? "default" : "secondary"}
          className={
            classData.type === "bike" ? "bg-green-500 hover:bg-green-600" : "bg-purple-500 hover:bg-purple-600"
          }
        >
          {classData.type === "bike" ? "Bike" : "Ioga"}
        </Badge>
      </DashboardHeader>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="border-t-4 border-t-blue-500 overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-blue-50 to-white">
            <CardTitle className="flex items-center">
              <Users className="mr-2 h-5 w-5 text-blue-500" />
              Mapa de Assentos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <SeatMap totalSeats={classData.totalSeats} occupiedSeats={classData.students.map((s) => s.seatNumber)} />
          </CardContent>
        </Card>
        <Card className="border-t-4 border-t-green-500 overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-green-50 to-white">
            <CardTitle className="flex items-center">
              <Calendar className="mr-2 h-5 w-5 text-green-500" />
              Informações da Aula
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex justify-between p-2 rounded-md hover:bg-gray-50">
              <span className="font-medium flex items-center">
                <Clock className="mr-2 h-4 w-4 text-blue-500" />
                Tipo:
              </span>
              <span className="px-2 py-1 rounded-full bg-gray-100">{classData.type === "bike" ? "Bike" : "Ioga"}</span>
            </div>
            <div className="flex justify-between p-2 rounded-md hover:bg-gray-50">
              <span className="font-medium flex items-center">
                <Users className="mr-2 h-4 w-4 text-green-500" />
                Professor:
              </span>
              <span className="px-2 py-1 rounded-full bg-gray-100">{classData.instructor}</span>
            </div>
            <div className="flex justify-between p-2 rounded-md hover:bg-gray-50">
              <span className="font-medium flex items-center">
                <Users className="mr-2 h-4 w-4 text-orange-500" />
                Capacidade:
              </span>
              <span className="px-2 py-1 rounded-full bg-blue-100 text-blue-800">
                {classData.students.length}/{classData.totalSeats}
              </span>
            </div>
            <div className="flex justify-between p-2 rounded-md hover:bg-gray-50">
              <span className="font-medium flex items-center">
                <Users className="mr-2 h-4 w-4 text-purple-500" />
                Alunos de primeira vez:
              </span>
              <span className="px-2 py-1 rounded-full bg-yellow-100 text-yellow-800">
                {classData.students.filter((s) => s.isFirstClass).length}
              </span>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="mt-6 border-t-4 border-t-purple-500 overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-purple-50 to-white">
          <CardTitle className="flex items-center">
            <Users className="mr-2 h-5 w-5 text-purple-500" />
            Alunos Matriculados
          </CardTitle>
        </CardHeader>
        <CardContent>
          <StudentList students={classData.students} />
        </CardContent>
      </Card>
    </DashboardShell>
  )
}
