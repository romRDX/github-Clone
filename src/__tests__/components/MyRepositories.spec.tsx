import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import MyRepositories from '../../components/MyRepositories';

const mockedSetFavoriteREpos = jest.fn();

jest.mock('../../hooks/repositories', () => {
  return {
    useRepositories: () => ({
      favoriteRepos: [{ id: 'fake-repo-id', name: 'fake-repo-name' }],
      setFavoriteRepos: mockedSetFavoriteREpos,
    }),
  };
});

jest.mock('@apollo/client', () => {
  return {
    useQuery: () => ({
      loading: false,
      error: false,
      data: {
        user: {
          id: 'fake-user-id',
          repositories: {
            totalCount: 20,
            nodes: [
              {
                name: 'fake-name',
                id: 'fake-repository-id',
                stargazerCount: 111,
                description: 'fake-description',
              },
              {
                name: 'fake-name-2',
                id: 'fake-repository-id-2',
                stargazerCount: 222,
                description: 'fake-description-2',
              },
            ],
          },
        },
      },
    }),
    gql: jest.fn(),
  };
});

describe('Input component', () => {
  it('Should be able to render MyRepositories Component', () => {
    const { getByText } = render(<MyRepositories />);

    expect(getByText('My repositories')).toBeTruthy();
    expect(getByText('fake-name')).toBeTruthy();
    expect(getByText('fake-name-2')).toBeTruthy();
    expect(getByText('fake-description')).toBeTruthy();
    expect(getByText('fake-description-2')).toBeTruthy();
    expect(getByText('Show more')).toBeTruthy();
  });

  it('Should be able to set the MyRepositories Selected', () => {
    const { getByText } = render(<MyRepositories />);

    fireEvent.click(getByText('Show more'));

    // UNFINISHED TEST
  });
});
