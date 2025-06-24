import { ClassSchedule } from "@/components/class-schedule"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { DashboardStats } from "@/components/dashboard-stats"

export default function DashboardPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Dashboard" text="Gerencie suas aulas de bike e ioga." />
      <DashboardStats />
      <div className="mt-6">
        <ClassSchedule />
      </div>
    </DashboardShell>
  )
}
