import React, { useState, useCallback, useEffect, useMemo } from 'react';

import UserInfo from '../../components/UserInfo';
import MyRepositories from '../../components/MyRepositories';

import { Container } from './styles';

const Dashboard: React.FC = () => {
  // const { loading, error, data } = useQuery(userQuery, {
  //   variables: { user: 'romRDX' },
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
      <UserInfo />

      <MyRepositories />
    </Container>
  );
};

export default Dashboard;
