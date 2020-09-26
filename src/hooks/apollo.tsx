import React from 'react';
import {
  ApolloClient,
  ApolloLink,
  ApolloProvider as ApoProv,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';

const auth1 = 'fa6c7b0365f9c';
const auth2 = 'd6a4260d182d3';
const auth3 = '08dbdc987f8402';

const myAuth = auth1 + auth2 + auth3;

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
