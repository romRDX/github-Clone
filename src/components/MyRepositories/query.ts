import { gql } from '@apollo/client';

const REPOSITORIES_QUERY = gql`
  query GetRepositories($user: String!, $count: Int!) {
    user(login: $user) {
      id
      repositories(first: $count) {
        totalCount
        nodes {
          name
          id
          stargazerCount
          description
        }
      }
    }
  }
`;

export default REPOSITORIES_QUERY;
