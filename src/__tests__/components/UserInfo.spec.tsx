import React from 'react';
import { render } from '@testing-library/react';
import UserInfo from '../../components/UserInfo';

jest.mock('@apollo/client', () => {
  return {
    useQuery: () => ({
      loading: false,
      error: false,
      data: {
        user: {
          name: 'fake-user',
          avatarUrl: 'fake-avatar',
          login: 'fake-login',
          bio: 'fake-bio',
          email: 'fake-email',
          company: 'fake-company',
          location: 'fake-location',
          followers: {
            totalCount: 78,
          },
          following: {
            totalCount: 87,
          },
          pinnedItems: {
            nodes: {
              id: 'fake-repo-id',
              name: 'fake-repo-name',
            },
          },
          repositories: {
            totalCount: 20,
          },
        },
      },
    }),
    gql: jest.fn(),
  };
});

describe('Input component', () => {
  it('Should be able to render UserInfo Component', () => {
    const { getByText } = render(<UserInfo />);

    expect(getByText('fake-user')).toBeTruthy();
    expect(getByText('fake-login')).toBeTruthy();
    expect(getByText('fake-bio')).toBeTruthy();
    expect(getByText('fake-company')).toBeTruthy();
    expect(getByText('fake-email')).toBeTruthy();
    expect(getByText('Repositories')).toBeTruthy();
    expect(getByText('Followers')).toBeTruthy();
    expect(getByText('87')).toBeTruthy();
    expect(getByText('Following')).toBeTruthy();
    expect(getByText('78')).toBeTruthy();
  });
});
