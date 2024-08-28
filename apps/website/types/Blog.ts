export interface Blog {
  title: string;
  description: string;
  author: string;
  date: string;
}

export interface BlogWithSlug extends Blog {
  slug: string;
}
