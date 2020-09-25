import styled from 'styled-components';
import { shade } from 'polished';

interface ContainerProps {
  img: string;
}

export const Container = styled.div<ContainerProps>`
  background-image: url(${(props) => props.img});
  background-size: 460px;
  width: 100%;
  height: 100%;
  position: relative;

  &::after {
    content: '';
    background: black;
    width: 100%;
    height: 100%;
    position: absolute;
    opacity: 0.5;
    z-index: 1;
  }
`;

export const Content = styled.main`
  z-index: 10;
  position: absolute;
  width: 400px;
  height: 250px;
  background: #31363f;
  box-shadow: 0 0 2px lightgray;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto auto;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  strong {
    color: white;
    font-size: 24px;
    text-align: center;
    display: flex;
    align-items: center;

    > svg {
      width: 40px;
      height: 40px;
      margin-left: 15px;
    }
  }

  input {
    margin-top: 20px;
    height: 40px;
    width: 80%;
    border-radius: 5px;
    padding: 7px;
  }

  button {
    width: 100px;

    margin-top: 20px;
    border-radius: 9px;
    padding: 6px;
    display: flex;
    align-items: center;

    svg {
      margin-left: auto;
    }
  }
`;
