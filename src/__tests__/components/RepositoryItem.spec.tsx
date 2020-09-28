import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import RepositoryItem from '../../components/RepositoryItem';

const mockedFunction = jest.fn();
const mockedRepo = {
  id: 1,
  name: 'fake-repo-name',
  description: 'fake-repo-description',
  stargazerCount: 279,
};

describe('Input component', () => {
  it('Should be able to render RepositoryItem Component', () => {
    const { getByText } = render(
      <RepositoryItem setSelected={mockedFunction} repo={mockedRepo} />,
    );

    expect(getByText('fake-repo-name')).toBeTruthy();
    expect(getByText('fake-repo-description')).toBeTruthy();
    expect(getByText('279')).toBeTruthy();
  });

  it('Should be able to set the RepositoryItem Selected', () => {
    const { getByTestId } = render(
      <RepositoryItem setSelected={mockedFunction} repo={mockedRepo} />,
    );

    fireEvent.click(getByTestId('repository-item'));

    expect(mockedFunction).toHaveBeenCalledTimes(1);
  });
});
