# Component Documentation

This document provides an overview of all components in the chat interface application, their locations, and their relationships.

## Component Hierarchy

\`\`\`
ChatInterface (Main Container)
├── UserList (Left Sidebar)
├── ChatArea (Main Content)
├── EmptyChatState (When no chat selected)
├── SmartCopilot (Right Sidebar)
│   └── OptionButton (Sub-component)
├── SidebarToggle (User sidebar toggle)
└── SmartSidebarToggle (Smart sidebar toggle)
\`\`\`

## Component Details

### Core Components

#### ChatInterface
- **Location**: `components/chat-interface.tsx`
- **Purpose**: Main container component that orchestrates the entire chat application
- **Dependencies**: All other components
- **Key Features**:
  - State management for selected user, messages, sidebars
  - Responsive design with mobile support
  - Message sending/receiving functionality
  - Sidebar toggle management

#### UserList
- **Location**: `components/user-list.tsx`
- **Purpose**: Displays list of users in the left sidebar
- **Props**:
  - `users`: Array of user objects
  - `selectedUser`: Currently selected user
  - `onSelectUser`: Function to handle user selection
  - `isDrawerOpen`: Whether the drawer is open
- **Features**:
  - User selection with visual feedback
  - Unread message indicators
  - Responsive design

#### ChatArea
- **Location**: `components/chat-area.tsx`
- **Purpose**: Displays chat messages between users
- **Props**:
  - `messages`: Array of message objects
  - `currentUser`: ID of the current user
- **Features**:
  - Message bubbles with timestamps
  - Auto-scroll to latest message
  - Avatar display for different users

#### SmartCopilot
- **Location**: `components/smart-copilot.tsx`
- **Purpose**: Smart assistance sidebar for message composition
- **Props**:
  - `onClose`: Function to close the copilot
  - `isMobile`: Mobile mode flag
  - `onSendMessage`: Function to send message to main chat
- **Features**:
  - Template selection (refund, urgent, work)
  - Message composition and preview
  - Question input for smart assistance

### Utility Components

#### EmptyChatState
- **Location**: `components/empty-chat-state.tsx`
- **Purpose**: Displays when no chat is selected
- **Props**:
  - `onNewChat`: Function to start a new chat
- **Features**:
  - Animated welcome screen
  - Call-to-action buttons
  - Helpful tips

#### SidebarToggle
- **Location**: `components/sidebar-toggle.tsx`
- **Purpose**: Toggle button for user list sidebar
- **Props**:
  - `isOpen`: Whether sidebar is open
  - `onToggle`: Function to toggle sidebar
- **Features**:
  - Responsive icon display
  - Mobile-aware behavior

#### SmartSidebarToggle
- **Location**: `components/smart-sidebar-toggle.tsx`
- **Purpose**: Toggle button for smart copilot sidebar
- **Props**:
  - `isOpen`: Whether smart sidebar is open
  - `onToggle`: Function to toggle smart sidebar
- **Features**:
  - Bot icon indicator
  - Circular button design

#### OptionButton
- **Location**: `components/smart-copilot.tsx` (sub-component)
- **Purpose**: Individual option buttons in smart copilot
- **Props**:
  - `icon`: Icon to display
  - `label`: Button label
  - `onClick`: Click handler
- **Features**:
  - Animated interactions
  - Hover effects

## Data Flow

### State Management
- **ChatInterface** manages global state
- User selection flows from UserList → ChatInterface → ChatArea
- Message data flows from ChatInterface → ChatArea
- Smart assistance flows from SmartCopilot → ChatInterface

### Event Flow
1. User clicks on user in UserList
2. ChatInterface updates selectedUser state
3. ChatArea receives new message data
4. SmartCopilot can send composed messages back to ChatInterface

## Responsive Design

### Breakpoints
- **Mobile**: &lt; 768px
- **Desktop**: ≥ 768px

### Mobile Behavior
- Sidebars become overlays
- Backdrop overlay for mobile interactions
- Automatic sidebar closing on user selection
- Touch-friendly interactions

## Animation System

### Libraries Used
- **Framer Motion**: For component animations
- **AnimatePresence**: For enter/exit animations

### Animation Patterns
- Sidebar slide animations
- Message fade-in animations
- Button hover/tap animations
- State transition animations

## Styling System

### CSS Framework
- **Tailwind CSS**: Utility-first CSS framework
- **shadcn/ui**: Component library for consistent UI elements

### Design Tokens
- Colors: Gray scale with blue accents
- Spacing: Consistent padding/margin system
- Typography: Responsive text sizing
- Shadows: Subtle depth indicators
