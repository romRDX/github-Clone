import React, { useState, useCallback, useEffect, useMemo } from 'react';
import { useQuery, gql } from '@apollo/client';
import { useAuth } from '../../hooks/auth';
import { Container } from './styles';

interface RepositoryVars {
  user: string;
  // name: string;
}

const TEST_QUERY = gql`
  query GetRepositories($user: String!) {
    repositoryOwner(login: $user) {
      avatarUrl
      repositories(first: 4) {
        nodes {
          name
          description
          primaryLanguage {
            name
          }
          stargazerCount
        }
      }
    }
  }
`;

const Dashboard: React.FC = () => {
  const { user, userQuery } = useAuth();

  const { loading, error, data } = useQuery(userQuery, {
    variables: { user },
  });
  console.log(data);

  // const test = () => {
  //   const { loading, error, data } = useQuery(TEST_QUERY, {
  //     variables: { user },
  //   });
  // };

  // const { loading, error, data } = useQuery(TEST_QUERY, {
  //   variables: { user },
  // });

  // console.log(data);

  // useEffect(() => {
  // async function getRepository() {
  //   try {
  //     setLoading(true);
  //     const response = await api.get(`repos/${repoName}`);
  //     const repository = response.data;

  //     setErrorMessage(null);
  //   } catch (error) {
  //     setErrorMessage(error.message);
  //   }finally {
  //     setLoading(false);
  //   }
  // }
  // getRepository();
  // }, []);

  return (
    <Container>
      <h1>teste</h1>
    </Container>
  );
};

export default Dashboard;
