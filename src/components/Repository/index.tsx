import React, { ButtonHTMLAttributes } from 'react';

import { FaRegStar } from 'react-icons/fa';

import { Container } from './styles';

interface RepositoryProps {
  repo: {
    name: string;
    description: string;
    stargazerCount: number;
  };
}

const Repository: React.FC<RepositoryProps> = ({ repo }) => {
  return (
    <Container>
      <strong>{repo.name}</strong>
      <p>{repo.description}</p>
      <div>
        {repo.stargazerCount}
        <FaRegStar />
      </div>
    </Container>
  );
};

export default Repository;
