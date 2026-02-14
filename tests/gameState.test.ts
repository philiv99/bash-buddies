/**
 * Bash Buddies — Game State Reducer Tests
 */

import { describe, it, expect } from 'vitest';
import { gameReducer, initialGameState, selectPartyGuests, isGameOver } from '../src/game/logic/gameState';
import type { GameState, PartyGuest } from '../src/types';

const mockGuests: PartyGuest[] = [
  {
    id: 'g1', name: 'Guest 1', caricatureStyle: 'nerd',
    tagline: 'Tag 1', bio: 'Bio', personality: 'Nice',
    interests: ['a'], greeting: 'Hi',
    colors: { primary: '#000', secondary: '#fff', accent: '#f00' },
    friendshipThreshold: 3,
    topics: [{
      id: 't1', topicName: 'T1', intro: 'Intro',
      options: [{ id: 'o1', question: 'Q', response: 'R', friendshipPoints: 2 }],
    }],
  },
  {
    id: 'g2', name: 'Guest 2', caricatureStyle: 'artist',
    tagline: 'Tag 2', bio: 'Bio', personality: 'Cool',
    interests: ['b'], greeting: 'Hey',
    colors: { primary: '#111', secondary: '#eee', accent: '#0f0' },
    friendshipThreshold: 4,
    topics: [{
      id: 't2', topicName: 'T2', intro: 'Intro 2',
      options: [{ id: 'o2', question: 'Q2', response: 'R2', friendshipPoints: 3 }],
    }],
  },
  {
    id: 'g3', name: 'Guest 3', caricatureStyle: 'jock',
    tagline: 'Tag 3', bio: 'Bio', personality: 'Fun',
    interests: ['c'], greeting: 'Yo',
    colors: { primary: '#222', secondary: '#ddd', accent: '#00f' },
    friendshipThreshold: 2,
    topics: [{
      id: 't3', topicName: 'T3', intro: 'Intro 3',
      options: [{ id: 'o3', question: 'Q3', response: 'R3', friendshipPoints: 1 }],
    }],
  },
];

