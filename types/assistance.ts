export type AssistantState = "initial" | "options" | "details" | "compose"
export type AssistantOption = "refund" | "urgent" | "work"

export interface TemplateOption {
  id: string
  title: string
  content: string
  icon?: string
}

export interface AssistantOptionItem {
  id: AssistantOption
  icon: string
  label: string
}
