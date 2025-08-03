# Technology Stack - Traivel

## Core Framework

- **React Router v7**: React framework with CSR
- **React 19.1**: Latest React with concurrent features
- **TypeScript**: Strict mode enabled for type safety

## Build Tools & Development

- **Vite**: Fast build tool and dev server
- **TailwindCSS v4**: Utility-first CSS framework
- **Prettier**: Code formatting with git hooks
- **ESModules**: Modern module system

## UI & Components

- **shadcn/ui**: High-quality, accessible component library
- **TailwindCSS**: Styling and design

## AI & LLM Integration

- **Vercel AI SDK**: LLM integration and chat functionality
- **Streaming**: Real-time AI responses
- **Chat Interface**: Conversational trip planning

## Data Persistence

- **LocalStorage**: Browser-based persistence (MVP)
- **Peristence agnostic components**: Abstracted storage layer for future database migration
- **State Management**: Use built-in React primitives for state management

## Testing Strategy

- **Vitest**: Unit testing framework
- **React Testing Library**: Component testing
- **Playwright**: End-to-end testing
- **Testing Pyramid**: More unit tests, fewer integration/e2e tests
- **Four Phase Test**: Setup, Exercise, Verify, Teardown pattern

## Deployment & Infrastructure

- Deployment and infrastructure is out of scope. Focus on running locally.

## Code Organization

- **Feature-based folders**: Organize by domain/feature
- **Functional programming**: Prefer pure functions and immutability
- **TypeScript paths**: Use `~/*` aliases for clean imports

## Performance Considerations

- **Asset optimization**: Vite handles bundling and optimization
- **Lazy loading**: Load components and data on demand

## Development Workflow

- **HMR**: Hot module replacement for fast development
- **Type checking**: `npm run typecheck`
- **Code formatting**: Automatic on file save
