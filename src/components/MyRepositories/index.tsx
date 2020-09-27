import React, { useState, useCallback } from 'react';
import { useQuery, gql } from '@apollo/client';

import { useRepositories } from '../../hooks/repositories';

import RepositoryItem from '../RepositoryItem';

import { Container, MyRepos, Repos } from './styles';

const USER_QUERY = gql`
  query GetRepositories($user: String!, $count: Int!) {
    user(login: $user) {
      repositories(first: $count) {
        totalCount
        nodes {
          name
          id
          stargazerCount
          description
        }
      }
    }
  }
`;

interface Repository {
  name: string;
  id: string;
  stargazerCount: number;
  description: string;
}

const MyRepositories: React.FC = () => {
  const [count, setCount] = useState<number>(4);
  const { setSelectedRepo } = useRepositories();

  const { loading, error, data } = useQuery(USER_QUERY, {
    variables: { user: 'romRDX', count },
  });

  const handleLoadRepos = useCallback(() => {
    if (count + 4 <= data.user.repositories.totalCount) {
      setCount((state) => state + 4);
    }
    if (count + 4 > data.user.repositories.totalCount) {
      setCount(4);
    }
  }, [count, data]);

  return (
    <Container>
      <strong>My repositories</strong>
      <MyRepos>
        <Repos>
          {data &&
            data.user.repositories.nodes.map((repo: Repository) => (
              <RepositoryItem
                setSelected={setSelectedRepo}
                key={repo.id}
                repo={repo}
              />
            ))}
        </Repos>

        <button onClick={handleLoadRepos} type="button">
          {data && count + 4 > data.user.repositories.totalCount
            ? 'Show less'
            : 'Show more'}
        </button>
      </MyRepos>
    </Container>
  );
};

export default MyRepositories;
