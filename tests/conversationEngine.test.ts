/**
 * Bash Buddies — Conversation Engine Tests
 */

import { describe, it, expect } from 'vitest';
import {
  getAvailableTopics,
  canBefriend,
  isConversationComplete,
  getFriendshipMessage,
  calculateFriendshipScore,
} from '../src/game/logic/conversationEngine';
import type { PartyGuest } from '../src/types';

const mockGuest: PartyGuest = {
  id: 'test-guest',
  name: 'Testy',
  caricatureStyle: 'nerd',
  tagline: 'A test character',
  bio: 'Lives in a test file',
  personality: 'Predictable',
  interests: ['testing'],
  greeting: 'Hello, test!',
  colors: { primary: '#000', secondary: '#fff', accent: '#f00' },
  friendshipThreshold: 5,
  topics: [
    {
      id: 'topic-a',
      topicName: 'Topic A',
      intro: 'Let us discuss A.',
      options: [
        { id: 'a1', question: 'Q1', response: 'R1', friendshipPoints: 3 },
        { id: 'a2', question: 'Q2', response: 'R2', friendshipPoints: 1 },
        { id: 'a3', question: 'Q3', response: 'R3', friendshipPoints: -1 },
      ],
    },
    {
      id: 'topic-b',
      topicName: 'Topic B',
      intro: 'Let us discuss B.',
      options: [
        { id: 'b1', question: 'Q1', response: 'R1', friendshipPoints: 2 },
      ],
    },
    {
      id: 'topic-c',
      topicName: 'Topic C',
      intro: 'Let us discuss C.',
      options: [
        { id: 'c1', question: 'Q1', response: 'R1', friendshipPoints: 3 },
      ],
    },
  ],
};

describe('getAvailableTopics', () => {
  it('returns all topics when none asked', () => {
    const topics = getAvailableTopics(mockGuest, []);
    expect(topics).toHaveLength(3);
  });

  it('filters out asked topics', () => {
    const topics = getAvailableTopics(mockGuest, ['topic-a']);
    expect(topics).toHaveLength(2);
    expect(topics.find(t => t.id === 'topic-a')).toBeUndefined();
  });

  it('returns empty when all asked', () => {
    const topics = getAvailableTopics(mockGuest, ['topic-a', 'topic-b', 'topic-c']);
    expect(topics).toHaveLength(0);
  });
});

describe('canBefriend', () => {
  it('returns true when points meet threshold', () => {
    expect(canBefriend(mockGuest, 5)).toBe(true);
  });

  it('returns true when points exceed threshold', () => {
    expect(canBefriend(mockGuest, 8)).toBe(true);
  });

  it('returns false when points below threshold', () => {
    expect(canBefriend(mockGuest, 4)).toBe(false);
  });

  it('returns false for zero points', () => {
    expect(canBefriend(mockGuest, 0)).toBe(false);
  });
});

describe('isConversationComplete', () => {
  it('returns false when topics remain and under max', () => {
    expect(isConversationComplete(mockGuest, ['topic-a'], 3)).toBe(false);
  });

  it('returns true when all topics exhausted', () => {
    expect(isConversationComplete(mockGuest, ['topic-a', 'topic-b', 'topic-c'], 3)).toBe(true);
  });

  it('returns true when max topics reached', () => {
    expect(isConversationComplete(mockGuest, ['topic-a', 'topic-b'], 2)).toBe(true);
  });

  it('returns true when max is zero', () => {
    expect(isConversationComplete(mockGuest, [], 0)).toBe(true);
  });
});

describe('getFriendshipMessage', () => {
  it('returns thrilled message for high rapport', () => {
    const msg = getFriendshipMessage(mockGuest, 9);
    expect(msg).toContain('THRILLED');
  });

  it('returns likes message at threshold', () => {
    const msg = getFriendshipMessage(mockGuest, 5);
    expect(msg).toContain('really likes');
  });

  it('returns distant message for low rapport', () => {
    const msg = getFriendshipMessage(mockGuest, 2);
    expect(msg).toContain('distant');
  });

  it('includes guest name', () => {
    const msg = getFriendshipMessage(mockGuest, 5);
    expect(msg).toContain('Testy');
  });
});

describe('calculateFriendshipScore', () => {
  it('returns base score at threshold', () => {
    expect(calculateFriendshipScore(mockGuest, 5)).toBe(100);
  });

  it('adds bonus for exceeding threshold', () => {
    expect(calculateFriendshipScore(mockGuest, 7)).toBe(150); // 100 + 2*25
  });

  it('returns base score below threshold (no negative bonus)', () => {
    expect(calculateFriendshipScore(mockGuest, 2)).toBe(100);
  });
});
