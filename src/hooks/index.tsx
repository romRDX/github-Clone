import React from 'react';
import { AuthProvider } from './auth';
import { ToastProvider } from './toast';
import { ApolloProvider } from './apollo';

const AppProvider: React.FC = ({ children }) => (
  <ApolloProvider>
    <AuthProvider>
      <ToastProvider>{children}</ToastProvider>
    </AuthProvider>
  </ApolloProvider>
);

export default AppProvider;
