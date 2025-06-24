import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { MessageAutomation } from "@/components/message-automation"
import { MessageTemplates } from "@/components/message-templates"

export default function MessagingPage() {
  return (
    <DashboardShell>
      <DashboardHeader
        heading="Automação de Mensagens"
        text="Configure regras para envio automático de mensagens para seus alunos."
      />
      <div className="space-y-6">
        <MessageAutomation />
        <MessageTemplates />
      </div>
    </DashboardShell>
  )
}
