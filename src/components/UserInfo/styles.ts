import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  width: 100%;
  max-width: 800px;
  height: fit-content;

  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  color: black;
  font-weight: 500;
  margin-top: 16px;
  transition: background-color 0.2s;
  display: flex;
  /* align-items: center; */
  margin: 0 auto;
  background: var(--gray-8);
  padding: 15px;

  border: 1px solid black;

  img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
  }
`;

export const UserProfile = styled.div`
  display: flex;
  width: 70%;

  > div {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-left: 30px;

    strong {
      font-size: 28px;
      color: var(--white);
      margin: 3px 0;
    }

    span {
      font-size: 25px;
      color: var(--gray-6);
      margin: 3px 0;
    }

    p {
      font-size: 20px;
      color: var(--gray-4);
      margin: 2px 0;
    }
  }
`;

export const RepositoriesInfo = styled.div`
  height: auto;
  width: 30%;
  display: flex;
  justify-content: center;
  padding: 10px;
  flex-direction: column;
  margin-left: 20px;
  border-left: 1px solid var(--gray-6);

  p {
    font-size: 18px;
    display: flex;
    flex-direction: column;
    text-align: center;
    margin: 10px auto;
    color: var(--black-3);

    span {
      color: gray;
    }
  }
`;
