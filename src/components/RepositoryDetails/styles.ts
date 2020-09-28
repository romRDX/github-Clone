import styled from 'styled-components';

export const Container = styled.div`
  width: 830px;
  height: 280px;
  position: fixed;
  z-index: 3;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;
  background: var(--gray-1);
  min-height: 110px;
  border-radius: 10px;
  padding: 20px;
  transition: 0.5s;

  animation: 'fadeIn' 0.5s;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  > div:first-child {
    width: 100%;
    height: 80%;
    display: flex;
  }
`;

export const Details = styled.div`
  width: 70%;
  height: 100%;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 10px;

    strong {
      font-size: 28px;
      color: var(--black-2);
      display: flex;
      font-weight: bold;
      margin-bottom: 10px;
    }

    span {
      margin-left: 55px;
      display: flex;
      align-items: center;
      font-weight: 400;
      font-size: 20px;

      svg {
        margin-left: 5px;
      }
    }

    a {
      text-decoration: none;
      color: var(--white);
      padding: 8px;
      border-radius: 6px;
      background: var(--gray-6);
      border: 1px solid transparent;
      transition: 0.5s;

      &:hover {
        border: 1px solid var(--black-2);
        background: var(--white);
        color: var(--gray-7);
      }
    }
  }

  p {
    font-size: 18px;
    border-radius: 8px;
    padding: 8px 8px 15px;
    height: 70%;
  }
`;

export const MainLangs = styled.div`
  width: 30%;
  height: 100%;
  border-left: 1px solid var(--gray-4);
  padding-left: 10px;
  margin-bottom: 20px;

  > p {
    font-size: 22px;
  }
`;

export const Langs = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 75%;
  padding-left: 28px;

  li {
    color: var(--gray-7);
    font-size: 18px;
  }
`;

export const Dates = styled.div`
  width: 100%;
  height: 20%;
  border-top: 1px solid var(--gray-4);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px 0px;

  div {
    display: flex;
    justify-content: space-between;
    width: 70%;

    p {
      font-size: 14px;
    }
  }
`;

interface FavoriteButtonProps {
  isFavorite: boolean;
}

export const FavoriteButton = styled.button`
  padding: 5px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  transition: 0.5s;

  &:hover {
    box-shadow: 0 0 5px var(--red);
  }

  svg {
    width: 20px;
    height: 20px;
    color: var(--red);
    margin-left: 5px;
  }
`;

export const CloseButton = styled.div`
  position: absolute;
  z-index: 5;
  top: -40px;
  right: -40px;
  cursor: pointer;

  animation: 'fadeIn' 0.5s;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  svg {
    width: 50px;
    height: 50px;
    color: white;
    transition: 0.5s;

    &:hover {
      color: var(--red);
    }
  }
`;
