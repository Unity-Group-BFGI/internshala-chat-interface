"use client"
import { Bot } from "lucide-react"
import { Button } from "@/components/ui/button"

interface SmartSidebarToggleProps {
  isOpen: boolean
  onToggle: () => void
}

/**
 * Toggle button component for the smart copilot sidebar
 *
 * @component
 * @example
 * \`\`\`tsx
 * <SmartSidebarToggle
 *   isOpen={showCopilot}
 *   onToggle={() => setShowCopilot(!showCopilot)}
 * />
 * ```
 */
{
  /* begin::SmartSidebarToggle */
}
export default function SmartSidebarToggle({ isOpen, onToggle }: SmartSidebarToggleProps) {
  return (
    <>
      {!isOpen && (
        <Button onClick={onToggle} size="icon" variant="secondary" className="h-12 w-12 rounded-full">
          <Bot className="h-6 w-6" />
        </Button>
      )}
    </>
  )
}
{
  /* end::SmartSidebarToggle */
}
