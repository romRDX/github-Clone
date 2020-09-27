import { gql } from '@apollo/client';

const REPOSITORY_QUERY = gql`
  query GetRepositories($user: String!, $name: String!) {
    user(login: $user) {
      id
      repository(name: $name) {
        createdAt
        description
        name
        id
        stargazerCount
        languages(first: 3) {
          nodes {
            name
            id
          }
        }
        url
        updatedAt
      }
    }
  }
`;

export default REPOSITORY_QUERY;
