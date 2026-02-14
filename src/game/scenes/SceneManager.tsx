/**
 * Bash Buddies — Scene Manager
 * Renders the current game scene based on state machine.
 */

import { useGame } from './GameContext';
import TitleScreen from './TitleScreen';
import HowToPlay from './HowToPlay';
import PartyScene from './PartyScene';
import ConversationScene from './ConversationScene';
import ResultsScreen from './ResultsScreen';

export default function SceneManager() {
  const { state } = useGame();

  switch (state.scene) {
    case 'BOOT':
    case 'TITLE':
      return <TitleScreen />;
    case 'HOW_TO_PLAY':
      return <HowToPlay />;
    case 'PLAYING':
      return <PartyScene />;
    case 'CONVERSATION':
      return <ConversationScene />;
    case 'RESULTS':
      return <ResultsScreen />;
    default:
      return <TitleScreen />;
  }
}
