import React from 'react';
import { ApolloProvider as ApoProv } from '@apollo/client';

import apolloClient from '../services/apolloClient';

export const ApolloProvider: React.FC = ({ children }) => {
  return <ApoProv client={apolloClient}>{children}</ApoProv>;
};
