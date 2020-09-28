import { renderHook, act } from '@testing-library/react-hooks';
import { wait, waitFor } from '@testing-library/react';
import { ApolloProvider } from 'src/hooks/apollo';
import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
  gql,
  useQuery,
} from '@apollo/client';

const FAKE_QUERY = gql`
  query {
    user(login: "romRDX") {
      id
      name
    }
  }
`;

describe('Apollo Hook', () => {
  it('Should be able to use hook', () => {
    const { result } = renderHook(() => useQuery(FAKE_QUERY), {
      wrapper: ApolloProvider,
    });

    // UNFINISHED TEST
    // expect(typeof result.current.client).toBe(ApolloClient);
  });
});
