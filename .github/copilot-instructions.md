# Bash Buddies — Copilot Instructions

## Game Identity
- **Game Name:** Bash Buddies
- **Repo Slug:** bash-buddies
- **Storage Prefix:** bash-buddies:
- **Domain Type:** game

## Architecture
- React + Vite + TypeScript (DOM-based rendering)
- react-router-dom v6 for routing
- React Context + useReducer for game state
- Authentication via CopilotSdk.Api (only external API)
- LinkittyDo theme: cream/mint/ink/pop palette, Luckiest Guy + Nunito fonts

## Key Conventions
- All localStorage keys prefixed with `bash-buddies:`
- Pure game logic in `src/game/logic/` (deterministic, testable)
- Auth module in `src/auth/` (API client, context, screens, protected route)
- Scene state machine: BOOT → TITLE → HOW_TO_PLAY → PLAYING → CONVERSATION → RESULTS
- Tests with Vitest + @testing-library/react
- Atomic commits with conventional prefixes (feat:, fix:, test:, docs:, refactor:, chore:)

## File Structure
- `src/app/` — routing, app shell, layout
- `src/auth/` — authentication (authApi, AuthContext, ProtectedRoute, screens)
- `src/game/logic/` — pure game logic (conversation engine, scoring, characters)
- `src/game/scenes/` — game scene components
- `src/theme/` — LinkittyDo theme tokens + global CSS
- `src/ui/` — reusable UI components and overlays
- `src/types/` — shared TypeScript interfaces
- `tests/` — test files