describe('gameReducer', () => {
  it('SET_SCENE changes the scene', () => {
    const result = gameReducer(initialGameState, { type: 'SET_SCENE', scene: 'TITLE' });
    expect(result.scene).toBe('TITLE');
  });

  it('START_GAME resets state and sets PLAYING', () => {
    const result = gameReducer(initialGameState, { type: 'START_GAME', guests: mockGuests });
    expect(result.scene).toBe('PLAYING');
    expect(result.guests).toHaveLength(3);
    expect(result.friends).toHaveLength(0);
    expect(result.score).toBe(0);
  });

  it('SELECT_GUEST sets current guest and CONVERSATION', () => {
    const state: GameState = {
      ...initialGameState,
      scene: 'PLAYING',
      guests: mockGuests,
    };
    const result = gameReducer(state, { type: 'SELECT_GUEST', guest: mockGuests[0] });
    expect(result.scene).toBe('CONVERSATION');
    expect(result.currentGuest).toBe(mockGuests[0]);
    expect(result.conversationPoints).toBe(0);
    expect(result.askedTopics).toHaveLength(0);
  });

  it('ASK_TOPIC increments step and accumulates points', () => {
    const state: GameState = {
      ...initialGameState,
      scene: 'CONVERSATION',
      currentGuest: mockGuests[0],
      conversationPoints: 2,
      conversationStep: 1,
      askedTopics: [],
    };
    const result = gameReducer(state, { type: 'ASK_TOPIC', topicId: 't1', points: 3 });
    expect(result.conversationStep).toBe(2);
    expect(result.conversationPoints).toBe(5);
    expect(result.askedTopics).toContain('t1');
  });

  it('DECIDE_FRIENDSHIP befriend adds friend and score', () => {
    const state: GameState = {
      ...initialGameState,
      scene: 'CONVERSATION',
      guests: mockGuests,
      currentGuest: mockGuests[2], // threshold=2
      conversationPoints: 3,
      askedTopics: ['t3'],
      friends: [],
      score: 0,
      talkedTo: [],
    };
    const result = gameReducer(state, { type: 'DECIDE_FRIENDSHIP', befriend: true });
    expect(result.friends).toHaveLength(1);
    expect(result.friends[0].becameFriends).toBe(true);
    expect(result.score).toBeGreaterThan(0);
    expect(result.talkedTo).toContain('g3');
    expect(result.scene).toBe('PLAYING'); // not 3 friends yet
  });

  it('DECIDE_FRIENDSHIP pass does not add score', () => {
    const state: GameState = {
      ...initialGameState,
      scene: 'CONVERSATION',
      guests: mockGuests,
      currentGuest: mockGuests[0],
      conversationPoints: 5,
      askedTopics: ['t1'],
      friends: [],
      score: 0,
      talkedTo: [],
    };
    const result = gameReducer(state, { type: 'DECIDE_FRIENDSHIP', befriend: false });
    expect(result.friends[0].becameFriends).toBe(false);
    expect(result.score).toBe(0);
  });

  it('DECIDE_FRIENDSHIP goes to RESULTS when 3 friends reached', () => {
    const existingFriends = [
      { guest: mockGuests[0], pointsEarned: 5, becameFriends: true },
      { guest: mockGuests[1], pointsEarned: 6, becameFriends: true },
    ];
    const state: GameState = {
      ...initialGameState,
      scene: 'CONVERSATION',
      guests: mockGuests,
      currentGuest: mockGuests[2],
      conversationPoints: 3,
      friends: existingFriends,
      score: 200,
      talkedTo: ['g1', 'g2'],
    };
    const result = gameReducer(state, { type: 'DECIDE_FRIENDSHIP', befriend: true });
    expect(result.scene).toBe('RESULTS');
    expect(result.friends.filter(f => f.becameFriends)).toHaveLength(3);
  });

  it('RESET_GAME returns to title', () => {
    const state: GameState = {
      ...initialGameState,
      scene: 'RESULTS',
      score: 500,
    };
    const result = gameReducer(state, { type: 'RESET_GAME' });
    expect(result.scene).toBe('TITLE');
    expect(result.score).toBe(0);
  });
});

describe('selectPartyGuests', () => {
  it('returns correct count', () => {
    const selected = selectPartyGuests(mockGuests, 2);
    expect(selected).toHaveLength(2);
  });

  it('returns all when count exceeds available', () => {
    const selected = selectPartyGuests(mockGuests, 10);
    expect(selected).toHaveLength(3);
  });

  it('returns empty for count 0', () => {
    const selected = selectPartyGuests(mockGuests, 0);
    expect(selected).toHaveLength(0);
  });
});

describe('isGameOver', () => {
  it('returns false when enough guests remain', () => {
    const state: GameState = {
      ...initialGameState,
      guests: mockGuests,
      friends: [],
      talkedTo: [],
    };
    expect(isGameOver(state)).toBe(false);
  });

  it('returns true when not enough guests to reach 3 friends', () => {
    const state: GameState = {
      ...initialGameState,
      guests: mockGuests, // 3 guests total
      friends: [
        { guest: mockGuests[0], pointsEarned: 1, becameFriends: false },
        { guest: mockGuests[1], pointsEarned: 1, becameFriends: false },
      ],
      talkedTo: ['g1', 'g2'],
    };
    // Only 1 guest left, need 3 friends, have 0
    expect(isGameOver(state)).toBe(true);
  });

  it('returns false when already won', () => {
    const state: GameState = {
      ...initialGameState,
      guests: mockGuests,
      friends: [
        { guest: mockGuests[0], pointsEarned: 5, becameFriends: true },
        { guest: mockGuests[1], pointsEarned: 5, becameFriends: true },
        { guest: mockGuests[2], pointsEarned: 5, becameFriends: true },
      ],
      talkedTo: ['g1', 'g2', 'g3'],
    };
    expect(isGameOver(state)).toBe(false);
  });
});
