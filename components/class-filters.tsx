"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DatePicker } from "@/components/date-picker"
import { Button } from "@/components/ui/button"
import { Search, Bike, SpaceIcon as Yoga } from "lucide-react"

export function ClassFilters() {
  const [classType, setClassType] = useState("all")
  const [period, setPeriod] = useState("all")
  const [instructor, setInstructor] = useState("")

  return (
    <Card className="border-t-4 border-t-green-500">
      <CardContent className="p-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-2">
            <Label className="flex items-center">
              <div className="w-4 h-4 rounded-full bg-green-500 mr-2"></div>
              Tipo de Aula
            </Label>
            <RadioGroup defaultValue="all" onValueChange={setClassType} className="bg-gray-50 p-3 rounded-md">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="all" id="all" />
                <Label htmlFor="all">Todas</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="bike" id="bike" />
                <Label htmlFor="bike" className="flex items-center">
                  <Bike className="mr-1 h-3 w-3 text-green-500" />
                  Bike
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yoga" id="yoga" />
                <Label htmlFor="yoga" className="flex items-center">
                  <Yoga className="mr-1 h-3 w-3 text-purple-500" />
                  Ioga
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-2">
            <Label className="flex items-center">
              <div className="w-4 h-4 rounded-full bg-blue-500 mr-2"></div>
              Período
            </Label>
            <Select defaultValue="all" onValueChange={setPeriod}>
              <SelectTrigger className="bg-gray-50">
                <SelectValue placeholder="Selecione um período" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos</SelectItem>
                <SelectItem value="today">Hoje</SelectItem>
                <SelectItem value="tomorrow">Amanhã</SelectItem>
                <SelectItem value="week">Esta Semana</SelectItem>
                <SelectItem value="month">Este Mês</SelectItem>
                <SelectItem value="past">Aulas Passadas</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label className="flex items-center">
              <div className="w-4 h-4 rounded-full bg-orange-500 mr-2"></div>
              Professor
            </Label>
            <Select defaultValue="" onValueChange={setInstructor}>
              <SelectTrigger className="bg-gray-50">
                <SelectValue placeholder="Selecione um professor" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos</SelectItem>
                <SelectItem value="joao">João Silva</SelectItem>
                <SelectItem value="maria">Maria Oliveira</SelectItem>
                <SelectItem value="pedro">Pedro Santos</SelectItem>
                <SelectItem value="ana">Ana Costa</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label className="flex items-center">
              <div className="w-4 h-4 rounded-full bg-purple-500 mr-2"></div>
              Data Específica
            </Label>
            <DatePicker />
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <Button className="bg-gradient-to-r from-blue-500 to-blue-600">
            <Search className="mr-2 h-4 w-4" />
            Filtrar
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
