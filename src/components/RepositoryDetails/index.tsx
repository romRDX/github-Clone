import React, { useCallback } from 'react';
import { useQuery, gql } from '@apollo/client';

import { FaRegStar } from 'react-icons/fa';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import { useRepositories } from '../../hooks/repositories';

import {
  Container,
  Details,
  MainLangs,
  Langs,
  Dates,
  FavoriteButton,
  CloseButton,
} from './styles';

const USER_QUERY = gql`
  query GetRepositories($user: String!, $name: String!) {
    user(login: $user) {
      repository(name: $name) {
        createdAt
        description
        name
        id
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

  const { favoriteRepos, setFavoriteRepos } = useRepositories();

  const handleToggleFavorite = useCallback(() => {
    setFavoriteRepos({
      id: data.user.repository.id,
      name: data.user.repository.name,
    });
  }, [setFavoriteRepos, data]);

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
                  <li key={lang.name}>{lang.name}</li>
                ))}
              </Langs>
            </MainLangs>
          </div>
          <Dates>
            <div>
              <p>Created at: {data.user.repository.createdAt}</p>
              <p>Last update: {data.user.repository.updatedAt}</p>
            </div>

            <FavoriteButton onClick={handleToggleFavorite} type="button">
              {favoriteRepos.some((e) => e.id === data.user.repository.id) ? (
                <>
                  Remove favorite <AiFillHeart />
                </>
              ) : (
                <>
                  Add favorite <AiOutlineHeart />
                </>
              )}
            </FavoriteButton>
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
