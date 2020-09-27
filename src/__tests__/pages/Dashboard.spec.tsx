// import React from 'react';
// import { render, fireEvent, wait, waitFor, act } from '@testing-library/react';
// import MockAdapter from 'axios-mock-adapter';
// import Dashboard from '../../pages/Dashboard';

// const mockedHistoryPush = jest.fn();

// jest.mock('../../hooks/auth', () => {
//   return {
//     useAuth: () => ({
//       signOut: jest.fn(),
//       user: {
//         id: 'test-user-id',
//         name: 'test-user-name',
//         avatar_url: 'test-user-avatarurl',
//       },
//     }),
//   };
// });

// // jest.mock('react-router-dom', () => {
// //   return {
// //     useHistory: () => ({
// //       push: mockedHistoryPush,
// //     }),
// //     Link: ({ children }: { children: React.ReactNode }) => children,
// //   };
// // });

// describe('Dashboard Page', () => {
//   // beforeEach(() => {
//   //   mockedHistoryPush.mockClear();
//   // });

//   it('Should be able to render Dashboard page', async () => {
//     // const mockedApiGet = {
//     //   get: jest.fn(),
//     // };

//     // jest.mock('../../services/api', () => mockedApiGet);

//     const { getByText } = render(<Dashboard />);

//     expect(getByText('romRDX')).toBeTruthy();
//     expect(getByText('My repositories')).toBeTruthy();
//   });
// });
