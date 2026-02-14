/**
 * Bash Buddies — How to Play Overlay
 */

import { useGame } from './GameContext';
import './HowToPlay.css';

export default function HowToPlay() {
  const { dispatch } = useGame();

  return (
    <div className="htp-overlay" role="dialog" aria-label="How to Play">
      <div className="htp-card card">
        <h2 className="htp-title">How to Play 🎉</h2>

        <div className="htp-steps">
          <div className="htp-step">
            <span className="htp-step-num">1</span>
            <div>
              <strong>Mingle at the party</strong>
              <p>Click on any guest to start a conversation. Each person has a unique personality!</p>
            </div>
          </div>

          <div className="htp-step">
            <span className="htp-step-num">2</span>
            <div>
              <strong>Chat & connect</strong>
              <p>Choose topics to discuss and pick responses that match their vibe. Better answers earn more friendship points!</p>
            </div>
          </div>

          <div className="htp-step">
            <span className="htp-step-num">3</span>
            <div>
              <strong>Decide: befriend or pass?</strong>
              <p>After chatting, decide if you want to be friends. But they have to like you too — earn enough points first!</p>
            </div>
          </div>

          <div className="htp-step">
            <span className="htp-step-num">4</span>
            <div>
              <strong>Win with 3 friends!</strong>
              <p>Make 3 new friends to win the game. Higher rapport = more bonus points!</p>
            </div>
          </div>
        </div>

        <button
          className="btn btn-primary"
          onClick={() => dispatch({ type: 'SET_SCENE', scene: 'TITLE' })}
        >
          Got it! 👍
        </button>
      </div>
    </div>
  );
}
