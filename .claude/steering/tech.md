# Technology Stack - Traivel

## Core Framework

- **React Router v7**: Full-stack React framework with SSR
- **React 19.1**: Latest React with concurrent features
- **TypeScript**: Strict mode enabled for type safety
- **Node.js**: Server-side runtime

## Build Tools & Development

- **Vite**: Fast build tool and dev server
- **TailwindCSS v4**: Utility-first CSS framework
- **Prettier**: Code formatting with git hooks
- **ESModules**: Modern module system

## UI & Components

- **shadcn/ui**: High-quality, accessible component library
- **TailwindCSS**: Styling and responsive design
- **Mobile-first**: Responsive design approach

## AI & LLM Integration

- **Vercel AI SDK**: LLM integration and chat functionality
- **Streaming**: Real-time AI responses
- **Chat Interface**: Conversational trip planning

## Data Persistence

- **LocalStorage**: Browser-based persistence (MVP)
- **Adapter Pattern**: Abstracted storage layer for future database migration
- **State Management**: React state with potential for context/reducers

## Testing Strategy

- **Vitest**: Unit testing framework
- **React Testing Library**: Component testing
- **Playwright**: End-to-end testing
- **Testing Pyramid**: More unit tests, fewer integration/e2e tests
- **Four Phase Test**: Setup, Exercise, Verify, Teardown pattern

## Deployment & Infrastructure

- **Docker**: Containerized deployment
- **SSR**: Server-side rendering enabled
- **Static Assets**: Optimized client-side bundles
- **Multi-platform**: Support for various cloud providers

## Code Organization

- **Feature-based folders**: Organize by domain/feature
- **Functional programming**: Prefer pure functions and immutability
- **TypeScript paths**: Use `~/*` aliases for clean imports
- **Separation of concerns**: Clear client/server boundaries

## Performance Considerations

- **Code splitting**: Automatic route-based splitting
- **SSR**: Improved initial load times
- **Asset optimization**: Vite handles bundling and optimization
- **Lazy loading**: Load components and data on demand

## Development Workflow

- **HMR**: Hot module replacement for fast development
- **Type checking**: `npm run typecheck`
- **Code formatting**: Automatic on file save
- **Git hooks**: Enforce formatting standards

## Future Technical Considerations

- **Database migration**: Adapter pattern supports easy transition
- **Real-time features**: WebSocket/SSE capabilities
- **API integrations**: RESTful and GraphQL support
- **Caching strategies**: Browser and server-side caching
