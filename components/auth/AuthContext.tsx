"use client";
import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

type User = { id: string; email: string };
type AuthCtx = {
  user: User | null;
  loading: boolean;
  register: (email: string, password: string) => Promise<{ ok: boolean; message?: string }>;
  login: (email: string, password: string) => Promise<{ ok: boolean; message?: string }>;
  logout: () => Promise<void>;
};

const Ctx = createContext<AuthCtx | null>(null);

async function jsonFetch<T>(url: string, init?: RequestInit): Promise<{ ok: boolean; data?: T; message?: string }> {
  try {
    const res = await fetch(url, { ...init, headers: { "Content-Type": "application/json", ...(init?.headers || {}) } });
    const body = await res.json().catch(() => ({}));
    if (!res.ok) return { ok: false, message: body?.message || "Request failed" };
    return { ok: true, data: body as T };
  } catch (e: any) {
    return { ok: false, message: e?.message || "Network error" };
  }
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const refresh = async () => {
    setLoading(true);
    const r = await jsonFetch<{ user: User | null }>("/api/me", { method: "GET" });
    setUser(r.ok ? (r.data?.user || null) : null);
    setLoading(false);
  };

  useEffect(() => { refresh(); }, []);

  const register = async (email: string, password: string) => {
    const r = await jsonFetch<{ user: User }>("/api/auth/register", { method: "POST", body: JSON.stringify({ email, password }) });
    if (!r.ok) return { ok: false, message: r.message };
    setUser(r.data!.user);
    return { ok: true };
  };

  const login = async (email: string, password: string) => {
    const r = await jsonFetch<{ user: User }>("/api/auth/login", { method: "POST", body: JSON.stringify({ email, password }) });
    if (!r.ok) return { ok: false, message: r.message };
    setUser(r.data!.user);
    return { ok: true };
  };

  const logout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    setUser(null);
  };

  const value = useMemo<AuthCtx>(() => ({ user, loading, register, login, logout }), [user, loading]);
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useAuth() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
