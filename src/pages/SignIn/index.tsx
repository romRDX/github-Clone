import React, { useState, useCallback, useEffect, useMemo } from 'react';
import { useQuery, gql } from '@apollo/client';

import { Container, Content } from './styles';
import signInBackground from '../../assets/gitBkg.png';

interface RepositoryVars {
  user: string;
  // name: string;
}

const TEST_QUERY = gql`
  query {
    repositoryOwner(login: "romRDX") {
      avatarUrl
      repositories(first: 20) {
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
  const { loading, error, data } = useQuery(TEST_QUERY);

  console.log(data);

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
    <Container img={signInBackground}>
      <Content />
    </Container>
  );
};

export default Dashboard;
