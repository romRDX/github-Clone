export interface Repository {
  name: string;
  id: string;
  stargazerCount: number;
  description: string;
}

export interface RepositoriesQuery {
  user: {
    id: string;
    repositories: {
      totalCount: number;
      nodes: Repository[];
    };
  };
}

export interface RepositoriesQueryVars {
  user: string;
  count: number;
}
