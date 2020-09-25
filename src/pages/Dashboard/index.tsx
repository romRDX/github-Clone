import React, { useState, useCallback, useEffect, useMemo } from 'react';
import { useQuery, gql } from '@apollo/client';

import { Console } from 'console';
import { Container } from './styles';

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

// , name: "BookShelf"

const Dashboard: React.FC = () => {
  // const { loading, error, data } = useQuery(EXCHANGE_RATES, {
  //   variables: { user: 'romRDX' },
  // });

  // console.log(data);

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
    <Container>
      <h1>teste</h1>
      {data && <h1>{}</h1>}
    </Container>
  );
};

export default Dashboard;
