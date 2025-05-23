import type { TemplateOption, AssistantOptionItem } from "@/types/assistance"

export const assistantOptions: AssistantOptionItem[] = [
  {
    id: "refund",
    icon: "💰",
    label: "Refund Request",
  },
  {
    id: "urgent",
    icon: "🚨",
    label: "Urgent Email",
  },
  {
    id: "work",
    icon: "💼",
    label: "Work Email",
  },
]

export const refundTemplates: TemplateOption[] = [
  {
    id: "refund-1",
    title: "Refund Request Instructions",
    content: `We understand that sometimes a purchase may not meet your expectations, and you may need to request a refund.

To assist you with your refund request, could you please provide your order ID and proof of purchase.

Please note:
We can only refund orders placed within the last 60 days, and your item must meet our requirements for condition to be returned. Please check when you placed your order before proceeding.

Once I've checked these details, if everything looks OK, I will send a returns QR code which you can use to post the item back. Your refund will be automatically issued once you put it in the post.`,
  },
  {
    id: "refund-2",
    title: "Digital Product Refund",
    content: `We understand that sometimes digital products may not meet your expectations, and you may need to request a refund.

For digital product refunds, please provide your order ID and the email address used for purchase.

Please note:
Digital products can only be refunded within 14 days of purchase and if they have not been downloaded or accessed more than once. 

Once I've verified your purchase details, I'll process your refund which should appear in your account within 3-5 business days.`,
  },
  {
    id: "refund-3",
    title: "Subscription Cancellation",
    content: `We understand that you may need to cancel your subscription and request a refund for the remaining period.

To assist with your cancellation, please provide your subscription ID and the email address associated with your account.

Please note:
Subscription refunds are prorated based on the unused portion of your billing period. Any usage during the current period will be deducted from the refund amount.

Once I've verified your subscription details, I'll process the cancellation and refund, which should appear in your account within 5-7 business days.`,
  },
]

export const urgentTemplates: TemplateOption[] = [
  {
    id: "urgent-1",
    title: "Urgent Meeting Request",
    content: `We need to discuss an urgent matter regarding the current project. Could we schedule a call within the next hour? This requires immediate attention.

Please let me know your availability as soon as possible.

I've prepared some key points we need to address:
- Current project status and blockers
- Resource allocation concerns
- Updated timeline requirements

I appreciate your prompt response to this matter.`,
  },
  {
    id: "urgent-2",
    title: "Critical Deadline Reminder",
    content: `This is a reminder that we have a critical deadline approaching in 24 hours. Please provide an update on your progress as soon as possible.

The following deliverables are due:
- Final design assets
- Implementation documentation
- Client approval signatures

Please note:
Missing this deadline will impact our entire project timeline and may result in contractual penalties.

Let me know if you need any assistance to meet this deadline.`,
  },
]

export const workTemplates: TemplateOption[] = [
  {
    id: "work-1",
    title: "Project Status Update",
    content: `I'm writing to provide an update on the current project status. We've completed the initial phase and are on track to meet our deadlines.

Key accomplishments:
- Completed user research and requirements gathering
- Finalized design specifications
- Started development of core features

Next steps:
- Complete first round of QA testing
- Schedule stakeholder review
- Begin documentation process

Please let me know if you need any specific details or have questions about our progress.`,
  },
  {
    id: "work-2",
    title: "Meeting Follow-up",
    content: `Following our meeting, I wanted to summarize the key points discussed and confirm the next steps we agreed upon.

Discussion summary:
- Reviewed current project timeline and milestones
- Addressed resource allocation concerns
- Discussed client feedback and required adjustments

Action items:
- Team to update project plan by Friday
- Schedule follow-up meeting with client next week
- Distribute updated requirements document

Please review and let me know if I missed anything or if you have any questions.`,
  },
]

export const getTemplatesByType = (type: string): TemplateOption[] => {
  switch (type) {
    case "refund":
      return refundTemplates
    case "urgent":
      return urgentTemplates
    case "work":
      return workTemplates
    default:
      return []
  }
}

export const getOptionTitle = (option: string): string => {
  switch (option) {
    case "refund":
      return "Refund Templates"
    case "urgent":
      return "Urgent Email Templates"
    case "work":
      return "Work Email Templates"
    default:
      return ""
  }
}
