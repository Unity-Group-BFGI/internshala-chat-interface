"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUp, PanelRight, ChevronRight, ArrowLeft, FileEdit, ChevronDown, Info, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { assistantOptions, getTemplatesByType, getOptionTitle } from "@/data/message-templates"
import type { AssistantState, AssistantOption, TemplateOption } from "@/types/assistance"

interface SmartCopilotProps {
  /** Function to call when closing the copilot */
  onClose: () => void
  /** Whether the interface is in mobile mode */
  isMobile?: boolean
  /** Function to call when sending a message to the main chat */
  onSendMessage?: (message: string) => void
}

/**
 * Smart Copilot component that provides intelligent assistance for composing messages
 *
 * Features:
 * - Template selection for different message types (refund, urgent, work)
 * - Message composition with preview
 * - Integration with main chat interface
 * - Question input for smart assistance
 *
 * @component
 * @example
 * ```tsx
 * <SmartCopilot
 *   onClose={() => setShowCopilot(false)}
 *   isMobile={false}
 *   onSendMessage={(message) => handleSendMessage(message)}
 * />
 * ```
 */
{
  /* begin::SmartCopilot */
}
export default function SmartCopilot({ onClose, isMobile = false, onSendMessage }: SmartCopilotProps) {
  const [question, setQuestion] = useState("")
  const [assistantState, setAssistantState] = useState<AssistantState>("initial")
  const [selectedOption, setSelectedOption] = useState<AssistantOption | null>(null)
  const [selectedTemplate, setSelectedTemplate] = useState<TemplateOption | null>(null)
  const [composedMessage, setComposedMessage] = useState("")
  const [showOptions, setShowOptions] = useState(false)
  const bellSoundRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    // Create audio element for notification sound
    bellSoundRef.current = new Audio("/sounds/bell.mp3")

    // Show options after a delay for better UX
    const timer = setTimeout(() => {
      setShowOptions(true)
      // Play notification sound
      bellSoundRef.current?.play().catch((e) => console.log("Audio play failed:", e))
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  /**
   * Handles selection of an assistant option (refund, urgent, work)
   * @param option - The selected assistant option
   */
  const handleOptionSelect = (option: AssistantOption) => {
    setSelectedOption(option)
    setAssistantState("details")
  }

  /**
   * Handles selection of a specific template
   * @param template - The selected template object
   */
  const handleTemplateSelect = (template: TemplateOption) => {
    setSelectedTemplate(template)
    setComposedMessage(template.content)
    setAssistantState("compose")
  }

  /**
   * Handles navigation back to previous state
   */
  const handleBack = () => {
    if (assistantState === "details") {
      setAssistantState("options")
      setSelectedOption(null)
    } else if (assistantState === "compose") {
      setAssistantState("details")
      setSelectedTemplate(null)
      setComposedMessage("")
    }
  }

  /**
   * Adds the composed message to the main chat input
   */
  const handleAddToInput = () => {
    if (onSendMessage && composedMessage) {
      onSendMessage(composedMessage)
      setAssistantState("initial")
      setSelectedOption(null)
      setSelectedTemplate(null)
      setComposedMessage("")
      setShowOptions(false)
      // Show options again after a delay
      setTimeout(() => {
        setShowOptions(true)
        // Play notification sound
        bellSoundRef.current?.play().catch((e) => console.log("Audio play failed:", e))
      }, 1500)
    }
  }

  /**
   * Handles submission of a question to the smart assistant
   */
  const handleSubmitQuestion = () => {
    if (question.trim()) {
      console.log("Submitting question:", question)
      // Here you would typically send the question to a backend service
      setQuestion("")
    }
  }

  return (
    <div className="flex flex-col h-full">
      <div className="p-4 border-b border-gray-200 flex items-center justify-between">
        <div className="flex items-center">
          <div className="w-8 h-8 bg-black rounded-md flex items-center justify-center mr-2">
            <span className="text-white font-medium text-sm">Fin</span>
          </div>
        </div>
        <Button variant="ghost" size="icon" onClick={onClose} className="ml-2">
          <PanelRight className="h-5 w-5" />
        </Button>
      </div>

      <div className="flex-1 overflow-y-auto bg-gray-100 p-4">
        <AnimatePresence mode="wait">
          {assistantState === "initial" && (
            <motion.div
              key="initial"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="text-center flex flex-col items-center justify-center h-full"
            >
              <div className="mb-6">
                <div className="w-12 h-12 bg-black rounded-md flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-sm">Fin</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 text-heading">How can I help you today?</h3>
                <p className="text-gray-600 mb-6 text-body">Select a template to get started</p>

                <AnimatePresence>
                  {showOptions && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, staggerChildren: 0.1 }}
                      className="space-y-3 mt-4"
                    >
                      {assistantOptions.map((option) => (
                        <OptionButton
                          key={option.id}
                          icon={option.icon}
                          label={option.label}
                          onClick={() => handleOptionSelect(option.id)}
                        />
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          )}

          {assistantState === "details" && selectedOption && (
            <motion.div
              key="details"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="h-full flex flex-col"
            >
              <div className="flex items-center mb-4">
                <Button variant="ghost" size="icon" onClick={handleBack} className="mr-2">
                  <ArrowLeft className="h-4 w-4" />
                </Button>
                <h3 className="text-lg font-semibold text-heading">{getOptionTitle(selectedOption)}</h3>
              </div>

              <div className="space-y-3">
                {getTemplatesByType(selectedOption).map((template) => (
                  <motion.div
                    key={template.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className="bg-white rounded-lg p-3 shadow-sm cursor-pointer hover:bg-blue-50 transition-colors"
                    onClick={() => handleTemplateSelect(template)}
                  >
                    <div className="flex justify-between items-center">
                      <h4 className="font-medium text-heading">{template.title}</h4>
                      <ChevronRight className="h-4 w-4 text-gray-400" />
                    </div>
                    <p className="text-sm text-gray-600 line-clamp-2 mt-1 text-body">
                      {template.content.split("\n\n")[0]}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {assistantState === "compose" && selectedTemplate && (
            <motion.div
              key="compose"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="h-full flex flex-col"
            >
              <div className="flex-1">
                <div className="rounded-xl overflow-hidden mb-4">
                  {/* Message Preview with gradient background */}
                  <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-5">
                    {composedMessage.split("\n\n").map((paragraph, index) => (
                      <div key={index} className={index > 0 ? "mt-4" : ""}>
                        <p className="text-gray-700 whitespace-pre-wrap text-body">{paragraph}</p>
                        {index === 0 && <Info className="inline-block h-4 w-4 text-blue-600 ml-1" />}
                        {index === composedMessage.split("\n\n").length - 1 && (
                          <HelpCircle className="inline-block h-4 w-4 text-blue-600 ml-1" />
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Add to composer button */}
                  <div className="bg-white p-3 border-t border-gray-200">
                    <Button
                      onClick={handleAddToInput}
                      variant="outline"
                      className="w-full flex items-center justify-center gap-2 py-5 text-caption"
                    >
                      <FileEdit className="h-5 w-5" />
                      <span>Add to composer</span>
                      <ChevronDown className="h-4 w-4 ml-auto" />
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {assistantState === "initial" && (
        <div className="p-4 bg-gray-100">
          <div className="relative">
            <div className="relative flex items-center bg-white rounded-full shadow-sm">
              <input
                type="text"
                placeholder="Ask a follow up question..."
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault()
                    handleSubmitQuestion()
                  }
                }}
                className="w-full py-3 px-4 bg-transparent border-none rounded-full text-sm focus:outline-none text-gray-700 placeholder-gray-500 text-body"
              />
              <button
                onClick={handleSubmitQuestion}
                disabled={!question.trim()}
                className="absolute right-3 p-1 rounded-full text-gray-500 hover:text-gray-700 disabled:opacity-50"
              >
                <ArrowUp className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
{
  /* end::SmartCopilot */
}

interface OptionButtonProps {
  /** Icon to display (emoji or icon) */
  icon: string
  /** Label text for the button */
  label: string
  /** Click handler function */
  onClick: () => void
}

/**
 * Option button component for smart assistant options
 *
 * @component
 * @example
 * ```tsx
 * <OptionButton
 *   icon="💰"
 *   label="Refund Request"
 *   onClick={() => handleOptionSelect('refund')}
 * />
 * ```
 */
{
  /* begin::OptionButton */
}
function OptionButton({ icon, label, onClick }: OptionButtonProps) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="w-full bg-white rounded-lg p-3 shadow-sm flex items-center hover:bg-blue-50 transition-colors"
    >
      <span className="text-xl mr-3">{icon}</span>
      <span className="font-medium text-heading">{label}</span>
      <ChevronRight className="h-4 w-4 text-gray-400 ml-auto" />
    </motion.button>
  )
}
{
  /* end::OptionButton */
}
