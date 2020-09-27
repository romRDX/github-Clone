import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 50px;
`;

export const DarkBackground = styled.div`
  width: 100%;
  height: 100%;
  background: var(--black-2);
  opacity: 0.7;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 2;
  transition: 0.5s;

  animation: 'fadeIn' 0.5s;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 0.7;
    }
  }
`;
