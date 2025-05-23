export interface User {
  id: string
  name: string
  organization?: string
  avatarColor?: string
  lastMessage: string
  lastMessageTime: string
  hasUnread: boolean
}

export interface Message {
  id: string
  content: string
  timestamp: Date
  senderId: string
  receiverId: string
  read: boolean
}
