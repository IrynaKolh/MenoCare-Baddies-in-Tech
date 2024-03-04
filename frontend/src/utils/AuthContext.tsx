import { ReactNode, createContext, useState } from 'react';
import { AuthContextProps, AuthUser } from '../models/interfaces';

export const AuthContext = createContext<AuthContextProps | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<AuthUser | null>(
    localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')!) : null
  );

  const login = (userData: AuthUser) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  const contextValue: AuthContextProps = {
    user,
    login,
    logout,
  };

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};
