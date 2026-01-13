"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { useEffect, useState } from "react";

export function DarkModeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Get current theme - check DOM directly for most accurate state
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (mounted && typeof window !== "undefined") {
      // Check DOM directly for current theme
      const checkTheme = () => {
        const dark = document.documentElement.classList.contains("dark");
        setIsDark(dark);
      };
      
      checkTheme();
      
      // Listen for theme changes
      const handleThemeChange = () => {
        checkTheme();
      };
      
      window.addEventListener("themechange", handleThemeChange);
      
      // Also observe DOM changes
      const observer = new MutationObserver(() => {
        checkTheme();
      });
      
      observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["class"],
      });

      return () => {
        window.removeEventListener("themechange", handleThemeChange);
        observer.disconnect();
      };
    }
  }, [mounted]);

  const handleToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleTheme();
  };

  if (!mounted) {
    return (
      <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-gray-300 bg-white dark:border-gray-700 dark:bg-[#0B0C10]">
        <Moon className="h-5 w-5 text-gray-700 dark:text-gray-300" />
      </div>
    );
  }

  return (
    <button
      onClick={handleToggle}
      className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-gray-300 bg-white transition-all duration-200 hover:border-primary hover:bg-gray-50 hover:scale-105 dark:border-gray-700 dark:bg-[#0B0C10] dark:hover:bg-gray-800 cursor-pointer"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      type="button"
    >
      {isDark ? (
        <Sun className="h-5 w-5 text-gray-700 dark:text-gray-300 transition-transform duration-200" />
      ) : (
        <Moon className="h-5 w-5 text-gray-700 dark:text-gray-300 transition-transform duration-200" />
      )}
    </button>
  );
}
