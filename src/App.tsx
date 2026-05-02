// src/App.tsx
import React, { useState } from 'react';
import { type ThemeType } from './types';
import Button from './components/Button';
import { manageTheme } from './hocTheme/manageTheme';

const ThemedButtonWithTheme = manageTheme(Button);

const App: React.FC = () => {
  const [theme, setTheme] = useState<ThemeType>('light');

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const appStyles: React.CSSProperties = {
    height: '100vh',
    padding: 20,
    backgroundColor: theme === 'light' ? '#fff' : '#222',
    color: theme === 'light' ? '#000' : '#fff',
    transition: 'background-color 0.1s, color 0.1s',
  };

  return (
    <div style={appStyles}>
      <button onClick={toggleTheme} style={{ marginBottom: 20, border: 'none', borderRadius: 3 }}>
        Переключить тему (сейчас: {theme})
      </button>

      <ThemedButtonWithTheme theme={theme} onClick={() => alert('Clicked!')}>
        Кнопка с темой
      </ThemedButtonWithTheme>
    </div>
  );
};

export default App;
