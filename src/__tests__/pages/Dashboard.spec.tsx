import React from 'react';
import { render, fireEvent, wait, act } from '@testing-library/react';
import Dashboard from '../../pages/Dashboard';

const mockedSetSelectedRepo = jest.fn();
const mockedSetFavoriteRepos = jest.fn();

jest.mock('../../hooks/repositories', () => {
  return {
    useRepositories: () => ({
      favoriteRepos: [{ id: 'fake-repo-id', name: 'fake-repo-name' }],
      setSelectedRepo: mockedSetSelectedRepo,
      setFavoriteRepos: mockedSetFavoriteRepos,
      selectedRepo: '', // 'fake-repository-name',
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
          name: 'fake-user-name',
          avatarUrl: 'fake-avatar',
          login: 'fake-login',
          bio: 'fake-bio',
          email: 'fake-email',
          company: 'fake-company',
          location: 'fake-location',
          id: 'fake-user-id',
          followers: {
            totalCount: 78,
          },
          following: {
            totalCount: 87,
          },
          repository: {
            createdAt: 'fake-created-at-date',
            description: 'fake-description',
            name: 'fake-name',
            id: 'fake-repository-id',
            stargazerCount: 327,
            languages: {
              nodes: [
                {
                  name: 'fake-language',
                  id: 'fake-language-id',
                },
              ],
            },
            url: 'fake-repository-url',
            updatedAt: 'fake-updated-at-date',
          },
          repositories: {
            totalCount: 20,
            nodes: [
              {
                name: 'fake-repository-name',
                id: 'fake-repository-id',
                stargazerCount: 111,
                description: 'fake-description',
              },
              {
                name: 'fake-repository-name-2',
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

describe('Dashboard Page', () => {
  it('Should be able to render Dashboard page', async () => {
    const { getByText } = render(<Dashboard />);

    expect(getByText('fake-user-name')).toBeTruthy();
    expect(getByText('My repositories')).toBeTruthy();
  });

  it('Should be able to open RepositoryDetails', async () => {
    const { getByText } = render(<Dashboard />);

    await act(async () => {
      fireEvent.click(getByText('fake-repository-name'));
    });

    // UNFINISHED TEST

    // expect(mockedSetSelectedRepo).toHaveBeenCalled();
    // await wait(async () => {
    //   expect(getByText('Main languages')).toBeTruthy();
    // });
  });
});
