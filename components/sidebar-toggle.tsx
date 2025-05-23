"use client"
import { PanelLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useMobile } from "@/hooks/use-mobile"

interface SidebarToggleProps {
  isOpen: boolean
  onToggle: () => void
}

{
  /* begin::SidebarToggle */
}
export default function SidebarToggle({ isOpen, onToggle }: SidebarToggleProps) {
  const isMobile = useMobile()

  return (
    <>
      {!isOpen && (
        <Button onClick={onToggle} size="icon" variant="secondary" className="h-10 w-10">
          {isMobile ? <PanelLeft className="h-6 w-6" /> : <PanelLeft className="h-6 w-6" />}
        </Button>
      )}
    </>
  )
}
{
  /* end::SidebarToggle */
}
