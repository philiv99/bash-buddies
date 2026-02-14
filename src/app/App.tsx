/**
 * Bash Buddies — App Root
 * Sets up routing, auth provider, and game provider.
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from '../auth/AuthContext';
import ProtectedRoute from '../auth/ProtectedRoute';
import LoginScreen from '../auth/LoginScreen';
import RegisterScreen from '../auth/RegisterScreen';
import { GameProvider } from '../game/scenes/GameContext';
import SceneManager from '../game/scenes/SceneManager';
import Layout from './Layout';

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          {/* Public auth routes */}
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/register" element={<RegisterScreen />} />

          {/* Protected game routes */}
          <Route
            path="/*"
            element={
              <ProtectedRoute>
                <GameProvider>
                  <Layout>
                    <SceneManager />
                  </Layout>
                </GameProvider>
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}
