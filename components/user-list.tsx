"use client"

import { motion } from "framer-motion"
import { Avatar } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import type { User } from "@/types/chat"

interface UserListProps {
  users: User[]
  selectedUser: User | null
  onSelectUser: (user: User) => void
  isDrawerOpen?: boolean
}

{
  /* begin::UserList */
}
export default function UserList({ users, selectedUser, onSelectUser, isDrawerOpen = true }: UserListProps) {
  return (
    <ul className="divide-y divide-gray-100">
      {users.map((user) => (
        <motion.li
          key={user.id}
          whileHover={{ backgroundColor: "rgba(0, 0, 0, 0.02)" }}
          whileTap={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
          onClick={() => onSelectUser(user)}
          className={cn(
            "p-4 cursor-pointer transition-all duration-200",
            selectedUser?.id === user.id && "bg-blue-100 border-l-4 border-blue-500",
          )}
        >
          <div className="flex gap-3">
            <Avatar className="h-10 w-10 flex-shrink-0">
              <div
                className={cn(
                  "h-full w-full flex items-center justify-center rounded-full text-white",
                  user.avatarColor || "bg-blue-500",
                )}
              >
                {user.name.charAt(0)}
              </div>
            </Avatar>
            <div className={cn("flex-1 min-w-0", !isDrawerOpen && "hidden")}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <p className="font-medium text-sm">{user.name}</p>
                  {user.organization && <span className="text-xs text-gray-500">• {user.organization}</span>}
                </div>
                <div className="flex items-center gap-1">
                  {user.hasUnread && (
                    <Badge variant="default" className="bg-yellow-400 hover:bg-yellow-500">
                      New
                    </Badge>
                  )}
                  <span className="text-xs text-gray-500">{user.lastMessageTime}</span>
                </div>
              </div>
              <p className="text-sm text-gray-600 truncate mt-1">{user.lastMessage}</p>
            </div>
          </div>
        </motion.li>
      ))}
    </ul>
  )
}
{
  /* end::UserList */
}
