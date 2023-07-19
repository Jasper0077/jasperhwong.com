export interface PinnableItemConnection {
  user: {
    __typename: string;
    pinnedItems: {
      __typename: string;
      nodes: Array<Repository>;
    };
  };
}

export interface Repository {
  __typename: string;
  name: string;
  description: string;
  url: string;
  repositoryTopics?: RepositoryTopicConnection;
  languages?: LanguageConnection;
}

/** Repository */
export interface RepositoryTopicConnection {
  __typename: string;
  nodes?: Array<RepositoryTopic>;
}

export interface RepositoryTopic {
  __typename: string;
  topic: {
    __typename: string;
    name: string;
  };
  url: string;
}

/** Language */
export interface LanguageConnection {
  __typename: string;
  nodes?: Array<Language>;
}

export interface Language {
  __typename: string;
  name: string;
  color: string;
}
