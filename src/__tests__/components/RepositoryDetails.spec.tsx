import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import RepositoryDetails from '../../components/RepositoryDetails';

const mockedHideDetails = jest.fn();
const mockedRepo = 'fake-repo';
const mockedSetFavoriteRepos = jest.fn();

jest.mock('../../hooks/repositories', () => {
  return {
    useRepositories: () => ({
      favoriteRepos: [{ id: 'fake-repo-id', name: 'fake-repo-name' }],
      setFavoriteRepos: mockedSetFavoriteRepos,
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
        },
      },
    }),
    gql: jest.fn(),
  };
});

describe('Input component', () => {
  it('Should be able to render RepositoryDetails Component', () => {
    const { getByText } = render(
      <RepositoryDetails repo={mockedRepo} hideDetails={mockedHideDetails} />,
    );

    expect(getByText('fake-name')).toBeTruthy();
    expect(getByText('Check on Github!')).toBeTruthy();
    expect(getByText('Main languages')).toBeTruthy();
    expect(getByText('Add favorite')).toBeTruthy();
    expect(getByText('Created at: fake-created-at-date')).toBeTruthy();
    expect(getByText('Last update: fake-updated-at-date')).toBeTruthy();
  });

  it('Should be able to set the RepositoryDetails Selected', () => {
    const { getByText } = render(
      <RepositoryDetails repo={mockedRepo} hideDetails={mockedHideDetails} />,
    );

    fireEvent.click(getByText('Add favorite'));

    expect(mockedSetFavoriteRepos).toHaveBeenCalledTimes(1);
  });
});
