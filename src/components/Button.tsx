import React from 'react';
import { type ThemeType } from '../types';

interface ButtonProps {
  theme: ThemeType;
  onClick?: () => void;
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ theme, onClick, children }) => {
  const styles: React.CSSProperties = {
    padding: '10px 20px',
    backgroundColor: theme === 'light' ? '#f0f0f0' : '#333',
    fontSize: 14,
    cursor: 'pointer',
    color: theme === 'light' ? '#000' : '#fff',
    border: 'none' ,
    borderRadius: 3,
    borderColor: 'green',
    transition: 'background-color 0.1s, color 0.1s',
  };

  return (
    <button style={styles} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
