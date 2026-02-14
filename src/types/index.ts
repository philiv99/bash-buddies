/**
 * Bash Buddies — Shared TypeScript Types
 */

/* ── Auth / User ────────────────────────────── */

export type UserRole = 'Player' | 'Creator' | 'Admin';
export type AvatarType = 'Default' | 'Preset' | 'Custom';

export interface User {
  id: string;
  username: string;
  email: string;
  displayName: string;
  role: UserRole;
  avatarType: AvatarType;
  avatarData: string | null;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  lastLoginAt: string | null;
}

export interface AuthResponse {
  success: boolean;
  message: string;
  user: User;
}

export interface LoginPayload {
  username: string;
  password: string;
}

export interface RegisterPayload {
  username: string;
  email: string;
  displayName: string;
  password: string;
  confirmPassword: string;
}

/* ── Game Types ──────────────────────────────── */

export type GameScene =
  | 'BOOT'
  | 'TITLE'
  | 'HOW_TO_PLAY'
  | 'PLAYING'
  | 'CONVERSATION'
  | 'RESULTS';

export type CaticatureStyle =
  | 'hipster'
  | 'nerd'
  | 'artist'
  | 'jock'
  | 'goth'
  | 'preppy'
  | 'hippie'
  | 'rocker'
  | 'chef'
  | 'scientist';

export interface DialogueOption {
  id: string;
  question: string;
  response: string;
  friendshipPoints: number;
}

export interface ConversationTopic {
  id: string;
  topicName: string;
  intro: string;
  options: DialogueOption[];
}

export interface PartyGuest {
  id: string;
  name: string;
  caricatureStyle: CaticatureStyle;
  tagline: string;
  bio: string;
  personality: string;
  interests: string[];
  greeting: string;
  topics: ConversationTopic[];
  friendshipThreshold: number; // points needed to befriend
  colors: {
    primary: string;
    secondary: string;
    accent: string;
  };
}

export interface FriendResult {
  guest: PartyGuest;
  pointsEarned: number;
  becameFriends: boolean;
}

export interface GameState {
  scene: GameScene;
  guests: PartyGuest[];
  currentGuest: PartyGuest | null;
  conversationStep: number;
  conversationPoints: number;
  askedTopics: string[];
  friends: FriendResult[];
  score: number;
  talkedTo: string[]; // guest IDs already fully conversed with
}

export type GameAction =
  | { type: 'SET_SCENE'; scene: GameScene }
  | { type: 'START_GAME'; guests: PartyGuest[] }
  | { type: 'SELECT_GUEST'; guest: PartyGuest }
  | { type: 'ASK_TOPIC'; topicId: string; points: number }
  | { type: 'DECIDE_FRIENDSHIP'; befriend: boolean }
  | { type: 'RETURN_TO_PARTY' }
  | { type: 'RESET_GAME' };
