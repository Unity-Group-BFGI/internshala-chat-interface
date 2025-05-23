import type { User, Message } from "@/types/chat"

export const users: User[] = [
  {
    id: "user-1",
    name: "Luis",
    organization: "Github",
    avatarColor: "bg-blue-500",
    lastMessage: "Hey! I have a questio...",
    lastMessageTime: "45m",
    hasUnread: false,
  },
  {
    id: "user-2",
    name: "Ivan",
    organization: "Nike",
    avatarColor: "bg-red-500",
    lastMessage: "Hi there, I have a que...",
    lastMessageTime: "30m",
    hasUnread: true,
  },
  {
    id: "user-3",
    name: "Lead from New York",
    avatarColor: "bg-purple-500",
    lastMessage: "Good morning, let me...",
    lastMessageTime: "45m",
    hasUnread: false,
  },
  {
    id: "user-4",
    name: "Booking API problems",
    organization: "Bug report",
    avatarColor: "bg-gray-800",
    lastMessage: "Luis - Small Crafts",
    lastMessageTime: "45m",
    hasUnread: false,
  },
  {
    id: "user-5",
    name: "Miracle",
    organization: "Exemplary Bank",
    avatarColor: "bg-green-500",
    lastMessage: "Hey there, I'm here to...",
    lastMessageTime: "45m",
    hasUnread: false,
  },
]

export const messages: Message[] = [
  {
    id: "msg-1",
    content:
      "I bought a product from your store in November as a Christmas gift for a member of my family. However, it turns out they have something very similar already. I was hoping you'd be able to refund me, as it is un-opened.",
    timestamp: new Date(Date.now() - 3600000),
    senderId: "user-1",
    receiverId: "current-user",
    read: true,
  },
  {
    id: "msg-2",
    content: "Let me just look into this for you, Luis.",
    timestamp: new Date(Date.now() - 1800000),
    senderId: "current-user",
    receiverId: "user-1",
    read: true,
  },
]
