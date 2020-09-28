import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import FavoriteRepos from '../../components/FavoriteRepos';

const mockedSetSelectedRepo = jest.fn();

jest.mock('../../hooks/repositories', () => {
  return {
    useRepositories: () => ({
      favoriteRepos: [{ id: 'fake-repo-id', name: 'fake-repo-name' }],
      setSelectedRepo: mockedSetSelectedRepo,
    }),
  };
});

describe('FavoriteRepos component', () => {
  it('Should be able to render FavoriteRepos Component', () => {
    const { getByText } = render(<FavoriteRepos />);

    expect(getByText('Favorite')).toBeTruthy();
  });

  it('Should be able to open FavoriteRepos tab', () => {
    const { getByText } = render(<FavoriteRepos />);

    fireEvent.click(getByText('Favorite'));

    // UNFINISHED TEST
  });

  it('Should be able to show the details of a favorite repo', () => {
    const { getByText } = render(<FavoriteRepos />);

    fireEvent.click(getByText('fake-repo-name'));

    expect(mockedSetSelectedRepo).toHaveBeenCalledTimes(1);
  });
});
