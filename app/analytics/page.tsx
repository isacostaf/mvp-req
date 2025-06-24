import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { AnalyticsFilters } from "@/components/analytics-filters"
import { AnalyticsResults } from "@/components/analytics-results"

export default function AnalyticsPage() {
  return (
    <DashboardShell>
      <DashboardHeader
        heading="Análise de Dados"
        text="Analise e cruze dados para obter insights sobre suas aulas e alunos."
      />
      <div className="space-y-6">
        <AnalyticsFilters />
        <AnalyticsResults />
      </div>
    </DashboardShell>
  )
}
