/**
 * Bash Buddies — Game State Reducer
 * Manages all game state transitions.
 */

import type { GameAction, GameState, PartyGuest } from '../../types';
import { FRIENDS_TO_WIN } from '../constants';
import { calculateFriendshipScore, canBefriend } from './conversationEngine';

export const initialGameState: GameState = {
  scene: 'BOOT',
  guests: [],
  currentGuest: null,
  conversationStep: 0,
  conversationPoints: 0,
  askedTopics: [],
  friends: [],
  score: 0,
  talkedTo: [],
};

export function gameReducer(state: GameState, action: GameAction): GameState {
  switch (action.type) {
    case 'SET_SCENE':
      return { ...state, scene: action.scene };

    case 'START_GAME':
      return {
        ...initialGameState,
        scene: 'PLAYING',
        guests: action.guests,
      };

    case 'SELECT_GUEST':
      return {
        ...state,
        scene: 'CONVERSATION',
        currentGuest: action.guest,
        conversationStep: 0,
        conversationPoints: 0,
        askedTopics: [],
      };

    case 'ASK_TOPIC':
      return {
        ...state,
        conversationStep: state.conversationStep + 1,
        conversationPoints: state.conversationPoints + action.points,
        askedTopics: [...state.askedTopics, action.topicId],
      };

    case 'DECIDE_FRIENDSHIP': {
      if (!state.currentGuest) return state;

      const guest = state.currentGuest;
      const eligible = canBefriend(guest, state.conversationPoints);
      const becameFriends = action.befriend && eligible;

      const friendResult = {
        guest,
        pointsEarned: state.conversationPoints,
        becameFriends,
      };

      const newFriends = [...state.friends, friendResult];
      const friendCount = newFriends.filter(f => f.becameFriends).length;
      const scoreGain = becameFriends
        ? calculateFriendshipScore(guest, state.conversationPoints)
        : 0;

      const newScore = state.score + scoreGain;
      const won = friendCount >= FRIENDS_TO_WIN;

      return {
        ...state,
        scene: won ? 'RESULTS' : 'PLAYING',
        friends: newFriends,
        score: newScore,
        talkedTo: [...state.talkedTo, guest.id],
        currentGuest: null,
        conversationStep: 0,
        conversationPoints: 0,
        askedTopics: [],
      };
    }

    case 'RETURN_TO_PARTY':
      return {
        ...state,
        scene: 'PLAYING',
        currentGuest: null,
        conversationStep: 0,
        conversationPoints: 0,
        askedTopics: [],
      };

    case 'RESET_GAME':
      return { ...initialGameState, scene: 'TITLE' };

    default:
      return state;
  }
}

/**
 * Select a random subset of guests for the party.
 */
export function selectPartyGuests(
  allGuests: PartyGuest[],
  count: number,
): PartyGuest[] {
  const shuffled = [...allGuests].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, allGuests.length));
}

/**
 * Check if the game is in a losing state (talked to everyone, not enough friends).
 */
export function isGameOver(state: GameState): boolean {
  const friendCount = state.friends.filter(f => f.becameFriends).length;
  if (friendCount >= FRIENDS_TO_WIN) return false; // Won!

  const remainingGuests = state.guests.filter(
    g => !state.talkedTo.includes(g.id),
  );
  const friendsStillNeeded = FRIENDS_TO_WIN - friendCount;

  return remainingGuests.length < friendsStillNeeded;
}
