import React from 'react';
import { AuthProvider } from './auth';
import { ToastProvider } from './toast';
import { ApolloProvider } from './apollo';

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <ApolloProvider>
      <ToastProvider>{children}</ToastProvider>
    </ApolloProvider>
  </AuthProvider>
);

export default AppProvider;
