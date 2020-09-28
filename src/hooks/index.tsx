import React from 'react';
import { RepositoriesProvider } from './repositories';
import { ApolloProvider } from './apollo';

const AppProvider: React.FC = ({ children }) => (
  <ApolloProvider>
    <RepositoriesProvider>{children}</RepositoriesProvider>
  </ApolloProvider>
);

export default AppProvider;
