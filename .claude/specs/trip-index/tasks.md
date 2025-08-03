# Implementation Plan - Trip Index

## Task Overview

Implementation of a trip index page using React Router v7, shadcn/ui components, and placeholder data. Tasks are designed to be atomic and agent-friendly, following feature-based organization patterns with proper TypeScript typing throughout.

## Steering Document Compliance

- **Structure.md**: Tasks follow feature-based organization with `app/features/trips/` directory
- **Tech.md**: Leverages React Router v7, TailwindCSS, and shadcn/ui as documented
- **Import patterns**: External libraries first, internal utils, feature imports, local imports

## Atomic Task Requirements

**Each task meets these criteria for optimal agent execution:**

- **File Scope**: Touches 1-3 related files maximum
- **Time Boxing**: Completable in 15-30 minutes
- **Single Purpose**: One testable outcome per task
- **Specific Files**: Must specify exact files to create/modify
- **Agent-Friendly**: Clear input/output with minimal context switching

## Tasks

### Setup and Dependencies

- [x] 1. Install and configure shadcn/ui components
  - Run `npx shadcn@latest init` to set up shadcn in the project
  - Install Card, Badge, Button components: `npx shadcn@latest add card badge button skeleton`
  - Verify components are available in `app/components/ui/`
  - Purpose: Establish shadcn component library for consistent UI
  - _Requirements: 3.1, 3.2, 3.3_

### Type Definitions

- [x] 2. Create trip data types in app/features/trips/types.ts
  - File: app/features/trips/types.ts
  - Define `TripData` interface with id, title, destinations, dates, flagEmojis
  - Export types for component consumption
  - Purpose: Establish type safety for trip data structures
  - _Requirements: 2.1, 2.2_

### Utility Functions

- [x] 3. Create date formatting utility in app/features/trips/utils/formatDate.ts
  - File: app/features/trips/utils/formatDate.ts
  - Implement `formatDateRange(start: Date, end: Date): string` function
  - Handle edge cases for invalid dates and same-day trips
  - Purpose: Consistent date display across trip components
  - _Requirements: 2.2_

- [x] 4. Create placeholder data generator in app/features/trips/utils/placeholderData.ts
  - File: app/features/trips/utils/placeholderData.ts
  - Define `generatePlaceholderTrips(): TripData[]` function with 5-6 sample trips
  - Include varied destinations, dates, and flag emojis
  - Purpose: Provide realistic test data for development
  - _Leverage: app/features/trips/types.ts_
  - _Requirements: 1.2_

### Components

- [x] 5. Create EmptyState component in app/features/trips/components/EmptyState.tsx
  - File: app/features/trips/components/EmptyState.tsx
  - Implement component with shadcn typography for "No trips found" message
  - Include friendly guidance text about creating first trip
  - Purpose: Handle empty data state gracefully
  - _Leverage: app/components/ui/ shadcn components_
  - _Requirements: 1.3_

- [x] 6. Create TripCard component in app/features/trips/components/TripCard.tsx
  - File: app/features/trips/components/TripCard.tsx
  - Use shadcn Card, CardHeader, CardContent structure
  - Display trip title, destination badges with flag emojis, formatted date range
  - Include hover effects and responsive design
  - Purpose: Display individual trip information in card format
  - _Leverage: app/components/ui/card.tsx, app/components/ui/badge.tsx, app/features/trips/types.ts, app/features/trips/utils/formatDate.ts_
  - _Requirements: 2.1, 2.2_

- [x] 7. Create TripList component in app/features/trips/components/TripList.tsx
  - File: app/features/trips/components/TripList.tsx
  - Accept `trips: TripData[]` props
  - Render CSS Grid layout with responsive columns (1 col mobile, 2 tablet, 3+ desktop)
  - Conditionally render TripCard components or EmptyState
  - Purpose: Container component for managing trip display logic
  - _Leverage: app/features/trips/components/TripCard.tsx, app/features/trips/components/EmptyState.tsx, app/features/trips/types.ts_
  - _Requirements: 1.1, 1.4_

### Feature Export

- [x] 8. Create feature index file in app/features/trips/index.ts
  - File: app/features/trips/index.ts
  - Export all components, types, and utilities from feature
  - Follow clean public API pattern
  - Purpose: Provide clean import interface for trip feature
  - _Leverage: all previous trip feature files_
  - _Requirements: All_

### Routing

- [x] 9. Add trips route in app/routes.ts
  - File: app/routes.ts (modify existing)
  - Add route configuration for `/trips` path pointing to `routes/trips.tsx`
  - Follow existing route pattern from home route
  - Purpose: Enable navigation to trip index page
  - _Leverage: existing app/routes.ts structure_
  - _Requirements: 3.1_

- [x] 10. Create trips route component in app/routes/trips.tsx
  - File: app/routes/trips.tsx
  - Implement route component with meta function for SEO
  - Import TripList and generatePlaceholderTrips
  - Render TripList with placeholder data
  - Include page title and container layout
  - Purpose: Route-level component that provides trip data and page structure
  - _Leverage: app/routes/home.tsx pattern, app/features/trips/index.ts_
  - _Requirements: 1.1, 1.2_

### Testing

- [x] 11. Create TripCard component test in **tests**/features/trips/components/TripCard.test.tsx
  - File: **tests**/features/trips/components/TripCard.test.tsx
  - Test component renders with mock trip data
  - Verify title, destinations, and date range display correctly
  - Test with edge cases (no destinations, invalid dates)
  - Purpose: Ensure TripCard component reliability
  - _Leverage: app/features/trips/components/TripCard.tsx_
  - _Requirements: 2.1, 2.2_

- [x] 12. Create TripList component test in **tests**/features/trips/components/TripList.test.tsx
  - File: **tests**/features/trips/components/TripList.test.tsx
  - Test with empty array renders EmptyState
  - Test with trip data renders TripCard components
  - Verify responsive grid layout classes
  - Purpose: Ensure TripList handles all data states correctly
  - _Leverage: app/features/trips/components/TripList.tsx_
  - _Requirements: 1.1, 1.3, 1.4_

- [x] 13. Create utility function tests in **tests**/features/trips/utils/formatDate.test.ts
  - File: **tests**/features/trips/utils/formatDate.test.ts
  - Test formatDateRange with various date combinations
  - Test edge cases (invalid dates, same day, past dates)
  - Verify output format consistency
  - Purpose: Ensure date formatting utility reliability
  - _Leverage: app/features/trips/utils/formatDate.ts_
  - _Requirements: 2.2_
