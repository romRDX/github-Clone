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
  const repositoryGroupQuantity = 4;
  const [shownRepositoriesQuantity, setShownRepositoriesQuantity] = useState<
    number
  >(repositoryGroupQuantity);
  const { setSelectedRepo } = useRepositories();

  const { loading, error, data } = useQuery(REPOSITORIES_QUERY, {
    variables: { user: 'romRDX', count: shownRepositoriesQuantity },
  });

  const repositoriesTotalCount = data && data.user.repositories.totalCount;

  const handleLoadRepos = useCallback(() => {
    if (
      shownRepositoriesQuantity + repositoryGroupQuantity <=
      repositoriesTotalCount
    ) {
      setShownRepositoriesQuantity((state) => state + 4);
    }
    if (
      shownRepositoriesQuantity + repositoryGroupQuantity >
      repositoriesTotalCount
    ) {
      setShownRepositoriesQuantity(4);
    }
  }, [shownRepositoriesQuantity, repositoriesTotalCount]);

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
          {data &&
          shownRepositoriesQuantity + 4 > data.user.repositories.totalCount
            ? 'Show less'
            : 'Show more'}
        </button>
      </MyRepos>
    </Container>
  );
};

export default MyRepositories;
