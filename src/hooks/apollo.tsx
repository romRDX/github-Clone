import React from 'react';
import {
  ApolloClient,
  ApolloLink,
  ApolloProvider as ApoProv,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';

const myAuth = 'fb993beb2b4fb014813d42075ebb0769162b2f21';

const authLink = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: {
      Authorization: `Bearer ${myAuth}`,
    },
  });

  return forward(operation);
});

const client = new ApolloClient({
  link: ApolloLink.from([
    authLink,
    new HttpLink({ uri: 'https://api.github.com/graphql' }),
  ]),
  cache: new InMemoryCache(),
});

export const ApolloProvider: React.FC = ({ children }) => {
  return <ApoProv client={client}>{children}</ApoProv>;
};
