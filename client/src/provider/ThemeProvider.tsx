// contexts/ThemeContext.tsx
import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  isDarkMode: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    // Debug: Log current state
    console.log('ThemeProvider mounted');
    
    const savedTheme = localStorage.getItem('theme') as Theme;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    console.log('Saved theme:', savedTheme);
    console.log('Prefers dark:', prefersDark);
    
    const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
    console.log('Initial theme:', initialTheme);
    
    setTheme(initialTheme);
    applyTheme(initialTheme);
  }, []);

  const applyTheme = (newTheme: Theme) => {
    const root = document.documentElement;

    console.log('Applying theme:', newTheme);
    console.log('Document element classes before:', document.documentElement.className);
    
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');  
      root.setAttribute('data-theme', newTheme);

    } else {
      document.documentElement.classList.remove('dark');
      root.setAttribute('data-theme', newTheme);

    }
    
    console.log('Document element classes after:', document.documentElement.className);
  };

  const toggleTheme = () => {
    console.log('Toggle theme clicked, current theme:', theme);
    
    const newTheme = theme === 'light' ? 'dark' : 'light';
    console.log('New theme will be:', newTheme);
    
    setTheme(newTheme);
    applyTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const value = {
    theme,
    toggleTheme,
    isDarkMode: theme === 'dark'
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};