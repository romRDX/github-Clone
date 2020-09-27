import React, { ButtonHTMLAttributes } from 'react';
import { useQuery, gql } from '@apollo/client';
import { Container, UserProfile, RepositoriesInfo } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
};

const USER_QUERY = gql`
  query GetRepositories($user: String!) {
    user(login: $user) {
      name
      avatarUrl
      login
      bio
      email
      company
      location
      followers {
        totalCount
      }
      following {
        totalCount
      }
      pinnedItems(first: 4) {
        nodes {
          ... on Repository {
            id
            name
          }
        }
      }
      repositories {
        totalCount
      }
    }
  }
`;

const UserInfo: React.FC = () => {
  const { loading, error, data } = useQuery(USER_QUERY, {
    variables: { user: 'romRDX' },
  });

  // console.log(data);

  return (
    <Container>
      {data && (
        <>
          <UserProfile>
            <img alt="User avatar" src={data.user.avatarUrl} />
            <div>
              <strong>{data.user.name}</strong>
              <span>{data.user.login}</span>
              <p>{data.user.bio}</p>
              <p>{data.user.company}</p>
              <p>{data.user.location}</p>
              <p>{data.user.email}</p>
            </div>
          </UserProfile>
          <RepositoriesInfo>
            <p>
              Repositories <span>{data.user.repositories.totalCount}</span>
            </p>
            <p>
              Followers <span>{data.user.followers.totalCount}</span>
            </p>
            <p>
              Following <span>{data.user.following.totalCount}</span>
            </p>
          </RepositoriesInfo>
        </>
      )}
    </Container>
  );
};

export default UserInfo;
