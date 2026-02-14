/**
 * Bash Buddies — App Layout
 * Header with player info + logout, and main content area.
 */

import { useAuth } from '../auth/AuthContext';
import './Layout.css';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { user, logout } = useAuth();

  return (
    <div className="app-layout">
      <header className="app-header">
        <div className="header-left">
          <h1 className="header-title">Bash Buddies</h1>
        </div>
        <div className="header-right">
          {user && (
            <>
              <span className="header-player">
                🎉 {user.displayName}
              </span>
              <button className="btn btn-ghost header-logout" onClick={logout}>
                Logout
              </button>
            </>
          )}
        </div>
      </header>
      <main className="app-main">
        {children}
      </main>
    </div>
  );
}
