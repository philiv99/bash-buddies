/**
 * Bash Buddies — Character Data Tests
 */

import { describe, it, expect } from 'vitest';
import { ALL_GUESTS } from '../src/game/logic/characters';

describe('Character data integrity', () => {
  it('has at least 8 guests', () => {
    expect(ALL_GUESTS.length).toBeGreaterThanOrEqual(8);
  });

  it('all guests have unique IDs', () => {
    const ids = ALL_GUESTS.map(g => g.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(ids.length);
  });

  it('all guests have unique names', () => {
    const names = ALL_GUESTS.map(g => g.name);
    const uniqueNames = new Set(names);
    expect(uniqueNames.size).toBe(names.length);
  });

  it('all guests have at least 3 topics', () => {
    for (const guest of ALL_GUESTS) {
      expect(guest.topics.length).toBeGreaterThanOrEqual(3);
    }
  });

  it('all topics have at least 3 options', () => {
    for (const guest of ALL_GUESTS) {
      for (const topic of guest.topics) {
        expect(topic.options.length).toBeGreaterThanOrEqual(3);
      }
    }
  });

  it('all guests have valid friendshipThreshold (positive)', () => {
    for (const guest of ALL_GUESTS) {
      expect(guest.friendshipThreshold).toBeGreaterThan(0);
    }
  });

  it('all guests have non-empty greeting', () => {
    for (const guest of ALL_GUESTS) {
      expect(guest.greeting.length).toBeGreaterThan(0);
    }
  });

  it('all dialogue options have non-empty question and response', () => {
    for (const guest of ALL_GUESTS) {
      for (const topic of guest.topics) {
        for (const opt of topic.options) {
          expect(opt.question.length).toBeGreaterThan(0);
          expect(opt.response.length).toBeGreaterThan(0);
        }
      }
    }
  });

  it('all guests have valid colors (hex format)', () => {
    const hexRegex = /^#[0-9A-Fa-f]{6}$/;
    for (const guest of ALL_GUESTS) {
      expect(guest.colors.primary).toMatch(hexRegex);
      expect(guest.colors.secondary).toMatch(hexRegex);
      expect(guest.colors.accent).toMatch(hexRegex);
    }
  });
});
