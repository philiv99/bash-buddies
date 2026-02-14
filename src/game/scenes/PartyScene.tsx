/**
 * Bash Buddies — Party Scene
 * Shows all guests as clickable caricature avatars.
 */

import { FRIENDS_TO_WIN } from '../constants';
import { isGameOver } from '../logic/gameState';
import Avatar from '../../ui/components/Avatar';
import { useGame } from './GameContext';
import type { PartyGuest } from '../../types';
import './PartyScene.css';

export default function PartyScene() {
  const { state, dispatch } = useGame();
  const { guests, talkedTo, friends } = state;

  const friendCount = friends.filter(f => f.becameFriends).length;
  const gameOver = isGameOver(state);

  const handleSelectGuest = (guest: PartyGuest) => {
    dispatch({ type: 'SELECT_GUEST', guest });
  };

  return (
    <div className="party-scene">
      {/* Status bar */}
      <div className="party-status">
        <div className="party-status-item">
          <span className="status-label">Friends</span>
          <span className="status-value">
            {friendCount} / {FRIENDS_TO_WIN}
          </span>
        </div>
        <div className="party-status-item">
          <span className="status-label">Score</span>
          <span className="status-value">{state.score}</span>
        </div>
      </div>

      {/* Party room header */}
      <div className="party-header">
        <h2>🎉 The Party 🎉</h2>
        <p className="party-instruction">
          {gameOver
            ? "Oh no! You've run out of guests to meet. Try again!"
            : "Click on someone to start a conversation!"}
        </p>
      </div>

      {/* Guest grid */}
      <div className="party-guests-grid">
        {guests.map(guest => {
          const alreadyTalked = talkedTo.includes(guest.id);
          return (
            <div key={guest.id} className="party-guest-slot">
              <Avatar
                guest={guest}
                size={110}
                onClick={alreadyTalked ? undefined : () => handleSelectGuest(guest)}
                disabled={alreadyTalked}
              />
              {alreadyTalked && (
                <span className="guest-talked-badge">
                  {friends.find(f => f.guest.id === guest.id && f.becameFriends)
                    ? '✅ Friends!'
                    : '💬 Talked'}
                </span>
              )}
            </div>
          );
        })}
      </div>

      {/* Game over state */}
      {gameOver && (
        <div className="party-game-over">
          <div className="card party-game-over-card">
            <h3>Party's Over! 😢</h3>
            <p>You made {friendCount} friend{friendCount !== 1 ? 's' : ''} but needed {FRIENDS_TO_WIN}.</p>
            <p>Score: {state.score}</p>
            <button
              className="btn btn-primary"
              onClick={() => dispatch({ type: 'RESET_GAME' })}
            >
              Try Again 🔄
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
