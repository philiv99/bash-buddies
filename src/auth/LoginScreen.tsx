/**
 * Bash Buddies — Login Screen
 * LinkittyDo-themed login form.
 */

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import './AuthScreens.css';

export default function LoginScreen() {
  const { login, error, clearError, isLoading } = useAuth();
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login({ username, password });
      navigate('/', { replace: true });
    } catch {
      // error is set in AuthContext
    }
  };

  return (
    <div className="auth-screen">
      <div className="auth-card card">
        <h1 className="auth-title">Bash Buddies</h1>
        <p className="auth-subtitle">Welcome to the party! 🎉</p>

        <form onSubmit={handleSubmit} className="auth-form" noValidate>
          {error && (
            <div className="auth-error" role="alert" aria-live="polite">
              {error}
            </div>
          )}

          <div className="form-group">
            <label htmlFor="login-username">Username</label>
            <input
              id="login-username"
              className="input-field"
              type="text"
              value={username}
              onChange={(e) => { clearError(); setUsername(e.target.value); }}
              placeholder="Enter your username"
              autoComplete="username"
              required
              disabled={isLoading}
            />
          </div>

          <div className="form-group">
            <label htmlFor="login-password">Password</label>
            <input
              id="login-password"
              className="input-field"
              type="password"
              value={password}
              onChange={(e) => { clearError(); setPassword(e.target.value); }}
              placeholder="Enter your password"
              autoComplete="current-password"
              required
              disabled={isLoading}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary auth-submit"
            disabled={isLoading || !username || !password}
          >
            {isLoading ? 'Logging in...' : 'Log In'}
          </button>
        </form>

        <p className="auth-switch">
          Don't have an account? <Link to="/register">Sign up</Link>
        </p>
      </div>
    </div>
  );
}
