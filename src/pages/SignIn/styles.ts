import styled from 'styled-components';
import { shade } from 'polished';

interface ContainerProps {
  img: string;
}

export const Container = styled.div<ContainerProps>`
  background-image: url(${(props) => props.img});
  width: 100%;
  height: 100%;
`;

export const Content = styled.main`
  /* width
  background: white-space;

   */
  border-radius: 16px;
`;
