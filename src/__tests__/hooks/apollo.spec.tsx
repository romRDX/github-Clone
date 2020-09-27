import { renderHook, act } from '@testing-library/react-hooks';
import { wait, waitFor } from '@testing-library/react';
import { ApolloProvider } from 'src/hooks/apollo';
import { ApolloClient, useQuery, gql } from '@apollo/client';
import { uuid } from 'uuidv4';

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

    console.log('XXX: ', result.current);
    // expect(typeof result.current.client).toBe(ApolloClient);
  });
});
