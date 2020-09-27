import React from 'react';
import { RepositoriesProvider } from './repositories';
import { ToastProvider } from './toast';
import { ApolloProvider } from './apollo';

const AppProvider: React.FC = ({ children }) => (
  <ApolloProvider>
    <RepositoriesProvider>
      <ToastProvider>{children}</ToastProvider>
    </RepositoriesProvider>
  </ApolloProvider>
);

export default AppProvider;
