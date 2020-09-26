import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from 'react';
import { useQuery, gql, DocumentNode } from '@apollo/client';
import { useHistory } from 'react-router-dom';

interface User {
  id: string;
  name: string;
  email: string;
  avatar_url: string;
}

interface AuthStateData {
  token: string;
  user: User;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: string;
  signIn(user: string): void;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const history = useHistory();

  const [loggedUser, setLoggedUser] = useState<string>('');

  useEffect(() => {
    const user = localStorage.getItem('@Fohat:user');

    if (user) setLoggedUser(user);
  }, []);

  const signIn = (user: string): void => {
    setLoggedUser(user);
    localStorage.setItem('@Fohat:user', JSON.stringify(user));
    history.push('/dashboard');
  };

  const signOut = useCallback(() => {
    // localStorage.removeItem('@GoBarber:token');
    // localStorage.removeItem('@GoBarber:user');
    // setData({} as AuthStateData);
  }, []);

  return (
    <AuthContext.Provider value={{ user: loggedUser, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  return context;
}
