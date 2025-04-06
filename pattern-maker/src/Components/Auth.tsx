// src/components/Auth.tsx
import React from 'react';

interface AuthProps {
  onLogin: () => void;
}

const Auth: React.FC<AuthProps> = ({ onLogin }) => {
  return (
    <div>
      <button onClick={onLogin}>Login</button>
    </div>
  );
};

export default Auth;
