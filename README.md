# Chat Interface Application

A modern, responsive chat interface built with Next.js, featuring intelligent message assistance and real-time messaging capabilities.

![Chat Interface Preview](./docs/images/chat-preview.png)

## ✨ Features

- **💬 Real-time Chat Interface**: Smooth messaging experience with message bubbles and timestamps
- **🤖 Smart Copilot**: Intelligent message composition assistance with pre-built templates
- **📱 Responsive Design**: Optimized for both desktop and mobile devices
- **🎨 Modern UI**: Clean, professional interface built with Tailwind CSS and shadcn/ui
- **⚡ Performance Optimized**: Built with Next.js 14+ and React 18+ for optimal performance
- **🔧 TypeScript**: Fully typed for better development experience and code reliability

## 🚀 Quick Start

### Prerequisites

- Node.js 18.18 or later
- npm or yarn package manager

### Installation

1. **Clone the repository**
   \`\`\`bash
   git clone <repository-url>
   cd chat-interface
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   # or
   yarn install
   \`\`\`

3. **Start the development server**
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   \`\`\`

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

\`\`\`
chat-interface/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout component
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── chat-interface.tsx # Main chat container
│   ├── smart-copilot.tsx  # Smart assistance sidebar
│   ├── chat-area.tsx     # Message display area
│   ├── user-list.tsx     # User list sidebar
│   └── ...               # Other components
├── data/                 # Static data files
│   ├── chat-data.ts      # Sample chat and user data
│   └── message-templates.ts # Message templates
├── types/                # TypeScript type definitions
│   ├── chat.ts           # Chat-related types
│   └── assistance.ts     # Smart assistance types
├── hooks/                # Custom React hooks
│   └── use-mobile.tsx    # Mobile detection hook
├── lib/                  # Utility functions
│   └── utils.ts          # Common utilities
├── docs/                 # Documentation
│   ├── components.md     # Component documentation
│   ├── getting-started.md # Setup guide
│   └── architecture.md   # Architecture overview
└── public/               # Static assets
    └── sounds/           # Audio files
\`\`\`

## 🎯 Key Components

### ChatInterface
The main container component that orchestrates the entire chat application, managing state for user selection, messages, and sidebar visibility.

### SmartCopilot
Intelligent assistance sidebar that provides:
- **Template Categories**: Refund requests, urgent emails, work communications
- **Message Composition**: Preview and edit generated content
- **Smart Integration**: Seamlessly add content to the main chat

### UserList
Interactive user list with:
- **Status Indicators**: Unread message badges
- **User Information**: Names, organizations, last message previews
- **Selection Feedback**: Visual indication of selected users

### ChatArea
Message display area featuring:
- **Message Bubbles**: Distinct styling for sent/received messages
- **Timestamps**: Formatted time display
- **Auto-scroll**: Automatic scrolling to latest messages

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 🎨 Customization

### Styling
The application uses Tailwind CSS for styling. Customize the design by:
- Modifying `tailwind.config.ts` for design tokens
- Updating component classes for visual changes
- Adding custom CSS in `app/globals.css`

### Data
Customize the chat data by editing:
- `data/chat-data.ts` - User and message data
- `data/message-templates.ts` - Smart assistance templates

### Components
All components are modular and can be customized:
- Modify existing components in the `components/` directory
- Add new components following the established patterns
- Update types in the `types/` directory

## 📱 Responsive Design

The application is built with a mobile-first approach:
- **Mobile (< 768px)**: Overlay sidebars, touch-friendly interactions
- **Desktop (≥ 768px)**: Side-by-side layout, hover interactions
- **Adaptive UI**: Components adjust based on screen size

## 🔧 Technology Stack

- **Framework**: Next.js 14+ with App Router
- **UI Library**: React 18+ with TypeScript
- **Styling**: Tailwind CSS + shadcn/ui components
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Development**: ESLint, TypeScript

## 📚 Documentation

- [Component Documentation](./docs/components.md) - Detailed component guide
- [Getting Started](./docs/getting-started.md) - Setup and development guide
- [Architecture](./docs/architecture.md) - Technical architecture overview

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
The application can be deployed to any platform supporting Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

### Build for Production
\`\`\`bash
npm run build
npm run start
\`\`\`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Use TypeScript for all new code
- Follow the existing component structure
- Add JSDoc comments for new components
- Ensure responsive design compatibility
- Test on both mobile and desktop

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - Component library
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Lucide](https://lucide.dev/) - Icon library

## 📞 Support

If you have any questions or need help:
- Check the [documentation](./docs/)
- Open an issue on GitHub
- Review the component examples in the codebase

---

**Built with ❤️ by our development team using Next.js and modern web technologies**
\`\`\`

```typescriptreact file="components/ai-copilot.tsx" isDeleted="true" isMoved="true" isMovedTo="components/smart-copilot.tsx"
...moved to components/smart-copilot.tsx...
