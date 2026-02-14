/**
 * Bash Buddies — Register Screen
 * LinkittyDo-themed registration form.
 */

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import './AuthScreens.css';

export default function RegisterScreen() {
  const { register, error, clearError, isLoading } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username: '',
    email: '',
    displayName: '',
    password: '',
    confirmPassword: '',
  });
  const [localError, setLocalError] = useState<string | null>(null);

  const updateField = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    clearError();
    setLocalError(null);
    setForm(prev => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      setLocalError('Passwords do not match');
      return;
    }
    if (form.password.length < 6) {
      setLocalError('Password must be at least 6 characters');
      return;
    }
    try {
      await register(form);
      navigate('/', { replace: true });
    } catch {
      // error is set in AuthContext
    }
  };

  const displayError = localError || error;

  return (
    <div className="auth-screen">
      <div className="auth-card card">
        <h1 className="auth-title">Bash Buddies</h1>
        <p className="auth-subtitle">Join the party! 🥳</p>

        <form onSubmit={handleSubmit} className="auth-form" noValidate>
          {displayError && (
            <div className="auth-error" role="alert" aria-live="polite">
              {displayError}
            </div>
          )}

          <div className="form-group">
            <label htmlFor="reg-username">Username</label>
            <input
              id="reg-username"
              className="input-field"
              type="text"
              value={form.username}
              onChange={updateField('username')}
              placeholder="Pick a username"
              autoComplete="username"
              required
              disabled={isLoading}
            />
          </div>

          <div className="form-group">
            <label htmlFor="reg-email">Email</label>
            <input
              id="reg-email"
              className="input-field"
              type="email"
              value={form.email}
              onChange={updateField('email')}
              placeholder="your@email.com"
              autoComplete="email"
              required
              disabled={isLoading}
            />
          </div>

          <div className="form-group">
            <label htmlFor="reg-displayName">Display Name</label>
            <input
              id="reg-displayName"
              className="input-field"
              type="text"
              value={form.displayName}
              onChange={updateField('displayName')}
              placeholder="What should we call you?"
              required
              disabled={isLoading}
            />
          </div>

          <div className="form-group">
            <label htmlFor="reg-password">Password</label>
            <input
              id="reg-password"
              className="input-field"
              type="password"
              value={form.password}
              onChange={updateField('password')}
              placeholder="At least 6 characters"
              autoComplete="new-password"
              required
              disabled={isLoading}
            />
          </div>

          <div className="form-group">
            <label htmlFor="reg-confirmPassword">Confirm Password</label>
            <input
              id="reg-confirmPassword"
              className="input-field"
              type="password"
              value={form.confirmPassword}
              onChange={updateField('confirmPassword')}
              placeholder="Type it again"
              autoComplete="new-password"
              required
              disabled={isLoading}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary auth-submit"
            disabled={isLoading || !form.username || !form.email || !form.password}
          >
            {isLoading ? 'Creating account...' : 'Sign Up'}
          </button>
        </form>

        <p className="auth-switch">
          Already have an account? <Link to="/login">Log in</Link>
        </p>
      </div>
    </div>
  );
}
