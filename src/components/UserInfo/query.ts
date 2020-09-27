import { gql } from '@apollo/client';

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

export default USER_QUERY;
