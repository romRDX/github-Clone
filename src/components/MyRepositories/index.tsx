import React, { useState, useCallback, useEffect } from 'react';
import { useQuery, gql } from '@apollo/client';

import Repository from '../Repository';

import { Container, MyRepos, Repos } from './styles';

const USER_QUERY = gql`
  query GetRepositories($user: String!) {
    user(login: $user) {
      pinnedItems(first: 4) {
        nodes {
          ... on Repository {
            id
            name
            description
            stargazerCount
          }
        }
      }
      repositories {
        totalCount
      }
    }
  }
`;

const USER_QUERY2 = gql`
  query GetRepositories($user: String!, $count: Int!) {
    user(login: $user) {
      repositories(first: $count) {
        totalCount
        nodes {
          name
          id
          stargazerCount
        }
      }
    }
  }
`;

const MyRepositories: React.FC = () => {
  const [count, setCount] = useState<number>(4);

  const { loading, error, data } = useQuery(USER_QUERY2, {
    variables: { user: 'romRDX', count },
  });

  console.log(data);

  const handleLoadRepos = useCallback(() => {
    if (count + 4 <= data.user.repositories.totalCount) {
      setCount((state) => state + 4);
      console.log('1');
    }
    console.log('2');
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
            data.user.repositories.nodes.map((repo: any) => (
              <Repository key={repo.id} repo={repo} />
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
