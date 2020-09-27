import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 780px;
  height: fit-content;

  border-radius: 10px;
  border: 0;
  color: black;
  font-weight: 500;
  margin-top: 16px;
  transition: background-color 0.2s;
  display: flex;
  align-items: center;
  margin: 38px auto 120px;
  padding: 10px 15px;
  background: var(--gray-8);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  transition: 1s;

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

export const SingleRepo = styled.div`
  width: 100%;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
`;

// export const DarkBackground = styled.div`
//   width: 100%;
//   height: 100%;
//   background: var(--black-2);
//   opacity: 0.7;
//   position: fixed;
//   top: 0;
//   right: 0;
//   z-index: 2;
//   transition: 0.5s;

//   animation: 'fadeIn' 0.5s;

//   @keyframes fadeIn {
//     0% {
//       opacity: 0;
//     }

//     100% {
//       opacity: 0.7;
//     }
//   }
// `;
