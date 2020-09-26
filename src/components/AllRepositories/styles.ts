import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

export const PinnedRepos = styled.div`
  button {
    border-radius: 8px;
    padding: 5px;
    margin: 0 auto;
  }
`;
