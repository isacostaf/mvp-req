"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"
import { PlusCircle, Trash, MessageSquare, Bell } from "lucide-react"

export function MessageAutomation() {
  const [rules, setRules] = useState([
    {
      id: 1,
      name: "Boas-vindas para Primeira Aula",
      condition: "first_class",
      active: true,
      message:
        "Olá {nome}, seja bem-vindo(a) à nossa academia! Esperamos que tenha gostado da sua primeira aula. Estamos à disposição para qualquer dúvida.",
    },
    {
      id: 2,
      name: "Alunos Ausentes",
      condition: "absent",
      days: 21,
      active: true,
      message:
        "Olá {nome}, sentimos sua falta! Já faz {dias} dias desde sua última aula. Está tudo bem? Podemos ajudar em algo?",
    },
  ])

  const addRule = () => {
    const newId = rules.length > 0 ? Math.max(...rules.map((r) => r.id)) + 1 : 1
    setRules([
      ...rules,
      {
        id: newId,
        name: "Nova Regra",
        condition: "",
        active: true,
        message: "",
      },
    ])
  }

  const removeRule = (id) => {
    setRules(rules.filter((rule) => rule.id !== id))
  }

  const updateRule = (id, field, value) => {
    setRules(rules.map((rule) => (rule.id === id ? { ...rule, [field]: value } : rule)))
  }

  return (
    <Card className="border-t-4 border-t-purple-500 overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-purple-50 to-white">
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center">
            <MessageSquare className="mr-2 h-5 w-5 text-purple-500" />
            Regras de Automação
          </div>
          <Button onClick={addRule} className="bg-purple-500 hover:bg-purple-600">
            <PlusCircle className="mr-2 h-4 w-4" />
            Nova Regra
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {rules.map((rule) => (
          <div key={rule.id} className="rounded-lg border p-4 bg-gradient-to-r from-gray-50 to-white shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <Switch
                  checked={rule.active}
                  onCheckedChange={(checked) => updateRule(rule.id, "active", checked)}
                  className="data-[state=checked]:bg-purple-500"
                />
                <Input
                  value={rule.name}
                  onChange={(e) => updateRule(rule.id, "name", e.target.value)}
                  className="max-w-[300px] border-purple-200 focus:border-purple-500"
                />
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => removeRule(rule.id)}
                className="text-red-500 hover:text-red-700 hover:bg-red-50"
              >
                <Trash className="h-4 w-4" />
              </Button>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label className="flex items-center">
                  <Bell className="mr-2 h-4 w-4 text-orange-500" />
                  Condição
                </Label>
                <Select value={rule.condition} onValueChange={(value) => updateRule(rule.id, "condition", value)}>
                  <SelectTrigger className="bg-gray-50 border-gray-200">
                    <SelectValue placeholder="Selecione uma condição" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="first_class">Primeira Aula</SelectItem>
                    <SelectItem value="absent">Ausente por X dias</SelectItem>
                    <SelectItem value="birthday">Aniversário</SelectItem>
                    <SelectItem value="low_credits">Créditos Baixos</SelectItem>
                    <SelectItem value="class_cancelled">Aula Cancelada</SelectItem>
                  </SelectContent>
                </Select>

                {rule.condition === "absent" && (
                  <div className="mt-2">
                    <Label>Dias de Ausência</Label>
                    <Input
                      type="number"
                      value={rule.days || ""}
                      onChange={(e) => updateRule(rule.id, "days", Number.parseInt(e.target.value))}
                      min={1}
                      className="bg-gray-50 border-gray-200"
                    />
                  </div>
                )}

                {rule.condition === "low_credits" && (
                  <div className="mt-2">
                    <Label>Limite de Créditos</Label>
                    <Input
                      type="number"
                      value={rule.creditLimit || ""}
                      onChange={(e) => updateRule(rule.id, "creditLimit", Number.parseInt(e.target.value))}
                      min={1}
                      className="bg-gray-50 border-gray-200"
                    />
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <Label className="flex items-center">
                  <MessageSquare className="mr-2 h-4 w-4 text-blue-500" />
                  Mensagem
                </Label>
                <Textarea
                  value={rule.message}
                  onChange={(e) => updateRule(rule.id, "message", e.target.value)}
                  placeholder="Digite a mensagem a ser enviada..."
                  className="min-h-[100px] bg-gray-50 border-gray-200"
                />
                <p className="text-xs text-muted-foreground">
                  Variáveis disponíveis: <span className="text-purple-500">{"{nome}"}</span>,{" "}
                  <span className="text-blue-500">{"{dias}"}</span>,{" "}
                  <span className="text-green-500">{"{creditos}"}</span>,{" "}
                  <span className="text-orange-500">{"{aula}"}</span>
                </p>
              </div>
            </div>

            <div className="mt-4 flex justify-end">
              <Button variant="outline" size="sm" className="border-blue-200 text-blue-700 hover:bg-blue-50">
                Testar
              </Button>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
