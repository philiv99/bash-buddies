/**
 * Bash Buddies — Results Screen
 * Victory/game completion screen showing friends made and score.
 */

import Avatar from '../../ui/components/Avatar';
import { FRIENDS_TO_WIN } from '../constants';
import { useGame } from './GameContext';
import './ResultsScreen.css';

export default function ResultsScreen() {
  const { state, dispatch } = useGame();
  const { friends, score } = state;

  const friendsMade = friends.filter(f => f.becameFriends);
  const won = friendsMade.length >= FRIENDS_TO_WIN;

  return (
    <div className="results-screen">
      <div className="results-card card">
        <h1 className="results-title">
          {won ? '🎉 You Win! 🎉' : '😢 Party Over'}
        </h1>

        <p className="results-subtitle">
          {won
            ? `You made ${friendsMade.length} new friends at the party!`
            : `You made ${friendsMade.length} friend${friendsMade.length !== 1 ? 's' : ''}, but needed ${FRIENDS_TO_WIN}.`}
        </p>

        <div className="results-score">
          <span className="results-score-label">Total Score</span>
          <span className="results-score-value">{score}</span>
        </div>

        {/* Friends list */}
        {friendsMade.length > 0 && (
          <div className="results-friends">
            <h3 className="results-friends-title">Your New Buddies:</h3>
            <div className="results-friends-list">
              {friendsMade.map(f => (
                <div key={f.guest.id} className="results-friend-item">
                  <Avatar guest={f.guest} size={70} showName={true} />
                  <span className="results-friend-points">+{f.pointsEarned} rapport</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* People you passed on */}
        {friends.filter(f => !f.becameFriends).length > 0 && (
          <div className="results-passed">
            <h3 className="results-passed-title">Didn't click with:</h3>
            <div className="results-friends-list">
              {friends.filter(f => !f.becameFriends).map(f => (
                <div key={f.guest.id} className="results-friend-item faded">
                  <Avatar guest={f.guest} size={55} showName={true} />
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="results-actions">
          <button
            className="btn btn-primary"
            onClick={() => dispatch({ type: 'RESET_GAME' })}
          >
            🎈 Play Again!
          </button>
        </div>
      </div>
    </div>
  );
}
