import React, { useState } from 'react';

import { AiFillHeart } from 'react-icons/ai';
import { useRepositories } from '../../hooks/repositories';

import { Container, Content, TabTitle } from './styles';

const FavoriteRepos: React.FC = () => {
  const { favoriteRepos, setSelectedRepo } = useRepositories();

  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Container isOpen={isOpen}>
      <Content>
        {favoriteRepos &&
          favoriteRepos.map((repo) => (
            <button
              type="button"
              onClick={() => setSelectedRepo(repo.name)}
              key={repo.name}
            >
              {repo.name}
            </button>
          ))}
      </Content>
      <TabTitle onClick={() => setIsOpen((state) => !state)}>
        <p>
          Favorite <span>repos</span>
        </p>
        <AiFillHeart />
      </TabTitle>
    </Container>
  );
};

export default FavoriteRepos;
