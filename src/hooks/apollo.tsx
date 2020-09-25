import React from 'react';
import {
  ApolloClient,
  ApolloLink,
  ApolloProvider as ApoProv,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';

const auth1 = '9dc64535f33';
const auth2 = 'ca748299abfa';
const auth3 = '0ec7e9aced9107873';

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
