import React from 'react';
import {
  ApolloClient,
  ApolloLink,
  ApolloProvider as ApoProv,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';

const myAuth = '72702e18165532212ba9d8098234edc847804e06';

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
