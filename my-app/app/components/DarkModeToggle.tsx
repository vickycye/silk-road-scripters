'use client'

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function DarkmodeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch by only rendering after mount
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  // Don't render anything until mounted to avoid hydration mismatch
  if (!mounted) {
    return null;
  }

  return (
    <button 
      onClick={toggleTheme}
      className="p-2 rounded-lg transition-colors hover:bg-silk-btn-hover dark:hover:bg-silk-dark-btn-hover"
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {theme === 'dark' ? (
        <Sun 
          size={36}
          className="text-silk-dark-text"
          strokeWidth={1}
        />
      ) : (
        <Moon 
          size={36}
          className="text-silk-text"
          strokeWidth={1}
        />
      )}
    </button>
  );
}