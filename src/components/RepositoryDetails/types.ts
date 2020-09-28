export interface RepositoryProps {
  hideDetails(): void;
  repo: string;
}

export interface LanguagesNodes {
  id: string;
  name: string;
}

export interface RepositoryQuery {
  user: {
    id: string;
    repository: {
      createdAt: string;
      description: string;
      name: string;
      id: string;
      stargazerCount: number;
      languages: {
        nodes: LanguagesNodes[];
      };
      url: string;
      updatedAt: string;
    };
  };
}

export interface RepositoryQueryVars {
  user: string;
  name: string;
}
