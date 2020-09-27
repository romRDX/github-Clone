import styled from 'styled-components';

interface ContainerProps {
  isOpen: boolean;
}

export const Container = styled.div<ContainerProps>`
  position: fixed;
  background: var(--gray-8);
  height: 70%;
  width: 300px;
  transition: 1s;
  left: ${(props) => (props.isOpen ? '-15px' : '-301px')};
  /* left: -15px; */
  top: 0;
  bottom: 0;
  margin: auto 0;
  padding: 12px;
  padding-left: 20px;
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  background: var(--gray-1);
  padding: 10px;

  button {
    width: inherit;
    border: 0;
    box-shadow: none;
    border-radius: 8px;
    background: var(--gray-4);
    padding: 8px;
    margin-bottom: 7px;
    transition: 0.5s;
    cursor: pointer;

    &:hover {
      background: var(--gray-6);
    }
  }
`;

export const TabTitle = styled.div`
  line-height: 17px;
  font-weight: 600;
  position: absolute;
  top: 0;
  bottom: 0;
  right: -40px;
  margin: auto 0;
  background: var(--gray-8);
  height: fit-content;
  padding: 10px;
  padding-left: 15px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  p {
    color: var(--white);
    word-wrap: break-word;
    width: 10px;

    span {
      margin-top: 10px;
      display: block;
    }
  }

  svg {
    margin-top: 10px;
    color: var(--red);
    width: 20px;
    height: 20px;
  }
`;
