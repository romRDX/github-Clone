import React, { useState, useCallback, useEffect } from 'react';
import { useQuery, gql } from '@apollo/client';

import RepositoryItem from '../RepositoryItem';
import RepositoryDetails from '../RepositoryDetails';

import { Container, MyRepos, Repos, DarkBackground } from './styles';

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
  const [selectedRepo, setSelectedRepo] = useState<string>('');

  const { loading, error, data } = useQuery(USER_QUERY, {
    variables: { user: 'romRDX', count },
  });

  useEffect(() => {
    console.log(selectedRepo);
  }, [selectedRepo]);

  // console.log(data);

  const handleLoadRepos = useCallback(() => {
    if (count + 4 <= data.user.repositories.totalCount) {
      setCount((state) => state + 4);
    }
    if (count + 4 > data.user.repositories.totalCount) {
      setCount(4);
    }
  }, [count, data]);

  const handleHideDetails = (): void => {
    setSelectedRepo('');
  };

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
      {selectedRepo && (
        <RepositoryDetails
          repo={selectedRepo}
          hideDetails={handleHideDetails}
        />
      )}
      {selectedRepo && <DarkBackground onClick={handleHideDetails} />}
    </Container>
  );
};

export default MyRepositories;
