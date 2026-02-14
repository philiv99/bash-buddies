/**
 * Bash Buddies — Game Context
 * Provides game state and dispatch to all game components.
 */

import React, { createContext, useContext, useMemo, useReducer } from 'react';
import type { GameAction, GameState } from '../../types';
import { gameReducer, initialGameState } from '../logic/gameState';

interface GameContextValue {
  state: GameState;
  dispatch: React.Dispatch<GameAction>;
}

const GameContext = createContext<GameContextValue | null>(null);

export function GameProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(gameReducer, {
    ...initialGameState,
    scene: 'TITLE',
  });

  const value = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return (
    <GameContext.Provider value={value}>
      {children}
    </GameContext.Provider>
  );
}

export function useGame(): GameContextValue {
  const ctx = useContext(GameContext);
  if (!ctx) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return ctx;
}

export default GameContext;
