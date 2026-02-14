/**
 * Bash Buddies — Conversation Engine
 * Pure logic for managing conversations with party guests.
 */

import type { ConversationTopic, DialogueOption, PartyGuest } from '../../types';

/**
 * Get available topics for a guest that haven't been asked yet.
 */
export function getAvailableTopics(
  guest: PartyGuest,
  askedTopicIds: string[],
): ConversationTopic[] {
  return guest.topics.filter(t => !askedTopicIds.includes(t.id));
}

/**
 * Get the options for a specific topic.
 */
export function getTopicOptions(topic: ConversationTopic): DialogueOption[] {
  return topic.options;
}

/**
 * Calculate whether a guest wants to be friends based on accumulated points.
 */
export function canBefriend(
  guest: PartyGuest,
  pointsEarned: number,
): boolean {
  return pointsEarned >= guest.friendshipThreshold;
}

/**
 * Check if the conversation is complete (all topics exhausted or max reached).
 */
export function isConversationComplete(
  guest: PartyGuest,
  askedTopicIds: string[],
  maxTopics: number,
): boolean {
  const available = getAvailableTopics(guest, askedTopicIds);
  return available.length === 0 || askedTopicIds.length >= maxTopics;
}

/**
 * Get a friendship message based on points and threshold.
 */
export function getFriendshipMessage(
  guest: PartyGuest,
  pointsEarned: number,
): string {
  const ratio = pointsEarned / guest.friendshipThreshold;

  if (ratio >= 1.5) {
    return `${guest.name} is THRILLED! You two really hit it off!`;
  } else if (ratio >= 1) {
    return `${guest.name} really likes you! You've made a genuine connection.`;
  } else if (ratio >= 0.7) {
    return `${guest.name} thinks you're okay, but wasn't fully won over.`;
  } else if (ratio >= 0.3) {
    return `${guest.name} seemed a bit distant during the conversation.`;
  } else {
    return `${guest.name} didn't feel a connection. Maybe next time!`;
  }
}

/**
 * Calculate score bonus for befriending a guest.
 * Higher rapport = more bonus points.
 */
export function calculateFriendshipScore(
  guest: PartyGuest,
  pointsEarned: number,
): number {
  const baseScore = 100;
  const rapportBonus = Math.max(0, pointsEarned - guest.friendshipThreshold) * 25;
  return baseScore + rapportBonus;
}
