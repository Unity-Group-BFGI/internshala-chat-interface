"use client"

import { useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Avatar } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"
import type { Message } from "@/types/chat"

interface ChatAreaProps {
  messages: Message[]
  currentUser: string
}

{
  /* begin::ChatArea */
}
export default function ChatArea({ messages, currentUser }: ChatAreaProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const formatTime = (date: Date) => {
    return new Intl.DateTimeFormat("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    }).format(date)
  }

  return (
    <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
      <AnimatePresence>
        {messages.map((message, index) => {
          const isCurrentUser = message.senderId === currentUser
          const showAvatar = index === 0 || messages[index - 1].senderId !== message.senderId

          return (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className={cn("flex mb-4", isCurrentUser ? "justify-end" : "justify-start")}
            >
              {!isCurrentUser && showAvatar && (
                <Avatar className="h-8 w-8 mr-2 mt-1">
                  <div className="bg-blue-500 h-full w-full flex items-center justify-center rounded-full text-white text-xs">
                    L
                  </div>
                </Avatar>
              )}

              <div className={cn("max-w-[70%]", !isCurrentUser && !showAvatar && "ml-10")}>
                <div
                  className={cn(
                    "px-4 py-2 rounded-lg",
                    isCurrentUser ? "bg-blue-100 text-blue-900" : "bg-white border border-gray-200",
                  )}
                >
                  {message.content}
                </div>
                <div className={cn("text-xs text-gray-500 mt-1", isCurrentUser ? "text-right" : "text-left")}>
                  {formatTime(message.timestamp)}
                </div>
              </div>

              {isCurrentUser && showAvatar && (
                <Avatar className="h-8 w-8 ml-2 mt-1">
                  <div className="bg-gray-500 h-full w-full flex items-center justify-center rounded-full text-white text-xs">
                    Y
                  </div>
                </Avatar>
              )}
            </motion.div>
          )
        })}
        <div ref={messagesEndRef} />
      </AnimatePresence>
    </div>
  )
}
{
  /* end::ChatArea */
}
