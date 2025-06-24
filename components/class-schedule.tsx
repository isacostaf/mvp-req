"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, User } from "lucide-react"
import Link from "next/link"
import { getTodayClasses, getUpcomingClasses } from "@/lib/data"

export function ClassSchedule() {
  const [activeTab, setActiveTab] = useState("today")
  const todayClasses = getTodayClasses()
  const upcomingClasses = getUpcomingClasses()

  return (
    <Card className="col-span-3 overflow-hidden border-t-4 border-t-blue-500">
      <CardHeader className="bg-gradient-to-r from-blue-50 to-white">
        <CardTitle className="flex items-center">
          <Calendar className="mr-2 h-5 w-5 text-blue-500" />
          Agenda de Aulas
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="today" className="space-y-4" onValueChange={setActiveTab}>
          <TabsList className="bg-gray-100">
            <TabsTrigger value="today" className="data-[state=active]:bg-blue-100 data-[state=active]:text-blue-700">
              Hoje
            </TabsTrigger>
            <TabsTrigger value="upcoming" className="data-[state=active]:bg-blue-100 data-[state=active]:text-blue-700">
              Próximas
            </TabsTrigger>
          </TabsList>
          <TabsContent value="today" className="space-y-4">
            {todayClasses.length === 0 ? (
              <p className="text-center text-muted-foreground">Nenhuma aula agendada para hoje.</p>
            ) : (
              todayClasses.map((classItem) => (
                <div
                  key={classItem.id}
                  className="flex items-center justify-between border-b pb-4 hover:bg-gray-50 p-2 rounded-md transition-colors"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-medium">{classItem.name}</h3>
                      <Badge
                        variant={classItem.type === "bike" ? "default" : "secondary"}
                        className={
                          classItem.type === "bike"
                            ? "bg-green-500 hover:bg-green-600"
                            : "bg-purple-500 hover:bg-purple-600"
                        }
                      >
                        {classItem.type === "bike" ? "Bike" : "Ioga"}
                      </Badge>
                    </div>
                    <div className="flex text-sm text-muted-foreground">
                      <div className="flex items-center mr-4">
                        <Clock className="mr-1 h-3 w-3 text-blue-500" />
                        {classItem.time}
                      </div>
                      <div className="flex items-center">
                        <User className="mr-1 h-3 w-3 text-orange-500" />
                        {classItem.students.length}/{classItem.totalSeats}
                      </div>
                    </div>
                  </div>
                  <Button asChild size="sm" className="bg-blue-500 hover:bg-blue-600">
                    <Link href={`/classes/${classItem.id}`}>Ver Detalhes</Link>
                  </Button>
                </div>
              ))
            )}
          </TabsContent>
          <TabsContent value="upcoming" className="space-y-4">
            {upcomingClasses.length === 0 ? (
              <p className="text-center text-muted-foreground">Nenhuma aula agendada para os próximos dias.</p>
            ) : (
              upcomingClasses.map((classItem) => (
                <div
                  key={classItem.id}
                  className="flex items-center justify-between border-b pb-4 hover:bg-gray-50 p-2 rounded-md transition-colors"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-medium">{classItem.name}</h3>
                      <Badge
                        variant={classItem.type === "bike" ? "default" : "secondary"}
                        className={
                          classItem.type === "bike"
                            ? "bg-green-500 hover:bg-green-600"
                            : "bg-purple-500 hover:bg-purple-600"
                        }
                      >
                        {classItem.type === "bike" ? "Bike" : "Ioga"}
                      </Badge>
                    </div>
                    <div className="flex text-sm text-muted-foreground">
                      <div className="flex items-center mr-4">
                        <Calendar className="mr-1 h-3 w-3 text-blue-500" />
                        {classItem.date}
                      </div>
                      <div className="flex items-center mr-4">
                        <Clock className="mr-1 h-3 w-3 text-blue-500" />
                        {classItem.time}
                      </div>
                      <div className="flex items-center">
                        <User className="mr-1 h-3 w-3 text-orange-500" />
                        {classItem.students.length}/{classItem.totalSeats}
                      </div>
                    </div>
                  </div>
                  <Button asChild size="sm" className="bg-blue-500 hover:bg-blue-600">
                    <Link href={`/classes/${classItem.id}`}>Ver Detalhes</Link>
                  </Button>
                </div>
              ))
            )}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
