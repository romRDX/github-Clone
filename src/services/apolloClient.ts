import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';

const auth = 'test';
const myAuth = `${auth}2`;

const authLink = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: {
      Authorization: `Bearer ${myAuth}`,
    },
  });

  return forward(operation);
});

const apolloClient = new ApolloClient({
  link: ApolloLink.from([
    authLink,
    new HttpLink({ uri: 'https://api.github.com/graphql' }),
  ]),
  cache: new InMemoryCache(),
});

export default apolloClient;
