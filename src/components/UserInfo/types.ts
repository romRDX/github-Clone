interface PinnedItensNodes {
  id: string;
  name: string;
}

export interface UserQuery {
  user: {
    name: string;
    avatarUrl: string;
    login: string;
    bio: string;
    email: string;
    company: string;
    location: string;
    followers: {
      totalCount: number;
    };
    following: {
      totalCount: number;
    };
    pinnedItems: {
      nodes: PinnedItensNodes;
    };
    repositories: {
      totalCount: number;
    };
  };
}

export interface UserQueryVars {
  user: string;
}
