import { cn } from "@/lib/utils"

interface SiteFooterProps {
  className?: string
}

export function SiteFooter({ className }: SiteFooterProps) {
  return (
    <footer className={cn("container py-4", className)}>
      <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          &copy; {new Date().getFullYear()} FitManager. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
