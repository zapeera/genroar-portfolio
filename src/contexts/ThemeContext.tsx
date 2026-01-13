"use client";
import React, { createContext, useContext, useEffect, useState, useMemo, useCallback, ReactNode } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

interface ThemeProviderProps {
  children: ReactNode;
  defaultTheme?: Theme;
}

export function ThemeProvider({ children, defaultTheme = "light" }: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>(defaultTheme);
  const [mounted, setMounted] = useState(false);

  // Apply theme to DOM - define as regular function first for initialization
  const applyTheme = (newTheme: Theme) => {
    if (typeof window === "undefined") return;
    const root = document.documentElement;
    const body = document.body;
    
    // Remove dark class first
    root.classList.remove("dark");
    body.classList.remove("dark");
    
    // Apply new theme
    if (newTheme === "dark") {
      root.classList.add("dark");
      body.classList.add("dark");
      root.setAttribute("data-theme", "dark");
      body.setAttribute("data-theme", "dark");
    } else {
      root.setAttribute("data-theme", "light");
      body.setAttribute("data-theme", "light");
    }
    
    localStorage.setItem("theme", newTheme);
    
    // Force browser to recognize the change
    root.style.colorScheme = newTheme === "dark" ? "dark" : "light";
  };

  // Initialize theme from localStorage only (ignore system preference)
  useEffect(() => {
    setMounted(true);
    
    const initializeTheme = () => {
      try {
        const stored = localStorage.getItem("theme") as Theme | null;
        if (stored === "dark" || stored === "light") {
          setThemeState(stored);
          applyTheme(stored);
        } else {
          // No stored preference - default to light mode
          setThemeState("light");
          applyTheme("light");
        }
      } catch (error) {
        // Fallback to light mode
        setThemeState("light");
        applyTheme("light");
      }
    };

    initializeTheme();
  }, []);

  // Set theme programmatically - use useCallback for stable reference
  const setTheme = useCallback((newTheme: Theme) => {
    setThemeState(newTheme);
    applyTheme(newTheme);
    if (typeof window !== "undefined") {
      window.dispatchEvent(new Event("themechange"));
    }
  }, [applyTheme]);

  // Toggle between light and dark - read directly from DOM to avoid stale state
  const toggleTheme = useCallback(() => {
    if (typeof window === "undefined") return;
    
    // Read current state directly from DOM to avoid stale closures
    const isCurrentlyDark = document.documentElement.classList.contains("dark");
    const newTheme: Theme = isCurrentlyDark ? "light" : "dark";
    
    setThemeState(newTheme);
    applyTheme(newTheme);
    window.dispatchEvent(new Event("themechange"));
  }, [applyTheme]);

  // Always provide context, even before mount
  // Use current theme state or default
  // Memoize to prevent unnecessary re-renders but ensure updates
  const contextValue: ThemeContextType = useMemo(() => ({
    theme: mounted ? theme : defaultTheme,
    setTheme,
    toggleTheme,
  }), [theme, mounted, defaultTheme]);

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}

