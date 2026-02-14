/**
 * Bash Buddies — Title Screen
 */

import { useAuth } from '../../auth/AuthContext';
import { ALL_GUESTS } from '../logic/characters';
import { selectPartyGuests } from '../logic/gameState';
import { PARTY_SIZE } from '../constants';
import { useGame } from './GameContext';
import './TitleScreen.css';

export default function TitleScreen() {
  const { dispatch } = useGame();
  const { user } = useAuth();

  const handleStart = () => {
    const guests = selectPartyGuests(ALL_GUESTS, PARTY_SIZE);
    dispatch({ type: 'START_GAME', guests });
  };

  const handleHowToPlay = () => {
    dispatch({ type: 'SET_SCENE', scene: 'HOW_TO_PLAY' });
  };

  return (
    <div className="title-screen">
      <div className="title-content">
        <h1 className="title-logo">
          <span className="title-bash">Bash</span>
          <span className="title-buddies">Buddies</span>
        </h1>
        <p className="title-tagline">Make friends at the party! 🎉</p>

        <div className="title-welcome">
          {user && <p>Welcome, <strong>{user.displayName}</strong>!</p>}
        </div>

        <div className="title-buttons">
          <button className="btn btn-primary title-play-btn" onClick={handleStart}>
            🎈 Start Party!
          </button>
          <button className="btn btn-secondary" onClick={handleHowToPlay}>
            ❓ How to Play
          </button>
        </div>
      </div>

      {/* Decorative party elements */}
      <div className="title-decorations">
        <span className="deco deco-1">🎈</span>
        <span className="deco deco-2">🎉</span>
        <span className="deco deco-3">🎊</span>
        <span className="deco deco-4">🥳</span>
        <span className="deco deco-5">🎈</span>
        <span className="deco deco-6">✨</span>
      </div>
    </div>
  );
}
