import React, { createContext, useContext, useState, useEffect } from 'react';
import { supabase, isSupabaseConfigured } from '../lib/supabaseClient';

const AuthContext = createContext(null);
const LOCAL_AUTH_KEY = 'aboli_admin_session';

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check Supabase session or localStorage session
    if (isSupabaseConfigured && supabase) {
      supabase.auth.getSession().then(({ data: { session } }) => {
        if (session?.user) {
          setUser({ email: session.user.email, role: 'owner' });
        }
        setLoading(false);
      });

      const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
        if (session?.user) {
          setUser({ email: session.user.email, role: 'owner' });
        } else {
          setUser(null);
        }
      });

      return () => subscription.unsubscribe();
    } else {
      const stored = localStorage.getItem(LOCAL_AUTH_KEY);
      if (stored) {
        try {
          setUser(JSON.parse(stored));
        } catch (e) {
          localStorage.removeItem(LOCAL_AUTH_KEY);
        }
      }
      setLoading(false);
    }
  }, []);

  const login = async (email, password) => {
    if (isSupabaseConfigured && supabase) {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
      });
      if (error) throw new Error(error.message || 'Incorrect email or password');
      const currentUser = { email: data.user.email, role: 'owner' };
      setUser(currentUser);
      return currentUser;
    }

    // Default boutique owner credentials for instant local access
    const cleanEmail = (email || '').trim().toLowerCase();
    if (
      (cleanEmail === 'admin@aboli.in' && password === 'aboli@satara2026') ||
      (cleanEmail === 'admin@aboli.in' && password === 'admin123') ||
      (cleanEmail === 'shravani@aboli.in' && password === 'aboli2026')
    ) {
      const adminSession = {
        email: cleanEmail,
        role: 'owner',
        loggedInAt: new Date().toISOString()
      };
      localStorage.setItem(LOCAL_AUTH_KEY, JSON.stringify(adminSession));
      setUser(adminSession);
      return adminSession;
    }

    throw new Error('Incorrect email or password. Please check your credentials.');
  };

  const logout = async () => {
    if (isSupabaseConfigured && supabase) {
      await supabase.auth.signOut();
    }
    localStorage.removeItem(LOCAL_AUTH_KEY);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, isAuthenticated: Boolean(user), login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
