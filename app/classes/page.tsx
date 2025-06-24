import { ClassList } from "@/components/class-list"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { ClassFilters } from "@/components/class-filters"

export default function ClassesPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Aulas" text="Visualize e gerencie todas as suas aulas." />
      <div className="space-y-4">
        <ClassFilters />
        <ClassList />
      </div>
    </DashboardShell>
  )
}
