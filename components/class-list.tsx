"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, User } from "lucide-react"
import Link from "next/link"
import { getAllClasses } from "@/lib/data"

export function ClassList() {
  const [classes, setClasses] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllClasses()
        setClasses(data)
      } catch (error) {
        console.error("Error fetching classes:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center h-[400px]">
        <p>Carregando...</p>
      </div>
    )
  }

  if (classes.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-[400px]">
        <p className="text-muted-foreground">Nenhuma aula encontrada</p>
      </div>
    )
  }

  return (
    <Card>
      <CardContent className="p-6">
        <div className="space-y-6">
          {classes.map((classItem) => (
            <div key={classItem.id} className="flex items-center justify-between border-b pb-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-medium">{classItem.name}</h3>
                  <Badge variant={classItem.type === "bike" ? "default" : "secondary"}>
                    {classItem.type === "bike" ? "Bike" : "Ioga"}
                  </Badge>
                </div>
                <div className="flex text-sm text-muted-foreground">
                  <div className="flex items-center mr-4">
                    <Calendar className="mr-1 h-3 w-3" />
                    {classItem.date}
                  </div>
                  <div className="flex items-center mr-4">
                    <Clock className="mr-1 h-3 w-3" />
                    {classItem.time}
                  </div>
                  <div className="flex items-center">
                    <User className="mr-1 h-3 w-3" />
                    {classItem.students.length}/{classItem.totalSeats}
                  </div>
                </div>
              </div>
              <Button asChild size="sm">
                <Link href={`/classes/${classItem.id}`}>Ver Detalhes</Link>
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
