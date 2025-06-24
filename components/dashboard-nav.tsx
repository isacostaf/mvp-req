"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { LayoutDashboard, Calendar, BarChart, MessageSquare } from "lucide-react"

export function DashboardNav() {
  const pathname = usePathname()

  const routes = [
    {
      href: "/dashboard",
      label: "Dashboard",
      icon: LayoutDashboard,
      color: "text-blue-500",
    },
    {
      href: "/classes",
      label: "Aulas",
      icon: Calendar,
      color: "text-green-500",
    },
    {
      href: "/analytics",
      label: "Análise",
      icon: BarChart,
      color: "text-orange-500",
    },
    {
      href: "/messaging",
      label: "Mensagens",
      icon: MessageSquare,
      color: "text-purple-500",
    },
  ]

  return (
    <nav className="grid items-start gap-2">
      {routes.map((route) => {
        const Icon = route.icon
        return (
          <Link key={route.href} href={route.href}>
            <Button
              variant={pathname === route.href ? "secondary" : "ghost"}
              className={`w-full justify-start ${pathname === route.href ? "bg-gradient-to-r from-gray-100 to-gray-200" : ""}`}
            >
              <Icon className={`mr-2 h-4 w-4 ${route.color}`} />
              {route.label}
            </Button>
          </Link>
        )
      })}
    </nav>
  )
}
