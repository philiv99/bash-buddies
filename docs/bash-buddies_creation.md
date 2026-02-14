# Bash Buddies — Creation Plan

## Game Identity
- **Game Name:** Bash Buddies
- **Repo Slug:** bash-buddies
- **Storage Prefix:** `bash-buddies:`
- **Display Title:** Bash Buddies
- **Short ID:** bash-buddies
- **Domain Type:** game

## Stage 1: MVP

### Phase 1 — Scaffolding & Auth
- [x] Initialize Vite + React + TypeScript project
- [x] Set up project structure (directories, config, dependencies)
- [x] Implement LinkittyDo theme (palette, fonts, CSS variables)
- [x] Implement auth module (authApi, AuthContext, ProtectedRoute, LoginScreen, RegisterScreen)
- [x] Set up routing with react-router-dom (public auth routes + protected game routes)

### Phase 2 — Core Game Logic
- [x] Define character data model (PartyGuest type with personality, interests, dialogue)
- [x] Create 8-10 unique party guest characters with conversation content
- [x] Implement conversation engine (question selection, response, conversation flow)
- [x] Implement friendship decision logic and scoring
- [x] Implement win condition (3 friends = victory)

### Phase 3 — Game Scenes & UI
- [x] Build scene state machine (BOOT → TITLE → HOW_TO_PLAY → PLAYING → CONVERSATION → RESULTS)
- [x] Build Title Screen with LinkittyDo styling
- [x] Build Party Scene — room view with clickable caricature avatars
- [x] Build Conversation Scene — dialogue UI with Q&A flow
- [x] Build Friend Decision overlay (befriend / pass)
- [x] Build Results/Victory screen with score
- [x] Build "How to Play" overlay
- [x] Add header with player name + logout
- [x] Write tests (auth + game logic)
- [x] Documentation (README, theme.md) & final commit

## Stage 2: Feature Expansion (Future)
- [ ] Personality compatibility scoring
- [ ] Conversation branching with rapport
- [ ] Visual feedback & animations
- [ ] Role-based features (Creator custom guests)
- [ ] Scoring tiers & high scores
- [ ] Randomized party guest selection
- [ ] Difficulty levels

## Stage 3: Extensibility & Polish (Future)
- [ ] Full keyboard navigation
- [ ] Screen reader support
- [ ] Reduced motion support
- [ ] Sound effects
- [ ] Admin panel
- [ ] Multiple party themes/venues

## Notes & Decisions
- **Rendering:** DOM/CSS — click-based conversation game, no real-time animation needed
- **State Management:** React Context + useReducer for game state
- **Auth:** CopilotSdk.Api (only external API)
- **Persistence:** localStorage with `bash-buddies:` prefix
- **Fonts:** Luckiest Guy (headlines) + Nunito (body/UI)
