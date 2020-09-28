import React from 'react';
import { useQuery } from '@apollo/client';
import USER_QUERY from './query';
import { Container, UserProfile, RepositoriesInfo } from './styles';
import { UserQuery, UserQueryVars } from './types';

const UserInfo: React.FC = () => {
  const { loading, error, data } = useQuery<UserQuery, UserQueryVars>(
    USER_QUERY,
    {
      variables: { user: 'romRDX' },
    },
  );

  return (
    <Container>
      {loading && <h2>Loading</h2>}
      {data && !error && (
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
