"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { PlusCircle, Save, MessageSquare, FileText } from "lucide-react"

export function MessageTemplates() {
  const [templates, setTemplates] = useState([
    {
      id: 1,
      name: "Boas-vindas",
      message: "Olá {nome}, seja bem-vindo(a) à nossa academia! Estamos felizes em tê-lo(a) conosco.",
    },
    {
      id: 2,
      name: "Lembrete de Aula",
      message: "Olá {nome}, não se esqueça da sua aula de {aula} amanhã às {horario}. Esperamos você!",
    },
    {
      id: 3,
      name: "Aniversário",
      message: "Feliz aniversário, {nome}! Toda a equipe da academia deseja um dia maravilhoso e cheio de alegrias.",
    },
  ])

  const [activeTemplate, setActiveTemplate] = useState(templates[0])
  const [editMode, setEditMode] = useState(false)

  const handleEdit = () => {
    setEditMode(true)
  }

  const handleSave = () => {
    setTemplates(templates.map((t) => (t.id === activeTemplate.id ? activeTemplate : t)))
    setEditMode(false)
  }

  const handleChange = (field, value) => {
    setActiveTemplate({
      ...activeTemplate,
      [field]: value,
    })
  }

  const addTemplate = () => {
    const newId = Math.max(...templates.map((t) => t.id)) + 1
    const newTemplate = {
      id: newId,
      name: "Novo Template",
      message: "",
    }
    setTemplates([...templates, newTemplate])
    setActiveTemplate(newTemplate)
    setEditMode(true)
  }

  return (
    <Card className="border-t-4 border-t-green-500 overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-green-50 to-white">
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center">
            <FileText className="mr-2 h-5 w-5 text-green-500" />
            Templates de Mensagens
          </div>
          <Button onClick={addTemplate} className="bg-green-500 hover:bg-green-600">
            <PlusCircle className="mr-2 h-4 w-4" />
            Novo Template
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs
          defaultValue={templates[0]?.id.toString()}
          value={activeTemplate?.id.toString()}
          onValueChange={(value) => {
            const template = templates.find((t) => t.id.toString() === value)
            if (template) {
              setActiveTemplate(template)
              setEditMode(false)
            }
          }}
        >
          <TabsList className="mb-4 bg-gray-100">
            {templates.map((template) => (
              <TabsTrigger
                key={template.id}
                value={template.id.toString()}
                className="data-[state=active]:bg-green-100 data-[state=active]:text-green-700"
              >
                {template.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {templates.map((template) => (
            <TabsContent key={template.id} value={template.id.toString()}>
              <div className="space-y-4">
                {editMode ? (
                  <>
                    <div className="space-y-2">
                      <Label className="flex items-center">
                        <FileText className="mr-2 h-4 w-4 text-green-500" />
                        Nome do Template
                      </Label>
                      <Input
                        value={activeTemplate.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        className="border-green-200 focus:border-green-500 bg-gray-50"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label className="flex items-center">
                        <MessageSquare className="mr-2 h-4 w-4 text-green-500" />
                        Mensagem
                      </Label>
                      <Textarea
                        value={activeTemplate.message}
                        onChange={(e) => handleChange("message", e.target.value)}
                        className="min-h-[200px] border-green-200 focus:border-green-500 bg-gray-50"
                      />
                      <p className="text-xs text-muted-foreground">
                        Variáveis disponíveis: <span className="text-purple-500">{"{nome}"}</span>,{" "}
                        <span className="text-blue-500">{"{aula}"}</span>,{" "}
                        <span className="text-green-500">{"{horario}"}</span>,{" "}
                        <span className="text-orange-500">{"{creditos}"}</span>
                      </p>
                    </div>
                    <div className="flex justify-end">
                      <Button onClick={handleSave} className="bg-green-500 hover:bg-green-600">
                        <Save className="mr-2 h-4 w-4" />
                        Salvar
                      </Button>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="rounded-lg border p-4 min-h-[200px] bg-gradient-to-r from-gray-50 to-white">
                      <p className="whitespace-pre-wrap">{template.message}</p>
                    </div>
                    <div className="flex justify-end">
                      <Button
                        variant="outline"
                        onClick={handleEdit}
                        className="border-green-200 text-green-700 hover:bg-green-50"
                      >
                        Editar
                      </Button>
                    </div>
                  </>
                )}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  )
}
