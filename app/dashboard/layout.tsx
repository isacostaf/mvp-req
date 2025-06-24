import type React from "react"
import { MainNav } from "@/components/main-nav"
import { DashboardNav } from "@/components/dashboard-nav"
import { SiteFooter } from "@/components/site-footer"

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <MainNav />
        </div>
      </header>
      <div className="container grid flex-1 gap-12 md:grid-cols-[200px_1fr]">
        <aside className="hidden w-[200px] flex-col md:flex">
          <DashboardNav />
        </aside>
        <main className="flex w-full flex-1 flex-col overflow-hidden">{children}</main>
      </div>
      <SiteFooter className="border-t" />
    </div>
  )
}
