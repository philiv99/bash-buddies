/**
 * Bash Buddies — Auth API Client
 * Communicates with CopilotSdk.Api for authentication.
 */

import type { AuthResponse, LoginPayload, RegisterPayload, User } from '../types';

const STORAGE_PREFIX = 'bash-buddies:';
const API_BASE = import.meta.env.VITE_AUTH_API_URL || 'http://localhost:5139';

export function getStoredUser(): User | null {
  try {
    const raw = localStorage.getItem(`${STORAGE_PREFIX}user`);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function getStoredUserId(): string | null {
  return localStorage.getItem(`${STORAGE_PREFIX}userId`);
}

export function storeUser(user: User): void {
  localStorage.setItem(`${STORAGE_PREFIX}user`, JSON.stringify(user));
  localStorage.setItem(`${STORAGE_PREFIX}userId`, user.id);
}

export function clearAuthStorage(): void {
  localStorage.removeItem(`${STORAGE_PREFIX}user`);
  localStorage.removeItem(`${STORAGE_PREFIX}userId`);
}

async function apiFetch<T>(
  endpoint: string,
  options: RequestInit = {},
): Promise<T> {
  const userId = getStoredUserId();
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    ...(options.headers as Record<string, string>),
  };
  if (userId) {
    headers['X-User-Id'] = userId;
  }

  const res = await fetch(`${API_BASE}${endpoint}`, {
    ...options,
    headers,
  });

  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Error(body.message || `Request failed (${res.status})`);
  }

  return res.json();
}

export async function login(payload: LoginPayload): Promise<User> {
  const data = await apiFetch<AuthResponse>('/api/users/login', {
    method: 'POST',
    body: JSON.stringify(payload),
  });

  if (!data.success) {
    throw new Error(data.message || 'Login failed');
  }

  storeUser(data.user);
  return data.user;
}

export async function register(payload: RegisterPayload): Promise<User> {
  const data = await apiFetch<AuthResponse>('/api/users/register', {
    method: 'POST',
    body: JSON.stringify(payload),
  });

  if (!data.success) {
    throw new Error(data.message || 'Registration failed');
  }

  storeUser(data.user);
  return data.user;
}

export async function validateSession(): Promise<User | null> {
  const userId = getStoredUserId();
  if (!userId) return null;

  try {
    const user = await apiFetch<User>('/api/users/me');
    storeUser(user);
    return user;
  } catch {
    clearAuthStorage();
    return null;
  }
}

export async function logout(): Promise<void> {
  try {
    await apiFetch('/api/users/logout', { method: 'POST' });
  } catch {
    // Ignore server errors on logout
  } finally {
    clearAuthStorage();
  }
}
