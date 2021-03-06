import React from 'react';

import { FaRegStar } from 'react-icons/fa';

import { Container } from './styles';

interface RepositoryProps {
  setSelected(name: string): void;
  repo: {
    name: string;
    description: string;
    stargazerCount: number;
  };
}

const RepositoryItem: React.FC<RepositoryProps> = ({ repo, setSelected }) => (
  <Container
    data-testid="repository-item"
    onClick={() => setSelected(repo.name)}
  >
    <strong>{repo.name}</strong>
    <p>{repo.description}</p>
    <div>
      {repo.stargazerCount}
      <FaRegStar />
    </div>
  </Container>
);

export default RepositoryItem;
