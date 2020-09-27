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

  // it('Should restore saved data from storage when auth inits', () => {
  //   jest.spyOn(Storage.prototype, 'getItem').mockImplementation((key) => {
  //     switch (key) {
  //       case '@GoBarber:token':
  //         return 'token-123';
  //       case '@GoBarber:user':
  //         return JSON.stringify({
  //           id: 'user-123',
  //           name: 'John Doe',
  //           email: 'johndoe@example.com.br',
  //         });
  //       default:
  //         return null;
  //     }
  //   });

  //   const { result } = renderHook(() => useAuth(), {
  //     wrapper: AuthProvider,
  //   });

  //   expect(result.current.user.email).toEqual('johndoe@example.com.br');
  // });

  // it('Should be able to sign out', async () => {
  //   jest.spyOn(Storage.prototype, 'getItem').mockImplementation((key) => {
  //     switch (key) {
  //       case '@GoBarber:token':
  //         return 'token-123';
  //       case '@GoBarber:user':
  //         return JSON.stringify({
  //           id: 'user-123',
  //           name: 'John Doe',
  //           email: 'johndoe@example.com.br',
  //         });
  //       default:
  //         return null;
  //     }
  //   });

  //   const removeItemSpy = jest.spyOn(Storage.prototype, 'removeItem');

  //   const { result } = renderHook(() => useAuth(), {
  //     wrapper: AuthProvider,
  //   });

  //   act(() => {
  //     result.current.signOut();
  //   });

  //   expect(removeItemSpy).toHaveBeenCalledTimes(2);
  //   expect(result.current.user).toBeUndefined();
  // });

  // it('Should be able to update user data', () => {
  //   const setItemSpy = jest.spyOn(Storage.prototype, 'setItem');

  //   const { result } = renderHook(() => useAuth(), {
  //     wrapper: AuthProvider,
  //   });

  //   const user = {
  //     id: 'user-123',
  //     name: 'John Doe',
  //     email: 'johndoe@example.com.br',
  //     avatar_url: 'image-test.jpg',
  //   };

  //   act(() => {
  //     result.current.updateUser(user);
  //   });

  //   expect(setItemSpy).toHaveBeenCalledWith(
  //     '@GoBarber:user',
  //     JSON.stringify(user),
  //   );

  //   expect(result.current.user).toEqual(user);
  // });
});
