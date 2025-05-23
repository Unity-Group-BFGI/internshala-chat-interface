"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Inbox, Clock, ChevronDown, Paperclip, X, PanelLeft } from "lucide-react"
import { Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import UserList from "@/components/user-list"
import ChatArea from "@/components/chat-area"
import SmartCopilot from "@/components/smart-copilot"
import EmptyChatState from "@/components/empty-chat-state"
import type { User, Message } from "@/types/chat"
import { users, messages } from "@/data/chat-data"
import SidebarToggle from "@/components/sidebar-toggle"
import SmartSidebarToggle from "@/components/smart-sidebar-toggle"

/**
 * Main chat interface component that manages the entire chat application
 *
 * Features:
 * - User list sidebar with toggle functionality
 * - Chat area for displaying messages
 * - Smart copilot sidebar for assistance
 * - Responsive design with mobile support
 * - Message sending and receiving functionality
 *
 * @component
 * @example
 * ```tsx
 * <ChatInterface />
 * ```
 */
{
  /* begin::ChatInterface */
}
export default function ChatInterface() {
  const [selectedUser, setSelectedUser] = useState<User | null>(null)
  const [filter, setFilter] = useState<"all" | "unread">("all")
  const [showCopilot, setShowCopilot] = useState(true)
  const [currentMessages, setCurrentMessages] = useState<Message[]>([])
  const [newMessage, setNewMessage] = useState("")
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768)

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  useEffect(() => {
    if (selectedUser) {
      setCurrentMessages(messages.filter((m) => m.senderId === selectedUser.id || m.receiverId === selectedUser.id))
    } else {
      setCurrentMessages([])
    }
  }, [selectedUser])

  // Close sidebars on mobile when screen size changes
  useEffect(() => {
    if (isMobile) {
      setSidebarOpen(false)
      setShowCopilot(false)
    } else {
      setSidebarOpen(true)
      if (selectedUser) {
        setShowCopilot(true)
      }
    }
  }, [isMobile, selectedUser])

  /**
   * Handles sending a new message or adding content to input
   * @param content - Message content to send
   * @param addToInput - Whether to add to input instead of sending
   */
  const handleSendMessage = (content = newMessage, addToInput = false) => {
    if (addToInput) {
      // Add to input box for editing
      setNewMessage(content)
      return
    }

    if (!content.trim() || !selectedUser) return

    const newMsg: Message = {
      id: `msg-${Date.now()}`,
      content: content,
      timestamp: new Date(),
      senderId: "current-user",
      receiverId: selectedUser.id,
      read: true,
    }

    setCurrentMessages([...currentMessages, newMsg])
    setNewMessage("")

    // Simulate reply after 2 seconds
    setTimeout(() => {
      const reply: Message = {
        id: `msg-${Date.now() + 1}`,
        content: `This is an automated reply from ${selectedUser.name}`,
        timestamp: new Date(),
        senderId: selectedUser.id,
        receiverId: "current-user",
        read: false,
      }
      setCurrentMessages((prev) => [...prev, reply])
    }, 2000)
  }

  /**
   * Closes the current chat and resets state
   */
  const handleCloseChat = () => {
    setSelectedUser(null)
    setNewMessage("")
    if (isMobile) {
      setShowCopilot(false)
    }
  }

  /**
   * Initiates a new chat by opening the sidebar
   */
  const handleNewChat = () => {
    console.log("Starting new chat...")
    setSidebarOpen(true)
  }

  /**
   * Handles user selection from the user list
   * @param user - Selected user object
   */
  const handleSelectUser = (user: User) => {
    setSelectedUser(user)
    // Close sidebar on mobile after selection
    if (isMobile) {
      setSidebarOpen(false)
    }
  }

  /**
   * Handles backdrop click to close sidebars on mobile
   */
  const handleBackdropClick = () => {
    if (isMobile) {
      setSidebarOpen(false)
      setShowCopilot(false)
    }
  }

  /**
   * Toggles the smart copilot sidebar
   */
  const toggleCopilot = () => {
    if (!showCopilot) {
      // Opening smart sidebar - close user list sidebar for maximum width
      setShowCopilot(true)
      if (!isMobile) {
        setSidebarOpen(false)
      }
    } else {
      // Closing smart sidebar - reopen user list sidebar if not on mobile
      setShowCopilot(false)
      if (!isMobile) {
        setSidebarOpen(true)
      }
    }
  }

  /**
   * Toggles the user list sidebar
   */
  const toggleUserSidebar = () => {
    if (!sidebarOpen) {
      // Opening user sidebar - close smart sidebar for better layout
      setSidebarOpen(true)
      if (!isMobile && showCopilot) {
        setShowCopilot(false)
      }
    } else {
      setSidebarOpen(false)
    }
  }

  const isOverlayVisible = isMobile && (sidebarOpen || showCopilot)

  return (
    <div className="flex h-screen overflow-hidden relative">
      {/* Backdrop Overlay for Mobile */}
      <AnimatePresence>
        {isOverlayVisible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 z-20 md:hidden"
            onClick={handleBackdropClick}
          />
        )}
      </AnimatePresence>

      {/* Left Sidebar - User List */}
      <motion.div
        initial={{ x: isMobile ? -320 : 0 }}
        animate={{
          x: sidebarOpen ? 0 : -320,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`
          w-80 border-r border-gray-200 bg-white flex flex-col h-full
          ${isMobile ? "fixed left-0 top-0 bottom-0 z-30" : "absolute left-0 top-0 bottom-0 z-10"}
        `}
      >
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-xl font-semibold text-heading">Your inbox</h1>
            {isMobile && (
              <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(false)} className="md:hidden">
                <X className="h-5 w-5" />
              </Button>
            )}
            {selectedUser && !isMobile && (
              <Button variant="ghost" size="icon" onClick={toggleUserSidebar}>
                <PanelLeft className="h-5 w-5" />
              </Button>
            )}
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="flex items-center gap-1 text-caption">
              <Inbox className="h-4 w-4" />
              <span>Open</span>
              <ChevronDown className="h-4 w-4 ml-1" />
            </Button>
            <Button variant="outline" size="sm" className="flex items-center gap-1 text-caption">
              <Clock className="h-4 w-4" />
              <span>Waiting longest</span>
              <ChevronDown className="h-4 w-4 ml-1" />
            </Button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">
          <UserList
            users={users.filter((user) => filter === "all" || user.hasUnread)}
            selectedUser={selectedUser}
            onSelectUser={handleSelectUser}
            isDrawerOpen={sidebarOpen}
          />
        </div>
      </motion.div>

      {/* Main Chat Area */}
      <motion.div
        initial={{ marginLeft: isMobile ? 0 : 320, marginRight: isMobile ? 0 : showCopilot ? 320 : 0 }}
        animate={{
          marginLeft: isMobile ? 0 : sidebarOpen ? 320 : 0,
          marginRight: isMobile ? 0 : showCopilot && selectedUser ? "40%" : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="flex-1 flex flex-col bg-white h-full relative"
      >
        <AnimatePresence mode="wait">
          {selectedUser ? (
            <motion.div
              key="chat-view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col h-full bg-gray-50"
            >
              {/* Chat Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-white">
                <div className="flex items-center gap-3">
                  <SidebarToggle isOpen={sidebarOpen} onToggle={toggleUserSidebar} />
                  <Avatar className="h-8 w-8">
                    <div className="bg-gray-200 h-full w-full flex items-center justify-center rounded-full">
                      {selectedUser.name.charAt(0)}
                    </div>
                  </Avatar>
                  <div>
                    <h2 className="font-semibold text-heading">{selectedUser.name}</h2>
                    {selectedUser.organization && (
                      <p className="text-xs text-gray-500 text-caption">{selectedUser.organization}</p>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={handleCloseChat}
                    className="flex items-center gap-1 text-caption"
                  >
                    <X className="h-4 w-4" />
                    Close
                  </Button>
                  <SmartSidebarToggle isOpen={showCopilot} onToggle={toggleCopilot} />
                </div>
              </div>

              <ChatArea messages={currentMessages} currentUser="current-user" />

              {/* Message Input */}
              <div className="border rounded-md shadow-sm border-gray-200 mt-auto m-4 px-4 bg-white">
                <div className="flex flex-col">
                  {/* Chat Header with Dropdown */}
                  <div className="flex items-center py-2">
                    <div className="flex items-center gap-1">
                      <svg
                        className="h-4 w-4 text-gray-700"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8 12H8.01M12 12H12.01M16 12H16.01M21 12C21 16.418 16.97 20 12 20C10.5 20 9.077 19.692 7.8 19.142L3 20L4.056 16.448C3.389 15.1 3 13.6 3 12C3 7.582 7.03 4 12 4C16.97 4 21 7.582 21 12Z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="text-sm font-medium text-caption">Chat</span>
                      <ChevronDown className="h-3 w-3 text-gray-500" />
                    </div>
                  </div>

                  {/* Input Area with Placeholder */}
                  <div className="relative min-h-[80px] h-auto max-h-[200px]">
                    <textarea
                      placeholder="Use ⌘K for shortcuts"
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" && !e.shiftKey) {
                          e.preventDefault()
                          handleSendMessage()
                        }
                      }}
                      className="w-full text-sm py-2 resize-none focus:outline-none min-h-[80px] h-auto max-h-[200px] text-gray-700 placeholder-gray-400 text-body"
                    />
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center justify-between py-2 border-t border-gray-100">
                    {/* Left side icons */}
                    <div className="flex items-center gap-3">
                      <button className="text-gray-600">
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                      <button className="text-gray-600">
                        <Paperclip className="h-5 w-5" />
                      </button>
                    </div>

                    {/* Right side send button */}
                    <button
                      onClick={() => handleSendMessage()}
                      disabled={!newMessage.trim()}
                      className="text-gray-600 font-medium text-sm text-caption"
                    >
                      Send
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="empty-state"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex-1 h-full"
            >
              <EmptyChatState onNewChat={handleNewChat} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Right Sidebar - Smart Copilot */}
      <AnimatePresence>
        {showCopilot && selectedUser && (
          <motion.div
            initial={{ x: isMobile ? "40%" : 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: isMobile ? "40%" : 20, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={`
              w-[40%] border-l border-gray-200 bg-white
              ${isMobile ? "fixed right-0 top-0 bottom-0 z-30" : "absolute right-0 top-0 bottom-0 z-10 h-full"}
            `}
          >
            <SmartCopilot
              onClose={() => setShowCopilot(false)}
              isMobile={isMobile}
              onSendMessage={(message) => handleSendMessage(message, true)}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Left Sidebar Toggle Button */}
      {(!isMobile || !selectedUser) && <></>}
    </div>
  )
}
{
  /* end::ChatInterface */
}
