# 🎉 Bash Buddies

**A party conversation game where you mingle, chat, and make friends!**

Bash Buddies is a casual, turn-based social game built with the [LinkittyDo](https://github.com/philiv99) brand style. You arrive at a party full of quirky caricature characters — each with their own personality, interests, and conversation style. Click on guests to chat, choose your responses wisely, and decide who to befriend. Make **3 new friends** to win!

## 🎮 How to Play

1. **Mingle** — Click on any party guest to start a conversation
2. **Chat** — Choose topics and pick responses that match their vibe
3. **Connect** — Better answers earn more friendship (rapport) points
4. **Decide** — After chatting, choose to befriend them or move on
5. **Win** — Make 3 new friends to win the game!

### Controls
- **Mouse/Touch** — Click/tap on guests and dialogue options
- **Keyboard** — Tab to navigate, Enter/Space to select

## 🚀 Getting Started

### Prerequisites
- **Node.js 18+**
- **CopilotSdk.Api** running at `http://localhost:5139` (for authentication)
  - Players must register/log in before playing
  - See [CopilotSdk.Api](https://github.com/philiv99) for setup instructions

### Setup

```bash
# Clone the repo
git clone https://github.com/philiv99/bash-buddies.git
cd bash-buddies

# Configure environment
cp .env.example .env
# Edit .env if your auth API is not at http://localhost:5139

# Install dependencies
npm install

# Start development server
npm run dev
```

### CORS Configuration
Add `http://localhost:5173` (Vite dev server) to the CopilotSdk.Api CORS allowed origins.

## 🧪 Testing & Building

```bash
# Run tests
npm test

# Run tests in watch mode
npm run test:watch

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🔐 Authentication

Bash Buddies requires authentication via CopilotSdk.Api:

- **Login** — Username + password at `/login`
- **Register** — Create an account at `/register`
- All game routes are protected — unauthenticated users are redirected to login
- User data is stored in `localStorage` under `bash-buddies:user` and `bash-buddies:userId`
- Auth API URL is configurable via `VITE_AUTH_API_URL` environment variable

### User Roles
| Role | Access |
|------|--------|
| Player | Full gameplay access |
| Creator | Gameplay + future content creation features |
| Admin | Full access including future admin features |

## 🎨 Theme

Bash Buddies uses the **LinkittyDo** visual style:

- **Palette:** Cream (`#FDEC92`), Mint (`#A9EAD2`), Ink (`#161813`), Pop (`#FB2B57`), Paper (`#EEEDE5`)
- **Fonts:** Luckiest Guy (headlines) + Nunito (body/UI)
- **Style:** Chunky borders, retro drop-shadows, bold colors, playful layout

See [`docs/theme.md`](docs/theme.md) for full theme documentation.

## 📁 Project Structure

```
bash-buddies/
├── src/
│   ├── app/          # Routing, layout, app shell
│   ├── auth/         # Authentication (API client, context, screens)
│   ├── game/
│   │   ├── logic/    # Pure game logic (characters, conversation engine, state)
│   │   └── scenes/   # Game scenes (title, party, conversation, results)
│   ├── theme/        # LinkittyDo theme tokens + global CSS
│   ├── ui/           # Reusable UI components (avatars)
│   └── types/        # Shared TypeScript interfaces
├── tests/            # Test files
├── docs/             # Documentation
└── public/           # Static assets
```

## 🎭 Game Identity

- **Game Name:** Bash Buddies
- **Repo Slug:** bash-buddies
- **Storage Prefix:** `bash-buddies:`

---

Built with ❤️ using React + Vite + TypeScript
