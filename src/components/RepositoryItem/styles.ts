import styled from 'styled-components';

import { shade } from 'polished';

export const Container = styled.div`
  width: 45%;
  background: var(--gray-1);
  height: 110px;
  border: 1px solid white;
  border-radius: 10px;
  margin-bottom: 18px;
  font-size: 18px;
  padding: 6px;
  position: relative;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    box-shadow: 0 0 10px white;
  }

  > strong {
    color: var(--gray-8);
    margin-bottom: 15px;
    display: block;
  }

  p {
    color: var(--gray-6);
    font-size: 14px;
  }

  > div {
    position: absolute;
    top: 4px;
    right: 7px;
    display: flex;
    align-items: center;

    svg {
      margin-left: 5px;
    }
  }
`;
