# Getting Started

This guide will help you set up and run the chat interface application locally.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (version 18.18 or later)
- **npm** or **yarn** package manager
- **Git** for version control

## Installation

### 1. Clone the Repository

\`\`\`bash
git clone <repository-url>
cd chat-interface
\`\`\`

### 2. Install Dependencies

Using npm:
\`\`\`bash
npm install
\`\`\`

Using yarn:
\`\`\`bash
yarn install
\`\`\`

### 3. Environment Setup

Create a `.env.local` file in the root directory (if needed):
\`\`\`bash
cp .env.example .env.local
\`\`\`

## Development

### Start Development Server

Using npm:
\`\`\`bash
npm run dev
\`\`\`

Using yarn:
\`\`\`bash
yarn dev
\`\`\`

The application will be available at `http://localhost:3000`

### Development Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## Project Structure

\`\`\`
chat-interface/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── chat-interface.tsx # Main chat component
│   ├── ai-copilot.tsx    # AI assistance component
│   └── ...               # Other components
├── data/                 # Static data files
│   ├── chat-data.ts      # Chat and user data
│   └── ai-templates.ts   # AI template data
├── types/                # TypeScript type definitions
│   ├── chat.ts           # Chat-related types
│   └── ai-assistance.ts  # AI assistance types
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
├── docs/                 # Documentation
└── public/               # Static assets
\`\`\`

## Key Features

### Chat Interface
- Real-time messaging interface
- User list with status indicators
- Responsive design for mobile and desktop
- Message composition with rich formatting

### AI Copilot
- Template-based message composition
- Multiple categories (refund, urgent, work)
- Message preview and editing
- Integration with main chat interface

### Responsive Design
- Mobile-first approach
- Adaptive sidebars
- Touch-friendly interactions
- Optimized for various screen sizes

## Configuration

### Tailwind CSS
The project uses Tailwind CSS for styling. Configuration is in `tailwind.config.ts`.

### TypeScript
TypeScript configuration is in `tsconfig.json` with strict type checking enabled.

### ESLint
Code linting is configured in `.eslintrc.json` with Next.js recommended rules.

## Deployment

### Build for Production

\`\`\`bash
npm run build
\`\`\`

### Deploy to Vercel

The easiest way to deploy is using Vercel:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Deploy to Other Platforms

The application can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## Troubleshooting

### Common Issues

1. **Port already in use**
   \`\`\`bash
   # Kill process on port 3000
   npx kill-port 3000
   \`\`\`

2. **Module not found errors**
   \`\`\`bash
   # Clear node_modules and reinstall
   rm -rf node_modules package-lock.json
   npm install
   \`\`\`

3. **TypeScript errors**
   \`\`\`bash
   # Run type checking
   npm run type-check
   \`\`\`

### Getting Help

- Check the [component documentation](./components.md)
- Review the [architecture guide](./architecture.md)
- Open an issue on GitHub
- Check Next.js documentation for framework-specific issues

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

### Code Style

- Use TypeScript for all new code
- Follow the existing component structure
- Add JSDoc comments for new components
- Use Tailwind CSS for styling
- Follow the established naming conventions
