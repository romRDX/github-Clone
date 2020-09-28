import React from 'react';
import { useRepositories } from '../../hooks/repositories';
import UserInfo from '../../components/UserInfo';
import MyRepositories from '../../components/MyRepositories';
import FavoriteRepos from '../../components/FavoriteRepos';
import RepositoryDetails from '../../components/RepositoryDetails';

import { Container, DarkBackground } from './styles';

const Dashboard: React.FC = () => {
  const { selectedRepo, setSelectedRepo } = useRepositories();

  const handleHideDetails = (): void => {
    setSelectedRepo('');
  };

  return (
    <Container>
      <UserInfo />

      <MyRepositories />
      <FavoriteRepos />

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

export default Dashboard;
