"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { PlusCircle, MinusCircle, BarChart, Calendar, User } from "lucide-react"

export function AnalyticsFilters() {
  const [filters, setFilters] = useState([{ id: 1, type: "metric", value: "first_time_students" }])

  const addFilter = () => {
    const newId = filters.length > 0 ? Math.max(...filters.map((f) => f.id)) + 1 : 1
    setFilters([...filters, { id: newId, type: "metric", value: "" }])
  }

  const removeFilter = (id) => {
    setFilters(filters.filter((filter) => filter.id !== id))
  }

  const updateFilter = (id, field, value) => {
    setFilters(filters.map((filter) => (filter.id === id ? { ...filter, [field]: value } : filter)))
  }

  return (
    <Card className="border-t-4 border-t-orange-500">
      <CardHeader className="bg-gradient-to-r from-orange-50 to-white">
        <CardTitle className="flex items-center">
          <BarChart className="mr-2 h-5 w-5 text-orange-500" />
          Filtros de Análise
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <Label className="flex items-center">
              <Calendar className="mr-2 h-4 w-4 text-blue-500" />
              Período de Análise
            </Label>
            <Select defaultValue="month">
              <SelectTrigger className="bg-gray-50 border-gray-200">
                <SelectValue placeholder="Selecione um período" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="week">Última Semana</SelectItem>
                <SelectItem value="month">Último Mês</SelectItem>
                <SelectItem value="quarter">Último Trimestre</SelectItem>
                <SelectItem value="year">Último Ano</SelectItem>
                <SelectItem value="custom">Personalizado</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label className="flex items-center">
              <User className="mr-2 h-4 w-4 text-green-500" />
              Tipo de Aula
            </Label>
            <Select defaultValue="all">
              <SelectTrigger className="bg-gray-50 border-gray-200">
                <SelectValue placeholder="Selecione o tipo" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas</SelectItem>
                <SelectItem value="bike">Bike</SelectItem>
                <SelectItem value="yoga">Ioga</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <Label className="flex items-center">
              <BarChart className="mr-2 h-4 w-4 text-purple-500" />
              Métricas e Filtros
            </Label>
            <Button
              variant="outline"
              size="sm"
              onClick={addFilter}
              className="border-purple-200 text-purple-700 hover:bg-purple-50"
            >
              <PlusCircle className="mr-2 h-4 w-4 text-purple-500" />
              Adicionar Filtro
            </Button>
          </div>

          {filters.map((filter) => (
            <div key={filter.id} className="flex items-center space-x-2 p-3 bg-gray-50 rounded-md">
              <Select value={filter.type} onValueChange={(value) => updateFilter(filter.id, "type", value)}>
                <SelectTrigger className="w-[180px] border-gray-200">
                  <SelectValue placeholder="Tipo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="metric">Métrica</SelectItem>
                  <SelectItem value="instructor">Professor</SelectItem>
                  <SelectItem value="attendance">Frequência</SelectItem>
                </SelectContent>
              </Select>

              <Select value={filter.value} onValueChange={(value) => updateFilter(filter.id, "value", value)}>
                <SelectTrigger className="flex-1 border-gray-200">
                  <SelectValue placeholder="Selecione um valor" />
                </SelectTrigger>
                <SelectContent>
                  {filter.type === "metric" && (
                    <>
                      <SelectItem value="first_time_students">Alunos de Primeira Vez</SelectItem>
                      <SelectItem value="retention">Taxa de Retenção</SelectItem>
                      <SelectItem value="attendance">Taxa de Presença</SelectItem>
                      <SelectItem value="class_capacity">Capacidade da Aula</SelectItem>
                    </>
                  )}
                  {filter.type === "instructor" && (
                    <>
                      <SelectItem value="joao">João Silva</SelectItem>
                      <SelectItem value="maria">Maria Oliveira</SelectItem>
                      <SelectItem value="pedro">Pedro Santos</SelectItem>
                      <SelectItem value="ana">Ana Costa</SelectItem>
                    </>
                  )}
                  {filter.type === "attendance" && (
                    <>
                      <SelectItem value="attended">Compareceram</SelectItem>
                      <SelectItem value="missed">Faltaram</SelectItem>
                      <SelectItem value="cancelled">Cancelaram</SelectItem>
                    </>
                  )}
                </SelectContent>
              </Select>

              <Button
                variant="ghost"
                size="icon"
                onClick={() => removeFilter(filter.id)}
                className="text-red-500 hover:text-red-700 hover:bg-red-50"
              >
                <MinusCircle className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>

        <div className="flex justify-end">
          <Button className="bg-gradient-to-r from-orange-500 to-orange-600">Analisar Dados</Button>
        </div>
      </CardContent>
    </Card>
  )
}
