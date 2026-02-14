/**
 * Bash Buddies — Auth API Tests
 */

import { describe, it, expect, beforeEach, vi } from 'vitest';
import { getStoredUser, getStoredUserId, storeUser, clearAuthStorage } from '../src/auth/authApi';
import type { User } from '../src/types';

const mockUser: User = {
  id: 'user-123',
  username: 'testplayer',
  email: 'test@example.com',
  displayName: 'Test Player',
  role: 'Player',
  avatarType: 'Default',
  avatarData: null,
  isActive: true,
  createdAt: '2026-01-01T00:00:00Z',
  updatedAt: '2026-01-01T00:00:00Z',
  lastLoginAt: null,
};

describe('Auth Storage', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('storeUser saves user and userId to localStorage', () => {
    storeUser(mockUser);
    expect(localStorage.getItem('bash-buddies:user')).toBeTruthy();
    expect(localStorage.getItem('bash-buddies:userId')).toBe('user-123');
  });

  it('getStoredUser returns the stored user', () => {
    storeUser(mockUser);
    const user = getStoredUser();
    expect(user).toEqual(mockUser);
  });

  it('getStoredUser returns null when no user stored', () => {
    expect(getStoredUser()).toBeNull();
  });

  it('getStoredUserId returns the stored userId', () => {
    storeUser(mockUser);
    expect(getStoredUserId()).toBe('user-123');
  });

  it('getStoredUserId returns null when no userId stored', () => {
    expect(getStoredUserId()).toBeNull();
  });

  it('clearAuthStorage removes user and userId', () => {
    storeUser(mockUser);
    clearAuthStorage();
    expect(getStoredUser()).toBeNull();
    expect(getStoredUserId()).toBeNull();
  });

  it('keys are prefixed with bash-buddies:', () => {
    storeUser(mockUser);
    const keys = Object.keys(localStorage);
    expect(keys.every(k => k.startsWith('bash-buddies:'))).toBe(true);
  });
});

describe('Auth API functions', () => {
  beforeEach(() => {
    localStorage.clear();
    vi.restoreAllMocks();
  });

  it('login calls POST /api/users/login and stores user', async () => {
    const mockResponse = {
      ok: true,
      json: () => Promise.resolve({ success: true, message: '', user: mockUser }),
    };
    vi.spyOn(globalThis, 'fetch').mockResolvedValue(mockResponse as unknown as Response);

    const { login } = await import('../src/auth/authApi');
    const user = await login({ username: 'testplayer', password: 'password123' });

    expect(user).toEqual(mockUser);
    expect(getStoredUserId()).toBe('user-123');
    expect(globalThis.fetch).toHaveBeenCalledWith(
      expect.stringContaining('/api/users/login'),
      expect.objectContaining({ method: 'POST' }),
    );
  });

  it('login throws on failure', async () => {
    const mockResponse = {
      ok: true,
      json: () => Promise.resolve({ success: false, message: 'Invalid credentials' }),
    };
    vi.spyOn(globalThis, 'fetch').mockResolvedValue(mockResponse as unknown as Response);

    const { login } = await import('../src/auth/authApi');
    await expect(login({ username: 'bad', password: 'wrong' }))
      .rejects.toThrow('Invalid credentials');
  });

  it('register calls POST /api/users/register and stores user', async () => {
    const mockResponse = {
      ok: true,
      json: () => Promise.resolve({ success: true, message: '', user: mockUser }),
    };
    vi.spyOn(globalThis, 'fetch').mockResolvedValue(mockResponse as unknown as Response);

    const { register } = await import('../src/auth/authApi');
    const user = await register({
      username: 'newplayer',
      email: 'new@example.com',
      displayName: 'New Player',
      password: 'password123',
      confirmPassword: 'password123',
    });

    expect(user).toEqual(mockUser);
    expect(globalThis.fetch).toHaveBeenCalledWith(
      expect.stringContaining('/api/users/register'),
      expect.objectContaining({ method: 'POST' }),
    );
  });

  it('logout clears storage', async () => {
    storeUser(mockUser);
    const mockResponse = {
      ok: true,
      json: () => Promise.resolve({}),
    };
    vi.spyOn(globalThis, 'fetch').mockResolvedValue(mockResponse as unknown as Response);

    const { logout } = await import('../src/auth/authApi');
    await logout();

    expect(getStoredUser()).toBeNull();
    expect(getStoredUserId()).toBeNull();
  });
});
