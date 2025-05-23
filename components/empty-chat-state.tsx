"use client"

import { motion } from "framer-motion"
import { MessageCircle, Users, Plus, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

interface EmptyChatStateProps {
  onNewChat?: () => void
}

{
  /* begin::EmptyChatState */
}
export default function EmptyChatState({ onNewChat }: EmptyChatStateProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex h-full w-full items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50"
    >
      <div className="text-center max-w-md px-6">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="relative mb-8"
        >
          <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto shadow-lg">
            <MessageCircle className="h-12 w-12 text-white" />
          </div>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            className="absolute -top-2 -right-2"
          >
            <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
              <Sparkles className="h-4 w-4 text-yellow-800" />
            </div>
          </motion.div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-2xl font-bold text-gray-800 mb-4"
        >
          Welcome to Your Inbox
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-gray-600 mb-8 leading-relaxed"
        >
          Start a meaningful conversation by selecting a user from the sidebar or compose a new message to begin your
          chat experience.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-8 text-xs text-gray-500"
        >
          💡 Tip: Use ⌘K for quick shortcuts
        </motion.div>
      </div>
    </motion.div>
  )
}
{
  /* end::EmptyChatState */
}
