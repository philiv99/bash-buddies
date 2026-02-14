/**
 * Bash Buddies — Conversation Scene
 * Dialogue UI with Q&A flow for chatting with a party guest.
 */

import { useState } from 'react';
import { MAX_TOPICS_PER_CONVERSATION } from '../constants';
import {
  getAvailableTopics,
  getFriendshipMessage,
  isConversationComplete,
  canBefriend,
} from '../logic/conversationEngine';
import Avatar from '../../ui/components/Avatar';
import { useGame } from './GameContext';
import type { ConversationTopic, DialogueOption } from '../../types';
import './ConversationScene.css';

type ConvoPhase = 'GREETING' | 'TOPIC_SELECT' | 'RESPONDING' | 'DECIDE';

export default function ConversationScene() {
  const { state, dispatch } = useGame();
  const { currentGuest, askedTopics, conversationPoints } = state;

  const [phase, setPhase] = useState<ConvoPhase>('GREETING');
  const [selectedTopic, setSelectedTopic] = useState<ConversationTopic | null>(null);
  const [lastResponse, setLastResponse] = useState<string>('');
  const [lastPoints, setLastPoints] = useState<number>(0);

  if (!currentGuest) return null;

  const availableTopics = getAvailableTopics(currentGuest, askedTopics);
  const conversationDone = isConversationComplete(
    currentGuest,
    askedTopics,
    MAX_TOPICS_PER_CONVERSATION,
  );
  const eligible = canBefriend(currentGuest, conversationPoints);

  const handleContinueFromGreeting = () => {
    setPhase('TOPIC_SELECT');
  };

  const handleSelectTopic = (topic: ConversationTopic) => {
    setSelectedTopic(topic);
    setPhase('RESPONDING');
  };

  const handleChooseOption = (option: DialogueOption) => {
    setLastResponse(option.response);
    setLastPoints(option.friendshipPoints);
    dispatch({
      type: 'ASK_TOPIC',
      topicId: selectedTopic!.id,
      points: option.friendshipPoints,
    });
  };

  const handleAfterResponse = () => {
    setLastResponse('');
    setLastPoints(0);
    setSelectedTopic(null);

    // Check if conversation is done after this topic
    const newAskedCount = askedTopics.length; // already updated by dispatch
    const remaining = currentGuest.topics.filter(t => !askedTopics.includes(t.id));

    if (remaining.length === 0 || newAskedCount >= MAX_TOPICS_PER_CONVERSATION) {
      setPhase('DECIDE');
    } else {
      setPhase('TOPIC_SELECT');
    }
  };

  const handleBefriend = (befriend: boolean) => {
    dispatch({ type: 'DECIDE_FRIENDSHIP', befriend });
  };

  return (
    <div className="convo-scene">
      <div className="convo-guest-info">
        <Avatar guest={currentGuest} size={90} showName={false} />
        <div className="convo-guest-details">
          <h2 className="convo-guest-name">{currentGuest.name}</h2>
          <p className="convo-guest-tagline">{currentGuest.tagline}</p>
        </div>
      </div>

      {/* Points indicator */}
      <div className="convo-points-bar">
        <span className="convo-points-label">Rapport</span>
        <div className="convo-points-dots">
          {Array.from({ length: currentGuest.friendshipThreshold + 3 }).map((_, i) => (
            <span
              key={i}
              className={`convo-point-dot ${
                i < conversationPoints
                  ? i < currentGuest.friendshipThreshold
                    ? 'dot-filled'
                    : 'dot-bonus'
                  : 'dot-empty'
              }`}
            />
          ))}
        </div>
        <span className="convo-points-threshold">
          {conversationPoints >= currentGuest.friendshipThreshold ? '✅ Friendly!' : `Need ${currentGuest.friendshipThreshold - conversationPoints} more`}
        </span>
      </div>

      {/* Conversation area */}
      <div className="convo-dialogue card">
        {/* GREETING phase */}
        {phase === 'GREETING' && (
          <div className="convo-bubble">
            <p className="convo-speaker">{currentGuest.name}:</p>
            <p className="convo-text">{currentGuest.greeting}</p>
            <button className="btn btn-secondary convo-continue" onClick={handleContinueFromGreeting}>
              Start chatting! 💬
            </button>
          </div>
        )}

        {/* TOPIC SELECT phase */}
        {phase === 'TOPIC_SELECT' && !conversationDone && (
          <div className="convo-topics">
            <p className="convo-prompt">What do you want to talk about?</p>
            <div className="convo-topic-list">
              {availableTopics.map(topic => (
                <button
                  key={topic.id}
                  className="btn btn-secondary convo-topic-btn"
                  onClick={() => handleSelectTopic(topic)}
                >
                  {topic.topicName}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* TOPIC SELECT but conversation done — go to decide */}
        {phase === 'TOPIC_SELECT' && conversationDone && (
          <div className="convo-bubble">
            <p className="convo-text">
              {getFriendshipMessage(currentGuest, conversationPoints)}
            </p>
            <button className="btn btn-primary convo-continue" onClick={() => setPhase('DECIDE')}>
              Continue →
            </button>
          </div>
        )}

        {/* RESPONDING phase — show topic intro + options, or show response */}
        {phase === 'RESPONDING' && selectedTopic && !lastResponse && (
          <div className="convo-responding">
            <div className="convo-bubble">
              <p className="convo-speaker">{currentGuest.name}:</p>
              <p className="convo-text">{selectedTopic.intro}</p>
            </div>
            <div className="convo-options">
              {selectedTopic.options.map(opt => (
                <button
                  key={opt.id}
                  className="convo-option-btn"
                  onClick={() => handleChooseOption(opt)}
                >
                  {opt.question}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* RESPONDING phase — show response */}
        {phase === 'RESPONDING' && lastResponse && (
          <div className="convo-bubble">
            <p className="convo-speaker">{currentGuest.name}:</p>
            <p className="convo-text">{lastResponse}</p>
            <p className={`convo-points-feedback ${lastPoints > 0 ? 'positive' : lastPoints < 0 ? 'negative' : 'neutral'}`}>
              {lastPoints > 0 ? `+${lastPoints} rapport ✨` : lastPoints < 0 ? `${lastPoints} rapport 😬` : 'No change'}
            </p>
            <button className="btn btn-secondary convo-continue" onClick={handleAfterResponse}>
              {conversationDone ? 'Wrap up...' : 'Continue chatting'}
            </button>
          </div>
        )}

        {/* DECIDE phase */}
        {phase === 'DECIDE' && (
          <div className="convo-decide">
            <p className="convo-text convo-decide-text">
              {getFriendshipMessage(currentGuest, conversationPoints)}
            </p>
            {eligible ? (
              <>
                <p className="convo-decide-prompt">Do you want to be friends with {currentGuest.name}?</p>
                <div className="convo-decide-buttons">
                  <button
                    className="btn btn-primary"
                    onClick={() => handleBefriend(true)}
                  >
                    🤝 Yes, be friends!
                  </button>
                  <button
                    className="btn btn-secondary"
                    onClick={() => handleBefriend(false)}
                  >
                    👋 Not this time
                  </button>
                </div>
              </>
            ) : (
              <>
                <p className="convo-decide-prompt">
                  {currentGuest.name} doesn't seem interested in being friends right now.
                </p>
                <button
                  className="btn btn-secondary"
                  onClick={() => handleBefriend(false)}
                >
                  Move on 👋
                </button>
              </>
            )}
          </div>
        )}
      </div>

      {/* Back to party */}
      {phase !== 'DECIDE' && (
        <button
          className="btn btn-ghost convo-back"
          onClick={() => dispatch({ type: 'RETURN_TO_PARTY' })}
        >
          ← Back to party (skip this conversation)
        </button>
      )}
    </div>
  );
}
