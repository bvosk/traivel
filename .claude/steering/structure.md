# Project Structure - Traivel

## Directory Organization

```
app/
├── components/           # Shared UI components
│   ├── ui/              # shadcn/ui components
│   └── common/          # Custom shared components
├── features/            # Feature-based organization
├── lib/                 # Utility libraries and configurations
├── routes/              # React Router pages
├── types/               # TypeScript type definitions
└── hooks/               # Shared React hooks
```

## Feature-Based Organization

Each feature folder contains:

```
features/[feature-name]/
├── components/          # Feature-specific components
├── hooks/              # Feature-specific hooks
├── types/              # Feature-specific types
├── utils/              # Feature-specific utilities
└── index.ts            # Public API exports
```

## Naming Conventions

### Files and Directories

- **Components**: PascalCase (`ItineraryCard.tsx`)
- **Hooks**: camelCase starting with `use` (`useItinerary.ts`)
- **Utilities**: camelCase (`formatDate.ts`)
- **Types**: PascalCase (`ItineraryItem.ts`)
- **Routes**: lowercase with hyphens (`trip-planner.tsx`)

### Code Conventions

- **Functions**: camelCase, prefer arrow functions for consistency
- **Constants**: SCREAMING_SNAKE_CASE
- **Interfaces/Types**: PascalCase with descriptive names
- **Enums**: PascalCase

## Import Organization

```typescript
// 1. External libraries
import React from "react";
import { useNavigate } from "react-router";

// 2. Internal utilities and types
import { formatDate } from "~/lib/utils";
import type { Itinerary } from "~/types";

// 3. Feature imports
import { useItinerary } from "~/features/itinerary";

// 4. Local/relative imports
import { ItineraryCard } from "./ItineraryCard";
```

## Component Structure

### Functional Component Pattern

```typescript
interface ComponentProps {
  // Props definition
}

export function ComponentName({ prop1, prop2 }: ComponentProps) {
  // Hooks first
  // Event handlers
  // Derived values
  // Return JSX
}
```

### Custom Hooks Pattern

```typescript
export function useFeatureName(initialState?: State) {
  // State and effects
  // Return object with methods and state
  return {
    state,
    actions: {
      method1,
      method2,
    },
  };
}
```

## Testing Organization

Map a single top level `__tests__` directory to the same `app` directory structure (with consistent nesting), except for `e2e` tests (which won't map 1:1 with the `app` structure).

```
__tests__/
├── components/          # Component tests
├── features/          # Feature tests
├── lib/              # Utility function tests
├── hooks/              # Hook tests
└── e2e/                # Playwright tests
```

### Test File Naming

- Unit tests: `ComponentName.test.tsx`
- Integration tests: `feature-integration.test.tsx`
- E2E tests: `user-journey.spec.ts`

### Four Phase Test Pattern

```typescript
describe('Feature', () => {
  it('should do something', () => {
    // Setup
    const props = { /* test props */ }

    // Exercise
    render(<Component {...props} />)

    // Verify
    expect(screen.getByRole('button')).toBeInTheDocument()

    // Teardown (automatic with testing-library)
  })
})
```

## Type Organization

### Shared Types

```typescript
// ~/types/common.ts
export interface BaseEntity {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}
```

### Feature Types

```typescript
// ~/features/itinerary/types.ts
export interface ItineraryItem extends BaseEntity {
  title: string;
  description: string;
  startTime: Date;
  location?: string;
}
```

## Code Style Guidelines

- **Prefer composition over inheritance**
- **Use pure functions when possible**
- **Minimize side effects**
- **Explicit over implicit**
- **Use TypeScript strict mode features**
- **Prefer `const` assertions for immutable data**

## Route Organization

- **File-based routing**: One file per route in `app/routes/`
- **Route grouping**: Use parentheses for logical grouping `(dashboard)/`
- **Dynamic routes**: Use brackets `trip/[id].tsx`
- **Layout routes**: Use `_layout.tsx` for shared layouts
