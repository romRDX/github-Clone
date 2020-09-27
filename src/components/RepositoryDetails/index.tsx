import React from 'react';
import { useQuery, gql } from '@apollo/client';

import { FaRegStar } from 'react-icons/fa';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { IoIosCloseCircleOutline } from 'react-icons/io';

import {
  Container,
  Details,
  MainLangs,
  Langs,
  Dates,
  CloseButton,
} from './styles';

const USER_QUERY = gql`
  query GetRepositories($user: String!, $name: String!) {
    user(login: $user) {
      repository(name: $name) {
        createdAt
        description
        name
        stargazerCount
        languages(first: 3) {
          nodes {
            name
          }
        }
        url
        updatedAt
      }
    }
  }
`;

interface RepositoryProps {
  hideDetails(): void;
  repo: string;
}

const RepositoryItem: React.FC<RepositoryProps> = ({ repo, hideDetails }) => {
  const { loading, error, data } = useQuery(USER_QUERY, {
    variables: { user: 'romRDX', name: repo },
  });

  return (
    <Container>
      {data && (
        <>
          <div>
            <Details>
              <div>
                <strong>{data.user.repository.name}</strong>
                <span>
                  {data.user.repository.stargazerCount}
                  <FaRegStar />
                </span>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href={data.user.repository.url}
                >
                  Check on Github!
                </a>
              </div>
              <p>{data.user.repository.description}</p>
            </Details>
            <MainLangs>
              <p>Main languages</p>
              <Langs>
                {data.user.repository.languages.nodes.map((lang: any) => (
                  <li>{lang.name}</li>
                ))}
              </Langs>
            </MainLangs>
          </div>
          <Dates>
            <div>
              <p>Created at: {data.user.repository.createdAt}</p>
              <p>Last update: {data.user.repository.updatedAt}</p>
            </div>

            <button type="button">
              Add to favorites <AiOutlineHeart />
            </button>
          </Dates>
        </>
      )}
      <CloseButton>
        <IoIosCloseCircleOutline onClick={hideDetails} />
      </CloseButton>
    </Container>
  );
};

export default RepositoryItem;
