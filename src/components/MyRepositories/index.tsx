import React, { useState, useCallback } from 'react';
import { useQuery } from '@apollo/client';
import REPOSITORIES_QUERY from './query';

import { useRepositories } from '../../hooks/repositories';

import RepositoryItem from '../RepositoryItem';

import { Container, MyRepos, Repos } from './styles';

interface Repository {
  name: string;
  id: string;
  stargazerCount: number;
  description: string;
}

const MyRepositories: React.FC = () => {
  const [count, setCount] = useState<number>(4);
  const { setSelectedRepo } = useRepositories();

  const { loading, error, data } = useQuery(REPOSITORIES_QUERY, {
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
          {loading && <h2>Loading</h2>}
          {data &&
            !error &&
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
