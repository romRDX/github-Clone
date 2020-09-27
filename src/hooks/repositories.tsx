import React, { createContext, useCallback, useState, useContext } from 'react';

interface Repo {
  id: string;
  name: string;
}

interface RepositoriesContextData {
  favoriteRepos: Repo[];
  setFavoriteRepos(repo: Repo): void;
  selectedRepo: string;
  setSelectedRepo(repo: string): void;
}

const RepositoriesContext = createContext<RepositoriesContextData>(
  {} as RepositoriesContextData,
);

export const RepositoriesProvider: React.FC = ({ children }) => {
  const [favoriteRepos, setFavoriteRepos] = useState<Repo[]>([]);
  const [selectedRepo, setSelectedRepo] = useState<string>('');

  const handleAlterFavoriteRepos = useCallback(
    (repo: Repo) => {
      if (favoriteRepos.some((e) => e.id === repo.id)) {
        setFavoriteRepos((state) => state.filter((e) => e.id !== repo.id));
        console.log('x1: ', favoriteRepos);
      } else {
        setFavoriteRepos((state) => [...state, repo]);
        console.log('x2: ', favoriteRepos);
      }
    },
    [favoriteRepos],
  );

  return (
    <RepositoriesContext.Provider
      value={{
        selectedRepo,
        setSelectedRepo,
        favoriteRepos,
        setFavoriteRepos: handleAlterFavoriteRepos,
      }}
    >
      {children}
    </RepositoriesContext.Provider>
  );
};

export function useRepositories(): RepositoriesContextData {
  const context = useContext(RepositoriesContext);

  return context;
}
