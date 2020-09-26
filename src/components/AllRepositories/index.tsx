import React, { ButtonHTMLAttributes } from 'react';
import { useQuery, gql } from '@apollo/client';
import { useAuth } from '../../hooks/auth';

import Repository from '../Repository';

import { Container, PinnedRepos } from './styles';

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

const MyRepositories: React.FC = () => {
  const { user } = useAuth();

  const { loading, error, data } = useQuery(USER_QUERY, {
    variables: { user: 'romRDX' },
  });

  // console.log(data);

  return (
    <Container>
      {data &&
        data.user.pinnedItems.nodes.map((repo: any) => (
          <Repository key={repo.id} repo={repo} />
        ))}
    </Container>
  );
};

export default MyRepositories;
