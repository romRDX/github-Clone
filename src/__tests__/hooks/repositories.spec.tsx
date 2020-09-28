import { renderHook, act } from '@testing-library/react-hooks';
import { useRepositories, RepositoriesProvider } from 'src/hooks/repositories';
import MockAdapter from 'axios-mock-adapter';

describe('Auth Hook', () => {
  it('Should be able to add a repository to favorites', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useRepositories(), {
      wrapper: RepositoriesProvider,
    });

    act(() => {
      result.current.setFavoriteRepos({
        id: 'example-repo-id',
        name: 'example-repo',
      });
    });

    expect(result.current.favoriteRepos).toContainEqual({
      id: 'example-repo-id',
      name: 'example-repo',
    });
  });

  it('Should be able to remove an repository from favorites', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useRepositories(), {
      wrapper: RepositoriesProvider,
    });

    // adding a repository
    act(() => {
      result.current.setFavoriteRepos({
        id: 'example-repo-id',
        name: 'example-repo',
      });
    });

    // adding a second repository
    act(() => {
      result.current.setFavoriteRepos({
        id: 'example-repo-id2',
        name: 'example-repo2',
      });
    });

    // removing the repository
    act(() => {
      result.current.setFavoriteRepos({
        id: 'example-repo-id',
        name: 'example-repo',
      });
    });

    expect(result.current.favoriteRepos).not.toContainEqual({
      id: 'example-repo-id',
      name: 'example-repo',
    });

    expect(result.current.favoriteRepos).toContainEqual({
      id: 'example-repo-id2',
      name: 'example-repo2',
    });
  });
});
