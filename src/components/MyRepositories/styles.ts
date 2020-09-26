import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  width: 100%;
  max-width: 800px;
  height: fit-content;

  border-radius: 10px;
  border: 0;
  color: black;
  font-weight: 500;
  margin-top: 16px;
  transition: background-color 0.2s;
  display: flex;
  align-items: center;
  margin: 40px auto;
  padding: 10px 15px;
  background: var(--gray-8);
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  > strong {
    width: 100%;
    padding-bottom: 8px;
    margin-left: 0;
    font-size: 25px;
    color: var(--gray-3);

    border-bottom: 1px solid white;
  }
`;

export const MyRepos = styled.div`
  width: 100%;
  padding-top: 20px;
  display: flex;
  flex-direction: column;

  button {
    border-radius: 8px;
    padding: 5px;
    margin: 0 auto;
  }
`;

export const Repos = styled.div`
  width: 100%;
  padding-top: 20px;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

export const AllRepos = styled.div``;
